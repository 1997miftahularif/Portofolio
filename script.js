const projects = [
  {
    title: "POUTCARE",
    category: "Social Media Design",
    description: "A series of social media visuals designed to introduce Poutcare products through playful and family-friendly branding.",
    objective: "Build stronger product awareness and create an engaging visual identity for parents and children audiences.",
    role: "Graphic Designer, campaign visual direction, layout design, and product presentation.",
    beforeAfter: "Before: product communication felt standard and less emotionally engaging. After: cheerful and visually consistent campaign assets aligned with the brand identity.",
    result: "Improved brand presentation and stronger audience engagement across social media platforms.",
    thumbnail: "assets/projects/1_11zon.jpg",
    image: "assets/projects/poutcare_11zon.pdf",
    type: "pdf"
  },
  {
    title: "ZOYA",
    category: "Social Media Design",
    description: "A collection of elegant social media campaign visuals created for ZOYA, combining modest fashion storytelling, inspirational content, and product-focused branding.",
    objective: "Strengthen brand identity and audience engagement through clean, emotional, and visually consistent campaign design.",
    role: "Graphic Designer, campaign visual direction, content layout, typography styling, and social media execution.",
    beforeAfter: "Before: promotional content appeared visually disconnected and less emotionally engaging. After: cohesive, aesthetic, and brand-aligned campaign visuals with stronger storytelling.",
    result: "Improved visual consistency, stronger brand presentation, and more engaging social media content for fashion-focused audiences.",
    thumbnail: "assets/projects/zoya_11zon.jpg",
    image: "assets/projects/zoya_11zon.pdf",
    type: "pdf"
  },
  {
  title: "Jazz Traffic Festival",
  category: "Video Editing",
  description: "Short-form video editing project for event documentation and social media campaign needs.",
  objective: "Create engaging video content with a clear visual flow and festival atmosphere.",
  role: "Video Editor, visual arranger, and social media content editor.",
  beforeAfter: "Before: raw footage. After: structured short-form video content.",
  result: "More engaging video format ready for digital and social media use.",
  thumbnail: "assets/projects/stfjazz.jpg",
  media: [
    "assets/projects/Jazzday1.mp4",
    "assets/projects/Jazzday2.mp4"
  ],
  type: "video"
  },
  {
    title: "Promotional Poster Design",
    category: "Poster",
    description: "Campaign poster designed for digital promotion and announcement needs.",
    objective: "Create attention-grabbing visuals with clear event or product message.",
    role: "Poster designer.",
    beforeAfter: "Before: flat visual. After: stronger hierarchy and CTA.",
    result: "More direct and professional promotional asset.",
    thumbnail: "assets/projects/poster-thumb.svg",
    image: "assets/projects/poster-case-study.pdf",
    type: "pdf"
  },
  {
    title: "Short Video Editing",
    category: "Video Editing",
    description: "Short-form video edit for social media using product highlights and simple transitions.",
    objective: "Deliver fast, engaging content for social media campaigns.",
    role: "Video editor and visual arranger.",
    beforeAfter: "Before: raw footage. After: structured short-form content.",
    result: "More engaging video format ready for posting.",
    thumbnail: "assets/projects/video-thumb.svg",
    image: "assets/projects/video-case-study.pdf",
    type: "pdf"
  },
  {
    title: "Website UI Landing Page",
    category: "Website UI",
    description: "Landing page UI concept for service or product introduction.",
    objective: "Guide visitors from first impression to clear action.",
    role: "UI visual designer.",
    beforeAfter: "Before: unclear page flow. After: focused landing page structure.",
    result: "Improved visual flow and CTA visibility.",
    thumbnail: "assets/projects/website-ui-thumb.svg",
    image: "assets/projects/website-ui-case-study.pdf",
    type: "pdf"
  },
  {
    title: "Marketplace Product Banner",
    category: "Marketplace",
    description: "Product banner for marketplace listing and promotional display.",
    objective: "Make product benefits visible quickly to potential buyers.",
    role: "Marketplace visual designer.",
    beforeAfter: "Before: generic listing image. After: benefit-focused product banner.",
    result: "Stronger product presentation for online selling.",
    thumbnail: "assets/projects/marketplace-thumb.svg",
    image: "assets/projects/marketplace-case-study.pdf",
    type: "pdf"
  },
  {
    title: "Instagram Carousel Education",
    category: "Social Media",
    description: "Educational carousel explaining product benefits with clean copy and visual structure.",
    objective: "Educate audience and support soft-selling strategy.",
    role: "Content visual designer.",
    beforeAfter: "Before: long text caption only. After: swipeable educational visual story.",
    result: "More digestible information and stronger engagement potential.",
    thumbnail: "assets/projects/carousel-thumb.svg",
    image: "assets/projects/carousel-case-study.pdf",
    type: "pdf"
  },
  {
    title: "Product Launch Visual Kit",
    category: "Branding",
    description: "Launch visuals including hero image, social post, and supporting brand assets.",
    objective: "Create a consistent look for a new product introduction.",
    role: "Graphic designer and visual system creator.",
    beforeAfter: "Before: separate assets. After: unified launch kit.",
    result: "More polished product launch communication.",
    thumbnail: "assets/projects/launch-kit-thumb.svg",
    image: "assets/projects/launch-kit-case-study.pdf",
    type: "pdf"
  },
  {
    title: "Digital Ad Creative",
    category: "Poster",
    description: "Ad creative focused on concise message, visual hook, and clear CTA.",
    objective: "Support campaign conversion with a strong first impression.",
    role: "Ad creative designer.",
    beforeAfter: "Before: unclear CTA. After: cleaner message and stronger offer display.",
    result: "Ready-to-use ad visual for digital campaigns.",
    thumbnail: "assets/projects/digital-ad-thumb.svg",
    image: "assets/projects/digital-ad-case-study.pdf",
    type: "pdf"
  }
];

