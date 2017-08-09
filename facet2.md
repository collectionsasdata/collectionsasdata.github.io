---
layout: archive
title:  "Collections as Data Facets"
---
---

[**Collections as Data Facets**]() document collections as data implementations. An implementation consists of the people, services, practices, technologies, and infrastructure that aim to encourage computational use of cultural heritage collections. 

---

## [**David Newbury**](http://www.workergnome.com/), Carnegie Museum of Art
## [**Daniel Fowler**](http://okfnlabs.org/members/dfowler/), Open Knowledge International

## 1. Why do it

 *an accessible narrative description that describes why the decision was made to do the work*
 
As stated on the Carnegie Museum of Art (CMOA) website, the [Collection Data](http://collection.cmoa.org/collection-data/) project is meant to be used for “discovery, inspiration, and innovation, allowing people to creatively re-imagine and re-engineer our collection in the digital space.”  CMOA Collection Data is stored in [EMu](https://emu.kesoftware.com/), a collections management system from Axiell.  This Collections as Data Facet documents the release of this data: It was exported to both CSV and JSON as a “data dump” and [released on GitHub](https://github.com/cmoa/collection) for public consumption to help enable this creative reuse.  

CMOA acknowledges that this project is continuously evolving and that the data will be periodically revised to reflect changes in how its curators understand the objects stored in the database.  This acknowledgment is reflected in the choice of a platform (GitHub) which natively supports storing version-controlled data.  CMOA made the choice to publish using CSV, JSON, and GitHub because of their relative ease of use for researchers and developers—these platforms enable easy access to large amounts of data without the need for tools beyond what the researchers already possess, or requiring potential users to learn an API or write SQL against proprietary databases.  

In addition to publishing the data itself, it was also important to provide a human- and machine-readable description of the data, its structure, and guidance on how to actually use it.  CSV, while easy to work with for many users, is a notoriously underspecified format: developers often have differing opinions on what constitutes a  “valid” CSV file.  [The Data Package specification](http://specs.frictionlessdata.io/) developed by Open Knowledge International is a “containerization” format for data which is meant to provide a consistent interface (or “wrapper”) to a diverse range of datasets, especially those containing tabular data (e.g. data stored in CSV files).  A single file, datapackage.json, stored with the dataset documents where each data file is saved (either on disk or a remote server) as well as its “schema” (number of columns and expected values per column). Releasing this dataset as a Data Package was a good start for providing a minimum machine-readable description of a dataset for processing.  A growing set of software libraries and tools can read the Data Package specification so that artists, data analysts, and other users interested in CMOA’s collection can benefit from this consistent interface regardless of the software they use.

A human-readable version of some of this same information is provided through a supplied “README” file.   

Collection Data on GitHub: [https://github.com/cmoa/collection](https://github.com/cmoa/collection)

Data Package specification: [http://specs.frictionlessdata.io/](http://specs.frictionlessdata.io/)


## 2. Making the Case 

*an accessible narrative description that describes how the administrative case was made to do the work*

The case to provide the public increased access to museum data was not a difficult one at the Carnegie Museum of Art—the museum considers engagement and education to be a core part of its mission, and firmly believes in Open Access as essential to museum practice. Also, we were helped immensely by the fact that several large institutions, in particular MoMA, [had already done](https://github.com/MuseumofModernArt/collection) so—rather than having to explain exactly what we were doing in detail, we could tell our administration and board that “we were doing it the way MoMA did it”.  Being able to model our work on the previous work and decisions of others helped reassure non-technical stakeholders that we weren’t doing anything risky or controversial.

The most significant barrier was determining how to coordinate the various expectations across departments—to publish this data required coordination across registrarial, publishing, digital, and curatorial teams.   Additionally, it was clear that it would be important to provide all stakeholders with the ability to maintain control over their data.  We provided at least six months of notice to allow the various departments time to correct any information that they felt was essential, and we also allowed anyone to hold back data that they didn’t feel was ready.  All we asked for was a single sentence written description of why the information should not be published.  This allowed stakeholders to maintain agency, while avoiding the temptation to withhold large amounts of the information by default.

Finally, we had many internal discussions about how regular updates would be possible, and we worked with all the departments to craft language to communicate this within the GitHub documentation as being living data.  This helped set the expectation both inside and out that this is not a publication that had been vetted by a curator for accuracy and completeness.
 

## 3. How you did it

*an accessible narrative description that describes how you did it; who was involved - what their roles were; what services were drawn upon; what collections were involved and why were they selected; what infrastructure and technologies were selected and why; what challenges were encountered in the course of the implementation*

The Carnegie Museum of Art collections data publication was an offshoot of the Art Tracks project at CMOA, a data visualization for provenance.  Because of the sensitive nature of provenance, one of the most important goals of the project was to ensure that the professionals with the best understanding of the nuances of the data had control over which works were available for publication.  To do so, we worked with Travis Snyder, the Collections Database Administrator, to craft a series of reports, using filter criteria he devised and fields he approved, that created a collection of XML reports, one per-table, from the collections management system.  These reports run as needed nightly, and the resulting XML is uploaded to an internal FTP site.  

A second set of custom scripts, written by David Newbury, the Lead Developer of the Art Tracks project, download and transform the XML, replacing internal field names with friendlier labels and joining data across tables. Additionally, these scripts add additional information that is not explicitly held in our collections management system such as the URLs for the object website and images of the work. These scripts, written in Ruby, are run whenever the institution wants to update the publication data.  

Our intention was to automate this process, but at this point, the benefit of regular, automatic updates is not yet worth the overhead of what is needed to maintain a complex automation system, for example, the time and effort required to provision servers and handle error reporting robustly.  Instead, they’ve been wrapped into a single command line command using Rake, a Ruby library designed to automate repetitive tasks for programmers.  The single command will download the XML, reprocess the files, generate both the JSON and CSV representations, and then upload the generated files to GitHub.  Currently, if there are problems in the export, a human is running them and will notice (and hopefully correct) the problem before erroneous data is published. One interesting fact is that this script also has to update the documentation on GitHub. For example, we provide in the documentation the number of items in the collection.

We’ve included several data formats within our the export.  First, we include a CSV export.  In discussions with members of the Pittsburgh digital humanities community, CSVs were seen as the most readily-accessible format for researchers interested in quantitative analysis of our collections information.  It doesn’t require any programming ability to read it, just a copy of Excel, which also means that it’s the version we show internal, non-technical people.  It is, however, somewhat limited—for instance, artworks can have one or more creators, and tabular formats like CSV are not designed to handle hierarchical relationships.  We encode this data using an internal microformat (pipe-separated values), but we’ve learned from watching users that this is confusing and non-optimal.  We’re still working to determine if there’s a better way to handle this sort of data.  

The Data Package descriptor file, datapackage.json, which provides metadata for the CSV files in the dataset is written separately as an encapsulation of the expected output of this CSV export pipeline.  Information about contributors to the dataset, its licensing, expected values per column per file is stored here. 

We also provide a single large JSON export of the data.  This is designed primarily for developers, who can load it into memory and process it directly.  It’s a large file (41 Mb), but not so large that it can’t be held in memory using a modern computer.  When we’ve held hackathons or worked with web technologists, this is the form of the data that they’ve been most comfortable with. 

We also provide a directory containing a single JSON file for each object in the collection.  This was created to approximate an API—there’s a single URL that will return information about each object, as well as an index file containing a list of ids, titles, and a URL to an image.  However, our experience has been that this format is too complicated for both developers (who prefer the single JSON file) and non-developers (who prefer the CSV), and is not used.  

An additional complication for our data is that we have broken out the 80,000+ photographs  of the Teenie Harris collection into their own file.  This collection is part of the CMOA collection, but is significantly larger than the rest of the collection combined.  We found in exploring other collection data releases, such as the Tate London and their collection of J.M.W. Turner’s sketchbooks, that large-scale special collections tended to drown out the rest of the collection in data analysis, and might be best considered separately.  We discussed with the museum stakeholders our options, but the decision was made that publishing them as a separate files, using the same format and structures, and both documented the same way in the GitHub, was an acceptable pattern.  

## 4. Share the docs 

*an assortment of formal documentation (personas, use cases, functional requirements), workflows, and code you have that supports the implementation*

One of the most important decisions that we made was to treat the documentation for the release as of equal importance to the data.  Tracey Berg-Fulton, the collections database associate and Art Tracks team member, spent a long time crafting the documentation to be thorough and friendly.  Friendly was important, because we knew that many of the people who would be looking at this data would be students or members of the public, and we wanted them to feel welcome to use the data.  Big legal disclaimers and restrictions, or dense technological jargon might have prevented them from feeling like they were welcome.

We also included within our documentation a table that indicates not just what the field is, but what it means, what type of data you can expect, and a real-world example of the sort of data that field contains.  We wanted to make sure that people were able to find out if our data would meet their needs without having to download it and review it.

Once we had completed our documentation, we sent it through several rounds of internal review—not just editorial review, to confirm that we’d spelled everything correctly, and legal review, to make sure that we’d appropriately used the correct licenses and disclaimers, but also content review, to make sure that our examples were factual, and that our descriptions captured the nuances of the content experts.  This helped, but even more it fostered the sense that this was of the museum, not just of the Art Tracks project or the technology department.

Beyond internal review, we’ve tried to consult with developers and researchers to verify that the information that we’ve provided is what is actually needed to understand our release.  We also explicitly reached out to others in our field with a history of being critical of museum documentation and data, such as Matthew Lincoln, to critique our documentation and provide feedback on utility, comprehensibility, and completeness.   We’ve also monitored other data releases across the museum field, and have worked to integrate good ideas around documentation from our peers. Finally, we model good collaboration by explicitly linking and thanking the institutions that helped us through example and direct advice on this project.

Finally, we’ve been working with Open Knowledge International to explore the use of Data Packages to provide an additional level of documentation for the collections data release.  This provides a machine-readable description of the contents of the CSV file, which allows software tools and agents to both understand and validate the structural content of the data.  We use it as a validation tool to ensure that all of the data published is structurally correct—for instance, that every URL is a valid URL, or that our ID numbers are in the correct format, or that every work has an accession date.   Our hope is that in the future additional software tools will leverage this format, but the most direct benefit to the institution has been as a exhaustive check against our data to verify that the rules that we believe are enforced actually are—and we have been regularly surprised by the exceptions that we’ve found.

Collection Data on GitHub: [https://github.com/cmoa/collection](https://github.com/cmoa/collection)

## 5. Understanding use 

*discrete discussion of how you approach understanding use (e.g. library use, research use, pedagogical use, creative use, etc.) - discussion of exemplary use is also encouraged*

Compared to an API, providing access to Carnegie Museum of Art Collection Data through a data dump is a lower support cost option in terms of time and money.  There is no server we need to run: CMOA are, for the moment, hosting the public data on GitHub’s infrastructure.  Providing a data dump also benefits users, both academic researchers and software developers, who might not be not be interested in writing code to hit an API endpoint 75,000 times to get 75,000 objects.  A single file containing all the required data seems to be much easier for certain use cases.

## 6. Who supports use

*discrete discussion of the people, services, and programs that support use of the data (e.g. digital scholarship services, instruction services, subject area liaisons, etc.)*

Mid-size museums are not well-equipped to offer support for digital resources.  Unlike, for instance, a library or archive, the information management and technology staff are internally-focused, not public-facing.  Curators, educators, and docents, who are often the public face of the museum, are often unaware that our digital resources exist.  

Because of this, we have worked closely with local universities, in particular the University of Pittsburgh’s Information Science program, the Carnegie Mellon Digital Humanities program, and the Frank Raytche STUDIO for Creative Inquiry.   We’ve worked with faculty and staff there, providing access to curatorial and digital team members one-on-one to help them enable use of these collections in their programs for teaching, research, and artistic reuse amongst their students.

Finally, our hope is that through the standardization work that we’ve been undertaking with Open Knowledge International, we can work to make it so that enabling reuse and support can be shared across the industry—we can facilitate working with Museum data, not just Carnegie Museum of Art data.

## 7. Things people should know 

*distilled things that people should know if they are thinking about pursuing similar work*

One of the most important decisions we made was to release our data under a Creative Commons Zero (CC0) license.  We were strongly influenced in this decision by Cooper Hewitt and the Museum of Modern Art, as well as from conversations with the digital humanities community.  Attribution is extremely important to us, and we’re extremely proud of our data.  But the case was made convincingly that requiring attribution would be a burden to the most innovative and essential use we wanted to enable—projects that synthesize our data with others to generate new knowledge.  By putting any restriction on the reuse of the data, many potential users would feel obligated to involve legal counsel to review their use, and that burden would be sufficient to prevent their use of our data.  Instead of requiring attribution via a CC-BY license, we made it easy for people to give us credit—we told them how we’d like to be credited, and asked them kindly to do it.  In our experience, almost every project that has used our data has credited us in some way or another.

A surprising takeaway for us has been that one of the primary users of our public data has been the museum itself.  Easy access to our own data has enabled internal projects to be built on top of the published data, both because it’s in an easy-to-use form, but also because of the permissive license.  All of the data available is already approved for public use, so the approval process for remixing it and reusing it is significantly easier—”It’s already public” is a wonderful way to eliminate debate as to the appropriateness of using that information in public presentations.

Another important point that we missed on our initial communications is that we didn’t adequately explain how we were using GitHub.  GitHub is an essential tool in the Open Source community, and that community has a set of norms around how to provide feedback and suggestions on work that is released via the tool.  Typically, if you found a mistake or wanted to improve a project that was available on GitHub, you would do so through a provided mechanism called a “pull request”, where you would create a copy of the work, make the change, and ask the owner to approve merging your new version with the official version.  Because collections data is not a standard use of GitHub, people were unclear whether or not we would accept corrections to our collections information through this mechanism.  Matthew Lincoln, who originally brought this to our attention, suggested that it wasn’t important what the answer was, as long as it was clear, and so we explicitly indicated that we would not take suggestions this way, and offered an email address that would accept such changes.  This has been entirely satisfactory to all of our users, as well as our internal staff who were happy to accept suggestions, but were very pleased to learn that theyat didn’t have to learn how to use GitHub  to do so.

Open Knowledge International is keen to work on pilots with others considering releasing high quality tabular datasets in the open: [http://frictionlessdata.io](http://frictionlessdata.io)

## 8. Whats next

*you have something in place. whats next and why?* 

Carnegie Museum of Art is hoping to release further iterations of its collections data over time.  There are also now more tools that consume and generate Data Packages. It would be an interesting exercise to more deeply integrate features enabled by the Data Package descriptor.  For example, CMOA can now add steps in the workflow that validate the dataset using tools like [Good Tables](http://goodtables.io/) to ensure that the data and the expectations declared in the datapackage.json match before publishing. Additionally, given the additional information stored in a Data Package, semi-automated export to other backend formats or databases can be offered relatively easily depending on interest.

CMOA and Open Knowledge International also hope to do work that supports the automatic generation of dataset documentation to ensure that documentation provided on GitHub through the README file matches that contained within the datapackage.json.  
