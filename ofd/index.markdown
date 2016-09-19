---
author: Stephen Gates
comments: true
date: 2015-05-16 14:52:09+00:00
layout: page
slug: ofd
title: 'Open Format Definition '
wordpress_id: 262
---


**This is a draft**. *We need your help to make it better. Get involved, learn more, and help us improve the Open Definition:* 

- *To get started, [join the conversation](http://lists.okfn.org/mailman/listinfo/od-discuss), ask questions and suggest improvements on the Open Definition discussion list.*
- *Catch up on [past conversations](https://lists.okfn.org/pipermail/od-discuss/) and see what you’ve missed.*
- *Dive in deep, [add an issue](https://github.com/okfn/opendefinition/issues) or a pull request to the Open Definition GitHub repository.*

## Introduction 

The [Open Definition](http://opendefinition.org/od/{{site.od_current_version}}/en/) has three key requirements for a work to be open: an *open license*, *open access*, and an *open format*. This page focuses on the **open format**: 

1. quoting the Open Format section from the Open Definition, 
2. exploring it’s intent,
3. testing some real world examples,
4. defining the meaning of special words,
5. collecting ideas to improve the open format,
6. providing links to related resources, and 
7. letting you peek at what’s coming next.



## 1. The Open Format defined

Section 1.3 Open Format from the Open Definition version 2.0 states:

>The **work** *must* be provided in a convenient and modifiable form such that there are no unnecessary technological obstacles to the performance of the licensed rights. Specifically, data *should* be machine-readable, available in bulk, and provided in an open format (i.e., a format with a freely available published specification which places no restrictions, monetary or otherwise, upon its use) or, at the very least, can be processed with at least one free/libre/open-source software tool.

## 2. The Intent

We want to create open knowledge. To help achieve this, the Open Format requires:

### The work must be provided in a convenient form

The **work** *must* be provided in a convenient format so that it is easy to reuse. This requires the **work** to be published in a format that maximises knowledge sharing and reuse. The format may vary for different media types (e.g. image, text, tabular or geographic data).  

### The work must be provided in a modifiable form

The **work** *must* be provided in a modifiable format so it can be reused in different ways, in part or in whole. What is an appropriate modifiable form? 

- If the **work** is data, an appropriate modifiable form is one that is machine-readable and in an open format.
- If the **work** isn’t data, an appropriate modifiable form is one that allows the **work** to be performed in part or whole (*contribution needed here*).

### No unnecessary technological obstacles to the performance of the licensed rights

(*contribution needed*)

### Data should be machine-readable 

Data is machine-readable if it is in a format that can be easily  read, written, parsed and displayed by a computer. 

For example: 

- Non-digital material, is by its non-digital nature, not machine-readable (e.g. printed or hand-written documents). 
- Digital material may not be machine-readable. For example, consider a PDF document containing tables of data. These are definitely digital but are not machine-readable because a computer would struggle to access the tabular information. 
- A HTML web page containing tables of data may be machine-readable depending on how the data is encoded.
- The equivalent tables in a format such as a spreadsheet would be machine-readable.

As another example: 

- Scans and photographs of text are not machine-readable.
- The equivalent text in a format such as a simple ASCII text file or a text-processing format such as Microsoft Word file is machine-readable.

Appropriate machine-readable format may vary by data type. For example, a machine-readable format for geographic data may be different to a format for tabular data.

This section is based on an [archived OKFN glossary](http://webarchive.okfn.org/okfn.org/201404/opendata/glossary/#machine-readable) and an Open Definition discussion about [a harmonised Open Format definition](https://lists.okfn.org/pipermail/od-discuss/2015-April/subject.html#1330).

See also <https://www.data.gov/developers/blog/primer-machine-readability-online-documents-and-data>


### Data should be available in bulk
The **work** *should* be provided in bulk means that the data can be easily downloaded as a whole in one request. 

This requirement complements the Access section of the Open Definition and together they require that:

- the **work** *must* be available as a whole.
- the **work** *should* be downloadable via the Internet, for free.
- data *should* be available in bulk.

But your data can still be open if you publish it as many individual files (however it could be argued you’re not publishing it in a convenient form). 

### Data should be provided in an Open Format

#### An Open Format for Data - Definition 1

An Open Data Format is a format with, "a freely available published specification which places no restrictions, monetary or otherwise, upon its use". 

A freely available published specification allows: 

- conformant software to read and write the data in that format can be implemented by others. 
- a wider choice of software tools for data re-users. 

If an open data format has no restrictions, monetary or otherwise, upon its use, then: 

- data re-users do not need to buy specific software to process the data.
- conformance testing of open format implementations should be free.
- there is no need to pay royalties.
- it is not named using a trademark unless that trademark is usably by anyone under appropriately open terms.


#### An Open Format for Data - Definition 2

An Open Format is a format that, "can be processed with at least one free/libre/open-source software tool".

If there is a free software tool available to process the data, then the data can be re-used without the need to implement software.  

## 3. Testing some real world examples

### Is a National Budget in a PDF open?

The Open Format for data definitions above enable tabular data (e.g. a Nation Budget) to be published as a PDF (an open format according to the definition). However, this is not a convenient form for this type of data and, “the **work** *must* be provided in a convenient and modifiable form such that there are no unnecessary technological obstacles to the performance of the licensed rights”.

So, is a PDF of a National Budget open?

Tim Berners-Lee’s [5 Star Open Data](http://5stardata.info) scheme says it’s open and gets 1 star. 

Based on the definition of machine readable above, a PDF of a Nation Budget isn’t open. (*contribution needed - is this the intent?*)

### Non-data works 

It could be argued that by prefixing the second sentence of the Open Format with, “Specifically, data *should*…”, this means non-data **works** *may*, but are not required to:

- be machine-readable 
- be provided in bulk 
- be provided in an open format: 
  - with a freely available published specification which places no restrictions, monetary or otherwise, upon its use, or  
  - that can be processed with at least one free/libre/open-source software tool. 

(*Contribution needed - Is it OK that these requirements are all optional for non-data works?*)


## 4. Words with special meaning

Some words in the Open Definition have special meaning and are  shown in **bold** or *italics*. There meaning is defined below:

**Work** - denotes the item or piece of knowledge being transferred. Examples of a work include, but are not limited to: data, music, art, images, video, literary compositions, web pages and software. 

**Must**, **Required**, or **Shall** - an absolute requirement  [RFC2119](http://www.ietf.org/rfc/rfc2119.txt).

**Must Not** or **Shall Not** - an absolute prohibition [RFC2119](http://www.ietf.org/rfc/rfc2119.txt).

**Should** or **Recommended** - there may be valid reasons to ignore this requirement but the full implications must be understood and carefully weighed before choosing a different course [RFC2119](http://www.ietf.org/rfc/rfc2119.txt).

**Should Not** or **Not Recommended** - there may be valid reasons when the particular behaviour is acceptable or even useful, but the full implications should be understood and the case carefully weighed before implementing any behaviour described with this label [RFC2119](http://www.ietf.org/rfc/rfc2119.txt).

**May** or **Optional** - the item is truly optional [RFC2119](http://www.ietf.org/rfc/rfc2119.txt).


## 5. Improving the Open Format

These improvement ideas mainly come from conversations on the [discussion list](https://lists.okfn.org/pipermail/od-discuss/).

### Open Format Specification

A specification that describes an open format *should* be: 

- defined through a fair, transparent and collaborative process.
- freely redistributable (although the document may be under a license that doesn’t allow changes to the specification document).
- Software language independent so software implementors can use the programming language of their choice.

### Retain all original detail

The **work** *should* be published in a lossless and uncompressed open format so all the original detail is retained.


### A common resource for tools to reference

Tools like the [Open Data Census](http://census.okfn.org/) and [Open Data Certificates](https://certificates.theodi.org/) test to see if data is published using an open format. This [improvement idea](http://opendefinition.org/licenses/) seeks to harmonise the definition of the Open Format for data so that tools could all point to the Open Definition, in the same way the tools currently point to it for a definition of an open licence and a list of [conformant licenses](http://opendefinition.org/licenses/).

## 6. Resources

Do you have another resource you’d like added below? Make the list better.

### Alternative definitions and views

These links provide some alternate perspectives on open formats: 

- [Open Format](http://en.wikipedia.org/wiki/Open_format) on Wikipedia.
- [An emerging understanding of Open Standards](http://blogs.fsfe.org/greve/?p=160) on Freedom bits.
- [Open Data Usability Index](http://goo.gl/xGpLIs) - Herb Lainchbury. Interesting perspective of the degree of readability of data - digital, parse-able, open, and structured.

### Lists of Open Formats

These lists of open formats have not been assessed as being conformant with the Open Definition: 

- AusGOAL [Open Formats](http://www.ausgoal.gov.au/open-formats) -  Examples of open formats by media type. 
- Snowdrift [FLO Formats and Repositories](https://snowdrift.coop/p/snowdrift/w/en/formats-repositories) - Free and open file formats and online repositories for Free/Libre/Open works.
- Australian National Data Service [File Formats](http://www.ands.org.au/guides/file-formats) - Examples of open formats. Also covers preservation, lossy formats, compression, and the importance of standards. 

## 7. What’s coming next? 

The [Open Definition version 2.1](https://github.com/okfn/opendefinition/blob/master/source/open-definition-2.1-dev.markdown) is being drafted - take a peek on GitHub.




