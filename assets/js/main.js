/*=============== FILTERS TABS ===============*/
const tabs = document.querySelectorAll("[data-target]");
const tabContents = document.querySelectorAll("[data-content]");

tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
        const target = document.querySelector(tab.dataset.target);

        tabContents.forEach((tc) => {
            tc.classList.remove("filters__active");
        });

        target.classList.add("filters__active");

        tabs.forEach((t) => {
            t.classList.remove("filter-tab-active");
        });

        tab.classList.add("filter-tab-active");
    });
});

/*=============== DARK LIGHT THEME ===============*/
const themeToggle = document.getElementById("theme-toggle");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// get previous theme selected
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// validate if user selected theme previously
if (selectedTheme) {
    // change the theme according to the previous user's choice
    document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
        darkTheme
    );
    themeToggle.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
        iconTheme
    );
}

// create function to get current theme to save in local storage
const getCurrentTheme = () =>
    document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
    themeToggle.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// Activate / deactivate the theme with the button
themeToggle.addEventListener("click", () => {
    // ADD or remove dark class
    document.body.classList.toggle(darkTheme);
    themeToggle.classList.toggle(iconTheme);

    // save to localstorage what theme user choose
    localStorage.setItem("selected-theme", getCurrentTheme());
    localStorage.setItem("selected-icon", getCurrentIcon());
});

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: "top",
    distance: "60px",
    duration: 2500,
    delay: 400,
    reset: true,
});

sr.reveal(".profile__border");
sr.reveal(".profile__name", { delay: 500 });
sr.reveal(".profile__profession", { delay: 600 });
sr.reveal(".profile__social", { delay: 700 });
sr.reveal(".profile__info-group", { interval: 100, delay: 700 });
sr.reveal(".profile__buttons", { delay: 800 });
sr.reveal(".filters__content", { delay: 900 });
sr.reveal(".filters", { delay: 1000 });
