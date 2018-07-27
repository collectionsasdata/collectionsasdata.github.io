---
layout: archive
title:  "Collections as Data Facets"
---
---

[**Collections as Data Facets**](https://collectionsasdata.github.io/facets/) document collections as data implementations. An implementation consists of the people, services, practices, technologies, and infrastructure that aim to encourage computational use of cultural heritage collections. 

---

# [American Philosophical Society Open Data Projects](https://diglib.amphilsoc.org/data)

[**Scott Ziegler**](https://amphilsoc.org/about/staff), American Philosophical Society Library

## 1. Why do it

 *an accessible narrative description that describes why the decision was made to do the work*
 
[**The American Philosophical Society Library (APS)**](https://diglib.amphilsoc.org/data) has been digitizing historic primary sources for just about a decade. We’ve spent a lot of time smoothing out our workflow, and we feel like the process is pretty well developed. However, we’ve known for some time  that the audience for these scans are limited. The vast majority of our scanned material is hand-written (correspondence, diaries, ledgers, account books, for example). Reading this handwriting can be slow, and at times is a specialization in its own right. 

We wanted to make this material available in a more approachable manner. We also wanted to give researchers an opportunity to easily interact with the material in different ways, including mapping and text analysis.  Lastly, we see this as an outreach opportunity. We hope to build tutorials for students at the high school and undergraduate level to learn about visualization creation and digital history. 

## 2. Making the Case 

*an accessible narrative description that describes how the administrative case was made to do the work*

The administrative case for [**creating datasets**](https://diglib.amphilsoc.org/data) from our collection was based entirely on our mission to increase access to our collections. This was a relatively easy case to make. However, there were additional hurdles to overcome. 

Primarily, there are administrative concerns that the data we put out will have mistakes. This has proven to be the case. We try to include warnings that our datasets are created with attention to detail, but that errors happen. We’re also cautious about how we label these datasets. We tend not to say that they are transcriptions (though, due to a dearth of synonyms, we do use the verb ‘transcribe’). As an organization, we benefit greatly from large and professional transcription projects, including the Papers of Benjamin Franklin and the Papers of Thomas Jefferson. These projects are definitive representations of primary material. Our datasets are not. Our datasets are our attempt to make our material more usable, and usable for different types of projects.

In making the case for doing these datasets, we agreed to be clear about what we’re putting out, to help draw a distinction between our datasets and professional transcriptions, and to supply feedback options for people who find mistakes. 

## 3. How you did it

*an accessible narrative description that describes how you did it; who was involved - what their roles were; what services were drawn upon; what collections were involved and why were they selected; what infrastructure and technologies were selected and why; what challenges were encountered in the course of the implementation*

We identified the requirements for dataset creation to be:

1. ability to view a scan of the page being transcribed
2. ability to simultaneously view the software that the text is being typed into
3. versioning and/or revision history
4. ability to share among multiple people

We experimented with a number of crowdsourcing tools, including [**Omeka/Scripto**](https://github.com/omeka/plugin-Scripto), [**Omeka/Scribe**](https://github.com/ui-libraries/Scribe), and [**Scribe Project**](http://scribeproject.github.io/). However, we quickly realized that the team we were assembling was small enough to rely on more modest tools. 

We ended up using Google Sheets as the primary tool. We used dual monitors to ensure that the person creating the dataset can easily see the scanned page as well as the spreadsheet. 

For [**the historic prison data**](https://diglib.amphilsoc.org/data), our first major step toward thinking of our collections as data, we were lucky to have two talented and devoted volunteers: Kristina Frey and Michelle Ziogas. Kristina assisted in the early stages of the project, and Michelle did the majority of the dataset work.    

## 4. Share the docs 

*an assortment of formal documentation (personas, use cases, functional requirements), workflows, and code you have that supports the implementation*

We don’t currently have any documentation, though we expect to create some during future projects.

## 5. Understanding use 

*discrete discussion of how you approach understanding use (e.g. library use, research use, pedagogical use, creative use, etc.) - discussion of exemplary use is also encouraged*

We understand the use of our data primarily anecdotally. We think of our datasets as a means of identifying new institutional partners and collaborators. We monitor the use of our data via these partners. For example, we created the historic prison dataset from material in our library related to Eastern State Penitentiary. As we did this, we contacted the staff of the Eastern State Historic Site, and this has flourished into a fruitful partnership. Researchers come to our data through them, through our digital repository, and through the various third-party services we use to host our data. Several of these researchers have contacted us to offer their own data, to discuss additional projects, to show what they’re building, and to offer corrections. This has been our principal measure of success. 

We do maintain some metrics. [**The Magazine for Early American Datasets**](http://repository.upenn.edu/mead/) records the number of times datasets are downloaded. We also have a count of how many people download from our digital repository. These are helpful and appreciated. However, the motivation continues to be the new connections we make with individuals. 

## 6. Who supports use

*discrete discussion of the people, services, and programs that support use of the data (e.g. digital scholarship services, instruction services, subject area liaisons, etc.)*

## 7. Things people should know 

*distilled things that people should know if they are thinking about pursuing similar work*

When discussing this with people at libraries similar to my own, I tend to focus on the following: 

* Datasets are easy to create. All you need to get started as a spreadsheet and something to transcribe. 
* Material is easy to identify. We look for material that will work well as spreadsheets. Ledgers, printed forms, tallies, account books, are all examples due to their recognizable and repeatable format. 
* Datasets are useful. You can save researchers’ time by removing the challenge of reading handwritten notes; you can put material in a format that makes it easy to map; the material can sorted, searched and filtered; you can promote the mission of your library. 

However: 
* Datasets need to be managed: Mistakes will slide in, and researchers will point them out; editorial decisions will need to made, even in the most straight-forward-looking material.

## 8. Whats next

*you have something in place. whats next and why?* 

Our flagship project to date -- historic prison data -- has gotten some positive attention, and we’re eager to keep moving. We’ll be hosting a digital humanities fellow to focus specifically on using the historic prison data. He’ll be exploring various types of visualizations and analysis. We also hope to build a number of tutorials to encourage others to use the data for their own projects. 

Additionally, we’re working on two other [**open data projects**](https://diglib.amphilsoc.org/data). One involves a post office book kept by Benjamin Franklin during his tenure as Postmaster of Philadelphia. The other will involve a record of indentured individuals arriving in Philadelphia during the years of 1771-1773. Both of these projects will have academic advisory committees to help us strategize use cases and promote the data. 
 
