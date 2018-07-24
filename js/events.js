function  getIt() {
  $('p').addEventListener('click', function(event) {
    alert('"Hey"!');
   })
}


/*



+ Define a function `frameIt` that does not accept a parameter. The function
should bind the `load` event that adds the class `tasty` to the image to add a
red frame to the image.
*/

$(document).ready(function(){
  getIt();
});
