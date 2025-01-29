import { Component } from "react";
import ReactGA from "react-ga4";
import React from "react";
import { useState } from 'react';
// import backgroundImage from './files/BGTheme.png'; // Make sure to set the correct path to your image file


export class AboutKeshav extends Component {
  constructor() {
    super();
    this.screens = {};
    this.state = {
      screen: () => {},
      active_screen: "about", // by default 'about' screen is active
      navbar: false,
    };
  }

  componentDidMount() {
    this.screens = {
      about: <About />,
      experience: <Experience />,
      education: <Education />,
      skills: <Skills />,
      projects: <Projects />,
      resume: <Resume />,
      technologies:<TechnologiesUsed />
    };

    let lastVisitedScreen = localStorage.getItem("about-section");
    if (lastVisitedScreen === null || lastVisitedScreen === undefined) {
      lastVisitedScreen = "about";
    }

    // focus last visited screen
    this.changeScreen(document.getElementById(lastVisitedScreen));
  }

  changeScreen = (e) => {
    const screen = e.id || e.target.id;

    // store this state
    localStorage.setItem("about-section", screen);

    // google analytics
    ReactGA.send({
      hitType: "pageview",
      page: `/${screen}`,
      title: "Custom Title",
    });

    this.setState({
      screen: this.screens[screen],
      active_screen: screen,
    });
  };

  showNavBar = () => {
    this.setState({ navbar: !this.state.navbar });
  };

  renderNavLinks = () => {
    return (
      <>
        <div
          id="about"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "about"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="about keshav"
            src="./themes/Yaru/status/about.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">About Me</span>
        </div>
        <div
          id="experience"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "experience"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="keshav' experience"
            src="./themes/Yaru/status/experience.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Experience</span>
        </div>
        <div
          id="education"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "education"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="keshav' education"
            src="./themes/Yaru/status/education.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Education</span>
        </div>
        <div
          id="technologies"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "technologies"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="technologies used"
            src="./themes/Yaru/status/tech_uses.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Technologies/Tools</span>
        </div>
        
        <div
          id="skills"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "skills"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="keshav' skills"
            src="./themes/Yaru/status/skills.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Skills</span>
        </div>
        <div
          id="projects"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "projects"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="keshav' projects"
            src="./themes/Yaru/status/projects.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Projects</span>
        </div>
        <div
          id="resume"
          tabIndex="0"
          onFocus={this.changeScreen}
          className={
            (this.state.active_screen === "resume"
              ? " bg-ub-orange bg-opacity-100 hover:bg-opacity-95"
              : " hover:bg-gray-50 hover:bg-opacity-5 ") +
            " w-28 md:w-full md:rounded-none rounded-sm cursor-default outline-none py-1.5 focus:outline-none duration-100 my-0.5 flex justify-start items-center pl-2 md:pl-2.5"
          }
        >
          <img
            className=" w-3 md:w-4"
            alt="keshav's resume"
            src="./themes/Yaru/status/download.svg"
          />
          <span className=" ml-1 md:ml-2 text-gray-50 ">Resume</span>
        </div>
        <div className="my-0.5 w-28 md:w-full h-8 px-2 md:px-2.5 flex">
          <iframe
            src="https://github.com/sponsors/keshavaone/button"
            title="Sponsor keshavaone"
            width={"100%"}
            height={"100%"}
          ></iframe>
        </div>
      </>
    );
  };

  render() {
    return (
      <div className="w-full h-full flex bg-ub-cool-grey text-white select-none relative">
        <div className="md:flex hidden flex-col w-1/4 md:w-1/5 text-sm overflow-y-auto windowMainScreen border-r border-black">
          {this.renderNavLinks()}
        </div>
        <div
          onClick={this.showNavBar}
          className="md:hidden flex flex-col items-center justify-center absolute bg-ub-cool-grey rounded w-6 h-6 top-1 left-1"
        >
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className=" w-3.5 border-t border-white"
            style={{ marginTop: "2pt", marginBottom: "2pt" }}
          ></div>
          <div className=" w-3.5 border-t border-white"></div>
          <div
            className={
              (this.state.navbar
                ? " visible animateShow z-30 "
                : " invisible ") +
              " md:hidden text-xs absolute bg-ub-cool-grey py-0.5 px-1 rounded-sm top-full mt-1 left-0 shadow border-black border border-opacity-20"
            }
          >
            {this.renderNavLinks()}
          </div>
        </div>
        <div className="flex flex-col w-3/4 md:w-4/5 justify-start items-center flex-grow bg-ub-grey overflow-y-auto windowMainScreen">
          {this.state.screen}
        </div>
      </div>
    );
  }
}

