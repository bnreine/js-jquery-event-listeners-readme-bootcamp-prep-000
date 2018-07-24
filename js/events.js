
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
  it('frameIt() binds an event that frames the minion when the page loads', function() {
    window.frameIt()

    const img = window.$('img')

    img.trigger('load');

    expect(img.attr("class")).toEqual("tasty");
  });


+ Define a function `frameIt` that does not accept a parameter. The function
should bind the `load` event that adds the class `tasty` to the image to add a
red frame to the image.
*/

$(document).ready(function(){
  getIt();
  frameIt();
});
