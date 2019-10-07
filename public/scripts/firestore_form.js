const userList = document.querySelector('#user-list');
const form = document.querySelector('#add-user-form');

// create element & render user
function renderUser(doc){
    let li = document.createElement('li');
    let name = document.createElement('span');
    let company = document.createElement('span');
    let email = document.createElement('span');
    let cross = document.createElement('div');

    // html5 feature data-id
    li.setAttribute('data-id', doc.id);
    name.textContent = doc.data().name;
    company.textContent = doc.data().company;
    email.textContent = doc.data().email;
    cross.textContent = 'x';

    li.appendChild(name);
    li.appendChild(company);
    li.appendChild(email);
    li.appendChild(cross);

    userList.appendChild(li);

    // deleting data
    cross.addEventListener('click', (e) => {
        e.stopPropagation();
        // this is a line to research further in how it deletes the document from collection
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('users').doc(id).delete();
    });
}

// getting data
db.collection('users').orderBy('company').get().then(snapshot => {
    snapshot.docs.forEach(doc => {
        renderUser(doc);
    });
});

// saving data
form.addEventListener('submit', (e) => {
    if (globalUser) { // if globalUser != null i.e. someone is logged in
        e.preventDefault();
        db.collection('users').add({
            name: form.name.value,
            company: form.company.value,
            email: form.email.value,
        });
        form.name.value = '';
        form.company.value = '';
        form.email.value = '';
    } else {
        alert('must login first to save to firebase');
    }

});

// updating records (console demo)
// db.collection('users').doc('DOgwUvtEQbjZohQNIeMr').update({
//     name: 'mario world'
// });

// db.collection('users').doc('DOgwUvtEQbjZohQNIeMr').update({
//     city: 'hong kong'
// });

// setting data
// db.collection('users').doc('DOgwUvtEQbjZohQNIeMr').set({
//     city: 'hong kong'
// });