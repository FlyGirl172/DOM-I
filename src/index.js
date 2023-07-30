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

console.log('project wired!')



//Images
const logoImage = document.querySelector('#logo-img');
logoImage.src = siteContent.images['logo-img'];

const ctaImage = document.querySelector('#cta-img');
ctaImage.src = siteContent.images['cta-img'];

const middleImage = document.querySelector('#middle-img');
middleImage.setAttribute('src', siteContent.images['accent-img']); 

//Footer Link
const footLink = document.querySelector('footer a');
//console.log(footLink); //<a href="#"></a>
footLink.textContent = siteContent.footer.copyright;
footLink.classList.add('bold');

//Contact
const contactSection = document.querySelector('section.contact');
//contactSection[0].textContent = siteContent.contact['contact-h4'];
contactSection.querySelector('h4').textContent = siteContent.contact['contact-h4'];

contactSection.querySelector('p:nth-of-type(1)').textContent = siteContent.contact['address'];
contactSection.querySelector('p:nth-of-type(2)').textContent = siteContent.contact['phone'];
contactSection.querySelector('p:nth-of-type(3)').textContent = siteContent.contact['email'];
// contactSection[1].textContent = siteContent.contact['address'];
// contactSection[2].textContent = siteContent.contact['phone'];
// contactSection[4].textContent = siteContent.contact['email'];

//Content at the Top
const topContent = document.querySelector('.top-content');
//console.log(topContent); //<div class="top-content">
topContent.children[0].children[0].textContent = siteContent['main-content']['features-h4'];
topContent.children[0].children[1].textContent = siteContent['main-content']['features-content'];
topContent.children[1].children[0].textContent = siteContent['main-content']['about-h4'];
topContent.children[1].children[1].textContent = siteContent['main-content']['about-content'];

//Content at the Bottom
const bottomContent = document.querySelector('.bottom-content');
//bottomContent.textContent = siteContent['main-content']; ///??????*********

const h4Bottom = bottomContent.querySelectorAll('h4');
//console.log(h4Bottom);  //NodeList(6)[h4, h4, h4, h4, h4, h4]
h4Bottom[0].textContent = siteContent['main-content']['services-h4'];
h4Bottom[1].textContent = siteContent['main-content']['product-h4'];
h4Bottom[2].textContent = siteContent['main-content']['vision-h4'];

const psBottom = bottomContent.querySelectorAll('p');
psBottom[0].textContent = siteContent['main-content']['services-content'];
psBottom[1].textContent = siteContent['main-content']['product-content'];
psBottom[2].textContent = siteContent['main-content']['vision-content'];

//CTA (Call TO Action)
document.querySelector('.cta .cta-text h1').textContent = siteContent.cta.h1;
document.querySelector('.cta .cta-text button').textContent = siteContent.cta.button;

//Nav
const navTop = document.querySelectorAll('header nav a');
const navTopTitles = Object.values(siteContent.nav);
navTop.forEach((link, idx) => {
   link.textContent = navTopTitles[idx]
   link.classList.add('italic');
});



