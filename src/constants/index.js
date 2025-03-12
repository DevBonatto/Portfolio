export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    nodeIconPosition: isSmall ? [2, -6.5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactIconPosition: isSmall ? [2, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [8, 3, 0],
    mySQLIconPosition: isSmall ? [-2, 3, 0] : isMobile ? [-7, 5, 0] : isTablet ? [-7, 5, 0] : [-10, 5, 0],
    javaIconPosition: isSmall ? [-3, -10.5, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -12.5, -10],
  }
}

export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Projects',
    href: '#projects',
  },
  {
    id: 4,
    name: 'Work Experience',
    href: '#work',
  },
  {
    id: 5,
    name: 'Contact',
    href: '#contact',
  },
]

export const Certifications = [
  {
  }
]

export const myProjects = [
  {
    title: 'Rocket Movies',
    desc: 'Rocket Movies is a platform where you can save your favorite movies. You can add a description, tags, and a rating to each movie you save. The platform also includes a search feature, allowing you to find your favorited movies by name, so you will never forget the movies youve watched and loved!',
    subdesc:
      'Built as a unique Software-as-a-Service app with React, Node.js & Knex.js.',
    href: 'https://github.com/DevBonatto/RocketMovies',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'Node.js',
        path: 'assets/node-js.png',
      },
      {
        id: 3,
        name: 'Knex.js',
        path: '/assets/knex-js.svg',
      },
    ],
  },
  {
    title: 'GitHub Favorites',
    desc: 'GitHub Favorites is a platform that allows you to bookmark your favorite GitHub profiles.',
    subdesc:
      "It's a simple platform built with HTML, CSS, and JavaScript, utilizing GitHub's API.",
    href: 'https://github.com/DevBonatto/GitHubFavoritesV2',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.svg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'JavaScript',
        path: '/assets/javascript.png',
      },
      {
        id: 2,
        name: 'html',
        path: 'assets/html.png',
      },
      {
        id: 3,
        name: 'css',
        path: '/assets/css.png',
      },
    ],
  },  
]

export const workExperiences = [
  {
    id: 1,
    name: 'Fiorde Group',
    pos: 'Full Stack Developer',
    duration: 'Nov 2022 - Present',
    title: "First Year: Project Team – worked on project improvements, which were incorporated into sprints. Participated in planning sessions, providing ideas and feedback alongside the project team.",
    title2: 'Second Year: Support and Maintenance Team – handled support tickets, primarily addressing bugs and implementing quick improvements.',
    icon: '/assets/fiorde.jpeg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Oliveira Lawyers',
    pos: 'Internship',
    duration: 'Apr 2022 - Sep 2022',
    title: "Worked directly with the CEO to perform maintenance and implement changes as requested. Managed and updated the company’s WordPress site, including modifications to HTML and CSS, and contributed design ideas to enhance the website’s functionality and appearance.",
    icon: '/assets/oliveira_lawyers.jpeg',
    animation: 'clapping',
  },
]