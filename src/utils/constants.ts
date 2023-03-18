/**
 * @notice constants for social media links
 */
export const QUIET_NODE_GITHUB_LINK = 'https://github.com/quiet-node';
export const QUIET_NODE_EMAIL_LINK = 'mailto:lg.131.ng@gmail.com';
export const QUIET_NODE_LINKEDIN_LINK = 'https://linkedin.com/in/logann131';
export const QUIET_NODE_TWITTER_LINK = 'https://twitter.com/quiet_node';

const GO_LINK = 'https://go.dev/';
const TS_LINK = 'https://typescriptlang.org/';
const SOL_LINK = 'https://soliditylang.org/';
const JAVA_LINK = 'https://java.com/';
const MONGO_LINK = 'https://mongodb.com/';
const TAILWIND_LINK = 'https://tailwindcss.com/';
const REACT_LINK = 'https://reactjs.org/';
const NEXT_LINK = 'https://nextjs.org/';
const SPRING_LINK = 'https://spring.io/';
const HARDHAT_LINK = 'https://hardhat.org/';
const NODE_LINK = 'https://nodejs.org/';
const DOCKER_LINK = 'https://docker.com/';
const HTML_LINK = 'https://www.w3schools.com/html/';
const CSS_LINK = 'https://www.w3schools.com/css/';
const JS_LINK = 'https://javascript.com/';
const ETHEREUM_LINK = 'https://ethereum.org/en/';
const OZ_LINK = 'https://www.openzeppelin.com/';
const MOCHA_LINK = 'https://mochajs.org/';
const MYSQL_LINK = 'https://www.mysql.com/';
const POSTGRES_LINK = 'https://www.postgresql.org/';
const AWS_LINK = 'https://aws.amazon.com/';
const VERCEL_LINK = 'https://vercel.com/';
const NETLIFY_LINK = 'https://www.netlify.com/';
const DYNAMO_LINK = 'https://aws.amazon.com/dynamodb/';
const VITE_LINK = 'https://vitejs.dev/';
const POLYGON_LINK = 'https://polygon.technology/';

export const MAIN_LEFT_SKILLS_LISTS: Technology[] = [
  {
    technology: 'Golang',
    value: 85,
    techLink: GO_LINK,
    shouldShake: false,
  },
  {
    technology: 'TypeScript',
    value: 92,
    techLink: TS_LINK,
    shouldShake: false,
  },
  {
    technology: 'Solidity',
    value: 75,
    techLink: SOL_LINK,
    shouldShake: false,
  },
  {
    technology: 'Java',
    value: 88,
    techLink: JAVA_LINK,
    shouldShake: false,
  },
  {
    technology: 'MongoDB',
    value: 82,
    techLink: MONGO_LINK,
    shouldShake: false,
  },
  {
    technology: 'TailwindCSS',
    value: 87,
    techLink: TAILWIND_LINK,
    shouldShake: false,
  },
];

export const MAIN_RIGHT_SKILLS_LISTS: Technology[] = [
  {
    technology: 'ReactJS',
    value: 90,
    techLink: REACT_LINK,
    shouldShake: false,
  },
  {
    technology: 'NextJS',
    value: 88,
    techLink: NEXT_LINK,
    shouldShake: false,
  },
  {
    technology: 'SpringBoot',
    value: 72,
    techLink: SPRING_LINK,
    shouldShake: false,
  },
  {
    technology: 'Hardhat',
    value: 72,
    techLink: HARDHAT_LINK,
    shouldShake: false,
  },
  {
    technology: 'NodeJS',
    value: 87,
    techLink: NODE_LINK,
    shouldShake: false,
  },
  {
    technology: 'Docker',
    value: 75,
    techLink: DOCKER_LINK,
    shouldShake: false,
  },
];

