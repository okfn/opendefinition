#Open Software Service Definition 1.1

## Introduction

The **Open Software Service Definition** defines 'open' in relation to **online (software) services**.

An online service, also known under the title of Software as a Service (SaaS), is a service provided by a software application running online and making its facilities available to users over the Internet via an interface (be that HTML presented by a web-browser such as Firefox, via a web-API or by any other means).

With an online-service, in contrast to a traditional software application, users no longer need to 'possess' (own or license) the software to use it. Instead they can simply interact via a standard client (such as web-browser) and pay, where they do pay, for use of the 'service' rather than for 'owning' (or licensing) the application itself.

## The Definition

An open software service is one:

1. Whose data is open as defined by the [Open Definition](../1.0/) with the exception that where the data is personal in nature the data need only be made available to the user (i.e. the owner of that account).
2. Whose source code is:
1. Free/Open Source Software (that is available under a license in the OSI or FSF approved list -- see note 3).
2. Made available to the users of the service.

### Notes

1. The [Open Definition](../1.0/) requires technological openness. Thus, for example, the data shouldn't be restricted by technological means such as access control and should be available in an open format.
2. The [Open Definition](../1.0/) also requires that data should be accessible in some machine automatable manner (e.g. through a standardized open API or via download from a standard specified location).
3. The OSI approved list is available at:  http://opensource.org/licenses/ and the FSF list is at: https://www.gnu.org/philosophy/license-list.html
4. For an online-service simply using an F/OSS licence is insufficient since the fact that users only interact with the service and never obtain the software renders many traditional F/OSS licences inoperative. Hence the need for the second requirement that the source code is made publicly available.
5. APIs: all APIs associated with the service will be assumed to be open (that is their form may be copied freely by others). This would naturally follow from the fact that the code and data underlying any of the APIs are open.
6. It is important that the service's code need only be made available to its users so as not to impose excessive obligations on providers of open software services.
