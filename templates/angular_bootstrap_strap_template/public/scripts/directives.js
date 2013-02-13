//###################Creating the directives object to hold all the directives###################
var directives         = {};
//####################################################
//###################START toggleDown#################
directives.toggleDown  = function(){
  var linker = function(scope,element,attrs) {
    element.on('click', function(){
      $(attrs.target).slideToggle();
    });
  };
  return {
    restrict:'A',
    link: linker
  }
};
//###################END toggleDown###################
//####################################################
