# Open Knowledge Definition
* Version luis-craziness
* Further revisions and comments from Kent

# Terminology

The term **knowledge** is taken to include:

  1. Content such as music, films, books
  2. Data be it scientific, historical, geographic or otherwise
  3. Government and other administrative information

Software is excluded despite its obvious centrality because it is
already adequately addressed by previous work, including the [Open Source
Definition](http://www.opensource.org/docs/osd) (OSD), upon which this
document is modeled.

The term **work** will be used to denote the item or piece of knowledge
which is being transferred.

The term **package** may also be used to denote a collection of works. Of
course such a package may be considered a work in itself.

The term **license** refers to the legal license under which the work is
made available. Where no license has been made this should be interpreted
as referring to the resulting default legal conditions under which the
work is available (for example copyright).

    KM: Rather than following the legal standard of definitions first, the document
    might be more readable if we put these glossary-style at the end.  These are common
    terms and the definitions really serve only as clarification, not as a necessary
    starting point for understanding terms-of-art.

# The Definitions

## Open Knowledge License Definition

A **license** is open if its terms satisfy the following conditions:

## Mandatory Rights

The **license** *must* grant the following rights.

*TODO*: Not sure I like these subject headers (e.g., "Mandatory Permissions"), but they help clarify where I'm going with this.

*KM*: "Rights" rather than "permissions" allows us to be a bit broader in this section, per below...

### 1. Use

The **license** must allow use of the licensed work for any purpose.

*Note on change*: This new plank may make obsolete, or be merged with, the 
two "no discrimination against..." clauses. Alternately, it could be used to force them to be more clear and consistent with each other.

### 2. Redistribution

The **license** must allow redistribution of the licensed work, 
including sale, either on its own or as part of a package made from 
works from many different sources. The license must not require a 
royalty or other fee for such sale or distribution.

*Note on change*: This switches to a positive obligation, parallel to FSF Freedom 2.

### 3. Modification

The **license** must allow creation of derivatives of the licensed 
work, and must allow the derivatives to be distributed under the 
terms of the original licensed work.

*Comment: Conditions may be placed on this permission, as described 
below. Common conditions include 'copyleft' or share-alike requirements 
that require redistribution of modifications under the same terms as the original.*

### 4. Separation

The **license** must allow any part of the work, or the whole of it, to be used, distributed or modified separately from any other part of the work, or from any package in which it was originally distributed. 

    KM: This is intended to rephrase "10. License Must Not Be Specific
    to a Package" as a positive right.

### 5. Compilation

The **license** must allow the licensed work to be distributed along with other distinct works, with no restrictions placed on these other works.

    KM: This is intended to rephrase  "11. License Must Not Restrict the
    Distribution of Other Works" as a positive right. We could
    alternatively combine it with "4. seperation".

### 5. Application to Any Purpose

The **license** must allow use, redistribution, modification and compilation, by any person or group of persons, for any purpose. These rights must apply independently of other legal agreements, without any obligation to agree to additional terms. 

    KM: This is intented to rephrase "7. No Discrimination Against Persons
    or Groups", "8. No Discrimination Against Fields of Endeavor" and
    (perhaps slightly suitable?) "9. Distribution of License" as positive
    rights. I think it's better to address non-discrimination here rather than
    under 1 so as to make it clear that it applies to redistribution and
    modification, rather than only to "use" alone.

## Permitted Conditions
The **license** *may* condition the permissions granted in Sections 1-3 on 
compliance with the following conditions.

*TODO*: should this have the same disclaimer (advisory committee in 
its judgment...) as the restrictions part? That would be more controversial 
(as it should be).

### 4. Attribution

The **license** may require that contributors and creators of a licensed 
work be attributed in distributed versions of the work. If this condition 
is imposed it must not be onerous. 

*TODO*: "onerous" is vague.

*KM*: Still maybe not quite there, but perhaps something along the lines of "If this condition is imposed, it must not unnecessarily burden the use of alternative formats or alternative means of distribution".

### 5. Integrity

The **license** may require that modified versions of a licensed work must 
carry a different name or version number from the original work, or 
otherwise indicate what changes have been made. 

*TODO*: Consider broadening in line with recent CC versions.

### 6. Access and Restrictions

The **license** may require the work to be available in a conveniently 
modifiable form. The license may prohibit technological restrictions.

## Conditions That Are Not Permitted

The **license** *must not* condition the permissions granted in Sections 1-3 
on any of the following restrictions.

In addition, the advisory committee may, in its discretion, declare a license 
non-open if the license contains restrictions not listed here that 
meaningfully limit or otherwise impact the permissions required in parts 
1-3 of the definition.

    KM: I don't think the advisory committee should have this discretion.
    If there's a problematic restriction that isn't addressed, we should
    ammend the definition.


# Open Knowledge Work Definition

## Mandatory Conditions

A specific **work** is open if its manner of distribution satisfies the following
conditions:

### 1. License and Licensing Information

The **work** must be available under an open license, as defined above, and 
recipients of the work must be clearly and unambiguously notified of the 
license. Any additional terms accompanying the work (such as a terms
of use) must not contradict the terms of the license. Any additional 
information necessary for license compliance (such as names of contributors 
required for compliance with attribution requirements) should also accompany 
the work.

### 2. Access

The **work** shall be available as a whole and at no more than a
reasonable reproduction cost, preferably downloadable via the Internet
without charge. The **work** must also be available in a convenient and
modifiable form. The **license** may require the work to be available
in a convenient and modifiable form. The **work** must be clearly presented
as available under the **license**.

*Comment: This can be summarized as 'social' openness - not only are you
allowed to use, modify, and share the work but you can get it. 'As a whole'
prevents the limitation of access by indirect means, for example by only
allowing access to a few items of a database at a time. An example of
'reasonable reproduction cost' is the cost of blank media or bandwidth
required to distribute a complete database. 'Clearly presented as
available' means that both the license and the means of access are clear
and unambiguous on which works the rights attach to.*

    KM: I suggest the 1.2 revs of this (as reflected in the above).

### 3. Absence of Technological Restriction

The **work** must be provided in such a form that there are no
technological obstacles to the performance of the licensed rights. This
can be achieved by the provision of the work in an open data format,
i.e., one whose specification is publicly and freely available and which
places no restrictions monetary or otherwise upon its use. 

*TODO:* (1) not clear that "open data formats" are necessarily 
technologically unencumbered (I know of at least three "open" DRM standards); 
(2) might make sense to link, at least in a comment, to an open standard 
definition; e.g., http://opensource.org/osr

### 4. Recommended Conditions

    KM: We should have a discussion about this on-list, but I'm thinking
    it could be useful to have some softer **should** conditions regarding
    archiving, metadata, use of open standards, availability of APIs, etc.

## Other TODOs

2. consider adding criteria for recommended licenses: http://lists.okfn.org/pipermail/od-discuss/2013-June/000464.html
3. consider criteria rejecting jurisdiction-specific licenses: "While it is not currently addressed by the OD, we should strongly
consider revising the OD to allow us to reject [OGL Canada] on
grounds of being overly specific to a particular jurisdiction." (email appears not to have made it to the list?)
3. review http://opendefinition.org/licenses/process/ to see if parallel fixes necessary
5. read through: http://lists.okfn.org/pipermail/od-discuss/2013-June/000447.html
6. https://creativecommons.org/weblog/entry/38316
7. no references to name: http://lists.okfn.org/pipermail/od-discuss/2013-March/000378.html
8. Consider removing "package".
