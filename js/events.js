//alert('hey sarah');



function  getIt() {
  $('p').addEventListener('click', function(event) {
    alert('"Hey"!');
   })
}





/*
  it('getIt() binds a click event to the paragraph', function() {
    window.alert = expect.createSpy()

    window.getIt();

    window.$('p')[0].click()

    expect(window.alert).toHaveBeenCalled();
  });


+ Define a function `getIt` that does not accept a parameter. The function
should bind a `click` event to the `p` tag. When the paragraph is clicked, the
function should alert `"Hey!"`.
*/


$(document).ready(function(){
  getIt();
});
