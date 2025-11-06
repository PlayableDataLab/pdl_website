// content.js
// All portfolio content lives here.
// No React, no JSX — just plain JavaScript objects.

window.PORTFOLIO_CONTENT = {
  INTRO_TEXT:
    "Playable portfolio of geospatial experiments, maps, and data-driven games. Filter by theme or search by name.",

  BRAND: {
    // Put "" if you don't want a logo
    logoUrl: "media/logo.jpg", // logo file in /media (PNG, JPG, SVG etc.)
    name: "Playable Data Lab",
    subtitle: "Maps • Data • Urban Systems",
  },

  SOCIALS: [
    {
      id: "github",
      label: "GitHub",
      url: "https://github.com/PlayableDataLab",
    },
    {
      id: "linkedin",
      label: "LinkedIn",
      url: "https://www.linkedin.com/company/playabledatalab",
    },
    {
      id: "instagram",
      label: "Instagram",
      url: "https://www.instagram.com/playabledata?igsh=MW15emRoYXk0ZnY0Yg==",
    },
  ],

  PROJECTS: [
    {
      id: "spin-globe",
      title: "Spider Bus Accessibility",
      imageUrl: "media/001_spider-bus.jpg", // poster image
      videoUrl: "media/001_spider-bus.mp4", // optional
      tags: ["#30DayMapChallenge", "Globe", "Mapbox", "Web App"],
      githubUrl: "https://playabledatalab.github.io/001_spider-bus/",
    },
    {
      id: "snake-car",
      title: "Snake Car!",
      imageUrl: "media/002_snake-car.jpg",
      videoUrl: "media/002_snake-car.mp4",
      tags: ["Game", "GeoJSON", "Playful Data"],
      githubUrl: "https://playabledatalab.github.io/001_spider-bus/",
    },
    {
      id: "nycha-spider",
      title: "Sort the land",
      imageUrl: "media/003_sort-the-land.jpg",
      videoUrl: "media/003_sort-the-land.mp4", 
      tags: ["New York", "Proximity", "Lines"],
      githubUrl: "https://playabledatalab.github.io/003_sort-the-land/",
    },
    {
      id: "buscaminas",
      title: "Tourist Minesweeper",
      imageUrl: "media/004_tourist-minesweeper.jpg",
      videoUrl: "media/004_tourist-minesweeper.mp4", 
      tags: ["New York", "Proximity", "Lines"],
      githubUrl: "https://playabledatalab.github.io/004_tourist-minesweeper/",
    },
    

    // 🔽 Add more projects here:
    // {
    //   id: "unique-id",
    //   title: "Project Name",
    //   imageUrl: "media/your-image.jpg",
    //   videoUrl: "media/your-video.mp4", // or "" if none
    //   tags: ["Tag A", "Tag B"],
    //   githubUrl: "https://github.com/...",
    // },
  ],
};
