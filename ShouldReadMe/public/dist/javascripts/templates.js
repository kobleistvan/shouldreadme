this["JST"] = this["JST"] || {};

this["JST"]["public/javascripts/templates/editor/main.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<div> blabla </div>\ns";
  },"useData":true});



this["JST"]["public/javascripts/templates/getStarted/getStarted.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<nav class=\"menu navbar-fixed-top navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <img class=\"small-logo\" src=\"ourlogopng.png\">\n            <ul class=\"main-menu-list nav navbar-nav\">\n                <li><a href=\"#coming-soon\"> Sign in </a></li>\n                <li><a href=\"#\"> Get started </a></li>\n                <li><a href=\"#coming-soon\"> Coming soon </a></li>\n                <li><a href=\"#\"><img class=\"help-icon\" src=\"help.png\"></a></li>\n            </ul>\n        </div>\n    </div>\n</nav> <!-- END  menu section -->\n\n<div class=\"container-fluid editor-container\">\n    <!-- starting methods -->\n    <div class=\"starting-methods\">\n        <h2 class=\"text-center\">What starting option suits you best?</h2>\n        <div class=\"row starting-options\">\n            <div class=\"scratch-option col-md-4\">\n                <a href=\"#scratch\" class=\"submit-option active\"><h3>Start from scratch</h3></a>\n                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. \n                </p>\n            </div>\n            <div class=\"details-option col-md-4\">\n                <a href=\"#details\" class=\"submit-option active\"><h3>Let us know more about your website</h3></a>\n                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\n                </p>\n            </div>\n            <div class=\"upload-option col-md-4\">\n                <a href=\"#upload\" class=\"submit-option disabled\"><h3>Upload file</h3></a>\n                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\n                </p>\n            </div>\n        </div>\n        <div class=\" text-center\">\n            <span class=\"open-options hide glyphicon glyphicon-chevron-down\" aria-hidden=\"true\"></span>    \n        </div>\n    </div><!--END starting methods -->\n    <!-- details section -->\n    <form class=\"details hide\">\n        <a class=\"linked\" name=\"#details\"></a>\n        <h2>Select the categories that best describe you website</h2>\n        <div class=\"checkboxes\">\n            <input type=\"checkbox\" value=\"social\"> Social <br/>\n            <input type=\"checkbox\" value=\"content-sharing\"> Content Sharing <br/>\n            <input type=\"checkbox\" value=\"blog\"  disabled> Blog <br/>\n            <input type=\"checkbox\" value=\"e-commerce\"  disabled> E-commerce <br/>\n            <input type=\"checkbox\" value=\"presentation\"  disabled> Presentation <br/>\n            <input type=\"checkbox\" value=\"catalog\"  disabled> Online Business Catalog <br/>\n        </div>\n        <p class=\"not-implemented\">It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\n        </p>\n        <div class=\"text-center\">\n            <button type=\"submit\" class=\"btn btn-info\">Get suggestions</button>\n        </div>\n    </form><!-- END details section -->\n\n</div><!-- END container-->";
  },"useData":true});