export default AboutKeshav;

export const displayAboutKeshav = () => {
  return <AboutKeshav />;
};

function About() {
  return (
    <>
      <div className="w-20 md:w-28 my-4 bg-white rounded-full">
        <img
          className="w-full"
          src="./images/logos/bitmoji.png"
          alt="Keshava Rao Logo"
        />
      </div>
      <div className=" mt-4 md:mt-8 text-lg md:text-2xl text-center px-1">
        <div>
          my name is <span className="font-bold">Keshava Rao</span> ,
        </div>
        <div className="font-normal ml-1">
          I'm a{" "}
          <span className="text-pink-600 font-bold">Sr. Software Developer!</span>
        </div>
      </div>
      <div className=" mt-4 relative md:my-8 pt-px bg-white w-32 md:w-48">
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-0"></div>
        <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-0"></div>
      </div>
      <ul className=" mt-4 leading-tight tracking-tight text-sm md:text-base w-5/6 md:w-3/4 emoji-list">
        <li className=" list-pc">
          I'm a<span className=" font-medium">Python Developer </span>
          at &nbsp;
          <u className=" cursor-pointer ">
            <a href="https://www.amazon.com/" target={"_blank"}>
              AMAZON
            </a>
          </u>
          , and open for oppurtunities Software Development Roles! ( Hit me up{" "}
          <a className="text-underline" href="mailto:career_keshava@outlook.com">
            <u>career_keshava@outlook.com</u>
          </a>{" "}
          :) )
        </li>
        <li className=" mt-3 list-building">
          {" "}
          I enjoy building & shipping awesome projects.
        </li>
        <li className=" mt-3 list-time">
          {" "}
          When I am not coding my next project, I like go out for dance & Read Books.
        </li>
        <li className=" mt-3 list-star">
          {" "}
          And I do code in AWS, Write SQL Queries, Most Importantly also a Scrum Master.
        </li>
      </ul>
    </>
  );
}
function Experience() {
  const companies = [
    {
      name: "Quest Global (Currently Working for SKF)",
      position: "Sr. Software Developer",
      duration: "2024 - current",
      location: "Bangalore, India",
      project: "Bearing Sensor Data Pipeline System"
      responsibilities: ["Scrum Master","Backend Developer"]
    },
    {
      name: "Amazon.com",
      position: "Sr. Python Developer",
      duration: "2021 - current",
      location: "Bangalore, India",
      project: "GTA,SNAP, LabLens, Astron, Gringotts, QuickTrack, Locker, Reason, Texter, ScrapeParagon, MediaCentral, DuplicateChecker, SIMCreate, SToC",
      responsibilities: []
    },
    {
      name:"Think&Learn Pvt Ltd",
      position:"Software Developer",
      duration:"2019-2021",
      location:"Hyderabad, India",
      project: "",
      responsibilities: []
    },
    {
      name:"Extra Marks",
      position:"Python Developer",
      duration:"2018-2019",
      location:"Bangalore, India",
      project: "",
      responsibilities: []
    }
    // Add more company objects here
  ];
  const styles = {
    container: {
      padding: '2rem',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      borderRadius: '8px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      fontFamily: 'Arial, sans-serif',
      color: '#fff',
      animation: 'fadeIn 2s'
    },
    header: {
      position: 'relative',
      fontSize: '2rem',
      marginBottom: '1.5rem',
      fontWeight: '600'
    },
    underlineContainer: {
      position: 'absolute',
      width: '100%',
      marginTop: '0.5rem',
      borderTop: '2px solid #ddd'
    },
    underlineCircle: {
      position: 'absolute',
      width: '10px',
      height: '10px',
      backgroundColor: '#ddd',
      borderRadius: '50%'
    },
    companiesList: {
      marginTop: '1rem',
      paddingLeft: '0'
    },
    companyItem: {
      marginBottom: '2rem',
      listStyleType: 'none',
      padding: '1rem',
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      borderRadius: '8px',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
    },
    companyName: {
      fontSize: '1.5rem',
      fontWeight: 'bold'
    },
    position: {
      fontSize: '1rem',
      marginTop: '0.25rem'
    },
    durationLocation: {
      fontSize: '0.875rem',
      marginTop: '0.125rem'
    },
    projectName: {
      fontWeight: 'bold',
      fontSize: '1rem',
      marginTop: '0.5rem'
    },
    responsibilitiesList: {
      marginTop: '1rem',
      paddingLeft: '1.25rem',
      listStyleType: 'disc'
    },
    responsibilityItem: {
      marginTop: '0.5rem'
    },
    '@keyframes fadeIn': {
      from: { opacity: 0 },
      to: { opacity: 1 }
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        Experience
        <div style={styles.underlineContainer}>
          <div style={{ ...styles.underlineCircle, left: '0%' }}></div>
          <div style={{ ...styles.underlineCircle, right: '0%' }}></div>
        </div>
      </div>
      <ul style={styles.companiesList}>
        {companies.map((company, index) => (
          <li key={index} style={styles.companyItem}>
            <div style={styles.companyName}>{company.name}</div>
            <div style={styles.position}>{company.position}</div>
            <div style={styles.durationLocation}>
              {company.duration}, {company.location}
            </div>
            
            {company.project && (
              <div style={styles.projectName}>Project: {company.project}</div>
            )}
            
            <ul style={styles.responsibilitiesList}>
              {company.responsibilities.map((responsibility, i) => (
                <li key={i} style={styles.responsibilityItem}>
                  {responsibility}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TechnologiesUsed() {
  const techStack = [
    { name: "Python", experience: "5.5" },
    { name: "AWS", experience: "3" },
    { name: "Keras", experience: "3" },
    { name: "Tensorflow", experience: "3" },
    { name: "PyTorch", experience: "3" },
    { name: "FastAPI", experience: "4" },
    { name: "Docker", experience: "4" },
    { name: "Kubernetes", experience: "4" },
    { name: "Containerization", experience: "4" },
    { name: "MySQL", experience: "4" },
    { name: "MongoDB", experience: "5" },
    { name: "Pydantic", experience: "4" },
    { name: "JavaScript", experience: "4" },
    { name: "Pandas", experience: "4" },
    { name: "PowerBI", experience: "4" },
    { name: "QuickSight", experience: "3" },
    // Add more technologies and experiences here
  ];
  const other_techs = "#ML,#NLP, #CV, #NLP, #AI, #LLM, #ChatBot, #Pipeline, #CodeReview, #TypeAnnotations, #DBMS";

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technologies Used
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
        {techStack.map((tech, index) => (
          <li key={index} className="list-disc">
            <div className=" text-lg md:text-xl text-left font-bold leading-tight">
              {tech.name} ({tech.experience} Years)
            </div>  
          </li>
        ))}
        <br></br>
        
        {other_techs}
      </ul>
    </>
  );
}

function Education() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Education
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" w-10/12  mt-4 ml-4 px-0 md:px-1">
        <li className="list-disc">
          <div className=" text-lg md:text-xl text-left font-bold leading-tight">
            VIT University
          </div>
          <div className=" text-sm text-gray-400 mt-0.5">2014 - 2018</div>
          <div className=" text-sm md:text-base">
            Bachelor's in Computer Science & Engineering with Spl in Bio-Informatics
          </div>
          <div className="text-sm text-gray-300 font-bold mt-1">
            CGPA &nbsp; 7.63/10.0
          </div>
          <div className="text-sm md:text-base">
            Co-President: Technical Club RCOEM
          </div>
          <div className="text-sm md:text-base">
            Member: Robotics Club RCOEM
          </div>
        </li>
      </ul>
    </>
  );
}
function Skills() {
  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Technical Skills
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          I've worked with a wide variety of programming languages & frameworks.
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>
            {" "}
            My areas of expertise are{" "}
            <strong className="text-ubt-gedit-orange">
              Automation, Python, Backend development!
            </strong>
          </div>
        </li>
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <div>Here are my most frequently used</div>
        </li>
      </ul>
      <div className="w-full md:w-10/12 flex mt-4">
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Languages & Tools
        </div>
        <div className=" text-sm text-center md:text-base w-1/2 font-bold">
          Frameworks & Libraries
        </div>
      </div>
      <div className="w-full md:w-10/12 flex justify-center items-start font-bold text-center">
        <div className="px-2 w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            <img
              className="m-1"
              src="https://img.shields.io/pypi/pyversions/pandas" 
              alt="keshavaone python"
            />
            
            <img
              className="m-1"
              src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E"
              alt="keshavaone javascript"
            />
           
            <img
              className="m-1"
              src="https://img.shields.io/badge/mysql-%2300f.svg?style=for-the-badge&logo=mysql&logoColor=white"
              alt="keshavaone mysql"
            />
            
            <img
              className="m-1"
              src="https://img.shields.io/badge/mongodb-%2300f.svg?style=for-the-badge&logo=mongodb&logoColor=white"
              alt="keshavaone mongodb"
            />
            
            <img
              className="m-1"
              src="https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white"
              alt="keshavaone git"
            />
          </div>
        </div>
        <div className="px-2 flex flex-wrap items-start w-1/2">
          <div className="flex flex-wrap justify-center items-start w-full mt-2">
            
            <img
              className="m-1"
              src="https://img.shields.io/badge/django-%2300f.svg?style=for-the-badge&logo=django&logoColor=white"
              alt="keshav django"
            />
            {/* <img
              className="m-1"
              src="https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white"
              alt="aman npm"
            />
            <img
              className="m-1"
              src="https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white"
              alt="aman node"
            /> */}
          </div>
        </div>
      </div>
      <ul className=" tracking-tight text-sm md:text-base w-10/12 emoji-list mt-4">
        <li className=" list-arrow text-sm md:text-base mt-4 leading-tight tracking-tight">
          <span> And of course,</span>{" "}
          <img
            className=" inline ml-1"
            src="http://img.shields.io/badge/-Linux-0078D6?style=plastic&logo=linux&logoColor=ffffff"
            alt="keshav linux"
          />{" "}
          <span>!</span>
        </li>
      </ul>
    </>
  );
}

function Projects() {
  const project_list = [
    {
      name: "Financial Analysis",
      date: "Mar 2022 - Apr 2022",
      link: "https://github.com/keshavaone/PFS",
      description: [
        "A Python script that analyzes personal finance data and generates various reports and visualizations.",
      ],
      domains: ["Python", "Data Analysis", "Pandas", "Matplotlib"],
    },
    
  ];

  const tag_colors = {
    javascript: "yellow-300",
    firebase: "red-600",
    firestore: "red-500",
    "firebase auth": "red-400",
    "chrome-extension": "yellow-400",
    flutter: "blue-400",
    dart: "blue-500",
    "react-native": "purple-500",
    html5: "pink-600",
    sass: "pink-400",
    tensorflow: "yellow-600",
    django: "green-600",
    python: "green-200",
    "codeforces-api": "gray-300",
    tailwindcss: "blue-300",
    "next.js": "purple-600",
  };

  return (
    <>
      <div className=" font-medium relative text-2xl mt-2 md:mt-4 mb-4">
        Projects
        <div className="absolute pt-px bg-white mt-px top-full w-full">
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 left-full"></div>
          <div className="bg-white absolute rounded-full p-0.5 md:p-1 top-0 transform -translate-y-1/2 right-full"></div>
        </div>
      </div>
      {
        <iframe src="https://github.com/sponsors/keshavaone/card" title="Sponsor xlibraries" className='my-4 w-5/6 md:w-3/4' ></iframe>
      }

      {project_list.map((project, index) => {
        const projectNameFromLink = project.link.split("/");
        const projectName = projectNameFromLink[projectNameFromLink.length - 1];
        return (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noreferrer"
            className="flex w-full flex-col px-4"
          >
            <div className="w-full py-1 px-2 my-2 border border-gray-50 border-opacity-10 rounded hover:bg-gray-50 hover:bg-opacity-5 cursor-pointer">
              <div className="flex flex-wrap justify-between items-center">
                <div className="flex justify-center items-center">
                  <div className=" text-base md:text-lg mr-2">
                    {project.name.toLowerCase()}
                  </div>
                  <iframe
                    src={`https://ghbtns.com/github-btn.html?user=keshavaone&repo=${projectName}&type=star&count=true`}
                    frameBorder="0"
                    scrolling="0"
                    width="150"
                    height="20"
                    title={project.name.toLowerCase() + "-star"}
                  ></iframe>
                </div>
                <div className="text-gray-300 font-light text-sm">
                  {project.date}
                </div>
              </div>
              <ul className=" tracking-normal leading-tight text-sm font-light ml-4 mt-1">
                {project.description.map((desc, index) => {
                  return (
                    <li key={index} className="list-disc mt-1 text-gray-100">
                      {desc}
                    </li>
                  );
                })}
              </ul>
              <div className="flex flex-wrap items-start justify-start text-xs py-2">
                {project.domains
                  ? project.domains.map((domain, index) => {
                      const borderColorClass = `border-${tag_colors[domain]}`;
                      const textColorClass = `text-${tag_colors[domain]}`;

                      return (
                        <span
                          key={index}
                          className={`px-1.5 py-0.5 w-max border ${borderColorClass} ${textColorClass} m-1 rounded-full`}
                        >
                          {domain}
                        </span>
                      );
                    })
                  : null}
              </div>
            </div>
          </a>
        );
      })}
    </>
  );
}
function Resume() {
  return (
    <iframe
      className="h-full w-full"
      src="./files/KeshavaRao-Resume.pdf"
      title="Keshava Rao Resume"
      frameBorder="0"
    ></iframe>
  );
}
