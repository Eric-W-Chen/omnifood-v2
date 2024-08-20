///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
console.log("hello world");
function checkFlexGap() {
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  const isSupported = flex.scrollHeight === 1;
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

document.querySelector(".year").textContent = new Date().getFullYear();

document
  .querySelector(".btn-mobile-nav")
  .addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("nav-open");
  });

/* Close navbar in mobile navigation if one of the links are clicked. */
document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    if (e.target.closest(".main-nav-link")) {
      document.querySelector(".header").classList.remove("nav-open");
    }
  });

const sectionHeroEl = document.querySelector(".section-hero");
const observer = new IntersectionObserver(
  function (entries) {
    const entry = entries[0];

    if (!entry.isIntersecting) {
      document.body.classList.add("sticky");
    }

    if (entry.isIntersecting) {
      document.body.classList.remove("sticky");
    }
  },
  {
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
observer.observe(sectionHeroEl);
