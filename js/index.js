const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//NAVIGATION
// const navigationMenu = document.querySelector('a');
// navigationMenu.textContent = "Services";
// const nav = document.getElementsByClassName("nav-item-1");

const navigationMenu = [ "Services", "Product", "Vision", "Features", "About", "Contact" ];

// const contact = ["123 Way 456 Street Somewhere, USA", "1 (888) 888-8888", "sales@greatidea.io"];

const nav9 = document.querySelector('nav');

navigationMenu.forEach( currentValue => {
  const menu4 = document.createElement('a');
  menu4.textContent = currentValue;
  nav9.append(menu4);
});



//DOM IS AWESOME
const title = document.createElement('h1');
title.textContent = 'DOM is Awesome';
const dom = document.querySelector('.cta-text');
dom.append(title);
title.style.display = 'flex';

//CIRCLE IMAGE
let topImg = document.getElementById("cta-img");
topImg.setAttribute('src', siteContent["cta"]["img-src"])

//BUTTON
const btnId = document.querySelector('button');
btnId.textContent = 'Get Started';


//FEATURES TITLE

const features = document.createElement('h4');
features.textContent = "Features";

const features1 = document.querySelector('.top-content');
features1.append(features);

features.style.fontSize = '1.5em';

//TOP CONTENT 1
const newPTag = document.createElement('p');
newPTag.textContent = "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const topContent = document.querySelector('.top-content');
topContent.append(newPTag);

//ABOUT TITLE
const about = document.createElement('h4');
about.textContent = "About";

const about1 = document.querySelector('.top-content');
about1.append(about);

about.style.fontSize = '1.5em';
about.style.display = 'flex';

//TOP CONTENT 2
const newTag = document.createElement('p');
newTag.textContent = "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const textContent = document.querySelector('.text-content');
textContent.append(newTag);

//MIDDLE BAR IMAGE
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);


//SERVICES TITLE
const service = document.createElement('h4');
service.textContent = "Service";

const service1 = document.querySelector('.bottom-content');
service1.append(service);

service.style.fontSize = '1.5em';

//BOTTOM CONTENT 1
const bottom = document.createElement('p');
bottom.textContent = "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const bottomContent = document.querySelector('.bottom-content');
bottomContent.append(bottom);


//PRODUCT TITLE
const product = document.createElement('h4');
product.textContent = "Product";

const product1 = document.querySelector('.bottom-content');
product1.append(product);

product.style.fontSize = '1.5em';

//BOTTOM CONTENT 2
const bottom2 = document.createElement('p');
bottom2.textContent = "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const bottomContent2 = document.querySelector('.bottom-content');
bottomContent2.append(bottom2);


//VISION TITLE
const vision = document.createElement('h4');
vision.textContent = "Vision";

const vision1 = document.querySelector('.bottom-content');
vision1.append(vision);

vision.style.fontSize = '1.5em';

//BOTTOM CONTENT 3
const bottom3 = document.createElement('p');
bottom3.textContent = "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.";

const bottomContent3 = document.querySelector('.bottom-content');
bottomContent3.append(bottom3);

//CONTACT TITLE
const contactTitle = document.createElement('h4');
contactTitle.textContent = "Contact";

const contactTitle1 = document.querySelector('.contact');
contactTitle1.append(contactTitle);

contactTitle.style.fontSize = '1.5em';

//CONTACT INFO
const contact = ["123 Way 456 Street Somewhere, USA", "1 (888) 888-8888", "sales@greatidea.io"];

const workList = document.querySelector('.contact');

contact.forEach( currentValue => {
  const listItem = document.createElement('p');
  listItem.textContent = currentValue;
  workList.append(listItem);
});

//FOOTER
const footer = document.createElement('footer');
footer.textContent = "Copyright Great Idea! 2018";

const footer1 = document.querySelector('.contact');
footer1.append(footer);
