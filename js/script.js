///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions

/**
 * Checks if the browser supports the `gap` property in flexbox layouts.
 * If not supported, adds a `no-flexbox-gap` class to the body element.
 * 
 * This function creates a temporary flexbox container with a row gap
 * and checks if the browser correctly applies the gap. If the gap is not
 * supported, the function adds a class to the body to allow for fallback styles.
 */
function checkFlexGap() {
  const flex = document.createElement("div");
  flex.style.display = "flex";
  flex.style.flexDirection = "column";
  flex.style.rowGap = "1px";

  flex.appendChild(document.createElement("div"));
  flex.appendChild(document.createElement("div"));

  document.body.appendChild(flex);
  
  /**
   * Boolean indicating whether the flexbox gap property is supported.
   * @type {boolean}
   */
  const isSupported = flex.scrollHeight === 1;
  
  flex.parentNode.removeChild(flex);
  console.log(isSupported);

  if (!isSupported) document.body.classList.add("no-flexbox-gap");
}

// Execute the flexbox gap check
checkFlexGap();

/**
 * Sets the current year in the element with the class `.year`.
 */
document.querySelector(".year").textContent = new Date().getFullYear();

/**
 * Toggles the `nav-open` class on the header element when the mobile navigation button is clicked.
 */
document
  .querySelector(".btn-mobile-nav")
  .addEventListener("click", function () {
    document.querySelector(".header").classList.toggle("nav-open");
  });

/**
 * Closes the mobile navigation menu when any navigation link is clicked.
 */
document
  .querySelector(".main-nav-list")
  .addEventListener("click", function (e) {
    if (e.target.closest(".main-nav-link")) {
      document.querySelector(".header").classList.remove("nav-open");
    }
  });

/**
 * Observes the hero section and adds/removes the `sticky` class on the body
 * based on the hero section's visibility in the viewport.
 * 
 * The observer triggers when the hero section is not intersecting (i.e., scrolled out of view)
 * and adds the `sticky` class to the body, which can be used to make elements like
 * the navigation bar sticky.
 */
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

// Start observing the hero section
observer.observe(sectionHeroEl);
