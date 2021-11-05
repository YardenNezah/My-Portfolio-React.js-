import emoji from 'react-easy-emoji';

// https://fontawesome.com/icons?d=gallery

// Social Media Section
const SOCIAL_MEDIA_SECTION = {
    github: "https://github.com/yardentzaraf",
    linkedin: "https://www.linkedin.com/in/yarden-tsaraf/",
    gmail: "yardentsaraf@gmail.com",
    display: true // Set true to display this section, defaults to false
};

// Skills Section
const SKILLS_SECTION = {
    title: "What I do",
    subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"), emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"), emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
    ],
    softwareSkills: [
        {
            skillName: "HTML",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "CSS",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "SASS",
            fontAwesomeClassname: "fab fa-sass"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
        }, {
            skillName: "React.js",
            fontAwesomeClassname: "fab fa-react"
        }, {
            skillName: "Node.js",
            fontAwesomeClassname: "fab fa-node"
        }, {
            skillName: "SQL-database",
            fontAwesomeClassname: "fas fa-database"
        }, {
            skillName: "Python",
            fontAwesomeClassname: "fas fa-python"
        }, {
            skillName: "C++",
            fontAwesomeClassname: "fas fa-c++"
        }, {
            skillName: "C",
            fontAwesomeClassname: "fas fa-c"
        }, {
            skillName: "C#",
            fontAwesomeClassname: "fas fa-c#"
        }, {
            skillName: "ASP.NET",
            fontAwesomeClassname: "fas fa-ASP.NET"
        }, {
            skillName: "Microsoft Access",
            fontAwesomeClassname: "fas fa-access"
        }, {
            skillName: "Microsoft Office",
            fontAwesomeClassname: "fas fa-office"
        }, {
            skillName: "SAP",
            fontAwesomeClassname: "fas fa-sap"
        }, {
            skillName: "MainFrame",
            fontAwesomeClassname: "fas fa-mainframe"
        }, {
            skillName: "Bootstrap",
            fontAwesomeClassname: "fas fa-bootstrap"
        }, {
            skillName: "jQuery",
            fontAwesomeClassname: "fas fa-jQuery"
        }, {
            skillName: "Git",
            fontAwesomeClassname: "fas fa-git"
        },
    ],
    display: true // Set false to hide this section, defaults to true
};


// Projects section
const PROJECTS_SECTION = {
    title: "Part of My Projects",
    subtitle: " Building engaging projects, fun challenges and personalized practice ",
    projects: [
        { // image: require("./assets"),
            projectName: "1",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [
                {
                    name: "Visit Website",
                    url: "fa"
                }
                // you can add extra buttons here.
            ]
        }, { // image: require("./assets"),
            projectName: "2",
            projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
            footerLink: [
                {
                    name: "Visit Website",
                    url: ""
                }
            ]
        }
    ],
    display: true // Set false to hide this section, defaults to true
};


// Contact section
const CONTACT_SECTION = {
    title: emoji("Contact Me ☎️"),
    subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
    number: "052-3383837",
    email_address: "yardentsaraf@gmail.com",
    github: "https://github.com/yardentzaraf",
    linkedin: "https://www.linkedin.com/in/yarden-tsaraf/",
    display: true // Set false to hide this section, defaults to true
};

export default {SOCIAL_MEDIA_SECTION, SKILLS_SECTION, PROJECTS_SECTION, CONTACT_SECTION};

export {
    SOCIAL_MEDIA_SECTION,
    SKILLS_SECTION,
    PROJECTS_SECTION,
    CONTACT_SECTION
};