export const MORE_SKILLS_LISTS: Technology[] = [
  {
    technology: 'HTML5',
    techLink: HTML_LINK,
    shouldShake: false,
  },
  {
    technology: 'CSS3',
    techLink: CSS_LINK,
    shouldShake: false,
  },
  {
    technology: 'Javascript',
    techLink: JS_LINK,
    shouldShake: false,
  },
  {
    technology: 'Ethereum',
    techLink: ETHEREUM_LINK,
    shouldShake: false,
  },
  {
    technology: 'OpenZeppelin',
    techLink: OZ_LINK,
    shouldShake: false,
  },
  {
    technology: 'MochaJS',
    techLink: MOCHA_LINK,
    shouldShake: false,
  },
  {
    technology: 'MySQL',
    techLink: MYSQL_LINK,
    shouldShake: false,
  },
  {
    technology: 'PostgresQL',
    techLink: POSTGRES_LINK,
    shouldShake: false,
  },
  {
    technology: 'aws',
    techLink: AWS_LINK,
    shouldShake: false,
  },
  {
    technology: 'vercel',
    techLink: VERCEL_LINK,
    shouldShake: false,
  },
  {
    technology: 'Netlify',
    techLink: NETLIFY_LINK,
    shouldShake: false,
  },
  {
    technology: 'DynamoDB',
    techLink: DYNAMO_LINK,
    shouldShake: false,
  },
];