this["JST"]["public/javascripts/templates/launch/launch.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<!-- <img class=\"cover2\" src=\"cover2.jpg\"> -->\n<img class=\"cover\" src=\"/images/finalcover.jpg\">\n<!-- <img class=\"cover\" src=\"cover.jpg\"> -->\n<nav class=\"main-menu navbar navbar-inverse\" role=\"navigation\">\n    <div class=\"container-fluid\">\n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n            <img class=\"small-logo\" src=\"/images/ourlogopng.png\">\n            <ul class=\"main-menu-list nav navbar-nav\">\n                <li><a href=\"#coming-soon\"> Sign in </a></li>\n                <li><a href=\"#\"> Get started </a></li>\n                <li><a href=\"#coming-soon\"> Coming soon </a></li>\n                <li><a href=\"#\"><img class=\"help-icon\" src=\"/images/help.png\"></a></li>\n            </ul>\n        </div>\n    </div>\n</nav> <!-- END  menu section -->\n\n\n\n<!-- container section -->\n<div class=\"main-container container-fluid\">\n    <!-- find user opinion section -->\n    <div class=\"text-center\">\n        <h2>Do you ever read Terms & Conditions?</h2>\n        <div class=\"row\">\n            <button type=\"button\" class=\"yes-btn btn btn-lg btn-default\">Yes</button>\n            <button type=\"button\" class=\"no-btn btn btn-lg btn-default\">No</button>\n        </div>\n    </div><!--  END find user opinion section -->\n    <!-- YES section -->\n    <div class=\"yes-answer hide\">\n        <h2>Lorem ipsum yeeeess</h2>\n        <p>explicatii: boring long and stuff</p>\n    </div> <!-- END YES section -->\n\n    <!-- NO section -->\n    <div class=\"no-answer hide\">\n        <h2>Lorem ipsum nooo</h2>\n        <p>explicatii: boring  long and stuff</p>\n    </div> <!-- END NO section -->\n    <!-- our solution -->\n    <div class=\"our-solution\">\n        Lorem ipsum....    \n    </div><!-- END our solution -->\n    <!-- get started section -->\n    <div class=\"get-started\">\n        <h2>Let`s get started!</h2>\n        <div class=\"row\">\n            <button type=\"button\" class=\"signup-btn btn btn-lg btn-default\" data-toggle=\"modal\" data-target=\"#signUpModal\">Sign up</button>\n            <button type=\"button\" class=\"login-btn btn btn-lg btn-default\" data-toggle=\"modal\" data-target=\"#logInModal\">Log in</button>\n        </div>\n    </div>\n    <!-- sign up modal -->\n    <div id=\"signUpModal\" class=\"modal fade\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n            <!-- <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Cancel</span></button> -->\n            <h4 class=\"modal-title\">Sign up</h4>\n          </div>\n          <div class=\"modal-body\">\n            <form role=\"form\">\n                <div class=\"row\">\n                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" name=\"first_name\" id=\"first_name\" class=\"form-control input-sm\" placeholder=\"First Name\">\n                        </div>\n                    </div>\n                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" name=\"last_name\" id=\"last_name\" class=\"form-control input-sm\" placeholder=\"Last Name\">\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control input-sm\" placeholder=\"Email Address\">\n                        </div>\n                    </div>\n                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <input type=\"text\" name=\"website\" id=\"website\" class=\"form-control input-sm\" placeholder=\"Website\">\n                        </div>\n                    </div>\n                </div>\n\n                <div class=\"row\">\n                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control input-sm\" placeholder=\"Password\">\n                        </div>\n                    </div>\n                    <div class=\"col-xs-6 col-sm-6 col-md-6\">\n                        <div class=\"form-group\">\n                            <input type=\"password\" name=\"password_confirmation\" id=\"password_confirmation\" class=\"form-control input-sm\" placeholder=\"Confirm Password\">\n                        </div>\n                    </div>\n                </div>\n                \n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-info\">Sign up</button>\n                </div>\n            </form>\n          </div>\n        </div><!-- /.modal-content -->\n      </div><!-- /.modal-dialog -->\n    </div><!--END sign up modal -->\n    \n    <!-- log in modal -->\n    <div id=\"logInModal\" class=\"modal fade\">\n      <div class=\"modal-dialog\">\n        <div class=\"modal-content\">\n          <div class=\"modal-header\">\n<!--                     <button type=\"button\" class=\"close\" data-dismiss=\"modal\"><span aria-hidden=\"true\">&times;</span><span class=\"sr-only\">Cancel</span></button> -->\n            <h4 class=\"modal-title\">Log in</h4>\n          </div>\n          <div class=\"modal-body\">\n            <form role=\"form\">\n                <div class=\"form-group\">\n                    <input type=\"email\" name=\"email\" id=\"email\" class=\"form-control input-sm\" placeholder=\"Email Address\">\n                </div>\n                <div class=\"form-group\">\n                    <input type=\"password\" name=\"password\" id=\"password\" class=\"form-control input-sm\" placeholder=\"Password\">\n                </div>\n                <div class=\"modal-footer\">\n                    <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\n                    <button type=\"submit\" class=\"btn btn-info\">Log in</button>\n                </div>\n            </form>\n          </div>\n        </div><!-- /.modal-content -->\n      </div><!-- /.modal-dialog -->\n    </div><!--END log in modal -->\n    <!-- END get started -->\n    <!-- coming soon section -->\n    <div class=\"coming-soon\">\n        <a class=\"linker\" name=\"coming-soon\"></a>\n        <h2>Coming Soon</h2>\n        <div id=\"carousel-example-generic\" class=\"carousel slide\" data-ride=\"carousel\">\n          <!-- Indicators -->\n          <ol class=\"carousel-indicators\">\n            <li data-target=\"#carousel-example-generic\" data-slide-to=\"0\" class=\"active\"></li>\n            <li data-target=\"#carousel-example-generic\" data-slide-to=\"1\"></li>\n            <li data-target=\"#carousel-example-generic\" data-slide-to=\"2\"></li>\n          </ol>\n\n          <!-- Wrapper for slides -->\n          <div class=\"carousel-inner\" role=\"listbox\">\n            <div class=\"item active\">\n              <img class=\"carousel-bkg transparent\" src=\"\" alt=\".\">\n              <div class=\"carousel-caption\">\n                    Lorem Ipsum 1\n              </div>\n            </div>\n            <div class=\"item\">\n              <img class=\"carousel-bkg transparent\" src=\"\" alt=\".\">\n              <div class=\"carousel-caption\">\n                Lorem Ipsum 2\n              </div>\n            </div>\n            <div class=\"item\">\n              <img class=\"carousel-bkg transparent\" src=\"\" alt=\".\">\n              <div class=\"carousel-caption\">\n                Lorem Ipsum 3\n              </div>\n            </div>\n          </div>\n\n          <!-- Controls -->\n          <a class=\"left carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"prev\">\n            <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n          </a>\n          <a class=\"right carousel-control\" href=\"#carousel-example-generic\" role=\"button\" data-slide=\"next\">\n            <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n          </a>\n        </div>\n    </div><!-- END coming soon section -->\n    <!-- contact us section -->\n    <div class=\"contact-us text-center\">\n        <h2>Contact us</h2>\n        <a href=\"https://github.com/koding/global.hackathon/blob/master/Teams/VamPerl/ABOUT.md\">VamPerl</a>\n        <p>vamperl@gmail.com</p>\n    </div><!-- END contact us section -->\n</div> <!-- END container section -->\n\n\n<!-- footer section -->\n<div class=\"main-footer text-center container-fluid\">\n    <div class=\"text-section social\">\n        <a href=\"#\"> Terms & Conditions </a>\n        <a href=\"#\"> Privacy Policy </a>\n    </div>\n    <div class=\"icons-section\">\n        <a href=\"#\"><i class=\"fa fa-facebook\"></i></a>\n        <a href=\"#\"><i class=\"fa fa-twitter\"></i></a>\n        <a href=\"#\"><i class=\"fa fa-linkedin\"></i></a>\n    </div>\n    <div class=\"koding-section\">\n        <p>This project was started at the hackathon organised by <a href=\"http://www.koding.com\">koding.com</a></p>\n    </div>\n</div><!-- END footer section -->";
  },"useData":true});