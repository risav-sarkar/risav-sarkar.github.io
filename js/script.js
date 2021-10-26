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
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  saveForm(name, email, message);

  let loader = document.querySelector(".loader");
  let check = document.querySelector(".check");

  loader.classList.add("active");
  loader.addEventListener("animationend", function () {
    check.classList.add("active");
  });

  document.getElementById("contactForm").reset();
}

function saveForm(name, email, message) {
  let newContactRef = contactRef.push();
  newContactRef.set({ name: name, email: email, message: message });
}

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1500,
  delay: 200,
  // reset: true
});

sr.reveal(
  `.hero-section-container, .title, .sectionTitleBar, .cards, .timeline, .contact-body-container, .footerIcons, .floaterHeader`
);
sr.reveal(`.skills, .card_animation, .timelineBody_animation`, {
  interval: 100,
});
sr.reveal(`.heroImage`, { origin: "left" });
sr.reveal(`.heroText, .styled-input`, { origin: "right" });
