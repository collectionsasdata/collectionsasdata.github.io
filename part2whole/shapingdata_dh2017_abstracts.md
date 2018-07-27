---
layout: archive
title:  "Shaping Humanities Data Abstracts"
---
---
[**Shaping Humanities Data at Digital Humanities 2017**](https://collectionsasdata.github.io/shaping/) 

# Abstracts

**Demonstrating A Multidisciplinary Collections API** 

Bridget Almas and  Frederik Baumgardt, Tufts University; Tobias Weigel, DKRZ; Thomas Zastrow, MPCDF

[The Collections Working Group of the Research Data Alliance](https://www.rd-alliance.org/groups/pid-collections-wg.html) (RDA) is a multidisciplinary effort to develop a cross-community approach to building, maintaining and sharing machine-actionable collections of data objects. We have developed an abstract data model for collections and an API that can be implemented by existing collection solutions. Our goal is to facilitate cross-collection interoperability and the development of common tools and services for sharing and expanding data collections within and across disciplines, and within and across repository boundaries. The RDA Collections API supports Create/Read/Update/Delete/List (CRUD/L) operations. It also supports set-based operations for Collections, such as finding matches on like items, finding the intersection and union of two collections, and flattening recursive collections. Individual API implementations can declare, via a standard set of capabilities, the operations available for their collections. The Perseids Project at Tufts University is implementing this API for its collection of annotations on ancient texts. We will review the model and the functionality of the API and demonstrate how we have applied it to manage Perseids humanities data. We will also provide examples of how it is being applied for collections of data in other disciplines, including Climate Computing and Geoscience. Finally, we will solicit feedback from the participants in the workshop on the API and model and its applicability for other collections of cultural heritage data.

**Libraries as Publishers of a New Bibliographical Unit**

Steven Claeyssens, Koninklijke Bibliotheek

Large-scale digitisation of historical paper publications is turning libraries into publishers of data collections for machines and algorithms to read. Therefor the library should critically (re)consider 1) its new function as a publisher of 2) a new type of bibliographical content in 3) an exclusively digital environment. What does it mean to be both library and publisher? What is the effect of remediating our textual and audiovisual heritage, not as traditional bibliographic publications, but as data and datasets? How can we best serve our patrons, new and old, machines and humans?
 
In my talk I want to address these questions drawing on my background as a book historian specialized in Publishing Studies, and on my experience as the Curator of Digital Collections at the national library of the Netherlands (KB) responsible for providing researchers with access (Data Services) to the large collections of data the KB is creating.
 
At the KB we found there is no one-way solution to cater the needs of Digital Humanists. I will reflect upon their requirements by analysing the requests for data by Digital Humanists the KB received during the year 2016. What kind of data were they looking for? Why did they need the data?
 
I will identify both valuable as well as incompatible user requirements, indicating the conflicting expectations and interests of different disciplines and researchers. Therefore I argue that 1) a close collaboration between scholars and librarians is essential if we really want to advance the use of large digital libraries in the field of Digital Humanities, and 2) we need to carefully reconsider our role(s) as a library.

**Audio Analysis for Spoken Text Collections** 

Tanya Clement and Steve McLaughlin, The University of Texas at Austin

At this time, even though we have digitized hundreds of thousands of hours of culturally significant audio artifacts and have developed increasingly sophisticated systems for computational analysis of sound, there is very little provision for audio analysis. There is little provision for scholars interested in spoken texts such as speeches, stories, and poetry to use or to even begin to understand how to use high performance technologies for analyzing sound. Toward these ends, we have developed a beginner’s audio analysis workshop as part of the HiPSTAS (High Performance Sound Technologies for Access and Scholarship) project. We introduce participants to essential issues that DH scholars, who are often more familiar with working with text, must face in understanding the nature of audio texts such as poetry readings, oral histories, speeches, and radio programs. First, we discuss the kinds of research questions that humanities scholars may want to explore using features extracted from audio collections-- laughter, silence, applause, emotions, technical artifacts, or examples of individual speakers, languages, and dialects as well as patterns of tempo and rhythm, pitch, timbre, and dynamic range. We will also introduce participants to techniques in advanced computational analysis such as annotation, classification, and visualization, using tools such as Sonic Visualiser, ARLO, and pyAudioAnalysis. We will then walk through a sample workflow for audio machine learning. This workflow includes developing a tractable machine-learning problem, creating and labeling audio segments, running machine learning queries, and validating results. As a result of the workshop, participants will be able to develop potential use cases for which they might use advanced technologies to augment their research on sound, and, in the process, they will also be introduced to the possibilities of sharing workflows for enabling such scholarship with archival sound recordings at their home institutions.

