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
    name: 'Work Experiences',
    href: '#experiences',
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
    name: 'Framer',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Figma',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: '/assets/figma.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Notion',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: '/assets/notion.svg',
    animation: 'salute',
  },
]