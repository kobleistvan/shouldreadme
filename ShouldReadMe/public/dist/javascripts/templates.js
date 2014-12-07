this["JST"] = this["JST"] || {};

this["JST"]["public/javascripts/templates/dashboard/baseDashboard.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<nav class=\"menu navbar-fixed-top navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <img class=\"small-logo\" src=\"/images/ourlogopng.png\">\n            <ul class=\"main-menu-list nav navbar-nav\">\n                <li><a href=\"#coming-soon\"> Sign in </a></li>\n                <li><a href=\"#\"> Get started </a></li>\n                <li><a href=\"#coming-soon\"> Coming soon </a></li>\n                <li><a href=\"#\"><img class=\"help-icon\" src=\"/images/help.png\"></a></li>\n            </ul>\n        </div>\n    </div>\n</nav> <!-- END  menu section -->\n\n<div class=\"container-fluid editor-container\">\n    <!-- instructions -->\n    <div class=\"instructions\">\n        <h3>How to use it</h3>\n        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\n        </p>\n    </div><!-- END instructions -->\n    <!-- grouped content -->\n    <div class=\"grouped-content row\">\n        <!-- ICONS FAQ Quiz -->\n        <div class=\"customization-section col-md-3\">\n        \n        </div><!-- END customize section-->\n        \n        <!-- preview section -->\n        <div class=\"preview-section col-md-6\">\n                    \n        </div><!-- END preview section-->\n        \n        <!-- tips section -->\n        <div class=\"tips-section col-md-3\">\n                \n        </div><!-- END tips section-->\n    </div>\n</div>";
  },"useData":true});



this["JST"]["public/javascripts/templates/dashboard/icons.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <div class=\"icon-container\">\n        <img src=\"images/\"+"
    + escapeExpression(((helper = (helper = helpers.file_name || (depth0 != null ? depth0.file_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"file_name","hash":{},"data":data}) : helper)))
    + " class=\"default-icon\" id=\""
    + escapeExpression(((helper = (helper = helpers.icon_id || (depth0 != null ? depth0.icon_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"icon_id","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<h3>Icons</h3>\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.icons : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true});