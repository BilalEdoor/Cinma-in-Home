
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



// Function to set active section and navbar item
function setActiveSection() {
  let currentSection = null;

  // Find the section that is currently in the viewport
  sections.forEach(section => {
    const rect = section.getBoundingClientRect();
    if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
      currentSection = section;
    }
  });

  // Remove active class from all sections and navbar items
  sections.forEach(section => section.classList.remove('active-section'));
  navbarItems.forEach(item => item.classList.remove('active-section'));

  // Add active class to the current section and corresponding navbar item
  if (currentSection) {
    currentSection.classList.add('active-section');
    const activeNavItem = document.querySelector(`[data-target="${currentSection.id}"]`);
    if (activeNavItem) {
      activeNavItem.classList.add('active-section');
    }
  }
}
// Select all list items
const navbarItems = document.querySelectorAll('.navbar li');
// Scroll to the section when a navbar item is clicked
navbarItems.forEach(item => {
  item.addEventListener('click', () => {
    const targetSection = document.getElementById(item.getAttribute('data-target'));
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
      });
    }
  });
});
// Add click event listener to each list item
navbarItems.forEach(item => {
  item.addEventListener('click', function() {
    // Remove 'active' class from all items
    navbarItems.forEach(nav => nav.classList.remove('active'));
    
    // Add 'active' class to the clicked item
    item.classList.add('active');
  });
});

// update active section as you scroll
window.addEventListener('scroll', setActiveSection);


