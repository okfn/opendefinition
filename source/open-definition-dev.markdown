# Open Definition
Version 2.0dev?

This document specifies the conditions that must be met for a license to be 
an open knowledge license, and for a work to itself be open knowledge.

Knowledge includes:

  1. Content, including as music, films, images, texts; and 
  2. Data, including scientific, historical, geographic, and administrative data

Software is excluded, despite its obvious importance, because it is
already adequately addressed by previous work, including the [Open Source
Definition](http://www.opensource.org/docs/osd), from which this document
was originally derived.

    LV: I'd consider dropping the software/OSD thing to a footnote. That 
    would also allow us to make the acknowledgement of the OSD slightly more 
    fulsome.

## Terminology

The term **work** will be used to denote the item or piece of knowledge
which is being transferred.

The term **license** refers to the legal terms under which the work is
made available. Where no license has been made this should be interpreted
as referring to the resulting default legal conditions under which the
work is available (for example copyright).

## Open Licenses

A **license** is open if its terms satisfy the following conditions:

### Mandatory Rights

The **license** *must* grant the following rights.

*TODO*: Not sure I like these subject headers (e.g., "Mandatory Rights"), but they help clarify where I'm going with this.

#### 1. Use

The **license** must allow use of the licensed work for any purpose.

*Note on change*: This new plank may make obsolete, or be merged with, the 
two "no discrimination against..." clauses. Alternately, it could be used to force them to be more clear and consistent with each other.

#### 2. Redistribution

The **license** must allow redistribution of the licensed work, 
including sale, either on its own or as part of a collection made from 
works from many different sources. The license must not require a 
royalty or other fee for such sale or distribution.

*Note on change*: This switches to a positive obligation, parallel to FSF Freedom 2.

#### 3. Modification

The **license** must allow creation of derivatives of the licensed 
work, and must allow the derivatives to be distributed under the 
terms of the original licensed work.

*Comment: Conditions may be placed on this permission, as described 
below. Common conditions include 'copyleft' or share-alike requirements 
that require redistribution of modifications under the same terms as the original.*

#### 4. Separation

The **license** must allow any part of the work, or the whole of it, to be used, distributed or modified separately from any other part of the work, or from any collection of works in which it was originally distributed. 

#### 5. Compilation

The **license** must allow the licensed work to be distributed along with other distinct works, with no restrictions placed on these other works.

#### 6. Application to Any Purpose

The **license** must allow use, redistribution, modification and compilation, by any person or group of persons, for any purpose. These rights must apply independently of other legal agreements, without any obligation to agree to additional terms. 

### Permitted Conditions
The **license** *may* condition the permissions granted in Sections 1-3 on 
compliance with the following conditions.

*TODO*: should this have the same disclaimer (advisory committee in 
its judgment...) as the restrictions part? That would be more controversial 
(as it should be).

#### 1. Attribution

The **license** may require that contributors and creators of a licensed 
work be attributed in distributed versions of the work. If this condition 
is imposed it must not be onerous. 

*TODO*: "onerous" is vague.

*KM*: Still maybe not quite there, but perhaps something along the lines of "If this condition is imposed, it must not unnecessarily burden the use of alternative formats or alternative means of distribution".

#### 2. Integrity

The **license** may require that modified versions of a licensed work must 
carry a different name or version number from the original work, or 
otherwise indicate what changes have been made. 

*TODO*: Consider broadening in line with recent CC versions.

#### 3. Access and Restrictions

The **license** may require the work to be available in a conveniently 
modifiable form. The license may prohibit technological restrictions.

### Conditions That Are Not Permitted

The **license** *must not* condition the permissions granted in Sections 1-3 
on any of the following restrictions.

In addition, the advisory committee may, in its discretion, declare a license 
non-open if the license contains restrictions not listed here that 
meaningfully limit or otherwise impact the permissions required in parts 
1-3 of the definition.

    KM: I don't think the advisory committee should have this discretion.
    If there's a problematic restriction that isn't addressed, we should
    ammend the definition.

    ML: Should the advisory committee or license approval be mentioned at all in this document?

### Recommendations for Open Licenses

Licenses with the following characteristics help the open ecosystem by maintaining interoperability and avoiding high costs. (If AC and approval are mentioned in this document, might say we don't approve licenses not following these recommendations.)

#### Reusable

Not specific to an organization or jurisdiction.

#### Compatible

With? Should some license(s) be baked in?

#### Coverage

Something about granting rights to something substantial and clear? eg not only game rules

#### Understandable

If AC has to debate what license really means, it isn't understandable. Is there some way to express this generally?


## Open Works

A specific **work** is open if its manner of distribution satisfies the following
conditions:

### Mandatory Conditions

#### 1. License and Licensing Information

The **work** must be available under an open license, as defined above, and 
recipients of the work must be clearly and unambiguously notified of the 
license. Any additional terms accompanying the work (such as a terms
of use) must not contradict the terms of the license. Any additional 
information necessary for license compliance (such as names of contributors 
required for compliance with attribution requirements) should also accompany 
the work.

#### 2. Access

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

#### 3. Absence of Technological Restriction

The **work** must be provided in such a form that there are no
technological obstacles to the performance of the licensed rights. This
can be achieved by the provision of the work in an open data format,
i.e., one whose specification is publicly and freely available and which
places no restrictions monetary or otherwise upon its use. 

*TODO:* (1) not clear that "open data formats" are necessarily 
technologically unencumbered (I know of at least three "open" DRM standards); 
(2) might make sense to link, at least in a comment, to an open standard 
definition; e.g., http://opensource.org/osr

### Recommendations for Open Works

    KM: We should have a discussion about this on-list, but I'm thinking
    it could be useful to have some softer **should** conditions regarding
    archiving, metadata, use of open standards, availability of APIs, etc.

## Other TODOs

* review http://opendefinition.org/licenses/process/ to see if parallel fixes necessary
* read through: http://lists.okfn.org/pipermail/od-discuss/2013-June/000447.html -- Stefano Zacchiroli's comments on OD 1.1
* https://creativecommons.org/weblog/entry/38316 -- Project Open Data has language about open licensing, some good, some confusing; anything to draw from?
* should works section come first? it's shorter, less obscure, and contextualizes/motivates (or could/ought) licenses
* most of the explanatory comments are gone. maybe the remaining ones should too, and each point be fully self-explanatory
