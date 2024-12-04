
// Create the header element
const header = document.querySelector('header');

// Create the logo element
const logo = document.createElement('a');
logo.href = '#';
logo.textContent = 'landing page';
logo.classList.add('logo');
logo.style.fontFamily = 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif';

// Create the navigation menu
const nav = document.querySelector('nav');
nav.appendChild(logo);


// call the navigation list
const navMenuList = document.querySelector('.nav_menu_list');
// Create navigation items
const navItems = [
  { href: '#section1', text: 'Home' },
  { href: '#section2', text: 'About us' },
  { href: '#section3', text: 'skills' },
  { href: '#section4', text: 'contact me' },

 
];
// set to anu navbar item his info

  

  for (let i = 0; i < navItems.length; i++) {
    const item = navItems[i];
    const navItem = document.createElement('li');
    navItem.classList.add('nav_menu_item');
    const navlink = document.createElement('a');
    navlink.classList.add('nav_menu_link');
    navlink.href = item.href;
    navlink.textContent = item.text;
    navMenuList.appendChild(navItem);
    navItem.appendChild(navlink);
}

 

const sections = document.querySelectorAll('section');

// Loop through each section and add the h1 and p tags
sections.forEach((section, index) => {
  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  // Set the content for h1 and p
  h1.textContent = `Section ${index + 1} Title`;
  p.textContent = `This is the content for Section ${index + 1}. You can add your paragraph text here.`;

  // Append the h1 and p tags to the landing__container div
  const container = section.querySelector('.landing__container');
  container.appendChild(h1);
  container.appendChild(p);
});
 const navLinks = document.querySelectorAll("nav a")
navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
     // Prevent default behavior of following the link
    event.preventDefault();   

    const nextsectioid = link.getAttribute('href').substring(1);
    const nextsection = document.getElementById(nextsectioid);

    if (nextsection) {
      window.scrollTo({
        top: nextsection.offsetTop,
        behavior: 'smooth' ,  
      

      });
    }
  });
});




// Get the burger button and navbar elements
const burgerMenu = document.getElementById('burger-menu');
const navbar = document.querySelector('.navbar');

// Add event listener to the burger button to toggle the navbar
burgerMenu.addEventListener('click', () => {
    navbar.classList.toggle('active');
});


const sections2 = document.querySelectorAll('section');
const navLinks2 = document.querySelectorAll('nav a');


// Add click event listener to each link
navLinks2.forEach(link => {
  link.addEventListener('click', () => {
    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    // Remove active class from all sections
    sections2.forEach(section => {
      section.classList.remove('active-section');
    });

    // Add active class to the target section
    targetSection.classList.add('active-section');
  });
});


// Add scroll event listener
window.addEventListener('scroll', () => {
  sections.forEach(section => {
    const Top = section.offsetTop;
    const Bottom = Top + section.offsetHeight;

    if (window.pageYOffset >= Top && window.pageYOffset <= Bottom) {
      section.classList.add('active-section');
    } else {
      section.classList.remove('active-section');
    }
  });
});