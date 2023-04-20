import { RiComputerLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai'
// import { BsCircleFill } from 'react-icons/bs'

const services = [
    {
        Icon: RiComputerLine,
       title: 'Front-end Dev',
       about: 'I can build a beautiful and scalable SPA and websites using <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>React</b>, <b>NextJs</b>, <>Ruby</b> <b>Ruby on Rails</b> etc',
   },
   {
       Icon: FaServer,
       title: 'Back-end Dev',
       about: 'I can create the back-end using <b>Ruby</b>, <b>Ruby on Rails</b>, <b>NodeJs</b>, <b>Express</b>, and <b>Postgresql</b> among others'
   },
   {
       Icon: AiOutlineApi,
       title: 'API Development',
       about: 'i can develop robust REST API using <b>NodeJs</b> and <b>Ruby on Rails</b> and other frameworks of your choice',
   },
   {
       Icon: AiOutlineAntDesign,
       title: 'UI/UX designer',
       about: 'I can also design and build softwares and websites based on any design and specification',
   },
]

export const projects = [
    {
        id:2,
        name: 'Covid-19-Tracking-webapp',
        description: 'This is a web application for a project that uses the real COVID-19 data from Narrativa API. It is mobile application for a tracking Covid 19 data globally and for each country. The application allows users select country and find specific data related to that particular country..',
        image_url: '/images/covid-tracker.png',
        deployed_url: 'https://github.com/jerryowusu/covid-19-tracking-webapp',
        github_link: 'https://github.com/jerryowusu/covid-19-tracking-webapp',
        category: ['TypeScript/JS', 'HTML/CSS'],
        tech_stacks: ['React', 'Redux', 'JavaScript', 'HTML/CSS']
      },  
      {
        id:3,
        name: 'My Blog App',
        description: 'Blog app made with Ruby on Rails. User can make posts, comments and likes on posts of other users. Also user can delete posts and comments created by user. User can edit profile and delete account if not happy. For creating posts and comments user must login. Admin can manage all.',
        image_url: '/images/mywebsite.png',
        deployed_url: 'https://github.com/jerryowusu/myblogapp',
        github_link: 'https://github.com/jerryowusu/myblogapp',
        category: ['Ruby/Rails'],
        tech_stacks: ['Ruby', 'Rails', 'Postgresql' ]
      },  
     {
        id:4,
        name: 'Web Submit Accra',
        description: 'This project is a website for a motivational web summit that organizes prominent people from around the world to mentor and motivate young ingenious young minds to reach their optimum best potential.',
        image_url: '/images/websummit.png',
        deployed_url: 'https://jerryowusu.github.io/Web-Summit-Accra/',
        github_link: 'https://github.com/jerryowusu/Web-Summit-Accra',
        category: ['HTML/CSS'],
        tech_stacks: ['JavaScript', 'HTML/CSS']
      },
]

export default services;
