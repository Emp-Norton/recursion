var getElementsByClassName = function(className) {
  var elements = document.body
  var elementsOfClass = [];

  var checkNode = function(node){
    if (node.classList){
  	 if (node.classList.contains(className)){
       elementsOfClass.push(node)
  	 } 
    }
    if (node.childNodes) {
      for (var childIdx = 0; childIdx < node.childNodes.length; childIdx++){
        checkNode(node.childNodes[childIdx])
      }
    } 
  }
  	 
  checkNode(elements)
  return elementsOfClass
};
