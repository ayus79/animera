// unique firebase object

var firebaseConfig = {
  apiKey: "AIzaSyDVJuv4ncsqAjfuQOfkv8dHM0AiKMdmk0s",
  authDomain: "animera-contactform-9b07b.firebaseapp.com",
  projectId: "animera-contactform-9b07b",
  storageBucket: "animera-contactform-9b07b.appspot.com",
  messagingSenderId: "115047189106",
  appId: "1:115047189106:web:935b4beb60fcb5520910eb",
  measurementId: "G-V59MST3BNW",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var firestore = firebase.firestore();

//access database collection
const db = firestore.collection("formData");

//get submit form
let submitButton = document.getElementById("button");

//create event listener for form submission
submitButton.addEventListener("click", (e) => {
  //prevent default form submission
  e.preventDefault();

  // get form value
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  //save form Data to firebase
  db.doc()
    .set({
      name: name,
      email: email,
      message: message,
    })
    .then(() => {
      window.alert("data saved");
    })
    .catch((error) => {
      window.alert(error);
    });
});


