
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


// Create the navigation list
const navMenuList = document.createElement('ul');
navMenuList.classList.add('nav_menu_list');
nav.appendChild(navMenuList)
// Create navigation items
const navItems = [
  { href: '#section1', text: 'Home' },
  { href: '#section2', text: 'About us' },
  { href: '#section3', text: 'skills' },
  { href: '#section4', text: 'contact me' },

 
];
// set to anu navbar item his info
navItems.forEach(item => {
  const li = document.createElement('li');
  li.classList.add('nav_menu_item');

  const a = document.createElement('a');
  a.href = item.href;
  a.textContent = item.text;
  a.classList.add('nav_menu_link');
  li.appendChild(a);

  navMenuList.appendChild(li);
});

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


const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', (event) => {
    event.preventDefault();   
 // Prevent default behavior of following the link

    const targetId = link.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth' ,  
      

      });
    }
  });
});

  window.addEventListener('scroll', () => {
      let currentSection = '';
    
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
    
        if (scrollY >= sectionTop && scrollY <= sectionBottom) {
          currentSection = section.id;
        }
      });
    
      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.hash === `#${currentSection}`) {
          link.classList.add('active');
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




const sections1 = document.querySelectorAll('section');
const navLinks1 = document.querySelectorAll('nav a');

window.addEventListener('scroll', () => {
  let current = '';

  sections1.forEach(section => {
    const sectionTop = section.offsetTop;
    if (window.pageYOffset >= sectionTop - 60) {
      current = section.getAttribute('id');
    }
  });

  navLinks1.forEach(link => {
    link.classList.remove('active');
    if (link.hash === '#' + current) {
      link.classList.add('active');
    }
  });
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
    const sectionTop = section.offsetTop;
    const sectionBottom = sectionTop + section.offsetHeight;

    if (window.pageYOffset >= sectionTop && window.pageYOffset <= sectionBottom) {
      section.classList.add('active-section');
    } else {
      section.classList.remove('active-section');
    }
  });
});