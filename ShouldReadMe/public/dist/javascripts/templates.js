this["JST"] = this["JST"] || {};

this["JST"]["public/javascripts/templates/editor/main.hbs"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  return "<nav class=\"menu navbar-fixed-top navbar navbar-inverse\" role=\"navigation\">\n            <div class=\"container-fluid\">\n                <!-- Collect the nav links, forms, and other content for toggling -->\n                <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n                    <img class=\"small-logo\" src=\"ourlogopng.png\">\n                    <ul class=\"main-menu-list nav navbar-nav\">\n                        <li><a href=\"#coming-soon\"> Sign in </a></li>\n                        <li><a href=\"#\"> Get started </a></li>\n                        <li><a href=\"#coming-soon\"> Coming soon </a></li>\n                        <li><a href=\"#\"><img class=\"help-icon\" src=\"help.png\"></a></li>\n                    </ul>\n                </div>\n            </div>\n        </nav> <!-- END  menu section -->\n\n        <div class=\"container-fluid editor-container\">\n            <!-- instructions -->\n            <div class=\"instructions\">\n                <h3>How to use it</h3>\n                <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\n                </p>\n            </div><!-- END instructions -->\n            <!-- grouped content -->\n            <div class=\"grouped-content row\">\n                <!-- customize section -->\n                <div class=\"customization-section col-md-3\">\n                    <!-- icons section -->\n                    <div class=\"icons-subsection\">\n                        <h3>Icons</h3>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"1\"></div>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"2\"></div>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"3\"></div>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"4\"></div>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"5\"></div>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"6\"></div>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"7\"></div>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"8\"></div>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"9\"></div>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"10\"></div>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"11\"></div>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"12\"></div>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"13\"></div>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"14\"></div>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"15\"></div>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"16\"></div>\n                        <div class=\"icon-container\"><img src=\"images/batman.png\" class=\"default-icon\" id=\"17\"></div>\n                    </div><!-- END icons section-->\n                    <!-- FAQ section -->\n                    <div class=\"faq-section\">\n                        <div class=\"faq-head row\">\n                            <h4>Frequently Asked Questions</h4>\n                            <div class=\"toggle on toggle-light faq-toggle\"></div>\n                        </div>\n                        <div class=\"faq-content hide\">\n                            <p>AICI VOR FI FAQ-URILE</p>\n                        </div>\n                    </div><!-- END FAQ section -->\n                    <!-- quiz section -->\n                    <div class=\"quiz-section\">\n                        <div class=\"quiz-head row\">\n                            <h4>Quiz</h4>\n                            <div class=\"toggle on toggle-light quiz-toggle\"></div>\n                        </div>\n                        <div class=\"quiz-content hide\">\n                            <p>AICI VOR FI QUIZURILE</p>\n                        </div>\n                    </div><!-- END quiz section -->\n                </div><!-- END customize section-->\n                <!-- preview section -->\n                <div class=\"preview-section col-md-6\">\n                    <h3>Preview</h3>\n                    <div class=\"preview-container\" >\n                        \n                        <!-- example -->\n                        <div class=\"preview-item\" id=\"1\">\n                            <div class=\"icon-colors\">\n                                <ul>\n                                    <li class=\"white-bgk\" id=\"white\"></li>\n                                    <li class=\"red-bkg\" id=\"#e8221c\"></li>\n                                    <li class=\"green-bkg\" id=\"#59AC59\"></li>\n                                    <li class=\"blue-bkg\" id=\"#65B5EB\"></li>\n                                </ul>\n                            </div>\n                            <div class=\"preview-icon-border\"><img src=\"images/batman.png\" class=\"preview-icon\"></div>\n                            <input type=\"text\" name=\"tooplip_text\" placeholder=\"Tooltip\">\n                        </div><!-- END example -->\n                        <!-- example -->\n                        <div class=\"preview-item\" id=\"1\">\n                            <div class=\"icon-colors\">\n                                <ul>\n                                    <li class=\"white-bgk\" id=\"white\"></li>\n                                    <li class=\"red-bkg\" id=\"red\"></li>\n                                    <li class=\"green-bkg\" id=\"green\"></li>\n                                    <li class=\"blue-bkg\" id=\"blue\"></li>\n                                </ul>\n                            </div>\n                            <div class=\"preview-icon-border\"><img src=\"images/batman.png\" class=\"preview-icon\"></div>\n                            <input type=\"text\" name=\"tooplip_text\" placeholder=\"Tooltip\">\n                        </div><!-- END example -->\n                        <!-- example -->\n                        <div class=\"preview-item\" id=\"1\">\n                            <div class=\"icon-colors\">\n                                <ul>\n                                    <li class=\"white-bgk\" id=\"white\"></li>\n                                    <li class=\"red-bkg\" id=\"red\"></li>\n                                    <li class=\"green-bkg\" id=\"green\"></li>\n                                    <li class=\"blue-bkg\" id=\"blue\"></li>\n                                </ul>\n                            </div>\n                            <div class=\"preview-icon-border\"><img src=\"images/batman.png\" class=\"preview-icon\"></div>\n                            <input type=\"text\" name=\"tooplip_text\" placeholder=\"Tooltip\">\n                        </div><!-- END example -->\n                        <!-- example -->\n                        <div class=\"preview-item\" id=\"1\">\n                            <div class=\"icon-colors\">\n                                <ul>\n                                    <li class=\"white-bgk\" id=\"white\"></li>\n                                    <li class=\"red-bkg\" id=\"red\"></li>\n                                    <li class=\"green-bkg\" id=\"green\"></li>\n                                    <li class=\"blue-bkg\" id=\"blue\"></li>\n                                </ul>\n                            </div>\n                            <div class=\"preview-icon-border\"><img src=\"images/batman.png\" class=\"preview-icon\"></div>\n                            <input type=\"text\" name=\"tooplip_text\" placeholder=\"Tooltip\">\n                        </div><!-- END example -->\n                    </div>\n                        \n                </div><!-- END preview section-->\n                <!-- tips section -->\n                <div class=\"tips-section col-md-3\">\n                    <h3>Tips</h3>\n                    <div class=\"tips-content\">\n                        <!-- example -->\n                        <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\n                        </p>\n                        <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\n                        </p>\n                        <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\n                        </p>\n                        <p>Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum\n                        </p><!--  END tips example -->\n                    </div>\n                </div><!-- END tips section-->\n            </div><!-- END grouped content -->\n        </div><!-- END container-->";
  },"useData":true});