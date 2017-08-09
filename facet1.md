---
layout: archive
title:  "Collections as Data Facets"
---
---

[**Collections as Data Facets**](https://collectionsasdata.github.io/facets/) document collections as data implementations. An implementation consists of the people, services, practices, technologies, and infrastructure that aim to encourage computational use of cultural heritage collections. 

---

Alt-H1 [MIT Libraries Text and Data Mining](https://github.com/mitlib-tdm)

[**Richard Rodgers**](http://libguides.mit.edu/c.php?g=176063&p=1160989), Massachusetts Institute of Technology 

## 1. Why do it

 *an accessible narrative description that describes why the decision was made to do the work*

MIT Libraries collect, curate, and provide access to numerous digital collections that comprise important research outputs and contributions to the scholarly record. Access is typically provided via traditional web applications designed for individual users in browsers.  In assessing the patterns of use of these collections, it became apparent that a significant amount of traffic was due to various automated processes that ‘scraped’ the sites, but did not identify themselves as indexing services. At the same time, we began to receive more and more direct requests from individual scholars on campus (and beyond) for bulk delivery of textual corpora in our collections, in order to perform text-mining on them.  It was clear that these ‘alternative’ uses of collections were not well served by existing access methods and systems.

## 2. Making the Case 

*an accessible narrative description that describes how the administrative case was made to do the work*

We saw that we needed to explore how better to provide access for these kinds of use, and this need dovetailed with a broader agenda that the Libraries were pursuing of reconceiving library services as a ‘platform’: a notion articulated in recommendation 6 of the Future of the [Libraries Task Force Report](https://www.pubpub.org/pub/future-of-libraries), which specifically mentions text and data mining as important ‘non-consumptive’ uses of library-stewarded material. The platform model emphasizes empowering users to create their own discovery/access/consumption tools by providing open, standards-based, and performant APIs or other services that such tooling can leverage. So the case was made by arguing that an experiment to expose collection data via a new API designed for bulk access would teach us how to build a library platform that would increase the value of all collections. 

## 3. How you did it

*an accessible narrative description that describes how you did it; who was involved - what their roles were; what services were drawn upon; what collections were involved and why were they selected; what infrastructure and technologies were selected and why; what challenges were encountered in the course of the implementation*

Based on the analytics, we selected [MIT’s Electronic Theses and Dissertations](http://libguides.mit.edu/diss) as the initial collection to work with: it was highly sought after, fairly extensive (close to 50K theses, with plans to digitize the entire historical run), and already under management in our institutional repository ([DSpace@MIT](https://dspace.mit.edu/handle/1721.1/7582)). We wrote a formal proposal for a project to design and build a prototype of a new discovery and access service for this collection to enable text and data mining (or other non-consumptive uses).

The project team consisted of:

* a project manager, who oversaw the scrum-agile process used to manage the development
* three software developers, who took responsibility for content accession, repository  management, and API design and development, respectively
      * an analyst, who surveyed the field of existing text and data mining services, and who worked with potential users of the system to understand their needs
  * a UI/UX expert, who helped in designing intuitive and effective user interfaces (which complemented and documented the API).

The development project ran for 10-11 months, and a functional prototype was built that exposed an API for discovery and bulk access of etheses. The user could request any (or all) of 3 content representations: the metadata (including an abstract), the thesis as a PDF (which is the approved submission format), and the full (unstructured) text extracted from the PDF.

The service consisted of several cooperating software components: a Fedora 4 repository, which held the metadata and textual artifacts, an ElasticSearch index, used to query the full-text, as well as the metadata, an API server which formed the front-end,  exposing the ways users could interact with the index and repository, and various queues and caches to connect these components.  Each component was deployed in a container to a Kubernetes-orchestrated environment in a cloud service (Google Container Engine).

Several challenges the project encountered, to name a few:

* The quality of the PDFs in the collection varied considerably, with numerous encoding and other errors that affected or impaired use. Some etheses were created in digitization workflows from analogue originals, whereas others were ‘born digital’, and both content streams were created over a long span of time using different software, workflow practices, etc.  We vacillated between attempts to ‘repair’ the theses, or enhance the metadata with quality indications so that machine use could adjust for it: the final prototype included aspects of both approaches.
* The cloud environment required considerable knowledge of deployment and orchestration tools and platforms that the team lacked. While we were able largely to surmount these deficiencies, we did so at some cost to the overall project deliverables. Our initial resource model for the project included a ‘devops’ role (unfilled) that would have greatly assisted.
* It was difficult to identify and attract a broad variety of potential users to help define the product design. We gained valuable insight from those we engaged with, but suspected there were many more research objectives, techniques, requirements, etc that would have beneficially shaped the design of the API and the whole service. This stemmed in part from the fact that we were asking for input without a working system to react to.

## 4. Share the docs 

*an assortment of formal documentation (personas, use cases, functional requirements), workflows, and code you have that supports the implementation*

Project documents forthcoming, but the code that was used to run the prototype is [available on Github.](https://github.com/mitlib-tdm)

## 5. Understanding use 

*discrete discussion of how you approach understanding use (e.g. library use, research use, pedagogical use, creative use, etc.) - discussion of exemplary use is also encouraged*

The team solicited potential users of the ethesis service, and conducted a small number of interviews to elicit both their intended use, but also what affordances such a service should provide to researchers.

We learned that the metadata we exposed (academic department, completion year, degree type, etc) were considered useful ways to plumb and select within that particular corpus (etheses), in addition to keyword search over the full-text. 

The service itself was designed to gather data about how it was used, but working against this was the desire to make the data openly available to all, without ‘user tracking’. In the end, the service emerged with a lightly tiered structure: all content was freely available, but certain advanced functions required obtaining an API key (which allowed much better analytics).

## 6. Who supports use

*discrete discussion of the people, services, and programs that support use of the data (e.g. digital scholarship services, instruction services, subject area liaisons, etc.)*

While the cloud-hosted service compute infrastructure was supported by the libraries technology team, the project required considerable support throughout the libraries and archives. At MIT, the responsibility for collecting and curating theses and dissertations falls to the Institute Archives, who were a key stakeholder in the project. They did extensive research (including soliciting  advice from the Institute’s legal counsel) on the IP and rights issues surrounding such a new service, since this kind of use was not originally contemplated in the policies governing theses. They also assumed general responsibility for the rare but complex decisions around takedown requests, etc.

Since this service obtains content from existing digitization workflows, the digitization team was also closely involved in providing access to scripts, software tools, etc used to create ethesis artifacts.

If the service were launched in production, repository managers would need to both administer the service, but also field questions and provide support for end-users (API key management, etc). In addition, the IT operations group would need to follow the standard set of practices for system backup, performance monitoring, etc. We learned that data-intensive services such as this (where gigabytes of package downloads were routine) had to be managed carefully from a resource perspective.

## 7. Things people should know 

*distilled things that people should know if they are thinking about pursuing similar work*

One key insight we gained was the need to perform a thorough appraisal of the collection from a data completeness, uniformity, and consistency perspective: when discovery and access are confined to siloed legacy applications,  these quality dimensions may be difficult to observe.

## 8. Whats next

*you have something in place. whats next and why?* 

ETDs were a great candidate collection for understanding the requirements of a text and data mining service, but we have numerous text-based collections of high value, including our extensive open access articles collection, conference proceedings, technical reports, working papers, etc. An analysis of these corpora (what are useful metadata discriminators, etc) in light of the insights gained in the etheses prototype, could lead to a general, flexible service for offering the wealth of content the Libraries has to new forms of scholarly inquiry.
