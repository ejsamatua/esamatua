const skillsList = [
    { title: "React JS", value: 75 },
    { title: "Python", value: 80 },
    { title: "JavaScript", value: 80 },
    { title: "Django", value: 80 },
    { title: "FastAPI ", value: 60 },
    { title: "Docker ", value: 70 },
    { title: "PostgreSQL", value: 70 },
];
const projectList = [
    {
        id: 1,
        title: "SWUP",
        technologies: ["React JS", "FastAPI", "PostgreSQL", "Python", "JavaScript", "Bootstrap"],
        backgroundImage:
            "https://ejsamatua.github.io/ejsamatua/images/portfolio/swuppic.jpg",
        frontImage: "https://ejsamatua.github.io/ejsamatua/images/portfolio/swuppic.jpg",
    },
    {
        id: 2,
        title: "CarCar",
        technologies: ["React JS, Django, Python, JavaScript, SQLite, CSS"],
        backgroundImage:
            "https://ejsamatua.github.io/ejsamatua/images/portfolio/zsautos.png",
        frontImage: "https://ejsamatua.github.io/ejsamatua/images/portfolio/zsautos.png",
    },
    {
        id: 3,
        title: "Inner-View",
        technologies: ["Python", "Django", "HTML", "CSS"],
        backgroundImage:
            "https://ejsamatua.github.io/ejsamatua/images/portfolio/InnerView.png",
        frontImage: "https://ejsamatua.github.io/ejsamatua/images/portfolio/InnerView.png",
    },
];

const experienceList = [
    {
        id: 0,
        company: "LPL Financial",
        links: {
            website: "https://www.lplfinancial.com",
            facebook: "https://www.facebook.com/LPLFinancialLLC/",
        },
    },
    {
        id: 1,
        company: "Hack Reactor",
        links: {
            website: "https://www.hackreactor.com"
        },
    },
];

export { skillsList, projectList, experienceList };
