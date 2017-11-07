var stringifyJSON = function(obj) {
	var constructedJSON = [];
	var primString = '';
	var primitives = [Number, String, Boolean]
	var voids = [null, undefined];

	if (voids.includes(obj)){
		return "null"
	}

	var type = obj.constructor
	if (primitives.includes(type)){
		if (type === String){
			return `"${obj.toString()}"`;
		} else {
			return obj.toString();
		}	
	} else { // non primitives
		if (obj.constructor === Array){ // arrays 
			if (obj.length){
				for (var arrIdx = 0; arrIdx < obj.length; arrIdx++){
					constructedJSON.push(stringifyJSON(obj[arrIdx]))
				}
			} else { // empty array 
				return '[]'
			}
		} else { // objects
		  var keys = Object.keys(obj)
			if (keys.length){
        for (var key in obj){
        	if (key !== "functions" && key !== "undefined")
          constructedJSON.push(`"${key}":${stringifyJSON(obj[key])}`);
        }
			} else { // empty object
				return '{}'
			}
		}
	}
  if (obj.constructor === Array) return `[${constructedJSON.join(",")}]`
  if (obj.constructor === Object) return `{${constructedJSON.join(",")}}`
  return primString
	//return primString
};
// if !obj, return null as string
// if object is primitive, convert to string and return.
	// else if object is empty, return empty object of like type.
	// else if object has members, stringifyJSON each member + add to array 
		// join array and return 