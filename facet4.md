---
layout: archive
title:  "Collections as Data Facets"
---
---

[**Collections as Data Facets**]() document collections as data implementations. An implementation consists of the people, services, practices, technologies, and infrastructure that aim to encourage computational use of cultural heritage collections. 

---

## [**Amanda Whitmire**](https://library.stanford.edu/people/thalassa), Stanford University Libraries

## 1. Why do it

 *an accessible narrative description that describes why the decision was made to do the work*
 
Researchers are beginning to understand the magnitude and complexity of the effects of climate change on our Earth system, and all research in this area is grounded in what we know about the past. Data collection at sea is labor-intensive and relatively rare, and technology has lowered that barrier only within the last couple of decades. Through this lens, we understand why in the marine sciences, the most valuable data collections are observational time-series studies, and the older the better. 

When I realized the scope of the analog oceanographic data collections being housed at the Miller Library (a marine biology branch library in the Stanford Libraries system), there was no question that these materials needed to be digitized and shared openly. There are very few oceanographic time-series studies from the 1950s - 1970s, and these particular data only exist at our location. These data are an important contribution to studies in the marine sciences, climate change and coastal ecology. Our library is located in a tsunami zone, and since we have the only copy of these data, they are at significant risk of being lost. 

## 2. Making the Case 

*an accessible narrative description that describes how the administrative case was made to do the work*