document.addEventListener("DOMContentLoaded", () => {
  const categories = ["All", ...new Set(projects.map(project => project.category))];

  const filterButtons = document.getElementById("filterButtons");
  const projectGrid = document.getElementById("projectGrid");
  const menuToggle = document.getElementById("menuToggle");
  const navLinks = document.getElementById("navLinks");
  const year = document.getElementById("year");

  const modal = document.getElementById("projectModal");
  const modalThumb = document.getElementById("modalThumb");
  const modalCategory = document.getElementById("modalCategory");
  const modalTitle = document.getElementById("modalTitle");
  const modalDescription = document.getElementById("modalDescription");
  const modalObjective = document.getElementById("modalObjective");
  const modalRole = document.getElementById("modalRole");
  const modalBeforeAfter = document.getElementById("modalBeforeAfter");
  const modalResult = document.getElementById("modalResult");

  if (year) year.textContent = new Date().getFullYear();

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
    navLinks.querySelectorAll("a").forEach(link => {
      link.addEventListener("click", () => navLinks.classList.remove("open"));
    });
  }

  function renderButtons() {
    if (!filterButtons) return;

    filterButtons.innerHTML = categories.map(category => `
      <button class="filter-btn ${category === "All" ? "active" : ""}" data-category="${category}">
        ${category}
      </button>
    `).join("");

    document.querySelectorAll(".filter-btn").forEach(button => {
      button.addEventListener("click", () => {
        document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
        button.classList.add("active");
        renderProjects(button.dataset.category);
      });
    });
  }

  function renderProjects(category = "All") {
    if (!projectGrid) return;

    const filteredProjects = category === "All"
      ? projects
      : projects.filter(project => project.category === category);

    projectGrid.innerHTML = filteredProjects.map(project => {
      const originalIndex = projects.indexOf(project);
      const label = project.type === "video" ? "Preview Video" : project.type === "image" ? "Preview Image" : "Preview PDF";

      return `
        <article class="project-card" tabindex="0" role="button" aria-label="Preview ${project.title}" data-project-index="${originalIndex}">
          <div class="project-thumb">
            <img src="${project.thumbnail}" alt="${project.title} thumbnail" loading="lazy">
            <span class="view-label">${label}</span>
          </div>
          <div class="project-body">
            <div class="project-meta">${project.category}</div>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-detail">
              <p><strong>Objective:</strong> ${project.objective}</p>
              <p><strong>Role:</strong> ${project.role}</p>
            </div>
          </div>
        </article>
      `;
    }).join("");

    document.querySelectorAll(".project-card").forEach(card => {
      card.addEventListener("click", () => openProjectModal(card.dataset.projectIndex));
      card.addEventListener("keydown", event => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openProjectModal(card.dataset.projectIndex);
        }
      });
    });
  }

  function openProjectModal(index) {
    const project = projects[Number(index)];
    if (!project || !modal || !modalThumb) return;

    if (project.type === "pdf") {
      modalThumb.innerHTML = `
        <iframe
          src="${project.image}#toolbar=0&navpanes=0&scrollbar=0"
          title="${project.title} PDF preview"
          loading="lazy">
        </iframe>
      `;
    } else if (project.type === "image") {
      modalThumb.innerHTML = `
        <a href="${project.image}" target="_blank" rel="noopener" title="Open full image in new tab">
           <img src="${project.image}" alt="${project.title} full design preview">
         </a>
      `;
    } else if (project.type === "video") {
      modalThumb.innerHTML = `
        <video controls autoplay playsinline>
          <source src="${project.media[0]}" type="video/mp4">
          Your browser does not support the video tag.
        </video>
      `;
    } else {
      modalThumb.innerHTML = `<p>Preview unavailable.</p>`;
    }

    if (modalCategory) modalCategory.textContent = project.category;
    if (modalTitle) modalTitle.textContent = project.title;
    if (modalDescription) modalDescription.textContent = project.description;
    if (modalObjective) modalObjective.textContent = project.objective;
    if (modalRole) modalRole.textContent = project.role;
    if (modalBeforeAfter) modalBeforeAfter.textContent = project.beforeAfter;
    if (modalResult) modalResult.textContent = project.result;

    modal.classList.add("open");
    modal.setAttribute("aria-hidden", "false");
    document.body.classList.add("modal-active");
  }

  function closeProjectModal() {
    if (!modal) return;

    modal.classList.remove("open");
    modal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("modal-active");

    if (modalThumb) modalThumb.innerHTML = "";
  }

  document.querySelectorAll("[data-close-modal]").forEach(element => {
    element.addEventListener("click", closeProjectModal);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && modal && modal.classList.contains("open")) {
      closeProjectModal();
    }
  });

  renderButtons();
  renderProjects();
});
