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
            "https://i.imgur.com/ZU87bMv.png",
        frontImage: "https://i.imgur.com/ZU87bMv.png",
    },
    {
        id: 2,
        title: "CarCar",
        technologies: ["React JS, Django, Python, JavaScript, SQLite, CSS"],
        backgroundImage:
            "https://i.imgur.com/0zWtMr2.png",
        frontImage: "https://i.imgur.com/0zWtMr2.png",
    },
    {
        id: 3,
        title: "Inner-View",
        technologies: ["Python", "Django", "HTML", "CSS"],
        backgroundImage:
            "https://i.imgur.com/c1PopU6.jpeg",
        frontImage: "https://i.imgur.com/c1PopU6.jpeg",
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
