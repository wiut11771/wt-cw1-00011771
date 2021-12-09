// SITE HEADER TOGGLER WHILE MENU IS ON BURGER
const elSitenavBtnToggler = document.querySelector(".js-header__toggler");
const elHeader = document.querySelector(".header");
// HEADER TOGGLER
elSitenavBtnToggler.addEventListener("click", function () {
  elHeader.classList.toggle("header--open");
})



// PROJECT DATA
const projects = [{
  img: "images/project1.png",
  title: "Cambridge",
  desc: "Website for the Cambridge learning center of Uzbekistan. A learning center is a specialized place within a classroom that offers students engaging and intriguing opportunities to practice, enrich, reteach, and increase their learning.",
  link: "https://cambridgeonline.uz/uz"
  },
  {
    img: "images/project2.png",
    title: "Internation",
    desc: "Website for the Cambridge learning center of Uzbekistan. A learning center is a specialized place within a classroom that offers students engaging and intriguing opportunities to practice, enrich, reteach, and increase their learning.",
    link: "https://www.inter-nation.uz/"
  },

  {
    img: "images/project3.png",
    title: "Mover.uz",
    desc: "Mover is a free video-sharing website that allows you to view videos online. You may also make and share your own videos. Mover, which was launched in 2010, has grown to become one of the most popular websites on the Internet, hours of video watched each month.",
    link: "https://mover.uz/?utm_source=uydaqoling_uz"
  }
];

// CONNECTING VAR TO THE LIST
const elProjectsList = document.querySelector('.projects-list');

// GOING THROUGH THE ALL PROJECTS AND CREATING ELEMENTS
  for(let project of projects){
    var projectItem = document.createElement('li');
    var projectImg = document.createElement('img');
    var projectTitle = document.createElement('h3');
    var projectDesc = document.createElement('p');
    var projectWrapper = document.createElement("div");
    var projectsLink = document.createElement("a");
    // BLANK TO OPEN NEW TAB
    projectsLink.target = "_blank"
    // LINK ASSIGNING
    projectsLink.href = project.link;
    // ADDING CLASS
    projectsLink.classList.add("project-link");
    // TITLE SETTING
    projectTitle.textContent = project.title;
    // IMG SETTING
    projectImg.src = project.img;
    // TEXT SETTING
    projectDesc.textContent = project.desc;

    // ADDING CLASSES
    projectItem.className = "projects-item";
    projectTitle.className = "projects-name";
    projectImg.className = "projects-img";
    projectDesc.className = "projects-desc";
    projectWrapper.className = "projects-content";

    // SETTING WIDTH HEIGHT
    projectImg.width = 500;
    projectImg.height = 500;

    // APPENDING ELEMENTS TO EACH OTHER
    projectWrapper.appendChild(projectTitle);
    projectWrapper.appendChild(projectDesc);
    projectsLink.appendChild(projectImg);
    projectsLink.appendChild(projectWrapper);
    projectItem.appendChild(projectsLink);
    elProjectsList.appendChild(projectItem);

  }
