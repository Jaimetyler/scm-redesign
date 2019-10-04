console.log('Yo its the app!');

// ********** Navbar Scroll  ********** //
$(document).ready(function() {
  $(window).scroll(function() {
    // check if scroll event happened
    if ($(document).scrollTop() > 50) {
      // check if user scrolled more than 50 from top of the browser window
      $('.navbar-fixed-top').css('background-color', '#f8f8f8'); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
    } else {
      $('.navbar-fixed-top').css('background-color', 'transparent'); // if not, change it back to transparent
    }
  });
});

// ********** Jumbotron Image as Background ********** //
$('.jumbotron').css({ height: $(window).height() + 'px' });

$(window).on('resize', function() {
  $('.jumbotron').css({ height: $(window).height() + 'px' });
});

// ********** Firebase login********** //

// ********** Firebase form save********** //

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastname');
const email = document.getElementById('emailAddress');
const company = document.getElementById('company');
const serviceType = document.getElementById('serviceType');
const comment = document.getElementById('comment');

function onMessageFormSubmit(e) {
  e.preventDefault();
  // Check that the user entered a message and is signed in.
  if (email.value && checkSignedInWithMessage()) {
    saveInquiry(Inquiry.value).then(function() {
      // Clear message text field and re-enable the SEND button.
      resetMaterialTextfield(messageInputElement);
      toggleButton();
    });
  }
}

function saveMessage(messageText) {
  // Add a new message entry to the Firebase database.
  return firebase
    .firestore()
    .collection('messages')
    .add({
      name: getUserName(),
      text: messageText,
      profilePicUrl: getProfilePicUrl(),
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    .catch(function(error) {
      console.error('Error writing new message to Firebase Database', error);
    });
}
