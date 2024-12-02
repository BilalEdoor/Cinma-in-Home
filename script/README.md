**README**

**Landing Page**

This repository contains the HTML, CSS, and JavaScript code for a mobile navigation menu with smooth scrolling and active link highlighting.

**HTML Structure:**
* **Burger Menu:** A simple `div` with three `span` elements to represent the burger icon.
* **Navigation Bar:** An empty `nav` element that will be populated with navigation links when the burger menu is clicked.
* **Sections:** Multiple sections with unique IDs and a `data-nav` attribute to store the corresponding navigation link text.

**CSS Styles:**
* **Basic Styles:** Sets the fonts, margins, and background for the body element.
* **Navigation Styles:** Styles the navbar, its links, and the burger menu.
* **Media Queries:** Adapts the layout to different screen sizes.
* **SMACSS Structure:** Organizes styles using Base, Layout, Theme, and Theme State rules.
* **Landing Container Styles:** Defines styles for section content areas.
* **Background Circles:** Adds subtle background circles using pseudo-elements.
* **Active Section Styles:** Highlights the currently active section.

**JavaScript Functionality:**
* **Creates Navigation Links:** Populates the navigation bar with links based on the `data-nav` attribute of each section.
* **Smooth Scrolling:** Scrolls smoothly to the target section when a navigation link is clicked.
* **Active Link Highlighting:** Highlights the active navigation link based on the current scroll position.
* **Burger Menu Toggle:** Toggles the visibility of the navigation bar when the burger menu is clicked.

