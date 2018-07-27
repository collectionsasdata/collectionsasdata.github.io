---
layout: archive
title:  "Collections as Data Facets"
---
---

[**Collections as Data Facets**](https://collectionsasdata.github.io/facets/) document collections as data implementations. An implementation consists of the people, services, practices, technologies, and infrastructure that aim to encourage computational use of cultural heritage collections. 

---
# [The Museum of Modern Art Exhibition Index](https://github.com/MuseumofModernArt/exhibitions)

[**Jonathan Lill**](https://www.moma.org/research-and-learning/research-resources/archives/index), MoMA Archives

## 1. Why do it

 *an accessible narrative description that describes why the decision was made to do the work*
 
Since 1929, The Museum of Modern Art (MoMA) has been and remains the preeminent art institution in the history of 20th and 21st century visual culture. Through groundbreaking exhibitions about Cubism, abstract art, Surrealism, and other art movements, MoMA led the way in promoting artists who are now household names. MoMA established a holistic approach to the understanding of Modernism by exhibiting and establishing curatorial departments devoted to film, architecture and design, and photography. MoMA demonstrated that those fields of activity were worthy of critical analysis and appreciation.

The Museum Archives works continually to tell that history of the Museum, and to organize and provide access to the documents and records that evince those decades of activity. We strongly believe that  exhibition history isan important scaffold that can be used to build an understanding of MoMA’s accomplishments. [**Indexing exhibition artists and curators provides researchers new pathways of exploration while linking  archival resources and artworks in the collection**](https://github.com/MuseumofModernArt/exhibitions). This work helps increase exposure and use of MoMA Archives’ historical collections and the dissemination of MoMA’s history.

## 2. Making the Case 

*an accessible narrative description that describes how the administrative case was made to do the work*

In 2014 the MoMA Archives received funding to organize and describe MoMA’s exhibition files, which comprised paper records from all curatorial departments and the museum registrar for exhibitions staged since 1929. We decided that an exhibition index could be built as part of that project workflow. Due to our experience fielding public and staff inquiries and guiding user research, the Archives had developed an appreciation of the utility an exhibition index. How this data might be made available to researchers was unknown at the inception of the project.

Simultaneous to the Archives’ work on this project, the MoMA hired a new director of web and video who was given the mandate of radically expanding the Museum’s web content. She understood that our data could power the deployment of thousands of new web pages devoted to historical exhibitions, which could then be linked to numerous digital resources such as scanned press releases, exhibition catalogues, and installation photographs. Only with the web team pushing this project forward was the Archives able to move to completion. The new exhibition pages launched in September 2016. The data set was [**published to Github**](https://github.com/MuseumofModernArt/exhibitions) at the same time.

## 3. How you did it

*an accessible narrative description that describes how you did it; who was involved - what their roles were; what services were drawn upon; what collections were involved and why were they selected; what infrastructure and technologies were selected and why; what challenges were encountered in the course of the implementation*

The MoMA Archives had long maintained a simple list of historical exhibitions. I built an Access database, parsed that list, and imported a table of over 50,000 artist names from the Museum’s collection management system (The Museum System, TMS, vended by Gallery Systems). I created a simple interface that allowed interns to connect names to each exhibition using drop-down menus and when necessary to create new name records. Additional data was gathered from exhibition checklists scanned as part of the larger exhibition files project. The database structure allowed for easy review of the data,error checking, editing, and other maintenance. Once the indexing was largely completed, names in the index were reconciled to VIAF identifiers using the OpenRefine. The VIAF ids were then used to add Wikidata QIDs and Getty ULAN record numbers. Once this data was used to generate web pages, URLS for exhibitions and artists were added back into the dataset. Gallery Systems assisted with importing the data back into TMS from the Access-generated csv files. The web team extracted data from TMS to ingest into the web system as they do with collection objects and other data. A simple flat version of the data was posted to Github.

This project required close collaboration among several departments: the MoMA Archives, the data asset management system administrators who managed all the digital objects to be connected to our new exhibition web pages, the TMS administrators, and the digital media team. Importantly, this was the first time the Archives took responsibility for historical exhibition data in our collection management system and on the web site, involving us more closely in some key museum systems.

## 4. Share the docs 

*an assortment of formal documentation (personas, use cases, functional requirements), workflows, and code you have that supports the implementation*

All documentation for the exhibition index and MoMA’s collection are located on Github, along with the actual datasets.

[**https://github.com/MuseumofModernArt/exhibitions**](https://github.com/MuseumofModernArt/exhibitions)

## 5. Understanding use 

*discrete discussion of how you approach understanding use (e.g. library use, research use, pedagogical use, creative use, etc.) - discussion of exemplary use is also encouraged*

The immediate and most practical use of this data is for answering research inquiries: who was in an exhibition, how many exhibitions has an artist been in, how often two artists have been exhibited together, etc. This amounts to significant daily usage by library and archival researchers as well as the general public. With basic database or spreadsheet skills, more advanced inquiries can be answered by this data such as who was the youngest artist to be given a solo exhibition at MoMA? Or which artists have been exhibited most frequently without having works in the collection?

Separate from immediate needs of art historians and scholars, we expect this resource should be of tremendous use in classroom teaching about specific artists, modern art, and museology in America. Further, we believe this data can be used to connect digital and archival resources across the web. The exhibition index is less important for the information it contains than for the people, things, and data it allows a user to connect together. Its real potential is only realized when connected to Wikipedia entries, library union catalogs, and other datasets such as [**Social Networks and Archival Context**](http://snaccooperative.org/?redirected=1) (SNAC) or the American Art Collaborative. Ideally, this index can serve as a model for a multi-institution pooling of exhibition and artist data and online archival resources.
 
## 6. Who supports use

*discrete discussion of the people, services, and programs that support use of the data (e.g. digital scholarship services, instruction services, subject area liaisons, etc.)*

## 7. Things people should know 

*distilled things that people should know if they are thinking about pursuing similar work*

To build an exhibition index with any speed, the materials that provide the data must be located and near at hand, preferably digitized, which is why conducting this work alongside a digitization or processing project is ideal. OCR of archival documents does not yield readily usable data. Facility with database applications and data manipulation software or programming languages is key. But most important is having labor to perform the data entry. Our workflow proved that with a narrowly constructed date-entry interface, precise detailed instructions, and proper supervision and review, that this work can be swiftly and effectively performed by non-professional staff and interns. Beginning with imported name records and other data increased efficiency and reduced mistakes. Error checking of the data showed that the error rate was within acceptable bounds and that most errors were omissions in data. 

## 8. Whats next

*you have something in place. whats next and why?* 

Our initial funding allowed us to build an exhibition index from 1929 through 1989 (while primarily processing and opening to the public tens of thousands of folders of paper records). A new round of funding is now allowing us to extend that work through 2000, merge it with more recent data created in TMS, and to further enrich the data by adding exhibition information such as department of origin, physical location, and subject tags. We are also working to combine this data with the exhibition index of MoMA PS1 (constructed as a smaller local project five years ago) and can begin to explore merging this data with that of other institutions such as the New Museum, White Columns, and other arts institutions. 
