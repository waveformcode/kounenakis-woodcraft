//Navigation button On/off
const hamburgerBtn = document.querySelector(".hamburger-button");
const navBar = document.querySelector(".nav-menu");

hamburgerBtn.addEventListener("click", () => {
  navBar.classList.toggle("nav-menu-open");
  document.body.classList.toggle("no-scroll");
});

//hamburger button change to X
hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("hamburger-button-open");
});

//Mobile remove open navbar when click on links
const navLinks = document.querySelectorAll(".nav-menu a");
for (let link of navLinks) {
  link.addEventListener("click", () => {
    navBar.classList.remove("nav-menu-open");
    document.body.classList.remove("no-scroll");
    hamburgerBtn.classList.remove("hamburger-button-open");
  });
}

//Header white background as soon as scrolling starts
const siteHeader = document.querySelector(".site-header");

const headerOnScroll = () => {
  const scrolled = window.scrollY > 10;
  siteHeader.classList.toggle("site-header-solid", scrolled);
};

window.addEventListener("scroll", headerOnScroll, { passive: true });
headerOnScroll();

//Growth rings animation when visible
const growth = document.querySelector(".growth");

if ("IntersectionObserver" in window) {
  const growthObserver = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        growth.classList.add("growth-in");
        growthObserver.disconnect();
      }
    },
    { threshold: 0.45 },
  );
  growthObserver.observe(growth);
} else {
  growth.classList.add("growth-in");
}
