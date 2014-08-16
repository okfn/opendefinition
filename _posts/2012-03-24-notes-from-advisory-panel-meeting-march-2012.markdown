---
author: Rufus Pollock
comments: true
date: 2012-03-24 15:09:02+00:00
layout: post
slug: notes-from-advisory-panel-meeting-march-2012
title: Notes from Advisory Panel Meeting March 2012
wordpress_id: 615
categories:
- Meetings
---

## CALL LOGISTICS

* When: Monday, 19th March 18:00 GMT
* Please note the times in the Doodle-poll are 18:00 GMT.
* Strict limit to one hour
* Where: Skype
* Back channel: #okfn IRC channel on  irc.freenode.net
* Chair: Daniel Dietrich (Skype: ddie22)

## PARTICIPANTS

Confirmed:

* Rufus Pollock (rufuspollock)
* Mike Linksvayer (mlinksva)
* Herb Lainchbury (herblainchbury)
* Daniel Dietrich (Skype: ddie22)
* Andrew Stott (Skype: dirdigeng)
* Jo Ellis (UK National Archives) (Skype: jo3ellis)
* David Eaves (david_a_eaves)

## AGENDA

* approval (or not) of UK OGL
  * http://lists.okfn.org/pipermail/od-discuss/2011-December/000086.html may be last focused on UK OGL (subject then expands to OD clarification/update), also see previous in thread
* non-conformance of Irish PSI license -- see http://lists.okfn.org/pipermail/od-discuss/2011-July/000047.html
* Approval or not of Kenyan Open Data Policy (probably not conformant)
  * See http://lists.okfn.org/pipermail/od-discuss/2011-November/000070.html
* updating of the OD itself, which has been done before (1.0 to 1.1)
  * See http://lists.okfn.org/pipermail/od-discuss/2012-January/000096.html
* move EFF OAL from non-comformant/discontinued to conformant/deprecated as http://web.archive.org/web/20040603070029/http://www.eff.org/IP/Open_licenses/eff_oal_version1.php is clearly conformant and having it listed on non-conformant page is confusing. Or remove all mention from site.
* http://licenses.opendefinition.org/ and associated repo
    * https://github.com/okfn/licenses
* Update from David Eaves

## NOTES

opendefinition@okfn.org email alias (which can then be circulated to the advisory panel)
would like to see a published list of PDDL users

## Actions

* [DD/MH]: contact Kenyans re decision
* [RP]: definition into version control (suggestion: use markdown)
* [DD] make sure ML has access to wordpress site
* [DD] send notes to list and set up a regular call scheme
* [AS]: draft blog post about non-open open licenses on open data sistes

### OGL

Feedback on http://www.nationalarchives.gov.uk/doc/open-government-licence/ clauses:

* "ensure that you do not use the Information in a way that suggests any official status or that the Information Provider endorses you or your use of the Information;"
  * This is fine, permitted by OKD: 6. Integrity.
* "ensure that you do not mislead others or misrepresent the Information or its source;"
  * Problematic: Adds uncertainty and complexity without gaining any real benefit for the licensor (how would they enforce and can they not be addressed in some other form).
  * "ensure" sounds burdensome, "official" is unclear, and "mislead" is ripe for abuse (should a licensor prevent certain uses). It also causes interoperability issues and paves the way for a myriad of minor, but cumulatively significant, restrictions that can ultimately significantly impede reuse.
  * Additionally, introduces incompatibility with other open licenses.
* "ensure that your use of the Information does not breach the Data Protection Act 1998 or the Privacy and Electronic Communications (EC Directive) Regulations 2003."
  * Breaking the law is breaking the law, one doesn't need a provision in the license for this. Additionally, introduces incompatibility with other open licenses.
* "These terms have been aligned to be interoperable with any Creative Commons Attribution Licence, which covers copyright, and Open Data Commons Attribution License, which covers database rights and applicable copyrights."
  * The problematic terms above make this statement ambiguous: though the UK OGL claims to be aligned with CC-BY and ODC-BY, it is not. The intention to be compatibile is wonderful; making the next version of UK OGL unambiguously OKD compliant is necessary (and most likely sufficient) for realizing this intent.

End of feedback

**Rights Clearing**: users are sometimes expected to respect the rights of third parties when in fact they are the least equipped to do so of all parties involved.  i.e. if its onerous for a publisher to sort out the rights, its likely impossible for a consumer.

As the OKD draws much from the OSD, which itself is based on the DFSG, I take license to call out the http://people.debian.org/~bap/dfsg-faq.html#tentacles_of_evil test. I think analogously, if an oppressive government comes to power, the OGL provides built-in excuses for suppression of uses of "open" information it finds disagreeable. Maybe this concern is over the top, just putting it out there.

### Kenyan Open Data Policy

All agreed that this was non-compliant.

* No Discrimination Against Fields of Endeavor - Restriction of commercial use.
  * non-conformant because of non-commercial restrictions 

### Version 1.2 of Open Definition

* Clearer that adding restrictions is problematics and likely non-compliant
* Integrity
  * See item 6
  * Integrity does not cover "misrepresentation or misuse" - these should not be part of an open license. When using data it can be assumed that users will comply with other relevant laws

### Move EFF OAL
Unanimously agreed that:

EFF OAL moved from non-conformant/discontinued to conformant/deprecated as http://web.archive.org/web/20040603070029/http://www.eff.org/IP/Open_licenses/eff_oal_version1.php is clearly conformant and having it listed on non-conformant page is confusing.

### Irish

http://psi.gov.ie/files/2010/03/PSI-Licence.pdf is unaminously decided to be non-complaint for the following reasons:

4..1.(4) conditions permissions on "not using the document" in three ways which make the license non-compliant:

    (a) for the principal purpose of advertising or promoting a particular product or service;

Not compliant with OKD 8: No Discrimination Against Fields of Endeavor.

    (b) for an illegal, immoral, fraudulent or dishonest purpose or in support of the aforementioned purposes;
    (d) generally in a manner which is likely to mislead others.

These go beyond the restriction permitted by OKD 6: Integrity. Clauses such as these make permissions ambiguous, lend themselves to capriciuous enforcement, make compatibility with other open licenses problematic, and are generally superfluous in an open license, given that users generally must follow laws against fraud, etc.

### Discussion of of 4(c) and Attribution re http://psi.gov.ie/files/2010/03/PSI-Licence.pdf

What if one requires attribution but at the time non-endorsement.

Andrew Stott: two examples, Met Office and New South Wales of things along these lines

Andrew: if you perform the attribution requirement it would seem very hard for a licensor to claim that you are using their endorsement.

### Andrew Stott

* 72% of datasets on data.gov.nz are CC-By or better
* 41% of datasets on data.gov.nz are CC-By or better (once one excludes geodata)
* 34% ...

