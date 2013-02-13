//###################Creating the directives object to hold all the directives###################
var directives         = {};
//####################################################
//###################START toggleDown#################
directives.markdown  = function(){
  var converter = new Showdown.converter();
  var linker    = function(scope,element,attrs) {
    var htmlText = converter.makeHtml(element.text());
    element.html(htmlText);
  };
  return {
    restrict:'E',
    templateUrl: "README.md",
    link: linker
  }
};
//###################END toggleDown###################
//####################################################
