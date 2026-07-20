/* 
============================================
    NAVIGATION
============================================
*/

// Navigation JS here



/* 
============================================
    HERO
============================================
*/

// Hero animations
// Typing effects
// Scroll effects



/* 
============================================
    ABOUT
============================================
*/

// About section JS



/* 
============================================
    PROJECTS
============================================
*/

// Project filters
// Sliders
// Modals



/* 
============================================
    CONTACT
============================================
*/

// Tabs
const htmlTab = document.getElementById("html-tab");
const cssTab = document.getElementById("css-tab");

// Left-side code panels
const htmlCode = document.getElementById("html-code");
const cssCode = document.getElementById("css-code");

// Right-side preview panels
const blankPreview = document.querySelector(".blank__preview");
const htmlPreview = document.getElementById("html-preview");
const contactPreview = document.getElementById("contact-preview");

// Activation buttons
const activateHTML = document.getElementById("activate-html");
const activateCSS = document.getElementById("activate-css");

// Bottom activation bar
const activationBar = document.querySelector(".contact__activation");



// --------------------------
// Initial State
// --------------------------

blankPreview.style.display = "block";

htmlPreview.style.display = "none";
contactPreview.style.display = "none";

htmlCode.style.display = "none";
cssCode.style.display = "none";



// --------------------------
// Animation State
// --------------------------

let htmlTyping = false;
let cssTyping = false;



// --------------------------
// Tab State
// --------------------------

function setActiveTab(activeTab) {

    htmlTab.classList.remove("active");
    cssTab.classList.remove("active");

    htmlCode.classList.remove("active");
    cssCode.classList.remove("active");

    if (activeTab === htmlTab) {
        htmlTab.classList.add("active");
        htmlCode.classList.add("active");
    } else {
        cssTab.classList.add("active");
        cssCode.classList.add("active");
    }
}



// --------------------------
// HTML Typing Animation
// --------------------------

function typeHTML() {
    if (htmlTyping) return;

    htmlTyping = true;

    const lines = document.querySelectorAll(
        "#html-code .code-line"
    );

    const htmlSteps = [
        { line: 5, element: "html-title" },
        { line: 10, element: "html-phone" },
        { line: 13, element: "html-email" },
        { line: 16, element: "html-linkedin" },
        { line: 20, element: "html-status" }
    ];

    // Reset HTML code lines
    lines.forEach(line => {
        line.classList.remove("show");
    });

    // Reset HTML preview items
    htmlSteps.forEach(step => {
        const element = document.getElementById(step.element);

        if (element) {
            element.classList.remove("show");
        }
    });

    // Animate code and preview together
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add("show");

            htmlSteps.forEach(step => {
                if (index === step.line) {
                    const element = document.getElementById(
                        step.element
                    );

                    if (element) {
                        element.classList.add("show");
                    }
                }
            });

            if (index === lines.length - 1) {
                htmlTyping = false;
            }

        }, index * 120);
    });
}



// --------------------------
// CSS Typing Animation
// --------------------------

function typeCSS() {
    if (cssTyping) return;

    cssTyping = true;

    const lines = document.querySelectorAll(
        "#css-code .code-line"
    );

    const cssSteps = [
        { line: 4, element: "css-title" },
        { line: 8, element: "css-phone" },
        { line: 12, element: "css-email" },
        { line: 16, element: "css-linkedin" },
        { line: 20, element: "css-status" }
    ];

    // Reset CSS code lines
    lines.forEach(line => {
        line.classList.remove("show");
    });

    // Reset CSS preview items
    cssSteps.forEach(step => {
        const element = document.getElementById(step.element);

        if (element) {
            element.classList.remove("show");
        }
    });

    // Animate CSS code and preview together
    lines.forEach((line, index) => {
        setTimeout(() => {
            line.classList.add("show");

            cssSteps.forEach(step => {
                if (index === step.line) {
                    const element = document.getElementById(
                        step.element
                    );

                    if (element) {
                        element.classList.add("show");
                    }
                }
            });

            if (index === lines.length - 1) {
                cssTyping = false;

                setTimeout(() => {
                    activationBar.classList.add("hide");

                    setTimeout(() => {
                        activationBar.style.display = "none";
                    }, 300);

                }, 300);
            }

        }, index * 80);
    });
}



// --------------------------
// Activate HTML
// --------------------------

activateHTML.addEventListener("click", () => {
    setActiveTab(htmlTab);

    // Hide blank preview
    blankPreview.style.display = "none";

    // Hide CSS preview
    contactPreview.classList.remove("active");
    contactPreview.style.display = "none";

    // Show HTML preview
    htmlPreview.style.display = "block";

    requestAnimationFrame(() => {
        htmlPreview.classList.add("active");
    });

    // Hide CSS code
    cssCode.style.display = "none";
    cssCode.classList.remove("show-css");

    // Show HTML code
    htmlCode.style.display = "flex";

    typeHTML();
});



// --------------------------
// Activate CSS
// --------------------------

activateCSS.addEventListener("click", () => {
    setActiveTab(cssTab);

    // Hide blank preview
    blankPreview.style.display = "none";

    // Hide HTML preview
    htmlPreview.classList.remove("active");
    htmlPreview.style.display = "none";

    // Show styled preview
    contactPreview.style.display = "block";

    requestAnimationFrame(() => {
        contactPreview.classList.add("active");
    });

    // Hide HTML code
    htmlCode.style.display = "none";

    /*
        Show CSS code as BLOCK rather than FLEX.

        Making this element flex caused the top and bottom
        portions of the studio window to compress.
    */
    cssCode.style.display = "block";
    cssCode.style.opacity = "1";
    cssCode.style.visibility = "visible";

    typeCSS();
});



/* 
============================================
    FOOTER
============================================
*/

// Footer JS here