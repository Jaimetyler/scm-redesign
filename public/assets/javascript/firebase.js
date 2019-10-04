console.log('hi, from firebase');

// Saves a new message on the Cloud Firestore.
// function inquiry(messageText) {
//     // Add a new message entry to the Firebase database.
//     return firebase.firestore().collection('inquiry').add({
//         firstName:,
//         lastName: ,
//         email: ,
//         company: ,
//         service: ,
//         comment: ,
//         timestamp: firebase.firestore.FieldValue.serverTimestamp()
//     }).catch(function (error) {
//         console.error('Error writing new message to Firebase Database', error);
//     });
// }

export default inquiry;
