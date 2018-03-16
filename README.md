# WikipediaViewer

function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  // Only change code below this line
 // var property = Object.getOwnPropertyNames(source);
  
 // var key = Object.keys(source);
  
  var property = Object.entries(source)[0][0];
  
  var value = Object.entries(source)[0][1];
  
  console.log(Object.entries(source)[0][0] + " " + Object.entries(source)[0][1]);
  
  collection.forEach( function (arrayItem)
{
    //console.log(Object.entries(arrayItem));
    
  for(var i = 0; i<Object.entries(arrayItem).length; i++){
      if(property == Object.entries(arrayItem)[i][0] && value == Object.entries(arrayItem)[i][1]){
       arr.push(arrayItem);
     }
  }

    
});
  console.log("Results");
  console.log(arr);
  // Only change code above this line
  return arr;
}

whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 });
