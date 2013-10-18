# Open Knowledge Definition
Version luis-craziness


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

# The Definitions

## Open Knowledge License Definition

A **license** is open if its terms satisfy the following conditions:

## Mandatory Permissions

The **license** *must* grant the following permissions.

*TODO*: Not sure I like these subject headers (e.g., "Mandatory Permissions"), but they help clarify where I'm going with this.

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

*Comment: Conditions may be placed on this permission, as described below. Common conditions include 'copyleft' or share-alike requirements that require redistribution of modifications under the same terms as the original.*

## Restrictions That Are Not Permitted

The **license** *must not* include the following restrictions or conditions.

### 4. No Discrimination Against Persons or Groups

The **license** must not discriminate against any person or group
of persons.

*Comment: In order to get the maximum benefit from the process, the
maximum diversity of persons and groups should be equally eligible to
contribute to open knowledge. Therefore we forbid any open-knowledge
license from locking anybody out of the process.*

### 5. No Discrimination Against Fields of Endeavor

The **license** must not restrict anyone from making use of a licensed 
work in a specific field of endeavor. For example, it may not restrict 
a licensed work from being used in a business, or from being used for 
genetic research.

*Comment: The major intention of this clause is to prohibit license
traps that prevent open material from being used commercially. We want
commercial users to join our community, not feel excluded from it.*

### 6. Distribution of License

The **license** must not require any recipient of a licensed work to 
execute an agreement in order to exercise the rights granted in the 
license. 

*TODO*: use something better/broader than "execute an agreement"?

*Comment: This clause is intended to forbid closing up knowledge by
indirect means such as requiring a non-disclosure agreement.*

### 7. License Must Not Be Specific to a Package

The **license*** must not depend on the licensed work being part of a 
particular package. If a work is extracted from a licensed package and 
used or distributed within the terms of the package's license, all parties 
to whom the work is redistributed should have the same rights as those 
that are granted in conjunction with the original package.

*TODO*: "must not depend" is awkward. Maybe "must allow components of 
the licensed work to be distributed separately from the complete original 
work"; when phrased that way, could simply be merged with/an additional 
condition/nuance to "modifications".

### 8. License Must Not Restrict the Distribution of Other Works

The **license** must not place restrictions on other, distinct works that are
distributed along with a licensed work. For example, the license must
not insist that all other works distributed on the same medium are open.

*Comment: Distributors of open knowledge have the right to make their
own choices. Note that 'share-alike' licenses are conformant since those
provisions only apply if the whole forms a single work.*

### 9. License Must Not Impose Additional Restrictions

The **license** must not place any additional restrictions or conditions
on the access, use, reuse or redistribution of the data other than those
explicitly described under this definition. 

*TODO*: Consider replacing this clause with something like "the advisory 
committee may, in its discretion, declare a license non-open if it contains 
restrictions not listed here that meaningfully limit or otherwise impact 
the permissions required in parts 1-3 of the definition".

## Restrictions That Are Permitted
The **license** *may* add the following restrictions, which are expressly permitted to modify the positive obligations of requirements 1-3.

*TODO*: make the above more precise/formal.

*TODO*: should this have the same disclaimer (advisory committee in 
its judgment...) as the restrictions part? That would be more controversial 
(as it should be).

### 10. Attribution

The **license** may require that contributors and creators of a licensed 
work be attributed in distributed versions of the work. If this condition 
is imposed it must not be onerous. 

*TODO*: "onerous" is vague.

### 11. Integrity

The **license** may require that modified versions of a licensed work must 
carry a different name or version number from the original work, or 
otherwise indicate what changes have been made. 

*TODO*: Consider broadening in line with recent CC versions.

### 12. Access and Restrictions

The **license** may require the work to be available in a conveniently 
modifiable form. The license may prohibit technological restrictions.

## Open Knowledge Work Definition

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

The **work** must be available as a whole and at no more than a
reasonable reproduction cost, preferably downloading via the Internet
without charge. The work must also be available in a convenient and
modifiable form. 

*Comment: This can be summarized as 'social' openness - not only are
you allowed to get the work but you can get it. 'As a whole' prevents
the limitation of access by indirect means, for example by only allowing
access to a few items of a database at a time. An example of 'reasonable 
reproduction cost' is the cost of a blank DVD required to distribute a 
complete database.*

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


## Other TODO

2. consider adding criteria for recommended licenses: http://lists.okfn.org/pipermail/od-discuss/2013-June/000464.html
3. consider criteria rejecting jurisdiction-specific licenses: "While it is not currently addressed by the OD, we should strongly
consider revising the OD to allow us to reject [OGL Canada] on
grounds of being overly specific to a particular jurisdiction." (email appears not to have made it to the list?)
3. review http://opendefinition.org/licenses/process/ to see if parallel fixes necessary
5. read through: http://lists.okfn.org/pipermail/od-discuss/2013-June/000447.html
6. https://creativecommons.org/weblog/entry/38316
7. no references to name: http://lists.okfn.org/pipermail/od-discuss/2013-March/000378.html
8. Consider removing "package".
