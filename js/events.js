
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

function pressIt() {
  $('#typing').addEventListener('keydown', function(key) {
    if (key==='G') {
      alert('You pressed the "G" key!');
    }
  })
}

/*
  describe('pressIt()', () => {
    it('pressIt() binds an event that alerts the user when the G key was pressed down', function() {
      window.alert = expect.createSpy()

      window.pressIt();

      const input = window.$('#typing');
      const event = window.$.Event('keydown', { which: 71 })
      input.trigger(event)

      expect(window.alert).toHaveBeenCalled()
    })

    it('does not alert if another key is pressed', () => {
      window.alert = expect.createSpy()

      window.pressIt();

      const input = window.$('#typing');
      const event = window.$.Event('keydown', { which: 70 })
      input.trigger(event)

      expect(window.alert).toNotHaveBeenCalled()
    })
  })

+ Define a function `pressIt` that does not accept a parameter. The function
should bind a `keydown` event to the input field of the form that alerts a user
when they have pressed the `G` key.
*/


$(document).ready(function(){
  getIt();
  frameIt();
  pressIt();
});
