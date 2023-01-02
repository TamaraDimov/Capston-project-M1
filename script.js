// portfolio template
const workCard = (portfolioData) => {
  let content = "";
  portfolioData.forEach((workData) => {
    content += `
  <div class="speaker">
  <div class="speaker_box">
    <img class="speaker_face image" src="${workData.image}" alt="speaker image ">
  </div>
  <div class="speaker-info">
    <p class="name">${workData.name}</p>
    <p class="job">${workData.job}</p>
    <div class="grey-line"></div>
    <p class="subject">${workData.subject}</p>
    </div>
      </div>`;
  });
  return content;
};

// WINDOWS ON LOAD
window.addEventListener("load", () => {
  const workData = [
    {
      id: "1",
      image: "img/dekan.jpg",
      name: "Dr. Darko Danev",
      job: "Dean of the Mechanical Faculty",
      subject:
        "Scientific interest: Dynamics of motor vehicles, Methods of automated processing of test data",
    },
    {
      id: "2",
      image: "img/Tanja.jpg",
      name: "Dr. Tatjana Kandikjan",
      job: "Full time professor at MFS",
      subject:
        "Training courses in Computer-Aided Mechanical Design, Training courses in Computer-Aided Industrial Design",
    },
    {
      id: "3",
      image: "img/ile.jpg",
      name: "Dr. Ile Mircevski",
      job: "Assistent professor at MFS",
      subject:
        "Participation in an international project Bildung eines „überregionalen SOE Zentrums rlsruher Modell“",
    },
    {
      id: "4",
      image: "img/Risto.jpg",
      name: "Dr. Risto Tashevski ",
      job: "Full time professor at MFS",
      subject:
        "Engineering Graphics, Graphic Communication, Technical Drawing and Draft Geometry",
    },
    {
      id: "5",
      image: "img/Nikola.jpg",
      name: "Dr. Nikola Tuneski",
      job: "Full time professor",
      subject:
        "Head of the project:Theory and application of univalent functions",
    },
    {
      id: "6",
      image: "img/bobi.jpg",
      name: "Mr. Boban Stefanoski",
      job: "Tool shop supervisor",
      subject:
        "MSc in mechanical engineering, 30 years of experience in the field of mechanical design",
    },
  ];
  // function to load portfolio sections dynamically when page loads
  function loadPortfolio(callBack = () => null) {
    const workSectionElement = document.querySelector("#portfolio");
    workSectionElement.innerHTML = workCard(workData);
    return callBack();
  }

  loadPortfolio(() => {
    const portfolioButton = document.querySelectorAll(".portfolioButton");
    Array.from(portfolioButton).forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
      });
    });
  });
});

//
const toggleNavbar = () => {
  document.querySelector(".main-container").classList.toggle("show");
};

document.querySelector(".toggleNav").addEventListener("click", () => {
  toggleNavbar();
});

document.querySelector(".exit").addEventListener("click", () => {
  toggleNavbar();
});

const menuBtn = document.querySelectorAll(".menuBtn");
const menuArr = Array.from(menuBtn);
menuArr.forEach((element) => {
  element.addEventListener("click", () => {
    if (window.screen.width < 769) {
      toggleNavbar();
    }
  });
});
