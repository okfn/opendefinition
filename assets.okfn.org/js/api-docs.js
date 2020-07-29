jQuery(document).ready(function($) {
  var template = $($('.template-license').html());
  var $list = $('.license-list');
  var $isOpenData = $('<a href="https://opendefinition.org/od/" title="Open Data" class="open-icon"><img src="https://assets.okfn.org/images/ok_buttons/od_80x15_blue.png" alt="Open Data" /></a>');
  var $isOpenContent = $('<a href="https://opendefinition.org/od/" title="Open Data" class="open-icon"><img src="https://assets.okfn.org/images/ok_buttons/oc_80x15_red_green.png" alt="Open Data" /></a>');
  $.each(all_licenses, function(id, data) {
    var tmp = template.clone();
    var jsonUrl = 'https://licenses.opendefinition.org/licenses/' + id + '.json';
    $.each(data, function(key, value) {
      tmp.find('.tmpl-' + key).html(value);
    });
    tmp.attr('data-license-id', data.id);
    tmp.find('.tmpl-title').attr('href', jsonUrl);
    tmp.find('.tmpl-url').attr('href', data.url);
    if (data.od_conformance === "approved" && data.domain_data) {
      tmp.find('.icons').append($isOpenData.clone());
    }
    if (data.od_conformance === "approved" && data.domain_content) {
      tmp.find('.icons').append($isOpenContent.clone());
    }
    $list.append(tmp);
  });

  $('.license-filter').change(onFormChange);
  $('.license-filter').submit(onFormChange);
  $('.license-filter .search-query').keyup(onFormChange);
  $('.license-filter').trigger('submit');

  function onFormChange(e) {
    e.preventDefault();
    var $form = $(e.target).closest('form');
    var data = {
      q: '',
      od_conformance: null,
      osd_conformance: null
    };
    $($form.serializeArray()).each(function(idx, item) {
      data[item.name] = item.value;
    });
    $('.license-list .license').each(function(idx, $el) {
      $el = $($el);
      var matched = false;
      var _id = $el.attr('data-license-id');
      var _lic = all_licenses[_id];
      if (_lic.title.toLowerCase().match(RegExp(data.q))) {
        matched = true;
      }
      if (data.osd_conformance === "approved") {
        matched = matched && _lic.osd_conformance === "approved";
      }
      if (data.od_conformance === "approved") {
        matched = matched && _lic.od_conformance === "approved";
      }
      if (matched) {
        $el.show();
      } else {
        $el.hide();
      }
    });
  }
});
