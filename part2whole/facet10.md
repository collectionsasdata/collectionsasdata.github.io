---
layout: archive
title:  "Collections as Data Facets"
---
---

[**Collections as Data Facets**](https://collectionsasdata.github.io/facets/) document collections as data implementations. An implementation consists of the people, services, practices, technologies, and infrastructure that aim to encourage computational use of cultural heritage collections. 

---
# [HathiTrust Research Center Extracted Features Dataset](https://analytics.hathitrust.org/datasets)

[**Eleanor Dickson**](https://publish.illinois.edu/commonsknowledge/2017/03/16/meet-eleanor-dickson-the-visiting-hathitrust-digital-humanities-specialist/), University of Illinois at Urbana Champaign

## 1. Why do it

 *an accessible narrative description that describes why the decision was made to do the work*
 
HathiTrust Digital Library is a massive digital collection, comprising more than 15.8 million volumes, and growing. HathiTrust aims to leverage the scope and scale of the digital library to the benefit of research and scholarship. The collection includes considerable material under copyright or subject to licensing agreements, which prohibits HathiTrust from releasing much of it—either in the form of plain text files or scanned pages—as freely-available data. The HathiTrust Research Center therefore develops tools and services that open the collection to data-driven research while remaining within the bounds of copyright and licensing restrictions, allowing only [**non-consumptive research**](https://www.hathitrust.org/htrc_ncup). 

One way the Research Center approaches this goal is through tools and technical infrastructure that mediate access to the data, including web algorithms researchers can run on HathiTrust data, the HathiTrust+Bookworm visualization tool, and the HTRC Data Capsule secure computing environment. Results from a user-needs assessment for text analysis conducted by the Research Center, as well as anecdotal evidence from researchers affiliated with HTRC, evinced the value of flexible, open data for text analysis research. To this end, the Research Center released the [**HTRC Extracted Features Dataset**](https://analytics.hathitrust.org/datasets) in 2015, which includes metadata and data derived from the HathiTrust corpus. The derived “features” in the dataset include page count, line count, empty line count, counts of characters that begin and end lines, and part-of-speech tagged word counts. The first release (v.0.2) included 4.8 million public domain volumes from the collection, and second release (v.1.0) opened 13.7 million volumes from the collection, representing a snapshot of the entire HathiTrust Digital Library circa 2016. 

## 2. Making the Case 

*an accessible narrative description that describes how the administrative case was made to do the work*

The HTRC Extracted Features dataset was in part born from other projects at the Research Center, including the Andrew W. Mellon-funded [**HathiTrust+Bookworm**](https://bookworm.htrc.illinois.edu/develop/) project, that required the HTRC to process full volume text into alternate formats. The team working on these projects realized that the data they were deriving would likely be useful to researchers and satisfy the HTRC’s policy for non-consumptive research. 

Much text analysis research begins with the process of generating so-called features from the original text, which are then counted and calculated to draw conclusions about the data. HTRC Extracted Features aids the researcher by providing the data already in feature format. Furthermore, this shift in format from full text to features distills the contents of the volumes into facts and metadata, discarding the original expression of the full text. The Extracted Features dataset therefore strikes a balance of meeting the needs of researchers in a non-consumptive manner.

The research opportunities created by the release of HTRC Extracted Features was understood throughout HathiTrust and HTRC, and after review, the dataset was released.

## 3. How you did it

*an accessible narrative description that describes how you did it; who was involved - what their roles were; what services were drawn upon; what collections were involved and why were they selected; what infrastructure and technologies were selected and why; what challenges were encountered in the course of the implementation*

Deriving the HTRC Extracted Features was largely the work of [**Peter Organisciak**](http://morgridge.du.edu/staff-members/organisciak-peter/) (University of Denver), [**Boris Capitanu**](https://www.informatics.illinois.edu/people-2/staff/) (University of Illinois), and [**Ted Underwood**](https://ischool.illinois.edu/people/faculty/tunder) (University of Illinois). Together they collaborated to create a data model and write code to derive the extracted features. 

The resulting dataset includes:
*For every volume: metadata, including bibliographic metadata, word counts, and page counts.
*For every page in a volume: part-of-speech tagged tokens (words) and their counts. Metadata, including information about the page (number of lines, number of empty lines, counts of characters beginning and ending lines), and the language, which has been computationally determined.

HTRC Extracted Features are available in JSON format, where each file represents a volume. Within the JSON files, data is organized by page in the volume. JSON is a hierarchical file format popular for exchanging data, and it lends itself well to representing book data.

HTRC Extracted Features are available using [**rsync**](https://linux.die.net/man/1/rsync), which HathiTrust tends to use to share data and is considered an efficient file transfer protocol. Volumes download in [**pairtree format**](https://confluence.ucop.edu/display/Curation/PairTree), a highly-nested directory structure.

The data can be retrieved with a structured URL that includes the standard HathiTrust volume identification number. The rsync URL format is: data.analytics.hathitrust.org::features/{{URL}}. More information about generating the rysnc URL can be found here: [**https://wiki.htrc.illinois.edu/x/oYDJAQ**](https://wiki.htrc.illinois.edu/x/oYDJAQ).  

## 4. Share the docs 

*an assortment of formal documentation (personas, use cases, functional requirements), workflows, and code you have that supports the implementation*

The following sources contain more information about HTRC Extracted Features.

Code to extract features: 
* [**https://github.com/htrc/HTRC-FeatureExtractor**](https://github.com/htrc/HTRC-FeatureExtractor) 

Data paper:
* Organisciak, P., Capitanu, B., Underwood, T. & Downie, S.J. (2017). “Access to billions of pages for large-scale text analysis.” iConference 2017. Wuhan, China. [**http://hdl.handle.net/2142/96256**](http://hdl.handle.net/2142/96256)  

HTRC Extracted Features documentation:
* [**https://wiki.htrc.illinois.edu/x/WQCGAQ**](http://hdl.handle.net/2142/96256) 

HTRC Feature Reader toolkit:
* Python toolkit for interacting with HTRC Extracted Features
* [**https://github.com/htrc/htrc-feature-reader/**](https://github.com/htrc/htrc-feature-reader/) 

## 5. Understanding use 

*discrete discussion of how you approach understanding use (e.g. library use, research use, pedagogical use, creative use, etc.) - discussion of exemplary use is also encouraged*

The HTRC Extracted Features dataset is useful for both research and teaching. As discussed in section 2 above, the feature format provides the data in a derived manner that aids the research process without over-mediating access to the data. As structured and pre-processed data, it does not meet the needs of all users, for example those whose work requires access to bigrams or greater, though it is useful for research that follows the bag-of-words model or that starts from token counts. Demonstrated uses have shown the data’s value in large-scale computational text analysis, such as text classification using machine learning techniques, and in-classroom for teaching data science and digital humanities. Exemplary uses are outlined below. 

*Text classification with HTRC Extracted Features*

Ted Underwood at the University of Illinois has drawn on HTRC Extracted Features in his research on literary genres. His work in machine learning uses the features data, including words and word counts, characters, and computationally-inferred, page-level metadata, to make inferences about genre in HathiTrust. Dr. Underwood classified volumes in the broad categories of fiction, poetry, drama, nonfiction prose, and paratext. His work classified over 800,000 volumes at the page-level, and resulted in a derived dataset containing word counts by genre and by year for volumes from 1700-1922. 

More information about this research is available on FigShare: [http://dx.doi.org/10.6084/m9.figshare.1281251](http://dx.doi.org/10.6084/m9.figshare.1281251) 

*Pedagogical application of HTRC Extracted Features* 

Chris Hench and Cody Hennesy at the University of California, Berkeley have developed a module for the Berkeley Data Science Education Program that makes use of HTRC Extracted Features. In the first iteration of the module, students documented the use of Extracted Features in data visualization, mapping, and classification in Jupyter Notebooks. Their Notebooks will be re-used in the classroom over the next year. Chris will introduce the curriculum to students in his course, “Rediscovering Texts as Data.” In that multidisciplinary, digital humanities class, students will build on the existing Jupyter Notebooks as they develop coding skills. Chris also imagines using the Notebooks in workshops with non-programmers, where they will provide a legible introduction to text analysis by revealing how Python code is used to interact with the data without requiring attendees to program. 

The Jupyter Notebooks are shared on GitHub: [https://github.com/ds-modules/Library-HTRC](https://github.com/ds-modules/Library-HTRC). 
 
## 6. Who supports use

*discrete discussion of the people, services, and programs that support use of the data (e.g. digital scholarship services, instruction services, subject area liaisons, etc.)*

Use of HTRC Extracted Features is supported by two main groups within the HTRC: the HTRC Tech Team and the HTRC Scholarly Commons. The HTRC Tech Team is comprised of research programmers, software engineers, and researchers (faculty, postdocs, and graduate students) affiliated with the [**University of Illinois School of Information**](https://ischool.illinois.edu/) and [**Indiana University Data To Insight Center**](https://pti.iu.edu/centers/d2i/people.html). The HTRC Scholarly Commons group is made up of librarians from the University of Illinois and Indiana University who are affiliated with digital scholarly initiatives at their local campuses. 

The Tech Team provides technical support for the data, including writing the code to generate the features, processing data on supercomputers at the University of Illinois and Indiana University to derive the dataset, and providing reliable access to the data. The HTRC Scholars’ Commons supports research and teaching with the suite of HTRC Tools and Services. The Scholars’ Commons leads workshops, conducts outreach, and offers support to researchers who have questions about using the dataset. The HTRC Tech Team and Scholars’ Commons have collaborated on questions of data curation and preservation of the dataset, discussed in more detail in section 7 below. 

## 7. Things people should know 

*distilled things that people should know if they are thinking about pursuing similar work*

At the scale of HathiTrust, challenges to access and storage become particularly acute. Crunching feature data for millions of files is computationally expensive, and requires access to high performance computers. HathiTrust is also a non-static collection: Volumes are added daily, and (with less frequency) volumes are removed. For these reasons, HTRC has versioned the dataset following a “snapshot” model. Due to the time it takes to generate the features, the dataset will never be exactly current with the HathiTrust Digital Library, but instead captures the collection at a moment in time. The Research Center continues to provide access to both extant versions of the dataset, [**v.0.2**](https://wiki.htrc.illinois.edu/pages/viewpage.action?pageId=37322766) and [**v.1.0**](https://wiki.htrc.illinois.edu/display/COM/Extracted+Features+Dataset), but in the future, may have to look to alternate models for access to versions. Each version of the dataset is terabytes in size and storage may prove an issue if every new version includes features for the entire corpus.

Others interested in creating derived datasets as a model for opening access to restricted collections should consider what features would be useful to their researcher community. In addition to the token (word) counts, HTRC Extracted Features includes additional metadata, some of it processed from MARC records and others calculated during feature-extraction, that we hope provides valuable context for researchers who want to make use of the dataset. Other collections with other perceived user communities may want to include additional features. 

## 8. Whats next

*you have something in place. whats next and why?* 

As HathiTrust continues to grow, the HTRC Extracted Features dataset will be periodically updated with new versions. Between the first and second releases of the dataset, significant changes were made to simplify the data model that required all of the data to be re-crunched. In future releases, only new or differing files may need to undergo feature-extraction. Still, there are some issues in the existing data, primarily related to the tokenization of Chinese-, Japanese-, and Korean-language text, that HTRC plans to improve on in future releases. 
