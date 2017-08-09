---
layout: archive
title:  "Collections as Data Facets"
---
---

[**Collections as Data Facets**](https://collectionsasdata.github.io/facets/) document collections as data implementations. An implementation consists of the people, services, practices, technologies, and infrastructure that aim to encourage computational use of cultural heritage collections. 

---
# [Chronicling America](http://chroniclingamerica.loc.gov/)

[**Deborah Thomas**](http://digitalpreservation.gov/meetings/dcs16/bio_thomas.html), Library of Congress

[**Nathan Yarasavage**](https://www.linkedin.com/in/nathan-yarasavage-15a9935b), Library of Congress

## 1. Why do it

 *an accessible narrative description that describes why the decision was made to do the work*
 
[**American newspapers**](http://chroniclingamerica.loc.gov/) are a valuable primary source for research and study across a wide variety of disciplines – from political history to economics to epidemiology and more. The primary goal of the [**National Digital Newspaper Program**](https://www.loc.gov/ndnp/) is to enhance and expand access to American newspapers by providing free and open access to the data selected and gathered from institutional collections around the country to create one unified national collection of historically significant newspapers.  By utilizing open data formats and schemas, communication protocols, and providing bulk data downloads, we can expose the collection to a very different type of use than through an individual user-based Web interface and extend the research value of the collection. 

## 2. Making the Case 

*an accessible narrative description that describes how the administrative case was made to do the work*

The administrative case for [**creating datasets**](https://diglib.amphilsoc.org/data) from our collection was based entirely on our mission to increase access to our collections. This was a relatively easy case to make. However, there were additional hurdles to overcome. 

The case for providing extended access to data had two aspects. Extending uses of the collection beyond the individual user was an opportunity to allow for new and enhanced uses of the content. In addition, the software developed for managing and displaying the data created under the program uses internal APIs and standard Web protocols for accessing data and communication within the software. To expose these internal mechanisms to external users was a low barrier to extending the use of this important federally-funded resource.

## 3. How you did it

*an accessible narrative description that describes how you did it; who was involved - what their roles were; what services were drawn upon; what collections were involved and why were they selected; what infrastructure and technologies were selected and why; what challenges were encountered in the course of the implementation*

An important component of envisioning the collection as a dataset was accomplished through emphasizing consistent and verified technical standardization of the file formats and metadata created under the program. To ensure this outcome, primarily for the purposes of creating a sustainable collection, the program developed highly-detailed technical requirements for data producers and provided a JHOVE1-based JAVA validation tool for ensuring conformance to key requirements. While minor changes have been made over the course of 12 production years so far, the dataset is largely internally consistent. (Most changes have been loosening of precise requirements rather than outright changes to technical specifications.) With a long-term vision for the program and specifically scoped goals (eventually involve all 50 states and territories, produce x amount of data per producer per 2-year grant, etc.), we strove to ensure that the data we received at the end of the program (some 20 years later) would be compatible with the data received early in the program. To that end maintaining strict data standards using open well-document technical formats and a robust inventory management system has allowed us to achieve that goal to date.  
With a reliable and consistent dataset, an access system could be built that both supported broad access to the collection and provided robust and flexible technical environment. The current system is based in the Django web framework written in Python which includes implementation of various open data access points and supports others. More information on these [**access points is available**](http://chroniclingamerica.loc.gov/about/api/) and the [**code-base itself is available**](https://github.com/LibraryOfCongress/chronam).
 
Collaboration is a notable characteristic of the program not only with regard to the institutions providing data, but also with regard to the staff within the Library of Congress. Developers, digital library staff, program managers, and collection specialists alike had a stake in the development of the web site.  Various views were created not only to assist programmatic access to the open data for digital humanists and researchers but also for digital library staff, program partners, and collections managers at LC. 

## 4. Share the docs 

*an assortment of formal documentation (personas, use cases, functional requirements), workflows, and code you have that supports the implementation*

Technical requirements for creation of the dataset are part of the [**Technical Guidelines for the National Digital Newspaper Program**](http://www.loc.gov/ndnp/guidelines/) . The National Endowment for the Humanities funds state representatives to select and digitize historic newspapers from their collections to conform to technical specifications established by the Library of Congress. All data created under the program is delivered to the Library for aggregation and public presentation, creating a large consistent dataset for historic newspapers (currently 12 million pages/45 million files).
 
Harvest and use of the data is documented on the [**main web interface**](http://chroniclingamerica.loc.gov/about/api/). A built-in reporting feature of the Django framework provides information and RSS feeds supporting use of the data at [**http://chroniclingamerica.loc.gov/reports/**](http://chroniclingamerica.loc.gov/reports/). The Django framework and Python code itself is [**available on GitHub**](https://github.com/LibraryofCongress/chronam). In addition, [**a listserv**](https://listserv.loc.gov/cgi-bin/wa?A0=CHRONAM-USERS), hosted by the Library of Congress, supports data users through community input.

## 5. Understanding use 

*discrete discussion of how you approach understanding use (e.g. library use, research use, pedagogical use, creative use, etc.) - discussion of exemplary use is also encouraged*

Learning about uses of the data is often indirect.   As no API key is required to use the data, there is no register of people interested in using the data. On one hand, this is a primary driver for the adoption of the content in, for example, classroom settings. No API key means that it is very quick to get going with the content. On the other hand, it means we must infer use through various alerts and searches, for example, when we see a published article.  In addition, as the content is public domain, there are no restrictions on the use of the content.  This has led to a wide variety of uses, from commercial harvesting of the site to serving as a test dataset in a digital humanities class. 
 
Some methods of finding out about the data use include Google alerts for the project name or social media posts, using common #hashtags like #ChronAm or retweets.  (A former web developer created a Twitter bot [**@paperbot**](https://twitter.com/paperbot) that retweets when someone posts a tweet with a link to one of the NDNP pages.)    Other methods include tracking metrics for the site; a huge traffic spike on a particular day to a particular page turned out to be a popular Reddit post.  Similarly, if the content harvester or researcher is running into problems getting content from the site, they will reach out to us to figure out a better method.   Researchers will also reach out for information about how to credit the site or ask questions about the parameters of the data, both through direct contact or through the chronam-users listserv.
 
[**NEH also ran a data challenge**](https://www.neh.gov/news/press-release/2016-07-25) in 2016 to encourage direct use of the content.  This led to some outstanding projects.  One tracked how biblical quotations were used within the newspaper context; another combined the data with another dataset (Project Hal, a national lynching database) to provide more information about specific lynchings.  Other researchers tracked the etymology of the word “Hoosier,” extracted the agricultural news, and created an interactive visualization for following a phrase over time/location.  In the K-12 arena, an AP History Class used digital humanities tools to look at different historical topics in the newspapers.

## 6. Who supports use

*discrete discussion of the people, services, and programs that support use of the data (e.g. digital scholarship services, instruction services, subject area liaisons, etc.)*

There are a number of different layers that support the use of the data.   Inside of the Library of Congress, the NDNP program specialists are often the first line of contact.  The Library of Congress site provides an email contact option (Ask-a-Librarian), and reference specialists typically refer these questions to the NDNP program specialist.   (Most users review all available documentation first and tend to use email contact as the last possible option.)   The NDNP program specialists tend to answer some technical  questions (pointing users to csv files), data questions (questions about OCR, limitations of the dataset), or query tweaking (instead of looking for fish pricing, search for specific fish prices in specific markets, such as market price of salmon in Portland versus local nearby markets).   
 
For complicated questions, there are a number of other options.  Sometimes the method the researcher/user is using can impact the performance of the website.  In that case, the LC technology staff figure out how the researcher/user can get at the data without impacting performance (like downloading the bulk OCR bags instead of scraping the site).    In other cases, the question is best answered by other users of the data.  In this case, we recommend that users contact the ChronAm-users listserv (chronam-users@listserv.loc.gov).   For example, another user might have already figured out a way to visualize given issues in a specific state by year.   As more and more users work with the data, we encourage researchers to look at prior research, and point researchers to known current research efforts underway.
 
Publicizing and encouraging the use of the data is also mixed in with encouraging the use of the collection in general.  The NEH supports the use of the data, such as the data challenge described above.  Similarly, our education outreach team as well as National History Day serve as boosters for the use of the collection in general and the use of the data.  As the project is a distributed model, our  state project partners (universities, state libraries, and state historical societies) encourage the use of content in the classroom, provide greater awareness of the content and what can be done with it via talks at conferences, etc. 

## 7. Things people should know 

*distilled things that people should know if they are thinking about pursuing similar work*

Beyond the features that support individual Web browsing, Chronicling America also supports access to all data through common Web protocols and formats, providing machine-level views of all data for harvesting and large-scale bulk download.  As examples, researchers can harvest batched digitized page images as JPEG2000, PDF and/or METS-ALTO OCR,   or bulk OCR-only batches. Each newspaper page includes embedded Linked Data using a number of ontologies and supports JSON and RDF views. US Newspaper Directory bibliographic records are also available as MARCXML.  The open API includes industry-standard endpoints like OpenSearch and supports stable intelligible URLs.
 
To accommodate data harvesting activities, the Chronicling America Web site infrastructure and workflow includes several features specifically designed to support such work:

1. During data ingest, additional text-only data sets are created and stored separately ready for bulk download .
2. To create transparency and ease of access to the bulk downloadable data, feeds for the downloadable files, in both ATOM and JSON format were added. Researchers can subscribe to the feed to ensure they get any new data that is added.
3. For the interactive API (JSON & RDF) caching was added to provide fast responses for pages that need to be created “on the fly” by the server (as opposed to the bulk processed data that exists in flat files).
 
For the user, we intentionally provide access and support to users with a wide variety of needs and skills.  For example, a student can download a csv file of all of the digitized newspapers available on the site; the csv file includes information about the title, first issue digitized, final issue digitized, state, etc.  A researcher might be interested in large-scale text analysis; for that user, all of the OCR files have been bagged and are available for bulk download. 

## 8. Whats next

*you have something in place. whats next and why?* 

Planned infrastructure and interface design upgrades as well as endeavors to integrate and streamline digital content presentations at the Library present challenges and opportunities related to API access to data collections.  Planning is underway to integrate the Chronicling America dataset into the general digital collections of the Library. Providing API and bulk data download access to Chronicling America data has proven to be a valuable service, and as such, maintaining equivalent or improved access after integration is a priority for the Library.  Much of the available digital collections at the Library of Congress lack API documentation or bulk data access.  Leveraging the work done with Chronicling America in these areas, more data collections at the Library are expected to take advantage of the same approaches used by Chronicling America in the near future.

 