**Using IIIF to answer the Data Needs of Digital Humanists** 

Rachel Di Cresce, University of Toronto

How can we provide researchers and instructors with seamless access to dispersed collections, controlled by their formats, frameworks and softwares, across GLAMs? How can we allow free movement of this data so it can be analyzed, measured and presented through different lenses? And how can we support this research without placing too high a technical burden on those institutions, especially those with limited resources? These questions have been at the centre of the University of Toronto’s Mellon-funded project, Digital Tools for Manuscript Study, which aims at integrating the International Image Interoperability Framework (IIIF), based on Linked Data principles, with existing tools to improve the researcher’s experience. Essentially, the project shifts focus away from the tool that makes use of the data onto the data itself as a research and teaching tool.

At the core of the project is working with humanists to understand how they conduct their research and what they need in order to do digital scholarship effectively. We identified, for example, strong needs for data portability, repository interoperability, and tool modularity in scholarly work. We make use of the IIIF data standard to support data portability, the Mirador image viewer for its suite of tools for image presentation and analysis and Omeka for its wide adoption among digital humanities scholars and GLAMs. In addition, we have developed a standalone tool set called IIIF To Go. This is a user-friendly IIIF start-up kit, designed to support both research and pedagogical uses. This talk will discuss our attempt to democratize an international standard by (1) embedding it in tools with wide traction and low entry barriers in the digital humanities and manuscript studies community (2) limiting the technical load required to make use of the standard and tools for instruction and research and (3) looking toward Linked Data at GLAM institutions. 

**High Performance Computing for Photogrammetry Made Easy** 

Quinn Dombrowski, University of California Berkeley; Tassie Gniady, Indiana University; John Simpson, Compute Canada; Megan Meredith-Lobay, University of British Columbia

Photogrammetry (generating 3D models from a series of partially-overlapping 2D images) is quickly gaining favor as an efficient way to develop models of everything from small artifacts that fit in a light box to large archaeological sites, using drone photography. Stitching photographs together, generating point clouds, and generating the dense mesh that underlies a final model are all computationally-intensive processes that can take up to tens of hours for a small object to weeks for a landscape to be stitched on a high-powered desktop. Using a high-performance compute cluster can reduce the computation time to about ten hours for human-sized statues and twenty-four hours for small landscapes.

One disadvantage of doing photogrammetry on an HPC cluster is that it requires use of the command line and Photoscan’s Python API. Since it is not reasonable to expect that all, or even most, scholars who would benefit from photogrammetry are proficient with Python, UC Berkeley has developed a Jupyter notebook that walks through the steps of the photogrammetry process, with opportunities for users to configure the settings along the way. Jupyter notebooks embed documentation along with code, and can serve both as a resource tool for researchers who are learning Python, and as a stand-alone utility for those who want to simply run the code, rather than write it. This offloads the processing the HPC cluster, allowing users to continue to work on a computer that might normally be tied up by the processing demands of photogrammetry.

**MARCing the Boundary: Reusing Special Collections Records through the Early Novels Database** 

Nabil Kashyap, Swarthmore College, and Lindsay Van Tine, University of Pennsylvania

In this presentation, Early Novels Database project (END) collaborators Nabil Kashyap and Lindsay Van Tine will offer perspectives on the possibilities and perils of reframing the special collections catalog as a collaborative datastore for humanities research. Among other activities, the END project includes curating records from regional special collections, developing standards for enhancing catalog records with copy-specific descriptive bibliography, and publishing open access datasets plus documentation. Work on END therefore excavates basic questions around what thinking through library holdings as data might actually entail. What ultimately constitutes “the data”? What do they do? For whom? Starting from Leigh Star’s notion of the boundary object, this presentation explores the theory and praxis of MARC as a structure of knowledge that can allow “coordination without consensus.”