Stanford Libraries has a [Digital Production Group (DPG)](https://library.stanford.edu/research/digitization-services/labs/digital-production-group) whose primary focus is digitization of library collections for the purposes of preservation and access. Given the scientific relevance of the oceanographic data and its risk of being lost, it was not difficult to convince my boss (the Associate University Librarian for Science & Engineering) to support digitization of the material. 

Our process for internally funding digitization projects is kept intentionally simple. Any librarian in our Science and Engineering Research Group is welcome to write a “Collection Project Proposal” (CPP; limited to a single side of one page) that describes the materials to be digitized, why they are important, what the goals for digitization would be, and an estimate of the costs. Our AUL reviews these on an annual basis and grants as many requests as are justified and he has the budget for. If a project idea comes up mid-year, we can also submit a CPP as needed. I proposed a pilot project to digitize a subset of the collection, and it was funded at $5,000.

## 3. How you did it

*an accessible narrative description that describes how you did it; who was involved - what their roles were; what services were drawn upon; what collections were involved and why were they selected; what infrastructure and technologies were selected and why; what challenges were encountered in the course of the implementation*

My goals for this collection include moving a step beyond digitization of materials to create actionable datasets, but I am not prepared to address that because I am still investigating how best to accomplish such a task (automated text recognition processes, crowdsourcing, transcription services, etc.). This section will be a LOT more interesting once I get there, and the project will make more sense as a CAD Facet at that time.

For now, I’ll focus on the process of material curation and how the digitization workflow works. Some of the process is being captured in an Open Science Framework [project page](https://osf.io/c3egt/). In concise terms, this was the curation plan that I made before I started (adapted from a [great poster](https://opensky.ucar.edu/islandora/object/dcerc%3A20/) and using common sense), and it has largely been accurate: 

1. INVENTORY | What do we have? How much do we have? What kinds do we have?
2. ORGANIZE | By cruise, station, variable, year? Standardize dates,  stations, variables,  cruise names...
3. APPRAISE | Are there duplicates? Is anything missing? Prioritize: what is most valuable or in the worst shape?
4. METADATA | Create descriptive & administrative metadata to guide digitization process: titles for collections in the digital repository, file names, etc.
5. DIGITIZATION | Stanford Libraries Digital Production Group has a well-equipped lab and staff for systematic digitization & deposit into the Stanford Digital Repository (SDR)
6. METADATA | Data need readme files and item- & data-level metadata to facilitate understanding & reuse; metadata from the DPG needs quality assurance and remediation. 
7. MAKE ACTIONABLE | Conversion from PDF to actionable tabular data is critical for enabling reuse of the data. How do we make it happen at scale?

Steps 1-6 have been completed for the first batch of materials (data from every third year over the 23-year time-series). Steps 1-3 are time-intensive and the effort logically scales with the size of the collection. The DPG requires relatively little metadata to get the digitization process going, so Step 4 was brief. I am fortunate that we are so well supported by the experts in the DPG. They require submission of a digitization proposal via a standardized form that they provide, which ended up to be about 4 pages long. Based on the proposal, they provided an estimate of the digitization timeline and costs, and then moved forward.   

## 4. Share the docs 

*an assortment of formal documentation (personas, use cases, functional requirements), workflows, and code you have that supports the implementation*

As mentioned in the previous section, some content can be found at, “Whitmire, Amanda L. 2016. “Hopkins Marine Station CalCOFI Hydrobiological Survey of Monterey Bay, CA: 1951 - 1974.” Open Science Framework. November 30. [osf.io/c3egt](https://osf.io/c3egt/).” 

The digitized items are not yet in the library catalog (also the discovery layer for the repository), but you can see a few examples of digitized material via direct links:

* A quarterly report: [https://purl.stanford.edu/qt035cq4651](https://purl.stanford.edu/qt035cq4651)
* An annual report: [https://purl.stanford.edu/dz088js0926](https://purl.stanford.edu/dz088js0926) 
* Field data: [https://purl.stanford.edu/xj314cj5427](https://purl.stanford.edu/xj314cj5427) 
* Phytoplankton data: [https://purl.stanford.edu/qw382yy6150](https://purl.stanford.edu/qw382yy6150) 
* Zooplankton data: [https://purl.stanford.edu/hy617cx4382](https://purl.stanford.edu/hy617cx4382) 

## 5. Understanding use 

*discrete discussion of how you approach understanding use (e.g. library use, research use, pedagogical use, creative use, etc.) - discussion of exemplary use is also encouraged*

The primary audience for these data is researchers, but I believe that they will not use the data for research purposes unless it is in a format that that can use. Meaning, text files with tabulated data. That is the main driver behind my desire to move a step beyond digitization (while recognizing that digitization is a critical action for these at-risk materials). I believe this because I used to be an oceanographer and I understand both their need for data like this and also the constraints on their time and workflows. PDFs of legacy data are nearly worthless to a marine scientist who seeks to answer research questions. 

## 6. Who supports use

*discrete discussion of the people, services, and programs that support use of the data (e.g. digital scholarship services, instruction services, subject area liaisons, etc.)*

After the data have been fully documented and converted to spreadsheets, the goal is that they can be used largely unsupported (setting aside the tremendous amount of work that goes into maintaining the digital repository). As a subject specialist and the curator of the collection, I am available to support data users. Interacting with 4-dimensional oceanographic data is generally handled in Matlab (the software of choice for most oceanographers) or R (an emerging choice in this domain). I expect most users of these data to be outside of Stanford. 

## 7. Things people should know 

*distilled things that people should know if they are thinking about pursuing similar work*

This project feels important. Analog research data is everywhere - EVERYWHERE - and we need librarians and archivists to engage with faculty who are retiring to guide them in sorting through the maelstrom. I am focused on facilitating reuse in the digital space because my audience for these data are my former colleagues and I know that’s where they operate. That said, identifying, curating, and archiving analog datasets to facilitate discovery and enable future reuse is critical. In my opinion, collections as data must necessarily extend to the analog world in order to keep up with the upcoming influx of materials from retiring faculty who worked in the pre-digital era. This project is an example of how we bring those data into the digital realm, but I encourage anyone interested in this type of work to reach out to faculty regarding their data. Do it today.

## 8. Whats next

*you have something in place. whats next and why?* 

The most challenging part of this process is next: go from image or PDF to spreadsheets. This is the part of the project that has the potential for real-world impact. Nothing that I’ve accomplished so far is unique (important though it is). We’ve seen crowdsourcing, and we’ve seen transcription. What researchers really need is a way to liberate all of the older, analog data from paper into the digital medium that they use. If I can make progress on addressing how we might be able to do that at scale, I’ll consider this effort a success. 
