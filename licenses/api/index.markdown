---
layout: page
slug: licenses-api
title: Licenses API
---

<blockquote>
  <h2>The <a href="https://opendefinition.org">Open Definition</a> states: &quot;A piece of content or data is open if anyone is free to use, reuse, and redistribute it — subject only, at most, to the requirement to attribute and share-alike.&quot;</h2>
</blockquote>

<h2>Data on more than 100 open licenses</h2>
<p>Including all <a href="https://opensource.org/licenses">OSI-approved open source
    licenses</a> and all <a href="https://opendefinition.org/licenses">Open
    Definition conformant open data and content licenses</a>. Provided in easy to use, <a href="#format">machine readable JSON</a> -- perfect if you need to drop a license chooser into your app.</p>
<p><a href="#all-licenses" class="btn primary">View the licenses available</a></p>
<h3>License Groups</h3>
<p>In addition various generic groups are provided that are useful when constructing license choice lists, including non-commercial options, generic Public Domain and more. Pre-packaged groups include:</p>
<ul>
    <li><a href="https://licenses.opendefinition.org/licenses/groups/all.json">All licenses</a></li>
    <li><a href="https://licenses.opendefinition.org/licenses/groups/osi.json">OSI compliant</a></li>
    <li><a href="https://licenses.opendefinition.org/licenses/groups/od.json">Open Definition compliant</a></li>
    <li><a href="https://licenses.opendefinition.org/licenses/groups/ckan.json">Specially selected set</a> developed for <a href="https://ckan.org/">CKAN</a> that is perfect for data and content site license choosers.</li>
</ul>

<h2 id="format">Format</h2>
<p>JSON hashes with the following keys:</p>
<pre>{
    "id": "ODC-BY-1.0", 
    "domain_content": false, 
    "domain_data": true, 
    "domain_software": false, 
    "od_conformance": "approved", 
    "osd_conformance": "not reviewed", 
    "status": "active", 
    "title": "Open Data Commons Attribution License 1.0", 
    "url": "https://opendatacommons.org/licenses/by"
}</pre>
<p>Spot an error, think we should have more info? Please file an <a href="https://github.com/okfn/licenses/issues">issue</a> or submit a patch.</p>

<hr />

<h2 id="how-to">How do I use it?</h2>

<h3>Get the data</h3>
<p>Download the licenses, either <a href="https://licenses.opendefinition.org/licenses/groups/all.json">all in one</a>, individually (see below) or in specific groups (see above).</p>
<p>For example, here's how to use curl to access an individual license:</p>
<p><pre>curl https://licenses.opendefinition.org/licenses/ODC-BY-1.0.json</pre></p>

<p>And here's how to use curl to access the CKAN license group:</p>
<p><pre>curl https://licenses.opendefinition.org/licenses/groups/ckan.json</pre></p>

<h3>Git Access</h3>
<p>You can also get the material as a git repo:</p>
<p><pre>git clone https://github.com/okfn/licenses</pre></p>


<h3>Javascript Access (JSONP)</h3>
<p>We also provide a simple way to get direct access from javascript in the browser using JSONP, by providing versions of the all of the data in the jsonp subdirectory wrapped in a callback function named <pre>license_callback</pre></p>
<p>Thus, the JSONP version of a file named:
<p><pre>xyz.json</pre></p>
<p>whether it is a license group or an individual license, will be located at:</p>
<p><pre>licenses/jsonp/xyz.json</pre></p>

<p>For example from jQuery:</p>
<pre>$.ajax({
    url:'https://licenses.opendefinition.org/groups/jsonp/ODC-BY-1.0.js',
    dataType: 'jsonp',
    // you *must* set the callback function to be license_callback
    jsonpCallback: 'license_callback',
    success: function(data) {
        console.log('License title is ' + data.title);
    }
});</pre>

<p>Because our JSONP data is served from a static files, it has a hardcoded callback function and therefore <strong>must</strong> name your callback function for the JSONP request <pre>license_callback</pre></p>

<hr />

<h2 id="all-licenses">Licenses List</h2>
<form class="form-horizontal form-search license-filter">
  <p><input type="text" name="q" placeholder="Filter" class="search-query span5" /></p>

  <label class="checkbox">
  <input type="checkbox" name="od_conformance" value="approved" checked="" />
    Approved as conforming to the Open Definition
  </label>
  <br />
  <label class="checkbox">
  <input type="checkbox" name="osd_conformance" value="approved" />
    Approved as conforming to the Open Source Definition
  </label>
</form>

<div class="license-list"></div>
<script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.min.js"></script>
<script type="text/javascript">
  // GLOBAL
  var all_licenses = null;
  // Setup callback for jsonp to use
  function license_callback(data) {
    all_licenses = data;
  }
</script>
<script src="https://licenses.opendefinition.org/licenses/jsonp/all.js"></script>
<script src="/assets.okfn.org/js/api-docs.js" type="text/javascript"></script>
<script type="x-template" class="template-license">
  <div class="license" data-license-id="">
    <div class="">
      <h3>
        <a href="" class="tmpl-title"></a>
        <div class="icons"></div>
      </h3>
      <p><a href="" class="tmpl-url"></a></p>
      <p>Status: <span class="tmpl-status"></span></p>
    </div>
  </div>
</script>
