const CABIN_YEAR = {
    Y13: "2013",
    Y16: "2016",
    Y18: "2018",
    Y19: "2019",
    Y20: "2020",
    Y21: "2021",
    Y22: "2022",
    PRESENT: "Present"
};

const PLACE = {
    HIGN_SCHOOL: "Haim Bar Lev High School",
    IDF: "Mofet, Israel Defense Forces",
    YAHAD: "YAHAD United For Israel's Soldiers",
    COLLEGE: "The College Of Management",
    DEV_CLUB: "Colman Dev Club"
};


module.exports = [
    {
        id: 0,
        cabinTitle: "Computer Science Major",
        cabinStartYear: CABIN_YEAR.Y13,
        cabinEndYear: CABIN_YEAR.Y16,
        place: PLACE.HIGN_SCHOOL,
        cabinDescription: ["Average grade: 95.", "Final project- Access Database"],
    },
    {
        id: 1,
        cabinTitle: "Programmer",
        cabinStartYear: CABIN_YEAR.Y16,
        cabinEndYear: CABIN_YEAR.Y18,
        place: PLACE.IDF,
        cabinDescription: ["Logic programming and writing financial reports for payroll control in an internal programming language." , "Characterization, development and maintenance of interfaces such as SAP, MF.", "Guidance Microsoft Office courses for senior officers."],
    },
    {
        id: 2,
        cabinTitle: "Member",
        cabinStartYear: CABIN_YEAR.Y19,
        cabinEndYear: CABIN_YEAR.PRESENT,
        place: PLACE.YAHAD,
        cabinDescription: ["Average grade: 92.", "Full Stack Internship.", "Won 3rd place in a 26 hour Hackathon that was hosted by Splitit."],
    },
    {
        id: 3,
        cabinTitle: "Computer Science Student",
        cabinStartYear: CABIN_YEAR.Y19,
        cabinEndYear: CABIN_YEAR.Y22,
        place: PLACE.COLLEGE,
        cabinDescription: ["Strengthening and caring for Israel’s soldiers through various programs."],
    }, 
    {
        id: 4,
        cabinTitle: "Full Stack Developer",
        cabinStartYear: CABIN_YEAR.Y20,
        cabinEndYear: CABIN_YEAR.Y21,
        place: PLACE.DEV_CLUB,
        cabinDescription: ["A group of students with passion for web development.", "Building engaging projects, fun challenges and personalized practice.", "Courses of: Web Development, Git, JavaScript, CSS, HTML and React.js."],
    }, 
    {
        id: 5,
        cabinTitle: "Team Manager (Front End Group)",
        cabinStartYear: CABIN_YEAR.Y21,
        cabinEndYear: CABIN_YEAR.Y22,
        place: PLACE.DEV_CLUB,
        cabinDescription: ["Helping computer science students build a GitHub with an extensive portfolio and implementing the theoretical aspects of Web Development.", "Working with mentors from the industry to build the syllabus.", "Guiding a Front-End Developers group with an emphasis on clean code."],
    },

];
