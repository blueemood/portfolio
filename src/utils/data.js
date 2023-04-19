import { HiOutlineDesktopComputer } from "react-icons/hi";
import { CiMobile1 } from "react-icons/ci";
import { MdWorkspacesOutline } from "react-icons/md";
export const projectExperience = [
  {
    name: "Website Design",
    projects: 76,
    icon: HiOutlineDesktopComputer,
    bg: "#286F6C",
  },
  {
    name: "Mobile App Design",
    projects: 63,
    icon: CiMobile1,
    bg: "#EEC048",
  },
  {
    name: "Brand Identity",
    projects: 47,
    icon: MdWorkspacesOutline,
    bg: "#F26440",
  },
];

export const WhatDoIHelp = [
  "I am an enthusiastic learner, developer, having a great interest in problem solving, web technologies. Looking for some great opportunities in an organization where I can grow my skills and contribute to the organization.",
  "I am a pre-final year undergrad student at The LNMIIT, pursuing my B.Tech degree in Communication and Computer Engineering (CCE) with an overall CGPA of 9.03.",
];

export const workExp = [
  {
    place: "Data Structures",
    // tenure: "Aug 2014 - Sep 2016",
    role: "C++",
    // detail:
    //   "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
  {
    place: "Algorithm",
    // tenure: "Aug 2014 - Sep 2016",
    role: "Java",
    // detail:
    //   "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
  {
    place: "MySQL",
    // tenure: "Aug 2014 - Sep 2016",
    role: "MongoDB",
    // detail:
    //   "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
  {
    place: "HTML",
    role: "CSS",
  },
  {
    place: "JavaScript",
    role: "ReactJS",
  },
  {
    place: "NodeJS",
    role: "ExpressJS",
  },
  {
    place: "APIs",
    role: "",
  },
];

export const projects = [
  {
    place: "Data Structures",
    link: "https://schar.netlify.app/",
    image: "./showCase1.png",
    name: "Char",
    tech: "ReactJS ExpressJS MongoDB NodeJS HTML CSS JavaScript",
    // tenure: "Aug 2014 - Sep 2016",
    role: "A responsive women's fashion eCommerce website, including features such as product listing, search functionality, and a user-friendly shopping cart, along with admin features for inventory management, product categorization, and order fulfillment, resulting in improved website performance and user experience. ",
    // detail:
    //   "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
  // {
  //   place: "",
  //   link: "",
  //   image: "",
  //   name: "",
  //   tech: "",
  //   // tenure: "Aug 2014 - Sep 2016",
  //   role: "",
  //   // detail:
  //   //   "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  // },
  {
    place: "Data Structures",
    link: "https://schar.netlify.app/",
    image: "./showCase1.png",
    name: "Char",
    tech: "ReactJS ExpressJS MongoDB NodeJS HTML CSS JavaScript",
    // tenure: "Aug 2014 - Sep 2016",
    role: "A responsive women's fashion eCommerce website, including features such as product listing, search functionality, and a user-friendly shopping cart, along with admin features for inventory management, product categorization, and order fulfillment, resulting in improved website performance and user experience. ",
    // detail:
    //   "A visual desginer dsesign for a variety of platoforms, may include internet and internet sites, games, movies, kioasks and wearbies. In short, they create the concepts",
  },
];

export const comments = [
  {
    name: "B.Tech - CCE",
    post: "Undergrad",
    comment:[
      "2020-2024",
      "The LNMIIT,Jaipur",
      "CGPA : 9.03"
    ],
    img: "./people2.png",
  },
  {
    name: "Senior Secondary Education",
    post: "CBSE-12th",
    comment:[
      "2017-2020",
      "Bansal Public School, Kota",
      "75%"
    ],
    img: "./people1.png",
  },
  {
    name: "Secondary Education",
    post: "ICSE-10th",
    comment:[
      "2014-2017",
      "SSRS, Hattiangadi",
      "94.6%"
    ],
    img: "./people1.png",
  }
];

export const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 1,
  initialSlide: 0,
  touchMove: true,
  useCSS: true,

  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};
