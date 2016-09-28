

function $(expr, con) { return typeof expr === 'string'? (con || document).querySelector(expr) : expr; }
function $$(expr, con) { return [].slice.call((con || document).querySelectorAll(expr)); }

(function(head, body, html){

  var allLinks = $$('a', body);

  allLinks.forEach(function(element) {
    // open all links in external window
    element.setAttribute('target', '_blank');

    // Add an icon
    var linkIcon = document.createElement('i');
    linkIcon.setAttribute('class', 'fa fa-external-link');
    element.appendChild(linkIcon);
  })


})(document.head || document.getElementsByTagName('head')[0], document.body, document.documentElement);

