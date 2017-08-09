---
layout: archive
title:  "Collections as Data Facets"
---
---

[**Collections as Data Facets**](https://collectionsasdata.github.io/facets/) document collections as data implementations. An implementation consists of the people, services, practices, technologies, and infrastructure that aim to encourage computational use of cultural heritage collections. 

---
# [La Gaceta de La Habana](https://github.com/UMiamiLibraries/collections-as-data/tree/master/LaGaceta)

[**Paige Morgan**](http://www.paigemorgan.net/), University of Miami Libraries

[**Elliott Williams**](http://sp.library.miami.edu/subjects/profile/e.williams10), University of Miami Libraries

[**Laura Capell**](http://sp.library.miami.edu/subjects/profile/l.capell), University of Miami Libraries

## 1. Why do it

 *an accessible narrative description that describes why the decision was made to do the work*
 
The University of Miami Libraries Cuban Heritage Collection (CHC) [**received funding**](https://library.miami.edu/blog/2015/04/02/chc-receives-funding-to-digitize-la-gaceta-de-la-habana/) from LAMP (Latin American Materials Project) and LARRP (Latin American Research Resources Project) to digitize its holdings of La Gaceta de la Habana in 2015. [La Gaceta](https://github.com/UMiamiLibraries/collections-as-data/tree/master/LaGaceta) is a significant historical resource, in that it was the paper of record during the Spanish colonial occupation of Cuba; and the CHC holds one of the largest collections of the newspaper outside of Cuba, with nearly 50 years of issues (from 1849-1899).
 
As part of our regular digitization workflow, we also create a plain-text file generated through Optical Character Recognition (OCR), in order to make digitized material discoverable through our [**digital collections user interface**](http://merrick.library.miami.edu/). Our standard practice within this workflow has been to use uncorrected OCR. However, our digital collections interface (currently CONTENTdm) only allows discovery, rather than any sort of analysis. Associate Dean for Digital Strategies Sarah Shreeves was aware of the increasing interest in text analysis as a result of digital humanities activity, and she suggested that creating a dataset that was easily accessible for use in text analysis tools would be a useful experimental project for a few members of the Library's Digital Strategies team. Everyone involved was aware of the imperfections of the OCR'd files; but we were also aware of the relative scarcity of Spanish-language datasets, and aware that if we made high-accuracy OCR a condition for release, that we might never reach the point where the files were ready. At this point in time, we are more interested in learning what is possible with imperfect OCR, and learning how we can make significant small improvements, than we are in striving for perfection on first release.
 
We think that it is worth emphasizing the creation of this dataset as a learning project on multiple levels. One of those levels was institutional: our goal was to understand how much work was involved in preparing a large dataset (approximately 50,000 files), and what specific steps would be part of the workflow, both for La Gaceta and potentially for other datasets we might want to release in the future. On another level, it was a learning project for the three of us who were chiefly responsible because of our different backgrounds. As a Digital Humanities Librarian without an MLS/IS, Paige Morgan brought hands-on experience with text mining, and with creating and preparing corpora, but lacked experience with corpus creation in the context of library systems for large-scale file management. Conversely, Elliot Williams (Metadata Librarian) and Laura Capell (Head of Digitization) had experience with library file management, but were unfamiliar with the specific needs of researchers who might want to work with the La Gaceta materials. This project was an opportunity for all three of us to begin fitting our expertise together and teaching each other enough to be able to produce materials efficiently. We see this as valuable preparation for future similar projects where we bring in people who may have vital expertise with a particular set of materials, but who may be less familiar to the processes involved in creating machine-readable data.

## 2. Making the Case 

*an accessible narrative description that describes how the administrative case was made to do the work*

There was considerable enthusiasm for this project, both from library administrators, CHC curators, and library faculty who were excited about providing deeper access to materials than the Digital Collections interface allowed. La Gaceta is a significant set of texts for Cuban and colonial studies, and we are excited about being able to introduce interested CHC researchers and UM students to text-mining techniques with materials that are directly relevant to their studies.
 
Acting on that enthusiasm was not difficult precisely because we deliberately kept this project as low-key and low-resource-intensive as possible: three people were primarily involved, with brief consultations or assistance from three others. Generating the OCR'd plain-text files is part of our existing digitization workflow, so the new activity within this project was focused on finding the best way to share the files and document how to use them. Our estimate is that the total time spent on this new activity was around 4-6 hours. Keeping the project fairly low-stakes and experimental made it a more comfortable site for learning and collaboration for everyone involved. It was also helpful that our goal for this project was not just the end product of the La Gaceta dataset, but also a clearer understanding of the work involved, and the resources we might need in the future (I.e., an internal data repository, rather than an external GitHub site).
 
[La Gaceta](https://github.com/UMiamiLibraries/collections-as-data/tree/master/LaGaceta) is an interesting test case for text mining release because it's an imperfect dataset. The paper is thin enough that opposite page images tend to bleed through, and creases and sometimes blurred text complicate the OCR process. The dataset is too large for every page to have its OCR checked individually – however, that makes it a more interesting test case. And even with imperfect OCR, distant reading still yields interesting results. We're looking for repetitive errors that might be fixable using a bulk find-and-replace – and hoping that doing so will be another aspect of useful learning for our team.

## 3. How you did it

*an accessible narrative description that describes how you did it; who was involved - what their roles were; what services were drawn upon; what collections were involved and why were they selected; what infrastructure and technologies were selected and why; what challenges were encountered in the course of the implementation*

For the initial digitization process, roughly half of the La Gaceta volumes were digitized in-house by UM Libraries personnel; and the other half were outsourced with funding from LAMP and LARRP. The combined output of this digitization process was approximately 4.2 terabytes of TIFF files (one file for each page of the newspaper), which were OCR'd in-house. Both the TIFF and plain-text files are stored in our dedicated digital collections server for preservation purposes, but for this initial release, we decided to focus on providing just the plain-text files as a bulk download, available through a GitHub repository.
 
The majority of our work was about deciding how to structure the files, and how they should be named – and for all of us, that meant learning about the differences between file management practices within a library context and the context of a DH researcher working with the files in a text analysis tool such as Laurence Anthony's AntConc or Geoffrey Rockwell and Stefan Sinclair's Voyant.
 
To explain: when our La Gaceta holdings were prepared for digitization, they were separated in one-month chunks. Within each month, there would be separate text files for each page of the newspaper, so each month would contain about 100 files, since each issue is 3-5 pages long. We broke up the newspaper this way because although La Gaceta was a daily paper, breaking it down by day would have required substantially more time -- enough to be unsustainable within our standard digitization workflow. We experimented with regular expressions to see whether it would be possible to break the months into days using the first few lines – but the results weren't quite reliable enough to be worthwhile. One month chunks of the newspaper worked fine for displaying La Gaceta within our Digital Collections interface. But what would it be like for researchers to navigate those materials in bulk within a text analysis tool? 
 
The question that emerged from this thinking was about the ID for each individual .txt file, i.e. each page of the newspaper. Our standard digitization workflow also generated a 20-character filename for each .txt and .tiff file (e.g. chc99980000010001001.txt). This filename is the product of our house schema for internal file management, which has worked very well in that context: library faculty and staff who use it are familiar with how the filename breaks down into segments that identify the repository, collection, object, sequence, and format. However, this filename structure is not easy to parse for external researchers, especially not in tools like AntConc and Voyant. Would we need to change the filename to something more human-readable in order to make the dataset useful? What would the stakes of that change be? As a researcher, Paige wanted more legible filenames, while Laura and Elliot were resistant to the idea of multiple filenames for the same object, and what it would mean for the Library to potentially have to develop an alternative filename schema designed for functionality within text analysis tools.
 
Making a decision about the filenames was probably the most controversial/high-stakes aspect of this project, since it felt like it had major implications both for users and for the library personnel involved. In the end, for our initial release of La Gaceta files, rather than create simplified and human-readable filenames for each document, we created a roster that will allow users to match any filename to its month and year. Keeping the 20-character filename is advantageous since researchers can use the same ID number to access the page image through our catalog if they want to check the original image. As we make more releases, the question of a more human-readable filename will almost certainly come up again, and perhaps we'll work towards that alternate schema that's designed more for external researchers, rather than for internal library file management. 

## 4. Share the docs 

*an assortment of formal documentation (personas, use cases, functional requirements), workflows, and code you have that supports the implementation*

This project is still new enough that we're still in the process of adding more formal documentation -- as we have it, we'll make it available through the [**UM Libraries Collections As Data**](https://github.com/UMiamiLibraries/collections-as-data/) website. Our current introduction to the dataset (including an explanation of the filenames) is here, in our main repository.
 
For now, however, we recommend exploring this dataset with Laurence Anthony's [**AntConc**](http://www.laurenceanthony.net/software/antconc/). We recommend AntConc for three main reasons: 
1. it's lightweight and easy to download and run on Windows, Mac, and Linux machines
2. the main interface is adjustable in a way that will work well with the La Gaceta filenames
3. AntConc is widely used enough that there are plenty of excellent tutorials, and even a [**corpus linguistics MOOC**](https://www.futurelearn.com/courses/corpus-linguistics) based at Lancaster University that features it – in short, lots of support for users who might want to use this dataset as they learn more about text mining. 

While this dataset could also work with [**Voyant**](https://voyant-tools.org/) (particularly Voyant Server, which doesn't require an internet connection), the experience might be a bit rougher, just because of the sheer number of files involved, since even a single month includes around 100 pages.

## 5. Understanding use 

*discrete discussion of how you approach understanding use (e.g. library use, research use, pedagogical use, creative use, etc.) - discussion of exemplary use is also encouraged*

Because of the early stage of this project, this is an area that we're still figuring out: we want to learn from what our users do and what they need, and continue refining this dataset or use the info to produce better datasets with future materials. One important aspect of this project is that the local campus community is relatively new to DH, and so getting to the point where we can better understand the use will involve at least some work on our part to model what use looks like. Since we released this at the end of the school year, we anticipate more opportunities to figure that out till this fall. We understand that our success in this area will depend on how much work we put into making sure that various communities are aware of this dataset and how to use it, and plan to produce more materials that help them learn what they can do.
 
We’re very interested in responding to the needs that our users raise, and we welcome feedback and requests.
 
## 6. Who supports use

*discrete discussion of the people, services, and programs that support use of the data (e.g. digital scholarship services, instruction services, subject area liaisons, etc.)*

The fully digitized version of La Gaceta is supported by University of Miami Libraries faculty in the Cuban Heritage Collection and faculty who work with our distinctive collections. Use of the current release of the plain-text dataset is supported chiefly by Paige Morgan (Digital Humanities Librarian), in collaboration with Laura Capell and Elliot Williams, as we continue to refine the dataset according to user feedback. In addition to making the dataset available for individual researchers, we are also developing lightweight plans that instructors could adapt if they wanted to use the dataset as a smaller or larger unit within a particular course.

## 7. Things people should know 

*distilled things that people should know if they are thinking about pursuing similar work*

Our approach might be described as "ambitiously unambitious" in its scope – and that gave us room to think calmly and clearly about the new dataset that we were producing, and how it fit (or didn't fit) with our existing digital collections and schema, and our local institutional practices, etc. Creating this dataset has helped to make some inchoate questions more explicit, and we think that seeing those questions more clearly is just as valuable as answering them – which we hope to do in future projects. We recommend this approach, especially for any institutions that are hoping to use the Collections as Data initiative as a means for helping their faculty/staff develop new skills and expertise.

## 8. Whats next

*you have something in place. whats next and why?* 

In the immediate future, we want to make sure that we put sufficient energy into outreach, promotion, and support for the La Gaceta dataset, which should be valuable both as a training object for our local community, and for gathering feedback for future data releases.
 
We will also be looking for other materials in our collections that could be good candidates to be processed and released in formats that will be useful for digital humanities researchers. One obvious future project will be various parts of the [**Pan American World Airlines Collection**](http://scholar.library.miami.edu/digital/exhibits/show/panamerican), which is in the process of being digitized – but we're certain that the Pan-Am Collection is just one of many potential projects.

 
