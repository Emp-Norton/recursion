// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  var elements = document.all
  var elementsOfClass = [];

  for (var elementIndex = 0; elementIndex < elements.length; elementIndex++){
  	if (elements[elementIndex].className.includes(className)) elementsOfClass.push(elements[elementIndex])
  }
  return elementsOfClass
};
