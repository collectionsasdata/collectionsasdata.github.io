/* Meltdown viewer and editor integration for annotatorjs.
   Based in part on annotator.ui.markdown.

   Include annotator.meltdown.css to adjust for annotator/meltdown
   style interactions.
*/

var _t = annotator.util.gettext;

var annotatormeltdown = {
    /**
    * use js-xss to filter text (disable javascript, etc)
    */
    filterXSS: function(text) {
        // extend the default js-xss whitelist with local customizations
        var whiteList = filterXSS.getDefaultWhiteList();  // defaults
        // allow audio, but disable auto play
        whiteList.audio = ['controls', 'loop', 'preload', 'src'];
        // allow source tag, used in audio
        whiteList.source =  ['src', 'type'];
        // allow name anchors, class attributes on a tags
        whiteList.a.push('name', 'id', 'class');
        return filterXSS(text, {
            'whiteList': whiteList
        });
    },

    converter: new showdown.Converter({extensions: ['footnotes']}),
    parser: function(text) {
        // convert markdown into html
        var result = annotatormeltdown.converter.makeHtml(annotatormeltdown.filterXSS(text));
        return result;
    },


    /**
     * Replacement viewer render method.
     * Returns annotation text content parsed as Markdown.
     */
    render: function (annotation) {
        if (annotation.text) {
            return annotatormeltdown.parser(annotation.text);
        } else {
            return "<i>" + _t('No comment') + "</i>";
        }
    },

    /**
     * function:: viewerExtension(viewer)
     *
     * An extension for the :class:`~annotator.ui.viewer.Viewer`. Allows the
     * viewer to interpret annotation text as `Markdown`_ and uses the
     * `showdown`_ library if present in the page to render annotations
     * with Markdown text as HTML.
     *
     * .. _Markdown: https://daringfireball.net/projects/markdown/
     * .. _showdown: https://github.com/showdownjs/showdown
     *
     * **Usage**::
     *
     *     app.include(annotator.ui.main, {
     *         viewerExtensions: [annotatormeltdown.viewerExtension]
     *     });
     */
    viewerExtension: function viewerExtension(viewer) {
        if (!window.showdown || typeof window.showdown !== 'object') {
            console.warn(_t("To use the Meltdown viewer extension, you must " +
                "include showdown in the page."));
            return;
        }
        // only set the renderer when showdown is available
        viewer.setRenderer(annotatormeltdown.render);
    },

    // Editor textarea keyboard shortcuts.
    // Revise default annotator shortcut to map shift+enter to save
    // instead of just enter.
    textarea_keydown: function (event) {
        if (event.which === 27) {
            // "Escape" key => abort.
            this.cancel();
        } else if (event.which === 13 && event.shiftKey) {
            // If "return" was pressed *with*the shift key, we're done.
            this.submit();
        }
    },

    customize_meltdown: function() {
        // add an html5 audio input to the 'kitchen sink' control menu
        $.meltdown.defaults.controls[9].push('audio');
        $.meltdown.controlDefs.audio = {
            label: "Audio",
            altText: "Audio",
            before: "\n\n<audio controls='controls'>\n<source src='",
            placeholder: "http://",
            after: "' type='audio/mpeg'/>\n</audio>\n\n"
        };
        // add html5 video input
        $.meltdown.defaults.controls[9].push('video');
        $.meltdown.controlDefs.video = {
            label: "Video",
            altText: "Video",
            before: "\n\n<video width='320' height='240' controls='controls'>\n<source src='",
            placeholder: "http://",
            after: "' type='video/mp4'/>\n</video>\n\n"
        };
        // modify codeblock style to match showdown
        $.meltdown.controlDefs.codeblock['before'] = "```\n";
        $.meltdown.controlDefs.codeblock['after'] = "\n```";

    },

    // Extend Editor show method to initialize meltdown and set minimum
    // width the first time the editor window is shown.
    show: function(position) {
        // use unextended method to handle normal show functionality
        this._pre_meltdown_show(position);
        $(this.element).trigger('annotator-meltdown:editor-show');
        var textarea = $(this.element).find("textarea").first();

        // enable meltdown on the textarea and set a min-width
        if (! this.meltdown_initialized) {
            annotatormeltdown.customize_meltdown();
            textarea.first().meltdown({
                previewCollapses: false,
                openPreview: true,
                parser: annotatormeltdown.parser,
            });

            if (this.meltdown_options.min_width) {
                this.element.find('.annotator-widget')
                    .css('min-width', this.meltdown_options.min_width);
            }
            // if font awesome is configured available, add class for css to pick up on
            if (this.meltdown_options.font_awesome) {
                this.element.find('.meltdown_controls').addClass('fa-avail');
            }
            /* annotator purposely sets the editor at a higher z-index
            than anything else on the page; make sure controls drop-down
            menu is still higher so it isn't obscured by annotator buttons */
            $('.meltdown_controlgroup-dropdown').css('z-index', parseInt($('.annotator-editor').css('z-index')) + 1);

            $(this.element).trigger('annotator-meltdown:meltdown-initialized');
            this.meltdown_initialized = true;
        } else {
            // make sure preview area is updated for current text
            textarea.first().meltdown("update");
        }
        // always ensure textarea has focus for immediate input
        textarea.first().focus();
    },

    submit: function () {
        // run xss filter on textarea *before* saving, to remove
        // unwanted tags and attributes from the stored attribute
        var textarea= $(this.element).find("textarea").first();
        textarea.val(annotatormeltdown.filterXSS(textarea.val()));
        $(this.element).trigger('annotator-meltdown:editor-submit');
        return this._pre_meltdown_submit();
    },

    /**
     * function:: getEditorExtension(options)
     *
     * Build and return an extension for :class:`~annotator.ui.editor.Editor`.
     * Converts the editor textarea to a `Meltdown`_ input, with preview
     * panel and toolbar
     *
     * .. _Meltdown: https://github.com/iphands/Meltdown
     *
     * **Usage**::
     *
     *     app.include(annotator.ui.main, {
     *         editorExtensions: [annotatormeltdown.getEditorExtension()]
     *     });
     *
     * You can optionally specify a minimum editor window width (by default,
     * minimum width will be set to 375px):
     *
     *     app.include(annotator.ui.main, {
     *         editorExtensions: [annotatormeltdown.getEditorExtension({min_width: '500px'})]
     *     });
     *
     * You can also indicate when FontAwesome is available and should be used
     * for the audio button in the controls by specifying `font_awesome: true`
     * in the options to getEditorExtension.
     *
     */
    getEditorExtension: function getEditorExtension(options) {

        var meltdown_opts = {
            min_width: '375px',  // default minimum width
            font_awesome: false,  // set to true when font awesome is available
        };
        $.extend(meltdown_opts, options);
        return function editorExtension(editor) {
            // Make sure meltdown is available before configuring anything
            if (!jQuery.meltdown || typeof jQuery.meltdown !== 'object') {
                console.warn(_t("To use the Meltdown editor extension, you must " +
                    "include meltdown in the page."));
                return;
            }
            // override editor methods and add options
            editor._onTextareaKeydown = annotatormeltdown.textarea_keydown;
            editor._pre_meltdown_show = editor.show; // preserve unextended show method
            editor.show = annotatormeltdown.show;
            // track meltdown initialization since it only needs to be done once
            editor.meltdown_initialized = false;
            editor.meltdown_options = meltdown_opts;
            editor._pre_meltdown_submit = editor.submit; // preserve unextended submit method
            editor.submit = annotatormeltdown.submit;

        };
    },
};

/* example handlers for custom events
$(document).on('annotator-meltdown:meltdown-initialized', function() {
    console.log("meltdown initialized");
});
$(document).on('annotator-meltdown:editor-show', function() {
    console.log("meltdown show");
});
$(document).on('annotator-meltdown:editor-submit', function() {
    console.log("meltdown closed");
});
*/

