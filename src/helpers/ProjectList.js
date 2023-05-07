import Menu from "../assets/Menu.png";
import chatApp from "../assets/chatApp.png";
import AnimeShop from "../assets/AnimeShop.jpg";
import IconTwitter from "../assets/IconTwitter.jpg";
import RateGames from "../assets/RateGames.jpg";
export const ProjectList = [
  {
    name: "Menu",
    image: Menu,
    skills: "React",
    github: "https://github.com/EdwinTJ/menu",
    description: "Display of a menu",
    link: "https://fancy-queijadas-35ef1b.netlify.app/",
    client: "Course",
  },
  {
    name: "Chat App",
    image: chatApp,
    skills: "Cors,socket.io,nodeJS",
    github: "https://github.com/EdwinTJ/chat-app-server",
    description: "Chat wiht someone in the same room",
    link: "https://chat-app-ui-production.up.railway.app/",
    client: "Course",
  },

  {
    name: "Anime Shop Tijuana",
    image: AnimeShop,
    github: "https://github.com/EdwinTJ/figuras_website",
    skills: "React,NodeJS,Express,MongoDB,Vercel,Railway",
    description:
      "This website has the porpuse of display the products of a company. Also, it has an admin panel where the admin can add, edit and delete products." +
      " The backend was created with express and the frontend with React" +
      " For the database I use MongoDB",
    link: "https://figuras-website.vercel.app/",
    client: "Shop In Tijuana",
  },

  {
    name: "Icon Twitter",
    image: IconTwitter,
    github: "https://icon-twitter-uf42.vercel.app/",
    skills: "NextJs,TypeScript,Zod,tRPC,Tailwindcss,Prisma,dayjs",
    description:
      "This website a replica of the twitter app but only accepts emojis. This project was created by using create-t3-app." +
      " The backend was created with tRPC and the frontend with NextJs. Then for the authentication I use clerk." +
      " For the database I use Prisma with MySQL and for the styling I use Tailwindcss." +
      " I use typescript for the whole project and zod for the validation of the data." +
      " For the deployment I use Vercel, and planetScale for the database hosting",
    link: "https://icon-twitter-uf42-ipucn3gq4-edwintj.vercel.app/",
    client: "Course",
  },

  {
    name: "Rate Games",
    image: RateGames,
    github: "https://github.com/EdwinTJ/rategames",
    skills: "TypeScript,Zod,Prisma,Bootstrap,NodeJS,Express,VUEJS",
    description:
      "This website is a game review website by only using emojis" +
      " The backend was created with express and the frontend with VueJs. Then for the authentication I use clerk." +
      " For the database I use Prisma with MySQL and for the styling I use Bootstrap." +
      " I use typescript for the whole project and zod for the validation of the data." +
      " For the deployment I use Vercel, and planetScale for the database hosting",
    link: "https://rategames.vercel.app/",
    client: "Myself",
  },
];
