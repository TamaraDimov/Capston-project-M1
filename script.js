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
    const workSectionElemnt = document.querySelector("#portfolio");
    workSectionElemnt.innerHTML = workCard(workData);
    return callBack();
  }

  loadPortfolio(() => {
    const portfolioButton = document.querySelectorAll(".portfolioButton");
    Array.from(portfolioButton).forEach((element) => {
      element.addEventListener("click", (e) => {
        e.preventDefault();
        const id = element.getAttribute("data-id");
        const filter = workData.filter((data) => data.id === id);

        // show modal
        showModal(filter[0], closeModal);
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
    toggleNavbar();
  });
});

// <!-- about page  -->

const about = (about) => {
  let content = "";
  about.forEach((about) => {
    content += `
<article class="about" id="about">
<section class="main-container-about">
  <nav class="first-header">
    <div class="logo">
      <i style="font-size: 48px" class="fas logo">&#xf7d9;</i>
    </div>
    <div class="toggle menu">
      <a href="#" class="toggleNav">
        <i style="font-size: 24px" class="fas">&#xf0c9;</i></a
      >
      <div class="exit">
        <a href="#" class="exit toggleNav">
          <i style="font-size: 24px" class="fas">&#xf00d;</i>
        </a>
      </div>
      <ul class="desktopMenu">
        <li class="menuBtn"><a href="#about">About</a></li>
        <li class="menuBtn"><a href="#program">Program</a></li>
        <li class="menuBtn"><a href="#join">Join</a></li>
        <li class="menuBtn"><a href="#partners">Sponsor</a></li>
        <li class="menuBtn"><a href="#news">News</a></li>
      </ul>
      <button class="sign-in">JOIN</button>
    </div>
  </nav>
  <div class="main-page">
    <h3 class="welcome">Welcome to the world of Mechanical Design!!!</h3>
    <h1 class="title">NEW WAYS OF TECHNICAL DRAWING</h1>
    <p class="description-about">
      Technical drawings today
Before we look at the future of technical drawings, we should look at their present function in an enterprise.
Technical drawings are an important way of communication between all parties involved in order processing. The workpiece or assembly is completely described for production without any further inquiries. Therefore, drawings are an important part of the contract in the procurement process.
Creating a drawing is very time-consuming, even with an existing 3D model. It takes time to position all the required views on the sheet and add all the necessary dimensions and annotations. Often queries come from the production department, even though the components are supposed to be completely described within the drawing!
    </p>
    <div class="contact-about">
    <p>Please contact us per EMAIL for any further questions about technical drawing academy</p>
    <p class="email">technical.drawing@mfs.org</p>
  </div>
  </div>
</section>

<section class="past">
  <div class="past-meeting">
    <h3 class="see-past">See the past TD classes</h3>
    <div class="red-line">
    </div>
    <p4 class="take_look">Take a look at previous classes in the Academy</p4>
  </div>
  <div class="classes">
    <div class="overlay">
    <h2 class="">2022</h2>
    <p>100 students succesfully finished</p>
  </div>
  </div>

  <div class="classes2">
    <div class="overlay"></div>
    <h2 class="">2021</h2>
    <p>80 students succesfully finished</p>
  </div>
</div>
</section>
<section class="footer">
  <div class="title1">
   <h2 class="title1">Partner</h2>
   <div class="red-line">
   </div>
     </div>
   <div class="partners" id="partners">
    <a target="_blank" href="https://www.mf.ukim.edu.mk/" alt="MFS main page"><img class="icon-logo" src="img/mfs.png" alt="mfs main page"/></a>
    <a target="_blank" href="https://github.com/" alt="github main page"><img class="icon-logo" src="img/github-icon-38976.png" alt="github main page"/></a>
    <a target="_blank" href="https://www.google.com/" alt="Google main page"><img class="icon-logo" src="img/580b57fcd9996e24bc43c51f.png" alt="Google main page"/></a>
    <a target="_blank" href="https://www.solidworks.com/" alt="Google main page"><img class="icon-logo" src="img/sw.png" alt="SolidWorks main page"/></a>
  </div>
  <div title="bottom-element" class="bottom-element">
    <i style="font-size: 48px" class="fas logo-icon">&#xf7d9;</i>
    <div class="title-footer">
      <h6>Mechanical Design Academy</h6>
      <p class="author">Tamara Dimov</p>
    </div>
   </div>
    </div>
  </div>
</section>
</article>`;
  });
  return content;
};
// function to load about sections dynamically when page loads
function loadAbout(callBack = () => null) {
  const workSectionElemnt = document.querySelector("#about");
  workSectionElemnt.innerHTML = about(about);
  return callBack();
}