The MARC records at the core of the END dataset, the result of meticulous work on the part of institutional catalogers, serve as "boundary objects"--that is, they serve as a flexible technology that both adapts to and coordinates a range of contexts. These contexts, in turn, can have very different needs and values, from veteran catalogers to undergraduate interns, special collections to open source repositories, and from projected to actual uptake and reuse of the data in classrooms and research.

These shifting contexts call into question just what the “data” is. It will look different to a cataloger, an outside funding organization, a sophomore, a programmer, or an 18th c. scholar. What might appear straightforward--creating derivatives, for example--instead reveals a host of issues. Transforming nested into tabular data brings to light frictions between disparate assumptions as to the unit of study, whether a work or volume or a particular copy. Privileging certain fields either effaces the specificity of transcription or sacrifices discoverability. There is no transparent “data dump”; instead, every act of transformation reinscribes a set of disciplinary and institutional values. Viewing collections as data is as much about opening up data as about actively demonstrating and to an extent prescribing research possibilities.

**Lessons learned through the Smelly London project** 

Deborah Leem, Wellcome Trust and University College London

I propose to present the intended aims of the Smelly London project; what we achieved; challenges we experienced working with digitised collections; and possible directions for further development. In order to increase the impact and value that cultural heritage digital collections can offer we believe that their online collections and platforms should be more amenable to emerging technologies and facilitate a new kind of research.

