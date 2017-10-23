---
layout: archive
title:  "Collections as Data Facets"
---
---

[**Collections as Data Facets**](https://collectionsasdata.github.io/facets/) document collections as data implementations. An implementation consists of the people, services, practices, technologies, and infrastructure that aim to encourage computational use of cultural heritage collections. 

---
# [Vanderbilt Library Legacy Data Projects](https://ticha.haverford.edu)

[**Veronica Ikeshoji-Orlati**](http://vikeshojiorlati.com), Vanderbilt University

## 1. Why do it

 *an accessible narrative description that describes why the decision was made to do the work*
 
The Jean and Alexander Heard Library has become the repository for dozens of digital projects executed across the university. As stewards of these digital collections - encompassing databases, archives, e-editions, and exhibitions - it is incumbent upon us to ensure not only the availability, but also the accessibility of these resources to current and future generations. Every digital project is the product of  hundreds, if not thousands, of hours of intellectual labor. To facilitate (re)use of  digital scholarship pioneer and practitioner contributions requires that their work be thoughtfully curated, documented, and made publically available.

## 2. Making the Case 

*an accessible narrative description that describes how the administrative case was made to do the work*

The administrative case for instituting a “data-first” policy of distilling the content and structures of digital projects into machine-actionable datasets is driven not only by ideological considerations but also practical ones. Fundamentally, the infrastructure to support continued development of sunsetted digital projects without personally invested stakeholders is lacking. The time and expertise required to satisfactorily migrate and maintain all sites built in Drupal 6, for example, is not fiscally viable if the library is to care for an ever-burgeoning collection of digital projects. In addition, the CLIR Postdoctoral Fellowship Program in Data Curation has allowed the library to experiment with integrating digital data curation practices into Digital Scholarship workflows.

## 3. How you did it

*an accessible narrative description that describes how you did it; who was involved - what their roles were; what services were drawn upon; what collections were involved and why were they selected; what infrastructure and technologies were selected and why; what challenges were encountered in the course of the implementation*

The first dataset curated by current CLIR postdoctoral fellow Veronica Ikeshoji-Orlati is the [**e-edition**](http://diglib.library.vanderbilt.edu/baud-search.pl) of Raymond Poggenburg’s Charles Baudelaire: Une Micro-histoire. Poggenburg initially published the Micro-histoire in 1987 as an entry-based chronology of the life of Charles Baudelaire (1821-1867). In the early 2000s, an expanded e-edition of the Micro-histoire was published by the Vanderbilt University Press and Jean and Alexander Heard Library. In 2016, due to the deterioration of the perl framework on which the e-edition was built and the library’s desire to increase the accessibility of the Micro-histoire’s contents, the data and metadata from the relational database underlying the e-edition were extracted into CSV format. Data cleaning was accomplished with OpenRefine, and the Library of Congress Metadata Object Description Schema (MODS) [**version 3.6**](http://www.loc.gov/standards/mods/) was selected for structuring the data and metadata in XML format. The dataset is currently in a github repository awaiting legal counsel’s approval for public release. The [**process of curating the Micro-histoire dataset**](http://www.dcc.ac.uk/sites/default/files/documents/IDCC17~/presentations/VAI-CBA_IDCC17_presentation.pdf) was presented at the IDCC 2017 conference.

## 4. Share the docs 

*an assortment of formal documentation (personas, use cases, functional requirements), workflows, and code you have that supports the implementation*

Legacy data curation protocols and institution-wide data management policies are currently being drafted. Each project, in its public release through the [**library GitHub**](http://heardlibrary.github.io/) account, is accompanied by documentation specific to that project.

## 5. Understanding use 

*discrete discussion of how you approach understanding use (e.g. library use, research use, pedagogical use, creative use, etc.) - discussion of exemplary use is also encouraged*

Our goal in making Vanderbilt’s digital project datasets publically available under CC0, CC-BY, or CC-BY-NC licenses (as appropriate) is to facilitate (re)use of the data in research and teaching contexts. It is anticipated that the communities currently utilizing the digital projects will engage with the curated datasets for their research purposes. In addition, new users interested in scholarly meta-analyses or large-scale quantitative research may incorporate the library’s datasets into their work. In the case of the Poggenburg Micro-histoire dataset, for instance, Baudelaire scholars are the most likely audience, but those interested in broader questions in French history and literature may find the data of use, too. While the users for each dataset may differ, it is hoped that the curated datasets will also be of service to teachers working with students to learn how to interrogate humanities and social science data in meaningful and methodologically sound ways.
 
## 6. Who supports use

*discrete discussion of the people, services, and programs that support use of the data (e.g. digital scholarship services, instruction services, subject area liaisons, etc.)*

Members of the [**Digital Scholarship and Scholarly Communications team**](http://www.library.vanderbilt.edu/scholarly/) in the Jean and Alexander Heard Library are the primary facilitators for data acquisition, curation, publication, and use projects on campus. A new position, the Curator of Born-Digital Collections, has been created in order to continue curation efforts on library-housed digital datasets. In order to encourage campus use of the datasets, the Digital Scholarship team conducts regular workshops and hosts working groups in Linked Data and the Semantic Web, Tiny Data (data curation for the humanities), GIS, and XQuery to develop a cohort of data-literate faculty, staff, and students around campus.

## 7. Things people should know 

*distilled things that people should know if they are thinking about pursuing similar work*

As many data curators may already know, an overwhelming majority of one’s time is given over to [**data cleaning and standardization**](https://www.nytimes.com/2014/08/18/technology/for-big-data-scientists-hurdle-to-insights-is-janitor-work.html). To successfully run a data curation program within a library, it is critical to translate the lessons learned in curating legacy data sets to training programs in data management for researchers across campus. The data-driven research projects of today are the data curation challenges of the future, so establishing sound data management practices in current digital projects streamlines the process of ingesting them into the library’s collection when they are completed. In addition, a data curation program must be grown in tandem with digital scholarship education infrastructure in order to arm teachers and researchers with the programming skills required to grapple with the curated datasets.

## 8. Whats next

*you have something in place. whats next and why?* 

Currently, Veronica Ikeshoji-Orlati is curating the TV News dataset, a collection of nearly 1.1 million abstracts of news broadcasts from ABC, CBS, NBC, CNN, and Fox News dating back to August 5, 1968. The [**Vanderbilt Television News Archive**](https://tvnews.vanderbilt.edu/) is one of the richest resources for US news reporting in the 20th and 21st century, but access to the metadata is limited due to the current web interface. In order to facilitate not only improved discoverability of news segments, but also quantitative analysis of the dataset as as whole, Ikeshoji-Orlati is collaborating with Suellen Stringer-Hye (Linked Data and Semantic Web Coordinator), Steve Baskauf (Senior Lecturer of Biological Sciences), Zora Breeding (Cataloguing and Metadata Team Leader), and Jacob Schaub (Music Cataloguer) to map the dataset to the [**IPTC Newscodes Vocabulary**](https://iptc.org/standards/newscodes/). In addition, she is working with Lindsey Fox (GIS Librarian) to enrich the dataset with geospatial data.
