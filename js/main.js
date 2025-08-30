//Dynamic Render
// SKILLS ------------------------------
const skills = [
  { name: "React & React Native", imgsrc: "img/react.svg", value: "ninety" },
  { name: "NextJs", imgsrc: "img/nextjs.svg", value: "ninety" },
  { name: "NodeJs", imgsrc: "img/nodejs.svg", value: "ninety" },
  { name: "ExpressJS", imgsrc: "img/expressjs.svg", value: "ninety" },
  {
    name: "Javascript",
    imgsrc: "img/javascript.svg",
    value: "ninety",
  },
  { name: "HTML", imgsrc: "img/html.svg", value: "eighty" },
  { name: "CSS", imgsrc: "img/css.svg", value: "eighty" },
  { name: "MongoDB", imgsrc: "img/mongodb.svg", value: "eighty" },
  { name: "Firebase", imgsrc: "img/firebase.svg", value: "eighty" },
  { name: "NET Core", imgsrc: "img/netcore.svg", value: "sixty" },
  { name: "Java", imgsrc: "img/java.svg", value: "sixty" },
  { name: "Python", imgsrc: "img/python.svg", value: "sixty" },
  { name: "C", imgsrc: "img/c.svg", value: "sixty" },
  { name: "C#", imgsrc: "img/csharp.svg", value: "sixty" },
];

const skillsDiv = document.getElementById("ID_skills");
skillsDiv.innerHTML = `
    ${skills
      .map(
        (skill) => `
            <div class="skills">
              <img src=${skill.imgsrc} />
              <div class="skillsDetails">
                  <h3>${skill.name}</h3>
                <div class="bar">
                  <div class=${skill.value}></div>
                </div>
              </div>
            </div>`
      )
      .join("")}
`;

// PROJECTS ------------------------------
const projects = [
  {
    name: "Medimate",
    imgsrc: "img/medimate.png",
    url: "./projects/medimate.html",
  },
  {
    name: "Devcord",
    imgsrc: "img/devcordCover.png",
    url: "./projects/devcord.html",
  },
  {
    name: "Notes",
    imgsrc: "img/notesCover.png",
    url: "./projects/notes.html",
  },
  {
    name: "MoviesX",
    imgsrc: "img/moviesxCover.png",
    url: "./projects/moviesx.html",
  },
];

const projectsDiv = document.getElementById("ID_projects");
projectsDiv.innerHTML = `
    ${projects
      .map(
        (project) => `
            <div class="card">
              <div class="cardImage card_animation">
                <img src=${project.imgsrc} />
              </div>
              <div class="cardText card_animation">
                <h2>${project.name}</h2>
                <a
                  href=${project.url}
                  target="_self"
                  rel="noopener noreferrer"
                >
                  <button>View</button></a
                >
              </div>
            </div>`
      )
      .join("")}
`;

// TIMELINE ------------------------------
const timelineElements = [
  {
    name: "Calcutta Public School",
    time: "∞ - 2020",
    content:
      "Completed my schooling journey here, culminating with success in the ICSE and ISC exams.",
    icon: "fas fa-school",
  },
  {
    name: "B.P. Poddar Institute Of Management And Technology",
    time: "2020-2024",
    content:
      "Graduated with a BTech in Computer Science Engineering, equipped with both theoretical knowledge and practical skills for the professional world.",
    icon: "fas fa-graduation-cap",
  },
  {
    name: "H4U Pvt Ltd",
    time: "2022",
    content:
      "App Developer - Developed mobile applications on React Native and deployed on Play Store",
    icon: "fas fa-briefcase",
  },
  {
    name: "ICRA Analytics Ltd",
    time: "2023",
    content:
      "Junior Software Developer - Worked on SQL, ASP.NET and its various technologies.",
    icon: "fas fa-briefcase",
  },
  {
    name: "PwC India",
    time: "2024 - Present",
    content: "Risk Consultant - Exploring the world of cybersecurity.",
    icon: "fas fa-briefcase",
  },
];

const timelineDiv = document.getElementById("ID_timelineElements");
timelineDiv.innerHTML = `
    ${timelineElements
      .map(
        (e) => `
            <div class="timeline-container">
              <div class="timeline-icon">
                <i class="${e.icon}"></i>
              </div>
              <div class="timelineBody timelineBody_animation">
                <div class="timeline-title">
                  <p class="timeline-title-header">
                  ${e.name}
                  </p>
                  <p class="date">${e.time}</p>
                </div>
                <p class="timeline-text">
                  ${e.content}
                </p>
              </div>
            </div>`
      )
      .join("")}
`;

const sr = ScrollReveal({
  origin: "top",
  distance: "50px",
  duration: 1500,
  delay: 200,
  // reset: true
});

sr.reveal(
  ` .title, .sectionTitleBar, .cards, .timeline, .contact-text, .input-container, .floaterHeader, .imageBannerAnimation, .projectImageAnimation, .projectAnimation, .backBtn`
);
sr.reveal(
  `.links, .skills, .card_animation, .timelineBody_animation, .textBannerAnimation, .techLogosAnimation, .websiteImageAnimation`,
  {
    interval: 100,
  }
);
sr.reveal(`.heroImage`, { origin: "left" });
sr.reveal(`.heroText`, { origin: "right" });

var rellax = new Rellax(".parallax");