Wellcome Library – part of Wellcome – is one of the world’s major resources for the study of health and histories. Over the past few years Wellcome have been developing a world-class digital library by digitising a substantial proportion of their holdings. As part of this effort, approximately 5,500 Medical Officer of Health (MOH) reports for London spanning from 1848-1972 were digitised in 2012. Since September 2016 Wellcome have been digitising 70,000 more reports covering the rest of the United Kingdom (UK) as part of UK Medical Heritage Library (UKMHL) project in partnership with [Jisc](https://ukmhl.historicaltexts.jisc.ac.uk/home) and the Internet Archive. However, no digital techniques have yet been applied successfully to add value to this very rich resource.

As part of the [Smelly London](www.londonsmells.co.uk) project, the OCR-ed text of the MOH London reports has been text-mined. Through text mining we produced a geo-referenced dataset containing smell types for visualisation to explore the data. At the end of the Smelly London project the MOH smell data will also be available via other platforms and this will allow the public and other researchers to compare smells in London from the 19th century to present day. This has the further potential benefit of engaging with the public. However, cultural heritage organisation do not offer platforms that can help researchers share or communicate the data derived from digital collection use.

**Mending the Vendor: Correction and Exploratory Augmentation of Collections as Data** 

Brandon Locke, Michigan State University

Like many university libraries, Michigan State received external hard drives filled with collections they held perpetual licenses to. Like many university libraries, those collections have mostly remained mostly unused since they’ve been acquired. The data required processing to make them usable, but without demand for specific data from scholars, there was little benefit or reason to make all of the data available.

In an effort to pilot a project to make this data more available and to promote use of the datasets, Brandon Locke (Director of LEADR), Devin Higgins (Library Programmer), and Megan Kudzia (Digital Scholarship Technology Librarian), embarked on a project to make the papers of Fannie Lou Hamer available for download. Hamer’s papers were chosen based on her historical stature and interest to faculty and graduate students in the Department of History, and upon the relatively small size of the collection.

The original scope of the project was for Higgins and Kudzia to make the plain text files available for download by any MSU student, faculty and staff. LEADR staff would then experiment with different text and data mining tools to add metadata and create subsets and auxiliary datasets to accompany the collection.

After Higgins and Kudzia made the plain text files [available to the campus community](https://listings.lib.msu.edu/fannielouhamer/), the LEADR staff immediately encountered troubles with Named Entity Recognition. Upon inspection, the OCR on the files were far too flawed for any accurate text mining, and the entire collection had to be redone using the provided page images with close training and manual correction.

This talk will detail some of the shortcomings in the supplied data, discuss opportunities for experimental text and data mining to enhance and augment existing collections datasets, and engage in opportunities for collaborations between institutions in improving data quality.

**Reusable Computational Processing of Large-scale Digital Humanities Collections** 

Richard Marciano and Greg Jansen, University of Maryland

The Digital Curation Innovation Center (DCIC) at the U. Maryland iSchool, officially launched the “DRAS-TIC” archiving platform at iPRES 2016, in Oct. 2016. This stands for Digital Repository At Scale That Invites Computation [To improve Collections], and is rolled out under a community-based open source license. The goal is to build out an open source platform into a horizontally scalable archives framework serving the national library, archives, and scientific management communities. As a potential scalable and computational platform for Big Data management in large organizations in the cultural heritage, business, and scientific research communities.

This digital repository framework can scale to over a billion records and has tools for advanced metadata extraction - including from images, file format conversion, and search within the records and across collections. The underlying software is based on the distributed NoSQL database, Apache Cassandra, created to meet the scaling needs of companies like Facebook. DRAS-TIC supports integration by providing a standard RESTful Cloud Data Management Interface (CDMI), a command-line interface, web interface, and messaging as contents are changed (MQTT). We are now exploring connecting DRAS-TIC with a graph database engine to support social network analysis and computing of archival and library collections.

We wish to demonstrate this environment with reusable clustering workflows for grouping digitized forms by their layout, a recurring use-case in many digital humanities projects. This is a preprocessing step that has the potential to lead to more accurate OCR of regions in images within digitized forms.

**Umbra Search as Data: A digital sandbox to cross the digital divide** 

Cecily Marcus, University of Minnesota Libraries 

Publicly launched in 2017, the University of Minnesota Libraries’ [Umbra Search African American History](umbrasearch.org) has been working with partners across the country—from the Digital Public Library of America to Yale University to Howard University—to facilitate digital access to African American cultural history. As more than a search tool, Umbra Search doesn’t just bring together over 500,000 digital materials from 1,000 US libraries, archives and museums. It also promotes the use of these materials through programming with students, educators, scholars, and artists, and leads a massive digitization effort of African American materials to build out a national digital corpus of African American history. Now, Umbra Search is exploring what it means to share the Umbra Search digital corpus as a data set that helps to bridge the digital divide and promote digital literacy among underrepresented youth and kids of color. By packaging curated sets of Umbra Search data around thematic topics (as well as providing access to the whole of Umbra Search data) with accessible digital storytelling tools that allow students to make data their own, Umbra Search provides an introduction to digital storytelling and other digital humanities skills through the lens of African American history and culture. Umbra Search’s national digital corpus provides a unique opportunity to engage students with STEAM activities and skill building with culturally relevant content that affirms African American history and culture. This talk discusses the rationale for developing a digital sandbox that provides libraries with a new model for activating primary source materials and digital collections—often considered to be among the more rarefied and inaccessible collections in libraries—and digital humanities tools in communities that may not regularly engage with archives, primary source digital collections, or digital humanities.

**Historical Public Health Data Curation: Indiana State Board of Health Monthly Bulletin Project** 

Caitlin Pollock and Heather Coates, Indiana University-Purdue University Indianapolis

As digital scholarship librarians, enhancing open digital content to facilitate reuse is a key mission of our work. This talk will introduce the work of IUPUI librarians in curating the Indiana State Board of Health Monthly Bulletin (1899-1964). While in circulation, this resource was sent to all health officers and deputies in the state, plus individual subscribers. Physicians shared information about health and wellness, communicable diseases, patent medicines, food safety, and many other topics. As such, the Bulletin provides a unique historic portrayal of Indiana public health practice, fascinating images, and regular vital statistics from the early and mid-20th century. This project brings together the Ruth Lilly Medical Library and the IUPUI University Library to leverage librarian expertise in digital humanities, medical humanities, public health, the history of medicine, and data curation. Our initial focus is curating a 10-year span (1905-1914) of these bulletins in order to develop and refine processes that can be adapted for other digital collections. Our curation efforts focus on providing greater accessibility to students and scholars of Indiana and medical history, public health, and Hoosiers across the state. We are creating three types of products: TEI documents; geocoded citizens and professionals, community organizations and businesses, and buildings; and vital statistics data. Data dictionaries are being developed to support analysis of the vital statistics and to capture additional context about historic knowledge of disease and death. Project documentation will be developed to support exploration by the public and use by scholars and provide transparency with regards to the decisions made during curation. All products generated from the project, including protocols for curation, will be shared openly under a CC-BY license on platforms including Github and the TEI Archiving, Publishing and Access Service (TAPAS) Project. 

**Leveraging Core Data for the Cultural Heritage of the Medieval Middle East** 

Daniel L. Schwartz, Texas A&M University

I direct Syriaca.org, a core data project for Syriac history, literature, and cultures. Syriac is a dialect of Aramaic once spoken by populations across the Middle East and Asia. Syriac sources document key moments in the interaction of Judaism, Christianity, and Islam and offer unique perspectives on the history of the Middle East from the Roman period through Ottoman rule and into the tumultuous present in Iraq, Syria, and the Levant. Syriaca.org has built a core data infrastructure useful to any digital project in the field that is interested in incorporating our URIs for persons, places, works, manuscripts, etc. I would like to propose a 30-minute demonstration of three projects that highlight this utility. 1) SPEAR (Syriac Persons, Events, and Relations) is a digital prosopography that employs our core data model (URIs) to extract and encode data about persons, events, and relationships from primary source texts. The scale enabled by the digital allows extensive treatment of many subaltern groups usually left out of traditional print prosopography. TEI encoding and serialization into RDF allow for multiple ways to query and visualize this data. 2) The New Handbook of Syriac Literature is an open-access digital publication that will serve as both an authority file for Syriac works and a guide to accessing their manuscript representations, editions, and translations in digital and analog formats. Though still in development, this Handbook will more than double the number of works contained in the last publication to attempt something similar, Anton Baumstark’s Geschichte, which is over 90 years old. The Handbook is part of Syriaca.org’s efforts to produce reference resources that help overcome the colonial biases that informed Orientalist organization of the cultural heritage of the Medieval Middle East. 3) We are developing a URI resolver that any project in the field using our URIs can incorporate into their website to show users how many and what types of resources Syriaca.org has on the entities included in their data and to provide direct links to those resources.

