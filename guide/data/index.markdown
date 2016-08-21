---
author: ddie
comments: false
date: 2010-02-19 14:26:53+00:00
layout: page
slug: data
title: 'Guide to Open Data Licensing '
wordpress_id: 255
---

##  Introduction 

This a guide to licensing data aimed particularly at those who want to make their data [open](http://www.opendefinition.org/).

The first section deals with the practical question of how to license your data. The second section discusses what kinds of rights (intellectual property or other) exist in data in various jurisdictions.

### Status and Contributing

This guide is now v1.1. There is still much that can be done to improve and extend it. If you want to discuss the content or suggest improvements or additions, feel free to use the [repository](https://github.com/okfn/opendefinition) on Github.

### Disclaimer

In addition to the disclaimer in the license linked at the bottom of the page please note that:

1. This information is collected by altruistic individuals most of whom are not lawyers; those who are lawyers are not your lawyers nor experts in your situation. You use this information at your own risk.
2. Nothing in this page should be considered as legal advice.

## Licensing your Data

In most jurisdictions there are intellectual property rights in data that prevent third-parties from using, reusing and redistributing data without explicit permission. Even in places where the existence of rights is uncertain, it is important to apply a license simply for the sake of clarity. Thus, **if you are planning to make your data available you should put a license on it** -- and if you want your data to be [open](http://opendefinition.org/) the license matters, because it makes it open for those users in jurisdictions where their use may be otherwise restricted.

What licenses can you use? We recommend for 'open' data you use one of the licenses conformant with the [Open Definition ](http://www.opendefinition.org/) and marked as suitable for data. This list (along with instructions for usage) can be found at:

* [Open Licenses](/licenses/)

A short 1-page instruction guide to applying an open data license can be found on the Open Data Commons site:

* [Making Your Data Open](http://opendatacommons.org/guide/)

## What Legal (IP) Rights Are There in Data (and Databases)

When talking about databases we first need to distinguish between the structure and the content of a database (when we use the term 'data' we shall mean the content of the database itself). As explained in detail in the FAQ prepared by Creative Commons[^4]:

> "With databases, there are likely four components to consider: (1) the database model or structure, (2) the data entry and output sheet, (3) field names, and (4) the data or other content.
> ...The database model refers to how a database is structured and organized, including database tables and table indexes. The selection, coordination, and arrangement of the database is subject to copyright if it is sufficiently original.
> ...The format and layout of [data entry and output sheets] sheets are protected by copyright according to the same standard of originality used to determine if the database model is copyrightable.
> Field names describe the contents or data. For example, “address” might be the name of the field for street address information. These are less likely to be protected by copyright because they often lack sufficient originality.
> The data or other contents contained in the database are subject to copyright if they are sufficiently creative. Original poems contained in a database would be protected by copyright, but purely factual data (such as gene names or city populations) would not."

Thus, the structural elements of a database will generally be covered by copyright. However, here we are particularly interested in the data. When we talk of "data" we need to be a bit careful because the word isn't particularly precise: "data" can mean a few or even single items (for example a single bibliographic record, a lat/long etc) or "data" can mean a large collection (e.g. all the material in the database). To avoid confusion we shall reserve the term "contents" to mean the individual items, and data to denote the collection.

Unlike for material such as text, music or film, the legal situation for data varies widely across countries, but most jurisdictions **do** grant some rights in the data (as a collection).

This distinction between the "contents" of a database and the collection is especially crucial for factual databases since no jurisdiction grants a monopoly right in the individual facts (the "contents") even though it may grant right(s) in them as a collection. To illustrate, consider the simple example of a database which lists the melting point of various substances. While the database as a whole might be protected by law so that one is not allow to access, reuse or redistribute it without permission, this would never prevent you from stating the fact that substance Y melts at temperature Z.

Forms of protection fall broadly into two cases:

* Copyright for compilations
* A *sui generis* right for collections of data

As we have already emphasized, there are no general rules and the situation varies by jurisdiction. Thus, below we proceed country by country detailing which (if any) of these approaches is used in a particular jurisdiction.

Finally, we should point out that even when any legal protection is absent, in some cases providers of (closed) databases are able to use simple contract combined with legal provisions prohibiting violation of access-control mechanisms to achieve similar results to a formal IP right. For example, if X is provider of a citation database, it can achieve many terms and conditions it wants simply by:

(a) Requiring users to login with a password;
(b) Only providing a user with an account and password on the condition that the user agrees to the terms and conditions.

### EU

#### Database Directive

In the European Union there is a database specific 'Database Directive': Directive [96/9/EC on the 'legal protection of databases' (Eurlex)](http://eur-lex.europa.eu/smartapi/cgi/sga_doc?smartapi!celexapi!prod!CELEXnumdoc&lg=en&numdoc=31996L0009&model=guichett).

It provides for both copyright and the sui-generis right, though with some restrictions on when you can use the copyright (old common-law jurisdictions and many others allowed copyright in simple data no matter how 'unoriginal'). Specifically, here is a quote from Intellectual Property book, 5th Edition[^1] paragraphs 19-37 and following:

> (i) Copyright in the Compilation. ... First, it [the DB directive] defines what is meant by a "database": "a collection of independent works, data or other materials arranged in a  systematic or methodical way and individually accessible by electronic or other means." [DB Dir Art 3] Then it allows copyright in a database (as distinct from its contents), but only on the basis of authorship involving involving personal intellectual creativity. This is a new limitation, so far as common law countries are concerned, and one which must presage a raising of the standard or originality throughout British Copyright law. Intellectual judgment which is in some sense the author's own must go either into choosing contents or into the method of arrangement. The selective dictionary will doubtless be a clearer case than the classificatory telephone directory but each may have some hope; the merely comprehensive will be precluded -- that is the silliness of the whole construct.
> 
> ...
> 
> (ii) Database right. In addition there is a separate sui generis right given to the maker of a database (the investing initiator) against extraction or reutilisation of the database. Four essential points may be highlighted:
>
>   1. The right applies to databases whether or not their arrangement justifies copyright and whatever position may be regarding copyright in individual items in its contents.
>   2. The focus upon contents, rather than organisational structure, is intended to give a right where the contents have been wholly or substantially taken out and re-arranged (generally by a computer) so as to provide a quite different organisation to essentially the same material -- a re-organisation which would not necessarily amount to infringement of copyright in the original arrangement. ...
>   3. The database has to be the produce of substantial investment. ...
>   4. The right lasts for 15 years from completion of the database, or 15 years from its becoming available to the public during initial period. However, further substantial investment in additions, deletions or alterations starts time running afresh. ...

#### Pre-Database Directive

Database protection has been around for quite a while indirectly both in Europe and elsewhere. In Europe many countries traditionally granted copyright based protection:

1. Common law countries such as UK always had a '[sweat-of-the-brow](http://en.wikipedia.org/wiki/Sweat_of_the_brow)' approach.
1. Nordic countries have long had a 'catalogue' right (since 1950s)
2. Germany used unfair competition and copyright
3. Netherlands had exception with Van Dale vs. Romme even though it had an very old law that granted copyright in non-original stuff.

However, generally continental Europe requires a higher standard of 'creativity/originality' than US, in order to grant copyright.

###  Canada 

Canada, though a common law jurisdiction, has tended to limit the range of IP rights in databases more. In particular the recent case of *CCH Canadian Ltd. v. Law Society of Upper Canada*  included discussions of originality, the 'sweat of the brow' approach and references to the Feist case. However, there was no clear ruling relevant to data licensing as database rights were not specifically at issue. From a blog on the case[^2]:

"Paragraphs 15 to 25 hint towards the question of database protection, and even cite the US case (Feist) on telephone directories, but as is usual, since that question wasn't actually one of the ones that needed to be decided here, they didn't completely decide it.  The Court rejects the "sweat of the brow" definition of "original work" (which is the one that leads to "the phone book database is an original work") but also rejects the "creativity" definition (which requires work to be "novel" or "unique"); instead, "originality" is supposed to require "exercise of skill and judgment".  From paragraph 16:  "The exercise of skill and judgment required to produce the work must not be so trivial that it could be characterized as a purely mechanical exercise." That sounds like it could exclude databases.  But then in the next sentence there will be something to annoy the graphic design people (hi, Kate!):  "For example, any skill and judgment that might be involved in simply changing the font of a work to produce "another" work would be too trivial to merit copyright protection as an "original" work."

Cf. [Sweat of the Brow, Creativity, and Authorship: On Originality in Canadian Copyright Law](http://www.uoltj.ca/articles/vol1.1-2/2003-2004.1.1-2.uoltj.Drassinower.105-123.pdf), Abraham Drassinower

###  US 

####  Overview 

The US is a common-law jurisdiction. However, the Feist decision substantially raises the originality 'bar' required for the existence of a copyright in a compilation. There are excellent summaries of the US situation in Ius Mentis Crash course on database rights[^5], article on database protection[^5a] and Copyright in Databases blog[^6]. For instance, Ius Mentis states:

> "The US has no database law like the European Union. Databases can be protected by copyright if they qualify as a "compilation". This requires that the items were included into the database because of some creative expression on the part of the collector. For instance a "best of 2004" collection qualifies. This involves an aesthetic judgment about what is the "best". A "complete list of English words" would not, since trying to be complete is not a creative activity."
>
> "Some other legal doctrines are available in special cases. Using someone else's "hot news" may be unlawful. And using electronic spiders (web robots) to extract information from someone else's site may qualify as electronic trespassing."

Thus, while a pure 'database' right does not exist, it seems likely that one can obtain a compilation copyright in some collections of data. Given this uncertainty, there is all the more reason to use an explicit license.

#### US Data outside the US

Furthermore we should note that even if data in the US had no IP protection it would not prevent said data being protected elsewhere (though note that the EU DB directive provides has reciprocity stipulations that mean a DB provider from a jurisdiction which does not provide DB protection will not be able to use the rights provided in the directive).

For example, the information provided in a blog on open library catalog data[^3] appears to suggest the Library of Congress **charges** for its data to users outside of the US.

#### Feist v. Rural

Feist Publications, Inc., v. Rural Telephone Service Co. was a Supreme Court case from 1991. Rural claimed that Feist infringed their copyright by including portions of their local telephone listings in larger regional directories. The Supreme Court reversed the ruling of the District Court and the Court of Appeals - that Feist infringed copyright - suggesting that "originality, not 'sweat of the brow', is the touchstone of copyright protection in directories and other fact-based works". The fact that Rural, as a telephone company, was obliged to annually publish a telephone directory due to state regulation, was taken into account. Furthermore, it was mentioned that Feist's product would be less marketable if there were gaps in their listings - and that Feist and Rural "compete vigorously". The crucial point however, was that Rural's directory did not constitute a copyrightable 'work'. It lacked originality in the form of selection or arrangements of its parts - described by the court as "a garden-variety white pages directory, devoid of even the slightest trace of creativity". In the absence of original expression in its component parts it was ruled that the listings were not copyrightable.

 * [Feist v. Rural ruling](https://supreme.justia.com/cases/federal/us/499/340/case.html)

#### Federal Government Data

The US constitution mandates that the output of federal agencies be put into the public domain. This has the result that all government data is automatically put into the public domain.

Note however that this does not mean that those who use or build upon that data necessarily are placing *their* work in the public domain.

## Use Cases

Things to consider:

* What is covered.
* What is boundary of share-alike.
* Difference between a derivative work and a compilation
* Attribution requirements for data

### Geodata around the world

OpenStreetMap keeps a wiki page with [case law](http://wiki.openstreetmap.org/wiki/Case_law) related to Geodata all around the world.

### Geodata in the UK

See:

* [Copyright or database right... Does it matter?](http://www.journalofmaps.com/cgi-bin/blosxom.cgi/GIS/GRADE_Waelde.html)
* [Copyright not applicable to geodata?](http://blog.okfn.org/2007/04/01/copyright-not-applicable-to-geodata/)
* Email thread [Copyright not applicable to geodata?](https://lists.okfn.org/pipermail/okfn-discuss/2007-April/000389.html)

### OWL Ontology for Use with Geodata

* See mail thread: [implications of licensing restrictions on ontologies](https://lists.okfn.org/pipermail/okfn-discuss/2007-April/000401.html)

### Archaeological Data

TODO

### Chemical Data

Chemical data, such as that collected in repositories such as PubChem and the world wide molecular matrix, though dealing with the physical world (pure facts) will certainly be subject to the same provisions as any other form of data. Thus it is important to apply a license to the data to ensure that its status is clear in those jurisdictions which allow IP rights in data.

##  Credits 

Add your name here if you would like to listed as a contributor:

* Rufus Pollock
* Jonathan Gray
* [Various authors from the Oak Law Project](http://www.oaklaw.qut.edu.au/)

In addition we'd like to acknowledge the excellent Creative Commons FAQ, originally put together by Mia Garlick of CC.

##  References 

[^1]: Cornish and Llewelyn, Intellectual Property, 5th Edition (Sweet and Maxwell)]
[^2]: [Blog entry on CCH Canadian Ltd. v. Law Society of Upper Canada](http://web.archive.org/web/20070629163851/http://ansuz.sooke.bc.ca/lawpoli/cases/2004030401.php)
[^3]: [Open Library Catalog Data](http://web.archive.org/web/20070527071114/http://www.tomkeays.com/blog/archives/2006/12/18/004216.php) (blog entry)
[^4]: [Creative Commons FAQ on Databases](https://wiki.creativecommons.org/wiki/Data#Frequently_asked_questions_about_data.2C_generally)
[^5]: [Ius Mentis Crash course on database rights](http://www.iusmentis.com/databases/crashcourse/)
[^5a]: [Ius Mentis: Database protection in the US](http://www.iusmentis.com/databases/us/)
[^6]: [Copyright in Databases](http://carrollogos.blogspot.com/2009/02/copyright-in-databases.html), blog by Michael Carroll, Visiting Professor of Law at the American University, Washington College of Law
