
function  getIt() {
  $('p')[0].addEventListener('click', function(event) {
    alert('"Hey"!');
   })
}

function frameIt() {
  window.addEventListener('load', function(event) {
    $('img')[0].setAttribute('class', 'tasty');
  })
}

function pressIt() {
  $('#typing')[0].addEventListener('keydown', function(event) {
    if ((event.key==='G') || (event.key==='g')) {
      alert('You pressed the "G" key!');
    }
  })
}

function submitIt() {
  $('form')[0].addEventListener('submit', function(event) {
    alert('"Your form is going to be submitted now."')
  }  )
}

/*
  it('submitIt() binds an event that alerts "Your form is going to be submitted now." when the form is submitted', function() {
    window.alert = expect.createSpy()

    window.submitIt();

    const form = window.$('form')[0]

    window.$(form).trigger('submit')

    expect(window.alert).toHaveBeenCalledWith('Your form is going to be submitted now.');
  });

});

*/



$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
  submitIt();
});
