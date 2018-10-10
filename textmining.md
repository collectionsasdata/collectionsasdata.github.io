---
layout: archive
title:  "CAD Methods Profiles"
---
---

[**CAD Methods Profiles**](https://collectionsasdata.github.io/methodsprofiles/) are designed to help people who work in libraries, archives and museums gain a better understanding of a common research methods that make use of cultural heritage collections for computational analysis. Of course, these descriptions are simplified versions of the methods, and are described mostly in the context of their implications for the creation, description, packaging, or distribution of collections as data

---

# Text Mining

Laurie Allen and Scott Enderle, University of Pennsylvania 

### What is it?

Looking for patterns in text. Generally, text mining is done on a corpus of texts rather than a single text. Finding and assembling a corpus that is appropriate to the research needs of a project can be one of the trickiest and most time consuming things that a researcher does when approaching a project. There is not currently an agreed upon standard for describing or sharing text corpora, though there are a variety of guides to finding them, and vendors who sell access to text that researchers can assemble to create a corpus.

See a few definitions and links:

Drucker, Johanna. [Data Mining and Text Analysis - Introduction to Digital Humanities.](http://dh101.humanities.ucla.edu/?page_id=48) Accessed August 27, 2018.

Underwood, Ted. [Seven Ways Humanists Are Using Computers to Understand Text.](https://tedunderwood.com/2015/06/04/seven-ways-humanists-are-using-computers-to-understand-text/) The Stone and the Shell (blog), June 4, 2015. 

### Who uses it?

Text mining is used across humanities disciplines (notably language and literature departments, and history) and in the social sciences, especially political science, communications, and business. There are also text corpora used in machine learning applications as well as linguistics. Disciplinary uses of text mining vary both in method of analysis, and, importantly, in the kinds of texts included in the corpus of study. For example, a corpus of the front page articles of current major newspapers might be valuable to a political scientists, while a scholar of 19th C. English novels might want a corpus of literary reviews.

### What form of data is most useful for this method?

Generally, researchers doing text analysis will want to use plain text (i.e. machine readable, but without markup) in large quantities. They will also need accompanying metadata at a variety of scales. That is, sometimes they’ll want metadata at the book/article level, or at the collection level, and for some uses, it is helpful to have chapter or section level metadata. In linguistic uses, analyses of texts sometimes include annotations down to the specific phoneme level, which make linguistic corpora less widely produced by libraries/archives/museums.

### What might researchers explore when they’re text mining?

They might look for word frequency counts (how often is a particular word used) at the page, article/chapter, or volume level, or use those counts for further analysis. For that reason, a dataset of frequency counts, even in the absence of fulltext, is often useful, especially in cases where the full content of a corpus can not be made available because of copyright restrictions.

Researchers often look for patterns in the data as they relate to features in the metadata (for example, how does the frequency of a word in texts change over time). Reliance on both the metadata about each text and the text themselves makes it important for researchers to know about large inconsistencies in the data or metadata quality. For example, if the OCR quality is inconsistent across a collection, it is very useful to include standard metadata about OCR quality for each text, if it is known. Or, if cataloging or metadata creation practices changed over time, those changes should be noted so that researchers can account for those changes in their analyses.

In some cases, people are interested in locations of words on pages (If an OCR program has included information about bounding boxes, it would be nice to have multiple versions -- one with bounding boxes, and the other without). 

### Common tools used for text mining

Most people who do text mining are using scripting languages like Python or R.

Beyond that, there are a few other tools, useful for analysis and teaching like:

* [Voyant](http://voyant-tools.org/)
* [AntConc](http://www.laurenceanthony.net/software/antconc/) - (See also Heather Froehlich’s AntConc lesson on [Programming Historian](https://programminghistorian.org/en/lessons/corpus-analysis-with-antconc))
* [Topic Modeling Tool](https://github.com/senderle/topic-modeling-tool)
* [Mallet](http://mallet.cs.umass.edu/) 

### Things to look out for when preparing collections for text mining

*Copyright* 

This is a big one, for obvious reasons. Where fulltext can not be provided, some libraries provide wordcounts or other analytics about the texts.

*Documentation of text and metadata*

Multiple versions of texts can be a big source of frustration or confusion in text analysis. For example, a series of reports might have the same first page, which is duplicated across all reports. Flagging those kinds of duplications can be valuable in helping researches cut the preparation time to making a corpus usable.

### Examples of this method in use

Underwood, Ted, David Bamman, and Sabrina Lee. “The Transformation of Gender in English-Language Fiction.” Journal of Cultural Analytics, 2018. [https://doi.org/10.22148/16.019](https://doi.org/10.22148/16.019).
 
Barron, Alexander T. J., Jenny Huang, Rebecca L. Spang, and Simon DeDeo. “Individuals, Institutions, and Innovation in the Debates of the French Revolution.” Proceedings of the National Academy of Sciences, April 17, 2018, 201717729. [https://doi.org/10.1073/pnas.1717729115](https://doi.org/10.1073/pnas.1717729115).

### Examples of collections optimized for this use

“Documenting the American South: DocSouth Data.” Accessed August 27, 2018. [https://docsouth.unc.edu/docsouthdata/](https://docsouth.unc.edu/docsouthdata/).
