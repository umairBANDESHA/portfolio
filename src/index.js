import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { projectsData } from "./data/projectsData";

initScrollReveal(targetElements, defaultProps);
initTiltEffect();

// Navigation functionality
function initNavigation() {
  document.addEventListener('DOMContentLoaded', function() {
    // Logo click - scroll to top/hero section
    const logo = document.querySelector('.nav-logo');
    if (logo) {
      logo.addEventListener('click', function(e) {
        e.preventDefault();
        const heroSection = document.getElementById('hero');
        if (heroSection) {
          heroSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Projects button - scroll to projects section
    const projectsBtn = document.querySelector('.nav-btn:not(.nav-btn-primary)');
    if (projectsBtn) {
      projectsBtn.addEventListener('click', function() {
        const projectsSection = document.getElementById('projects');
        if (projectsSection) {
          projectsSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }

    // Contact button - scroll to contact section
    const contactBtn = document.querySelector('.nav-btn.nav-btn-primary');
    if (contactBtn) {
      contactBtn.addEventListener('click', function() {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      });
    }
  });
}

// Navbar scroll effect
function initNavbarScrollEffect() {
  window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });
}

// Dynamic project rendering
function renderProjects() {
  const projectsContainer = document.querySelector('.project-wrapper');
  if (!projectsContainer) return;

  // Find the projects container (after the filter buttons)
  const filtersContainer = projectsContainer.querySelector('.project-filters');
  if (!filtersContainer) return;

  // Remove existing projects
  const existingProjects = projectsContainer.querySelectorAll('.project-item');
  existingProjects.forEach(project => project.remove());

  // Render projects from data
  projectsData.forEach(project => {
    console.log('Rendering project:', project.title, 'Image path:', project.image);
    const projectHTML = createProjectHTML(project);
    filtersContainer.insertAdjacentHTML('afterend', projectHTML);
  });

  // Reinitialize tilt effect for new projects
  initTiltEffect();
  
  // Reinitialize ScrollReveal for new dynamically added elements
  initScrollReveal(targetElements, defaultProps);
}

// Create HTML for a single project
function createProjectHTML(project) {
  const liveButton = project.liveUrl 
    ? `<a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero" href="${project.liveUrl}">See Live</a>`
    : `<a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero disabled" href="#!">See Live</a>`;

  const sourceButton = project.sourceUrl
    ? `<a rel="noreferrer" target="_blank" class="cta-btn text-color-main" href="${project.sourceUrl}">Source Code</a>`
    : `<a rel="noreferrer" target="_blank" class="cta-btn text-color-main disabled" href="#!">Source Code</a>`;

  const technologies = project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('');

  return `
    <!-- Project: ${project.title} -->
    <div class="row project-item" data-category="${project.category}">
      <div class="col-lg-4 col-sm-12">
        <div class="project-wrapper__text ">
          <h3 class="project-wrapper__text-title">${project.title}</h3>
          <div>
            <p class="mb-4">${project.description}</p>
            <div class="project-technologies">${technologies}</div>
          </div>
          ${liveButton}
          ${sourceButton}
        </div>
      </div>
      <div class="col-lg-6 col-sm-8">
        <div class="project-wrapper__image">
          <a rel="noreferrer" href="${project.liveUrl || project.sourceUrl || '#'}" target="_blank">
            <div
              data-tilt
              data-tilt-max="4"
              data-tilt-glare="true"
              data-tilt-max-glare="0.5"
              class="thumbnail rounded js-tilt"
            >
              <img
                alt="${project.title} Project Demo"
                class="img-fluid"
         
                src="${project.image}"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
    <!-- /END Project: ${project.title} -->
  `;
}

// Project filtering functionality
function initProjectFilters() {
  document.addEventListener('DOMContentLoaded', function() {
    // First render projects
    renderProjects();
    
    // Then initialize filters
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
      button.addEventListener('click', function() {
        const filter = this.getAttribute('data-filter');
        
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Filter projects
        const projectItems = document.querySelectorAll('.project-item');
        projectItems.forEach(item => {
          const category = item.getAttribute('data-category');
          
          if (filter === 'all' || category === filter) {
            item.classList.remove('hidden');
            item.style.display = 'flex';
          } else {
            item.classList.add('hidden');
            setTimeout(() => {
              if (item.classList.contains('hidden')) {
                item.style.display = 'none';
              }
            }, 300);
          }
        });
      });
    });
  });
}

// Initialize all functions
initNavigation();
initNavbarScrollEffect();
initProjectFilters();

// Portfolio functionality initialized