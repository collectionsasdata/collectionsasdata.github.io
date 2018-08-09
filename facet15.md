---
layout: archive
title:  "Collections as Data Facets"
---
---

[**Collections as Data Facets**](https://collectionsasdata.github.io/facets/) document collections as data implementations. An implementation consists of the people, services, practices, technologies, and infrastructure that aim to encourage computational use of cultural heritage collections. 

---
# [Social Feed Manager](https://gwu-libraries.github.io/sfm-ui/)

[**Laura Wrubel**](https://library.gwu.edu/users/Wrubel), Software Development Librarian, George Washington University

[**Justin Littman**](https://github.com/justinlittman), Software Development Librarian, George Washington University

[**Dan Kerchner**](https://library.gwu.edu/users/Kerchner), Senior Software Developer, George Washington University


## 1. Why do it
*an accessible narrative description that describes why the decision was made to do the work*

Social media platforms produce and disseminate a record of our cultural heritage and are a source of data for answering research questions from numerous disciplines. After learning about a George Washington University faculty member’s research which involved collecting tweets using a manual process, we developed prototype software in 2012 to connect to Twitter’s APIs and help her collect data. Conversations with our university archivist highlighted use cases for collecting social media in the archives for future researchers. We saw a role for the library to build better tools for our community to conduct social media research. This led us to develop [**Social Feed Manager**](https://gwu-libraries.github.io/sfm-ui/), which empowers researchers to build collections and enables libraries to proactively create datasets for use within their community. Along with providing data, we offer a consultation service for students, faculty, researchers--and also archivists and librarians--to access and use social media data. 

## 2. Making the Case 

*an accessible narrative description that describes how the administrative case was made to do the work*

Development of Social Feed Manager started through an IMLS Sparks grant and proceeded with support from [**National Historical Publications and Records Commission**](https://www.archives.gov/nhprc) and the [**Council on East Asian Libraries**](http://www.eastasianlib.org/MellonGrants.htm). Library leadership participated and supported these grants which defined work proceeding from our existing relationships with faculty and archivists. Grant funding and project deliverables, as well as researcher and archivist needs, drove the allocation of staff time from developers, archivists, and librarians to support the work. Developing software and building a service supporting social media research might appear to be peripheral to typical library operations. Yet, the growing integration of the library’s staff into [**research projects**](https://gwu-libraries.github.io/sfm-ui/data-research/#research-using-social-feed-manager)--included funded research--SFM’s popularity with students at all levels, and the prominence of projects supported by data collected using SFM have become compelling evidence of its value and how this work supports library strategic goals concerning research and cross-disciplinary collaboration.


## 3. How you did it

*an accessible narrative description that describes how you did it; who was involved - what their roles were; what services were drawn upon; what collections were involved and why were they selected; what infrastructure and technologies were selected and why; what challenges were encountered in the course of the implementation*

Our initial project team in 2013-14, funded by a Sparks! grant from IMLS, was small and focused: the library’s director of scholarly technology (who served as project manager and principal investigator), a software developer, our e-resources content manager, and a graduate student developer. In this first phase, we developed a suite of utilities and an administrative interface to manage collecting activities against the Twitter public APIs. A basic user interface provided access to data from Twitter user timelines, one at a time. We collected data of interest to the GW research community and in support of specific faculty and student research projects. This included tweets by members of Congress, news outlets, and public sports and entertainment figures. The project team mediated much of the running of the data collecting and exporting data beyond simple downloads of an individual timeline’s tweets.

In our second round of grant funding from the National Historical Publications and Records Commission and the Council of East Asian Libraries, we further developed the software and widened staff involvement in the project. Our grant funded the exploration of social media archiving and thus several of our archivists and our digital services manager participated as team members.  The project included a significant software development component, as we added social media platforms, built a user interface to empower researchers to manage their own collections, and added more functionality overall to manage collecting from the Twitter, Tumblr, Flickr, and Sina Weibo APIs. To improve SFM’s usability, our grant from NHPRC supported bringing on a UX consultant to conduct an expert review of its interface. We also brought on an experienced digital archivist to review the technical architecture and archival use cases. We wrote documentation and a quick start guide for both end users and other institutions using Social Feed Manager.

As a library, we actively collected tweets related to topics of interest on the GW campus. The largest and most heavily used collection has been our [**2016 elections collection**](https://dataverse.harvard.edu/dataset.xhtml?persistentId=doi:10.7910/DVN/PDI7IN), containing over 280 million tweets. To facilitate making this data accessible to the GW community and beyond, a team member created [**TweetSets**](https://tweetsets.library.gwu.edu/), which provides a self-service interface for the GW community to download data and for the broader community to download tweet identifiers. 

The changing terms of use for social media platforms and accompanying changes to APIs are a challenge both for maintaining working software and supporting research. 

A current challenge is tracking and keeping up with the many research projects that use SFM. We want to be able to tell the story about the students and faculty in a wide range of disciplines and schools who are using SFM, and the contributions our librarians make to this work.

## 4. Share the docs 

*an assortment of formal documentation (personas, use cases, functional requirements), workflows, and code you have that supports the implementation*
 
[**Documentation**](https://sfm.readthedocs.io) for the Social Feed Manager software.  

The following documents are available through Social Feed Manager [**project site**](https://go.gwu.edu/sfm):

- [**Social media research ethical and privacy guidelines**](https://gwu-libraries.github.io/sfm-ui/resources/social_media_research_ethical_and_privacy_guidelines.pdf): general guidelines for GW researchers focusing on the collecting, sharing, and publishing of social media data
- [**Social Feed Manager: Guide for Building Social Media Archives**](https://gwu-libraries.github.io/sfm-ui/resources/SFMReportProm2017.pdf), Christopher J. Prom (2017)
- [**Building Social Media Archives: Collection Development Guidelines**](https://gwu-libraries.github.io/sfm-ui/resources/guidelines) 

The details of our software development work are available on [**GitHub**](https://github.com/gwu-libraries/sfm-ui). This includes issue-tracking and prioritization, past and ongoing milestone activity, and release notes. We also publish [**blog posts**](https://gwu-libraries.github.io/sfm-ui/blog) with each release, highlighting new features useful to the community and sharing tips for collecting and working with the data. 

## 5. Understanding use 

*discrete discussion of how you approach understanding use (e.g. library use, research use, pedagogical use, creative use, etc.) - discussion of exemplary use is also encouraged*

Our consultation model means that we typically have contact with users of Social Feed Manager and/or social media data and have an ongoing conversation about the analysis methods, findings, and outcomes of their research. This model also supports including discussion about ethical use of social media data. 

In addition to being publicly available from TweetSets, several proactively collected datasets are available publicly on Dataverse, as sets of tweet identifiers. Twitter’s terms of use do not allow full tweet data to be shared, but tweet identifiers may be shared for research purposes. A researcher can pull the full tweet, or “hydrate” it, from Twitter’s API. Download metrics are available through Dataverse and its collections are highly discoverable via Google. We receive occasional follow-up requests or questions and track citations of datasets we’ve published. 

Within the university, we are tracking schools and departments we’ve interacted with and monitor for published research that uses SFM, presentations, posters. 

## 6. Who supports use

*discrete discussion of the people, services, and programs that support use of the data (e.g. digital scholarship services, instruction services, subject area liaisons, etc.)*

We have a team of software developer librarians who develop Social Feed Manager, provide consultations with faculty and students, teach workshops, and manage related services. Our subject specialist librarians are a frequent source of referrals. Our data services librarian sometimes participates in consultations, especially where they involve the larger research data lifecycle. 

## 7. Things people should know 
*distilled things that people should know if they are thinking about pursuing similar work*

Ethical and privacy considerations need to stay at the forefront of this work and are a thread throughout the software development, research consultation, and instructional aspects of this work. 

It is not enough to provide a tool for building social media collections: users will need support in understanding and optimizing their collecting parameters, understanding the data, and finding ways to manipulate or reformat it for analysis. We work with freshmen in writing seminars, undergraduates and graduate students from a wide range of disciplines, and faculty, with varying familiarity with CSV and JSON data, social media platforms, and research methods suited to social media data. 

Social media platforms are constantly changing. Terms of use and API affordances are designed for commercial users rather than academic or research use.  It’s necessary to spend time understanding social media platforms, researcher needs, and staying up to date since what is available is always changing. Advocacy for researcher needs can sometimes lead to change with platform terms, even if only over the long-term.

## 8. What’s next
*you have something in place. whats next and why?* 

We are continuing to maintain Social Feed Manager and trying to keep up with changing API affordances. We’re further developing our workshops and outreach on campus. The interest in our 2016 elections collection has led to our working with external audiences for this data such as journalists and non-profits, and we participate in conferences related to that work. We’re being proactive about the 2018 midterm elections and collecting with future research uses in mind. 
