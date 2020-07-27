---
author: admin
comments: false
date: 2009-11-26 21:54:17+00:00
layout: page
slug: ossd
title: Open Software Service Definition
wordpress_id: 54
redirect_from: /software-service/
---

[Bulgarian](/ossd/bg/)

## Introduction

The **Open Software Service Definition** defines 'open' in relation to **online (software) services**.

An online service, also known under the title of Software as a Service (SaaS), is a service provided by a software application running online and making its facilities available to users over the Internet via an interface (be that HTML presented by a web-browser such as Firefox, via a web-API or by any other means).

With an online-service, in contrast to a traditional software application, users no longer need to 'possess' (own or license) the software to use it. Instead they can simply interact via a standard client (such as web-browser) and pay, where they do pay, for use of the 'service' rather than for 'owning' (or licensing) the application itself.

## The Definition

An open software service is one:

1. Whose data is open as defined by the [Open Definition](/od/{{site.od_current_version}}/en/) with the exception that where the data is personal in nature the data need only be made available to the user (i.e. the owner of that account).
2. Whose source code is:
    1. Free/Open Source Software (that is available under a license in the OSI or FSF approved list -- see note 3).
    2. Made available to the users of the service.

### Notes

1. The Open Definition requires technological openness. Thus, for example, the data shouldn't be restricted by technological means such as access control and should be available in an open format.
2. The Open Definition also requires that data should be accessible in some machine automatable manner (e.g. through a standardized open API or via download from a standard specified location).
3. The OSI approved list is available at:  <https://opensource.org/licenses/> and the FSF list is at: <https://www.gnu.org/philosophy/license-list.html>
4. For an online-service simply using an F/OSS licence is insufficient since the fact that users only interact with the service and never obtain the software renders many traditional F/OSS licences inoperative. Hence the need for the second requirement that the source code is made publicly available.
5. APIs: all APIs associated with the service will be assumed to be open (that is their form may be copied freely by others). This would naturally follow from the fact that the code and data underlying any of the APIs are open.
6. It is important that the service's code need only be made available to its users so as not to impose excessive obligations on providers of open software services.

### Acknowledgements

This definition was originally drafted thanks on the [open definition discussiong mailing list](https://lists-archive.okfn.org/pipermail/od-discuss/). A variety of people contributed to that effort as well as subsequent improvements and amendments including (in alphabetical order):

* Dave Crossland
* Francis Irving
* Thorsten Glaser
* Rufus Pollock
* Evan Prodromu
* Kragen Sitaker
* Luis Villa

## Open Service Web Buttons

If you're providing an online service that's compliant with the Definition let people know by using an 'Open Service' web button:


![](/assets.okfn.org/images/ok_buttons/os_80x15_blue.png)
![](/assets.okfn.org/images/ok_buttons/os_80x15_red_green.png)
![](/assets.okfn.org/images/ok_buttons/os_80x15_orange_grey.png)


To add a button to your site just copy and paste the following bit of html into the relevant page on your site (or into the general footer or sidebar):


```
<a href="https://opendefinition.org/ossd/"><img src="https://opendefinition.org/assets.okfn.org/images/ok_buttons/os_80x15_blue.png" alt="This is an Open Service"/></a>
```

To use a different button (other than the blue one used in the example) just change the 'src' attribute to point to one of the other buttons:

* https://opendefinition.org/assets.okfn.org/images/ok_buttons/os_80x15_blue.png
* https://opendefinition.org/assets.okfn.org/images/ok_buttons/os_80x15_red_green.png
* https://opendefinition.org/assets.okfn.org/images/ok_buttons/os_80x15_orange_grey.png



## Applying the Definition: Some Examples

To make clearer the import of the Open Software Service Definition we provide some illustrative examples:

### OpenStreetMap: Open

* Code: The software that runs the main site is [GPLv2](https://wiki.openstreetmap.org/wiki/Legal_FAQ#1b._What_is_the_license_for_the_software.3F)
* Data: [Open](http://www.openstreetmap.org/copyright)

### Google Maps: Not Open

Note that despite the fact that Google Maps provide an 'open' API and that the service is currently available gratis for many uses, it is not an 'Open Service'. In particular:

* Code: the code for running Google Maps (backend and frontend) is currently proprietary.
* Data: the data (geodata etc) used in Google maps is currently proprietary (subject to copyright and/or database restrictions, with no open license granted).

### Wikipedia: Open

* Code: Mediawiki is currently F/OSS (and is [made available](https://www.mediawiki.org/wiki/MediaWiki)).
* Data: Content of Wikipedia is available under an [open licence](https://wikimediafoundation.org/wiki/Resolution:Licensing_policy).

### Kune.cc: Open

A collaboration website using Kune as its engine.  The software Kune is a descendant of the defunct Google Wave, now available as Apache Wave.

* Code: [Open](https://github.com/comunes/kune/) and see [FAQ](http://kune.ourproject.org/faq-for-gnu/)
* Data: Open; [FAQ](http://kune.ourproject.org/faq/#is-kune-100-freelibre-software-was-kune-built-using-any-proprietary-framework-or-library) notes "we try to promote free contents through a CC BY-SA default license in projects (which can be changed, of course)". It appears the kune.cc retains this default.

### rizzoma.com: Not Open

Like Kune.cc, a descendant of Wave... but closed. Maybe open in the fututre?

* Code: Site footer includes "Rizzoma is an open source project. If you're interested in
welcome to [this topic](http://rizzoma.com/topic/a5a8bfa0ced5ab2611cf5e365673a558/?view=topic_opensource) or contact us via support@rizzoma.com" but it appears the open source project is coming in the future rather than existing as of Janaury 2013.
* Data: [ToS](http://rizzoma.com/about-terms.html) is very brief. No apparent public license nor intent to be open.


## Background and History

* Version: v1.1
* v1.1 2008-10-08 (integrated changes suggested by Dave Crossland and Thorsten Glaser)
* v1.0 2008-07-14.
* v1.0b (2008-06-30)
* v0.4: 2008-05 (tidying)
* v0.3: 2007-09
* v0.2: (first version on this site): 2007-07
* v0.1: 2006-10

This particular formulation originates from discussions taking place originally on the [okfn-discuss mailing list](https://lists-archive.okfn.org/pipermail/od-discuss/) in September and October 2006 (see in particular [this post](https://lists.okfn.org/pipermail/okfn-discuss/2006-October/000177.html)) but owes much to [more recent (Summer 2007) discussions](https://lists.okfn.org/pipermail/okfn-discuss/2007-July/000475.html) precipitated by activities at GUADEC 2007 (see [1], [2], [3], [4]).

1. [We Need an Open Service Definition](https://blog.okfn.org/2007/07/18/we-need-an-open-service-definition/) -- blog post on the OKFN blog by Francis Irving which references [a post on Havoc Pennington's blog](http://log.ometer.com/2007-07.html#18)
2. [Evaluating a Free/Open Service Definition (rough draft)](http://tieguy.org/blog/2007/07/22/evaluating-a-freeopen-service-definition-rough-draft/) posted by Luis Villa
3. [This ongoing thread on okfn-discuss](https://lists.okfn.org/pipermail/okfn-discuss/2007-July/000475.html) -- this includes comments from a variety of people including Luis Villa, Mike Linksvayer, Rufus Pollock, Francis Irving and Saul Albert.
4. [Free/Open Services Definition draft/discussion page](https://wiki.gnome.org/Attic/FreeOpenServicesDefinition) -- this is a draft definition put together by Luis Villa and posted on the GNOME 'live' wiki. In addition to the definition there is also an excellent listing on existing work and writing on this issue.