**Addressing Copyright and IP Concerns when using Text Collections as Data** 

Megan Senseney, Eleanor Dickson, and Daniel G. Tracy, University of Illinois

Open source text data mining tools such as Voyant and publicly-available services such as the HathiTrust Research Center (HTRC) have brought the potential of new research discoveries through computational analytics within reach of scholars. While the tools for mining and analyzing the contents of digital libraries as data are increasingly accessible, the texts themselves are frequently protected by copyright or other IP rights, or are subject to license agreements that limit access and use.

The HTRC recently convened a task force charged to draft an actionable, definitional policy for so-called non-consumptive use, which is research use that permits computational analysis while precluding human reading. This year, the HTRC released the task force’s Non-Consumptive Research Policy, which is shaping revised terms of service and tool development within the HTRC. Building on the development of the HTRC’s policy, our team is seeking to catalyze a broader discussion around data mining research using in-copyright and limited-access text datasets through an IMLS-funded national forum that will bring together experts around issues associated with methods, practice, policy, security, and replicability in research that incorporates text datasets that are subject to intellectual property (IP) rights. The national forum aims to produce an action framework for libraries with recommendations that will include models for working with content providers to facilitate researcher access to text datasets and models for hosting and preserving the outputs of scholars’ text data mining research in institutional repositories and databanks.

This short talk will describe the task force’s work to establish a Non-Consumptive Research Policy for the HTRC and outline next steps toward building a more comprehensive research agenda for library-led access to the wealth of textual content existing just out-of-reach in digital collections and databases through the upcoming national forum. 

**Learning through use: A case study on setting up a research fellowship to learn more about how one of our collections works as computationally amenable dataset** 

Sarah Severson and Berenica Vejvoda, McGill University Library and Archives

McGill University Library and Archives recently completed a major project to retrospectively digitize all of the dissertations and theses in the our collections. Once these were added to the institutional repository, the metadata and full text of over 40,000 electronic theses and dissertations (ETD), from 1881 - present, became searchable using the traditional database structure of keywords and full text. With such a large and comprehensive corpus of student scholarship, we wanted to use this collection as our first foray into thinking about ‘collections as data’ and what kinds of research could be done if we opened up the entire raw, text corpus.

