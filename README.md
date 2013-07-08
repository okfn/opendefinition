Git repo for versioning documents for <http://OpenDefinition.org/> including
the Open Definition (OD) and Open Software Service Definition (OSSD).

The current OD version is 1.1. Numerous translations are available
on the website. The ideal way to submit new translations is by adding
an open-definition-1.1-{language code}.markdown file in
source/open-definition-1.1

The current OSSD version is 1.1, translations to
source/open-software-service-definition-1.1

## Licenses

We are storing license texts. This is for several reasons:

* Analysis and review
* Preservation (and caching)

**Note: not all licenses we list will be Open Definition conformant as we
include licenses that are under discussion or some non-conformant licenses for
preservation purposes.**

Approach:

* Store licenses as markdown files
* Store licenses in `/licenses/`

        # conformant licenses
        /licenses/conformant/{license-short-name}.md  
        # licenses under review
        /licenses/inreview/{license-short-name}.md
        # non-conformant licenses
        /licenses/nonconformant/{license-short-name}.md
* The process is for license texts to go into inreview to start with and then
  get moved to the appropriate location upon a decision by the Advisory Council

Notes:

* license-id should be a short url-usable name e.g. odc-pddl or cc-zero
* Do not put a version in the license name unless is a differentiating factor
  (e.g. gpl-v3.md)
  * We use github revisions to track changes (and you can use github tags if
    needed)

Example, suppose we were storing the Open Data Commons Public Domain Dedication
and License.

    /licenses/conformant/odc-pddl/public-domain-dedication-license.md

