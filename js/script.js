var firebaseConfig = {
  apiKey: "AIzaSyCs6QH6nFTzOZYHlFbwqdsQE9X_t7A2fKg",
  authDomain: "website-48fd1.firebaseapp.com",
  projectId: "website-48fd1",
  storageBucket: "website-48fd1.appspot.com",
  messagingSenderId: "1032632504391",
  appId: "1:1032632504391:web:107e03dc8e2922887fe162",
  measurementId: "G-VYDBBWVQLD",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

let contactRef = firebase.database().ref("infos");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;

  saveForm(name, email, message);
  document.getElementById("contactForm").reset();
}

function saveForm(name, email, message) {
  let newContactRef = contactRef.push();
  newContactRef.set({ name: name, email: email, message: message });
}
