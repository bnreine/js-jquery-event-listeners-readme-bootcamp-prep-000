
function  getIt() {
  $('p').addEventListener('click', function(event) {
    alert('"Hey"!');
   })
}

function frameIt() {
  $('img').addEventListener('load', function(event) {
    $('img').setAttribute('class', 'tasty');
  })
}



/*


+ Define a function `pressIt` that does not accept a parameter. The function
should bind a `keydown` event to the input field of the form that alerts a user
when they have pressed the `G` key.
*/


$(document).ready(function(){
  getIt();
  frameIt();
});
