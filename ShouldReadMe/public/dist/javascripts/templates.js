this["JST"] = this["JST"] || {};

this["JST"]["public/javascripts/templates/dashboard/baseDashboard.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "        <nav class=\"main-menu navbar-fixed-top navbar\" role=\"navigation\">\n            <div class=\"container-fluid\">\n                <!-- Collect the nav links, forms, and other content for toggling -->\n                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                    <img class=\"small-logo\" src=\"/images/logo.png\">\n                    <ul class=\"main-menu-list nav navbar-nav\">\n                        <li><a href=\"/\"> Home </a></li>\n                        <li><a href=\"/signout\"> Sign out </a></li>\n                    </ul>\n                </div>\n            </div>\n        </nav> <!-- END  menu section -->\n\n<div class=\"container-fluid editor-container\">\n    <!-- instructions -->\n    <div class=\"instructions\"> \n        <h3>INSTRUCTIONS</h3>\n        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\n        </p>\n    </div><!-- END instructions -->\n    <!-- grouped content -->\n    <div class=\"grouped-content row\">\n        <!-- ICONS FAQ Quiz -->\n        <div class=\"customization-section col-md-3\">\n            <!-- icons section -->\n            <div class=\"icons-subsection\">\n            </div><!-- END icons section-->\n            <!-- FAQ section -->\n            <div class=\"faq-section\">\n            \n            </div><!-- END FAQ section -->\n            <!-- quiz section -->\n            <div class=\"quiz-section\">\n            </div><!-- END quiz section -->\n        </div><!-- END customize section-->\n        \n        <!-- preview section -->\n        <div class=\"preview-section col-md-6\">\n            <div class=\"edit-panel clearfix\"> </div>\n            <div class=\"faq-panel hide\"> </div>\n            <div class=\"quiz-panel hide\"> </div>\n        </div><!-- END preview section-->\n        \n        <!-- tips section -->\n        <div class=\"col-md-3\">\n            <div class=\"tips-section\"> </div>\n        </div><!-- END tips section-->\n    </div>\n    <div> \n        <button class=\"go-to-preview button btn btn-info\" type=\"submit\">Preview</button>\n    </div>\n</div>\n";
  },"useData":true});



this["JST"]["public/javascripts/templates/dashboard/editPanelComponents/editPanel.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<h3>Preview</h3>\n<div class=\"preview-container\" >\n    \n</div>";
  },"useData":true});



this["JST"]["public/javascripts/templates/dashboard/editPanelComponents/faqPanel.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    \n    <div class=\"faq-stub panel panel-default\">\n        <div class=\"panel-heading\">\n            <h4 class=\"panel-title\">"
    + escapeExpression(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"question","hash":{},"data":data}) : helper)))
    + "</h4>\n        </div>\n        <div class=\"panel-body\">\n            <p>"
    + escapeExpression(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"answer","hash":{},"data":data}) : helper)))
    + "</p>\n        </div>\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<h3>Frequently Asked Questions</h3>\n<div class=\"preview-faq-container\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.faqstubs : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});



this["JST"]["public/javascripts/templates/dashboard/editPanelComponents/printItem.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"preview-item\" id=\""
    + escapeExpression(((helper = (helper = helpers.icon_id || (depth0 != null ? depth0.icon_id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"icon_id","hash":{},"data":data}) : helper)))
    + "\">\n    <div class=\"icon-colors\">\n        <ul>\n            <li class=\"white-bgk\" id=\"white\"></li>\n            <li class=\"red-bkg\" id=\"#e8221c\"></li>\n            <li class=\"green-bkg\" id=\"#59AC59\"></li>\n            <li class=\"blue-bkg\" id=\"#65B5EB\"></li>\n        </ul>\n    </div>\n    <div class=\"preview-icon-border\"><img src=\""
    + escapeExpression(((helper = (helper = helpers.file_name || (depth0 != null ? depth0.file_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"file_name","hash":{},"data":data}) : helper)))
    + "\" class=\"preview-icon\">\n    </div>\n    <input type=\"text\" class=\"user_defined_descr\" name=\"user_defined_descr\" placeholder=\"Short description\">\n</div>";
},"useData":true});



this["JST"]["public/javascripts/templates/dashboard/editPanelComponents/quizPanel.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "        <div class=\"quiz-stub panel panel-default\">\n            <div class=\"panel-heading\">\n                <h4 class=\"panel-title\">"
    + escapeExpression(((helper = (helper = helpers.question || (depth0 != null ? depth0.question : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"question","hash":{},"data":data}) : helper)))
    + "</h4>\n            </div>\n            <div class=\"panel-body\">\n                <p>"
    + escapeExpression(((helper = (helper = helpers.answer || (depth0 != null ? depth0.answer : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"answer","hash":{},"data":data}) : helper)))
    + "</p>\n            </div>\n        </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<h3>Pop quiz, motherfucker!</h3>\n<div class=\"preview-quiz-container\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.quizstubs : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});



this["JST"]["public/javascripts/templates/dashboard/faqs.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"faq-head row\">\n    <h3>FAQ</h3>\n    <div class=\"toggle on toggle-light faq-toggle\"></div>\n</div>\n\n<div class=\"faq-container hide\">\n    <p>Only default frequently asked questions and answers will be added at the moment. Customizable FAQ content coming soon!</p>\n</div>\n\n";
  },"useData":true});



this["JST"]["public/javascripts/templates/dashboard/icons.hbs"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "    <div class=\"icon-container\">\n        <img src=\""
    + escapeExpression(((helper = (helper = helpers.file_name || (depth0 != null ? depth0.file_name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"file_name","hash":{},"data":data}) : helper)))
    + "\" class=\"default-icon\" id=\""
    + escapeExpression(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"id","hash":{},"data":data}) : helper)))
    + "\" title=\""
    + escapeExpression(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"title","hash":{},"data":data}) : helper)))
    + "\">\n    </div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var stack1, buffer = "<h3>Icons</h3>\n<div class=\"icons-content s\">\n";
  stack1 = helpers.each.call(depth0, (depth0 != null ? depth0.sidebarIcons : depth0), {"name":"each","hash":{},"fn":this.program(1, data),"inverse":this.noop,"data":data});
  if (stack1 != null) { buffer += stack1; }
  return buffer + "</div>";
},"useData":true});



this["JST"]["public/javascripts/templates/dashboard/quiz.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div class=\"quiz-head row\">\n    <h3>Quiz</h3>\n    <div class=\"toggle on toggle-light quiz-toggle\"></div>\n</div>\n\n<div class=\"quiz-container hide\">\n    <p>Quiz????</p>\n</div>\n";
  },"useData":true});



this["JST"]["public/javascripts/templates/dashboard/tips.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<h3>Tips</h3>\n<div class=\"tips-content\">\n    <!-- example -->\n    <p> "
    + escapeExpression(((helper = (helper = helpers.content || (depth0 != null ? depth0.content : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"content","hash":{},"data":data}) : helper)))
    + " </p>\n</div>";
},"useData":true});