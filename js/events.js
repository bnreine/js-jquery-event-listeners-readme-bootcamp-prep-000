
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

*/


$(document).ready(function(){
  getIt();
  frameIt();
});
