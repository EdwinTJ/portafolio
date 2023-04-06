import Menu from "../assets/Menu.png";
import chatApp from "../assets/chatApp.png";
import MercanciaTijuana from "../assets/MercanciaTijuana.png";
import IconTwitter from "../assets/IconTwitter.jpg";
export const ProjectList = [
  {
    name: "Menu",
    image: Menu,
    skills: "React",
    github: "https://github.com/EdwinTJ/menu",
    description: "Display of a menu",
    link: "https://fancy-queijadas-35ef1b.netlify.app/",
  },
  {
    name: "Chat App",
    image: chatApp,
    skills: "Cors,socket.io,nodeJS",
    github: "https://github.com/EdwinTJ/chat-app-server",
    description: "Chat wiht someone in the same room",
    link: "https://chat-app-ui-production.up.railway.app/",
  },

  {
    name: "Mercancia Tijuana",
    image: MercanciaTijuana,
    github: "https://github.com/EdwinTJ/bodega_website",
    skills: "React,NodeJS,Express,MongoDB,Nelify,Railway",
    description:
      "This website has the porpuse of display the products of a company. Also, it has an admin panel where the admin can add, edit and delete products.",
    link: "https://stalwart-bavarois-0d8052.netlify.app/",
  },

  {
    name: "Icon Twitter",
    image: IconTwitter,
    github: "https://github.com/EdwinTJ/icon-twitter",
    skills: "NextJs,TypeScript,Zod,tRPC,Tailwindcss,Prisma,dayjs",
    description:
      "This website a replica of the twitter app but only accepts emojis. This project was created by using create-t3-app." +
      " The backend was created with tRPC and the frontend with NextJs. Then for the authentication I use clerk." +
      " For the database I use Prisma with MySQL and for the styling I use Tailwindcss." +
      " I use typescript for the whole project and zod for the validation of the data." +
      " For the deployment I use Vercel, and planetScale for the database hosting",
    link: "https://icon-twitter-uf42-ipucn3gq4-edwintj.vercel.app/",
  },
];