export const PROJECTS_LISTS: Project[] = [
  {
    id: 0,
    title: 'Syns Platform',
    stacks: {
      FE: [
        {
          technology: 'TypeScript',
          techLink: TS_LINK,
          shouldShake: false,
        },
        {
          technology: 'NextJS',
          techLink: NEXT_LINK,
          shouldShake: false,
        },
        {
          technology: 'ReactJS',
          techLink: REACT_LINK,
          shouldShake: false,
        },
        {
          technology: 'TailwindCSS',
          techLink: TAILWIND_LINK,
          shouldShake: false,
        },
      ],
      BC: [
        {
          technology: 'Ethereum',
          techLink: ETHEREUM_LINK,
          shouldShake: false,
        },
        {
          technology: 'Polygon',
          techLink: POLYGON_LINK,
          shouldShake: false,
        },
        {
          technology: 'Solidity',
          techLink: SOL_LINK,
          shouldShake: false,
        },
        {
          technology: 'OpenZeppelin',
          techLink: OZ_LINK,
          shouldShake: false,
        },
      ],
      BE: [
        {
          technology: 'Golang',
          techLink: GO_LINK,
          shouldShake: false,
        },
        {
          technology: 'MongoDB',
          techLink: MONGO_LINK,
          shouldShake: false,
        },
        {
          technology: 'Vercel',
          techLink: VERCEL_LINK,
          shouldShake: false,
        },
      ],
    },
    description:
      'A revolutionary web 3.0 music platform that combines NFTs, music-donation system, NFT marketplace, club membership, and social media features, empowering musicians and fans to connect, showcase, and promote their music, revolutionizing the music industry',
    repoLink: 'https://github.com/syns-platform',
    liveLink: 'https://syns.vercel.app',
    thumbnail: 'syns-platform/syns-platform-devices.svg',
    bgColor: ['#EFD8C9', '#EFD8C9'],
    textColor: '#553932',
    descColor: '#83685F',
    btnColor: '#A24353',
  },
  {
    id: 1,
    title: 'NFTir',
    stacks: {
      FE: [],
      BC: [],
      BE: [
        {
          technology: 'Golang',
          techLink: GO_LINK,
          shouldShake: false,
        },
        {
          technology: 'AWS',
          techLink: AWS_LINK,
          shouldShake: false,
        },
        {
          technology: 'DynamoDB',
          techLink: DYNAMO_LINK,
          shouldShake: false,
        },
        {
          technology: 'Docker',
          techLink: DOCKER_LINK,
          shouldShake: false,
        },
      ],
    },
    description:
      'A Golang-based application server, boasts a plethora of RESTful endpoints that facilitate the efficient processing and management of metadata and information pertaining to specific NFTs through the utilization of the NFTGo API.',
    repoLink: `https://github.com/nftir`,
    liveLink: '',
    thumbnail: 'nftir/nftir.svg',
    bgColor: ['#FD8700', '#BE6702'],
    textColor: '#4A3313',
    descColor: '#4A3313',
    btnColor: '#000',
  },

  {
    id: 2,
    title: 'Hashtology',

    stacks: {
      FE: [
        {
          technology: 'TypeScript',
          techLink: TS_LINK,
          shouldShake: false,
        },
        {
          technology: 'ReactJS',
          techLink: REACT_LINK,
          shouldShake: false,
        },
        {
          technology: 'ViteJS',
          techLink: VITE_LINK,
          shouldShake: false,
        },
        {
          technology: 'TailwindCSS',
          techLink: TAILWIND_LINK,
          shouldShake: false,
        },
      ],
      BC: [
        {
          technology: 'Ethereum',
          techLink: ETHEREUM_LINK,
          shouldShake: false,
        },
        {
          technology: 'Polygon',
          techLink: POLYGON_LINK,
          shouldShake: false,
        },
        {
          technology: 'Solidity',
          techLink: SOL_LINK,
          shouldShake: false,
        },
        {
          technology: 'Hardhat',
          techLink: HARDHAT_LINK,
          shouldShake: false,
        },
        {
          technology: 'MochaJS',
          techLink: MOCHA_LINK,
          shouldShake: false,
        },
      ],
      BE: [],
    },

    description:
      'A crypto-wallet that simplifies the process of sending and receiving various digital currencies across the globe, provides a secure and reliable way to manage your digital assets.',
    repoLink: `${QUIET_NODE_GITHUB_LINK}/hashtology-dapp`,
    liveLink: '',
    thumbnail: 'hashtology/hashtology.svg',
    bgColor: ['#CB1EDC', '#5D088F'],
    textColor: '#fff',
    descColor: '#cdcdcd',
    btnColor: '#fff',
  },
  // {

  // {
  //   name: 'Ethereum Dev Sandbox',
  //   stacks: ['Solidity', 'Hardhat', 'MochaJS', 'Ethereum'],
  //   description:
  //     'A Golang-based application server, boasts a plethora of RESTful endpoints that facilitate the efficient processing and management of metadata and information pertaining to specific NFTs through the utilization of the NFTGo API.',
  //   repoLink: `${QUIET_NODE_GITHUB_LINK}/ethereum-dev-sandbox`,
  //   liveLink: '',
  //   thumbnail: 'ethereum-dev-sandbox/ethereum-dev-sandbox.svg',
  // },
  // {
  //   name: 'Calibrated Peer Review',
  //   stacks: ['Java', 'OpenLiberty', 'Docker', 'ReactJS'],
  //   description:
  //     'A full-stack web application aimed at bringing automated calibrated peer review to classrooms at SUNY Oswego.',
  //   repoLink: `https://github.com/tenbergen/CSC480-22S`,
  //   liveLink: '',
  //   thumbnail: 'cpr/cpr.svg',
  // },
  // {
  //   name: 'Meetup App',
  //   stacks: ['ES6', 'ReactJS', 'ExpressJS', 'NodeJs', 'MongoDB', 'Redux'],
  //   description:
  //     'A platform for developers to connect. They can create their portfolio by adding their experience, education, skills, and other important information about their professional career.',
  //   repoLink: `${QUIET_NODE_GITHUB_LINK}/meetup-app`,
  //   liveLink: '',
  //   thumbnail: 'meetup-app/meetup-app.svg',
  // },
  // {
  //   name: 'Full Stack Yelp App',
  //   stacks: ['ES6', 'ReactJS', 'ExpressJS', 'NodeJs', 'MongoDB', 'Redux'],
  //   description:
  //     'a full-stack web application that utilizes advanced data structures and algorithms to perform comprehensive analysis on a vast dataset of 100,000 businesses located throughout the United States.',
  //   repoLink: `${QUIET_NODE_GITHUB_LINK}/CSC-365-fullstack-app-III`,
  //   liveLink: '',
  //   thumbnail: 'yelp-app/yelp-app.svg',
  // },
  // {
  //   name: 'Tic Tac Toe',
  //   stacks: ['TypeScript', 'NextJS', 'Vercel'],
  //   description:
  //     'A cross-platform mobile application that delivers a sleek and user-friendly experience for tracking time across various locations worldwide.',
  //   repoLink: `${QUIET_NODE_GITHUB_LINK}/omega-ecommerce`,
  //   liveLink: 'https://tictactoe2304.netlify.app/',
  //   thumbnail: 'tic-tac-toe/tic-tac-toe.svg',
  // },
  // {
  //   name: 'Landmark-App',
  //   stacks: ['SwiftUI', 'iOS', 'xCode'],
  //   description:
  //     'An iOS application helps hikers and travelers to keep track and mark down favorite landmarks.',
  //   repoLink: `${QUIET_NODE_GITHUB_LINK}/landmark-app`,
  //   liveLink: '',
  //   thumbnail: 'landmark/landmark.svg',
  // },
  // {
  //   name: 'Crew Talk',
  //   stacks: ['Kotlin', 'XML', 'Android', 'Firebase'],
  //   description:
  //     'An Android chat app that supports realtime chatting by integrating the Google Firebase database.',
  //   repoLink: `${QUIET_NODE_GITHUB_LINK}/crew-talk`,
  //   liveLink: '',
  //   thumbnail: 'crew-talk/crew-talk.svg',
  // },
  // {
  //   name: 'Omega Ecommerce',
  //   stacks: ['SwiftUI', 'iOS', 'xCode'],
  //   description:
  //     'A dynamic e-commerce platform featuring a user-friendly, yet intricate animated interface for an elevated online shopping experience.',
  //   repoLink: `${QUIET_NODE_GITHUB_LINK}/omega-ecommerce`,
  //   liveLink: '',
  //   thumbnail: 'omega-ecommerce/omega-ecommerce.svg',
  // },
  // {
  //   name: 'World Time App',
  //   stacks: ['Dart', 'Flutter'],
  //   description:
  //     'A cross-platform mobile application that delivers a sleek and user-friendly experience for tracking time across various locations worldwide.',
  //   repoLink: `${QUIET_NODE_GITHUB_LINK}/omega-ecommerce`,
  //   liveLink: '',
  //   thumbnail: 'world-time-app/world-time-app.svg',
  // },
];