In order to encourage use and dialogue with the collection, the Library created a Computational Research Fellowship through an innovation fund. The fellowship call was left deliberately open in order to learn what people wanted to do with the collection and the only condition was that they share what they learned openly through presentations about their work and host any code in an open environment such as GitHub.

The selected fellow project will specifically utilize Python’s Natural Language Toolkit and capitalize on using word2vec (a word embedding algorithm developed by Google), to build an application with a front-end, web-based interface that will allow researchers to examine how literary terms have changed over time in terms of usage and context. The project will also include a data visualization component using Plotly (a Python library) to promote interactive and visually meaningful data displays. More concretely, researchers will be able to enter a concept and a time-period of interest and visualize how the context of the concept has evolved over time. By way of example, the concept of “woman” shifts contextually between First-wave feminism and prior, as well as through subsequent waves of feminism.

This presentation will look at how we are thinking of our ETD collection as a computationally amenable dataset; the computational fellowship as a means of engagement; and, what we hope to learn about the collection and future library text mining services and support. 

**Facilitating Global Historical Research on the Semantic Web: MEDEA (Modeling semantically Enhanced Digital Edition of Accounts)**

Kathryn Tomasek, Wheaton College (Massachusetts); Georg Vogeler, Centre for Information Modeling - Austrian Centre for Digital Humanities, University of Graz

Social and economic historians have spent at least the past fifty years creating data sets well suited for analysis using post-WWII computational tools (SPSS/SASS). Contemporary efforts by such historians as Patrick Manning to aggregate data sets for human systems analysis demonstrate a desire to take advantage of the more recent tools represented by the semantic web. Both Tomasek and Vogeler have explored ontologies that can be integrated into the CIDOC-CRM family of event-based models and used for markup of digital scholarly editions of accounts, a genre of archival documents that support humanities research as well as social science research. This short paper offers a brief introduction to recommendations for producing digital scholarly editions of accounts that include references to a book-keeping ontology using the TEI attribute @ana. Vogeler has tested comparability of data across a small sample of such editions for which the references have been transformed into RDF triples. New editions are being added to those stored in the GAMS repository (Geisteswissenschaftsliches Asset Management System) at the University of Graz between now and August 2017. We see these editions in sharp contrast to the example of "page-turning" simulations referenced in the cfp for the workshop: creating full digital scholarly editions of accounts using TEI, the book-keeping ontology, and RDF triples are an example of shaping humanities data for use and reuse by taking advantage of the affordances of the semantic web.

**Javanese Theatre as Data**

Miguel Escobar Varela, National University of Singapore

The [Contemporary Wayang Archive](cwa-web.org) is an archive of Indonesian theatre materials. The online portal’s primary goal is to enable users to watch videos alongside transcripts, translations and scholarly notes. However, a new version currently under development will enable users to query the archival materials via APIs. The first API will be directed at linguistic queries from the transcript and translation corpus. The goal is to enable data-driven investigations of the ways Javanese and Indonesian are used in the performances. Although these languages are widely spoken (Indonesia is the fourth most populous country in the world and Javanese is its most widely spoken regional language), there are almost no machine-readable resources in these languages that can be used in digital humanities and computational linguistics research projects. A second API is aimed at video processing applications. The API will serve videoframe-level data that can be used to interrogate and visualize the collection in new ways. We believe that most theatre projects in DH remain heavily focused on textual data or on numerical data such as revenue numbers, cast sizes and collaboration networks. However, we believe that video processing offers a rich and yet untapped avenue for inquiry [1]. We aim to encourage further research into this area via our video processing API. This talk will briefly outline the objectives and history of CWA, our goals for the future and the technical and intellectual property rights challenges that we face.

References: [1] Escobar Varela, M and G.O.F. Parikesit, 'A Quantitative Close Analysis of a Theatre Video Recording' in Digital Scholarship in the Humanities (forthcoming), [doi:10.1093/llc/fqv069](doi:10.1093/llc/fqv069)