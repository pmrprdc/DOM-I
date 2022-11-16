const siteContent = { // DO NOT CHANGE THIS OBJECT
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2021",
  },
  "images": {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

const nav = document.querySelector("nav");
const navLinks = document.querySelectorAll("nav a");
const header = document.querySelector("header");
const cta = document.querySelector(".cta");
const logoImg = document.querySelector("#logo-img");
const ctaHeadline = document.querySelector(".cta-text h1");
const ctaButton = document.querySelector(".cta-text button");
const ctaImg = document.querySelector("#cta-img");
const topContent = document.querySelector(".top-content");
const middleImg = document.querySelector(".middle-img");
const bottomContent = document.querySelector(".bottom-content");
const contactHeader = document.querySelector(".contact h4");
const contactTexts = document.querySelectorAll(".contact p");
const copyRight = document.querySelector("footer a");
const featuresHeadline = document.querySelector(".top-content .text-content h4")
const aboutHeadline = document.querySelector(".text-content:nth-of-type(2) h4")
const featuresText = document.querySelector(".top-content .text-content p")
const aboutText = document.querySelector(".top-content .text-content:nth-of-type(2) p");
const servicesh4 = document.querySelector(".bottom-content .text-content:nth-of-type(1) h4")
const servicesContent = document.querySelector(".bottom-content .text-content:nth-of-type(1) p")
const producth4 = document.querySelector(".bottom-content .text-content:nth-of-type(2) h4")
const productContent = document.querySelector(".bottom-content .text-content:nth-of-type(2) p")
const visionh4 = document.querySelector(".bottom-content .text-content:nth-of-type(3) h4")
const visionContent = document.querySelector(".bottom-content .text-content:nth-of-type(3) p")





navLinks[0].innerHTML = siteContent.nav["nav-item-1"]
navLinks[1].innerHTML = siteContent.nav["nav-item-2"]
navLinks[2].innerHTML = siteContent.nav["nav-item-3"]
navLinks[3].innerHTML = siteContent.nav["nav-item-4"]
navLinks[4].innerHTML = siteContent.nav["nav-item-5"]
navLinks[5].innerHTML = siteContent.nav["nav-item-6"]

logoImg.setAttribute("src", siteContent.images["logo-img"]);

ctaHeadline.innerHTML = siteContent.cta.h1;
ctaButton.innerHTML = siteContent.cta.button;


ctaImg.src = siteContent.images["cta-img"]


featuresHeadline.innerHTML = siteContent["main-content"]["features-h4"]
aboutHeadline.innerHTML = siteContent["main-content"]["about-h4"];
featuresText.innerHTML = siteContent["main-content"]["features-content"];
aboutText.innerHTML =siteContent["main-content"]["about-content"];
middleImg.src = siteContent.images["accent-img"];
servicesh4.innerHTML = siteContent["main-content"]["services-h4"];
producth4.innerHTML = siteContent["main-content"]["product-h4"];
visionh4.innerHTML = siteContent["main-content"]["vision-h4"];
servicesContent.innerHTML = siteContent["main-content"]["services-content"];
productContent.innerHTML = siteContent["main-content"]["product-content"];
visionContent.innerHTML = siteContent["main-content"]["vision-content"];
copyRight.innerHTML = siteContent.footer.copyright;
navLinks.forEach((x)=>x.classList.add("italic"));
copyRight.classList.add("bold")
contactHeader.innerHTML = siteContent.contact["contact-h4"];
contactTexts[0].innerHTML =siteContent.contact.address;
contactTexts[1].innerHTML = siteContent.contact.phone;
contactTexts[2].innerHTML = siteContent.contact.email;