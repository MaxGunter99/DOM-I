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
let navMenu = document.querySelectorAll("nav a");
navMenu.forEach(function(link , i ){
  link.innerHTML = siteContent.nav[`nav-item-${i+1}`];
});

navMenu.forEach(function(link , i){
  link.style.color = 'green';
});



//DOM IS AWESOME
let topSection = document.getElementsByClassName("cta-text")[0];

topSection.getElementsByTagName("h1")[0].innerHTML = siteContent['cta']["h1"];
topSection.getElementsByTagName("button")[0].innerHTML = siteContent["cta"]['button'];



//CIRCLE IMAGE
let topImg = document.getElementById("cta-img");
topImg.setAttribute('src', siteContent["cta"]["img-src"])



//FEATURES CONTENTS
let textContents = document.querySelectorAll('.text-content');
textContents[0].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["features-h4"];
textContents[0].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["features-content"];
textContents[1].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["about-h4"];
textContents[1].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["about-content"];
textContents[2].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["services-h4"];
textContents[2].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["services-content"];
textContents[3].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["product-h4"];
textContents[3].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["product-content"];
textContents[4].getElementsByTagName("h4")[0].innerHTML = siteContent["main-content"]["vision-h4"];
textContents[4].getElementsByTagName("p")[0].innerHTML = siteContent["main-content"]["vision-content"];



//MIDDLE BAR IMAGE
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);



// //CONTACT INFO
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