export const PROJECTS_LISTS_6 = [
  {
    name: 'Syns Platform',
    stacks: ['Golang', 'TypeScript', 'NextJS', 'Solidity', 'Ethereum'],
    description:
      'A revolutionary music web 3.0 platform that combines NFTs, music-donation system, NFT marketplace, club membership, and social media features, empowering musicians and fans to connect, showcase, and promote their music, revolutionizing the music industry',
    repoLink: 'https://github.com/syns-platform',
    liveLink: '',
    thumbnail: 'syns-platform/syns-platform-devices.svg',
  },
  {
    name: 'Hashtology',
    stacks: ['Solidity', 'Hardhat', 'TypeScript', 'ReactJS', 'Ethereum'],
    description:
      'A crypto-wallet that makes it easy to send and receive different types of digital currency across the globe, providing a secure and reliable way to manage your digital assets.',
    repoLink: `${QUIET_NODE_GITHUB_LINK}/hashtology-dapp`,
    liveLink: '',
    thumbnail: 'hashtology/hashtology.svg',
  },
  {
    name: 'NFTir',
    stacks: ['Golang', 'AWS', 'Docker', 'DynamoDB'],
    description:
      'A Golang-based application server, boasts a plethora of RESTful endpoints that facilitate the efficient processing and management of metadata and information pertaining to specific NFTs through the utilization of the NFTGo API.',
    repoLink: `https://github.com/nftir`,
    liveLink: '',
    thumbnail: 'nftir/nftir.svg',
  },

  // {
  //   name: 'Ethereum Dev Sandbox',
  //   stacks: ['Solidity', 'Hardhat', 'MochaJS', 'Ethereum'],
  //   description:
  //     'A Golang-based application server, boasts a plethora of RESTful endpoints that facilitate the efficient processing and management of metadata and information pertaining to specific NFTs through the utilization of the NFTGo API.',
  //   repoLink: `${QUIET_NODE_GITHUB_LINK}/ethereum-dev-sandbox`,
  // liveLink:'',
  //   thumbnail: 'ethereum-dev-sandbox/ethereum-dev-sandbox.svg',
  // },
  {
    name: 'Calibrated Peer Review',
    stacks: ['Java', 'OpenLiberty', 'Docker', 'ReactJS'],
    description:
      'A full-stack web application aimed at bringing automated calibrated peer review to classrooms at SUNY Oswego.',
    repoLink: `https://github.com/tenbergen/CSC480-22S`,
    liveLink: '',
    thumbnail: 'cpr/cpr.svg',
  },

  // {
  //   name: 'Meetup App',
  //   stacks: ['ES6', 'ReactJS', 'ExpressJS', 'NodeJs', 'MongoDB', 'Redux'],
  //   description:
  //     'A platform for developers to connect. They can create their portfolio by adding their experience, education, skills, and other important information about their professional career.',
  //   repoLink: `${QUIET_NODE_GITHUB_LINK}/meetup-app`,
  // liveLink:'',
  //   thumbnail: 'meetup-app/meetup-app.svg',
  // },
  {
    name: 'Full Stack Yelp App',
    stacks: ['ES6', 'ReactJS', 'ExpressJS', 'NodeJs', 'MongoDB', 'Redux'],
    description:
      'A full-stack web application that utilizes advanced data structures and algorithms to perform comprehensive analysis on a vast dataset of 100,000 businesses located throughout the United States.',
    repoLink: `${QUIET_NODE_GITHUB_LINK}/CSC-365-fullstack-app-III`,
    liveLink: '',
    thumbnail: 'yelp-app/yelp-app.svg',
  },

  {
    name: 'Tic Tac Toe',
    stacks: ['TypeScript', 'NextJS', 'Vercel'],
    description:
      'A cross-platform mobile application that delivers a sleek and user-friendly experience for tracking time across various locations worldwide.',
    repoLink: `${QUIET_NODE_GITHUB_LINK}/omega-ecommerce`,
    liveLink: '',
    thumbnail: 'tic-tac-toe/tic-tac-toe.svg',
  },

  // {
  //   name: 'Landmark-App',
  //   stacks: ['SwiftUI', 'iOS', 'xCode'],
  //   description:
  //     'An iOS application helps hikers and travelers to keep track and mark down favorite landmarks.',
  //   repoLink: `${QUIET_NODE_GITHUB_LINK}/landmark-app`,
  // liveLink:'',
  //   thumbnail: 'landmark/landmark.svg',
  // },
  {
    name: 'Crew Talk',
    stacks: ['Kotlin', 'XML', 'Android', 'Firebase'],
    description:
      'An Android chat app that supports realtime chatting by integrating the Google Firebase database.',
    repoLink: `${QUIET_NODE_GITHUB_LINK}/crew-talk`,
    liveLink: '',
    thumbnail: 'crew-talk/crew-talk.svg',
  },
  {
    name: 'Omega Ecommerce',
    stacks: ['SwiftUI', 'iOS', 'xCode'],
    description:
      'A dynamic e-commerce platform featuring a user-friendly, yet intricate animated interface for an elevated online shopping experience.',
    repoLink: `${QUIET_NODE_GITHUB_LINK}/omega-ecommerce`,
    liveLink: '',
    thumbnail: 'omega-ecommerce/omega-ecommerce.svg',
  },
  // {
  //   name: 'World Time App',
  //   stacks: ['Dart', 'Flutter'],
  //   description:
  //     'A cross-platform mobile application that delivers a sleek and user-friendly experience for tracking time across various locations worldwide.',
  //   repoLink: `${QUIET_NODE_GITHUB_LINK}/omega-ecommerce`,
  // liveLink:'',
  //   thumbnail: 'world-time-app/world-time-app.svg',
  // },
];
