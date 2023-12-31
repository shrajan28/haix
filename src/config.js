const details = {
  companyDetails: {
    name: "OpenAI",
    logo: "",
    domain: "Software Development",
    location: "Redmond,Washington",
    followers: "21M",
    connections: [{ img: "" }, { img: "" }, { img: "" }],
  },
  jobDetails: {
    tags: ["Remote", "Easy Apply", "<10 Applicants"],
    jobs: [
      {
        id: "1",
        title: "Software Engineer",
        company: "OpenAI",
        location: "Redmond,Washington",
      },
      {
        id: "2",
        title: "Senior Software Engineer",
        company: "OpenAI",
        location: "Redmond,Washington",
      },
      {
        id: "3",
        title: "Engineer",
        company: "OpenAI",
        location: "Redmond,Washington",
      },
      {
        id: "4",
        title: "Software Engineer",
        company: "OpenAI",
        location: "Redmond,Washington",
      },
    ],
  },
  relatedCompanies: [
    {
      name: "OpenAI",
      logo: "",
      domain: "Software Development",
      location: "Redmond,Washington",
      followers: "21M",
    },
    {
      name: "OpenAI",
      logo: "",
      domain: "Software Development",
      location: "Redmond,Washington",
      followers: "21M",
    },
    {
      name: "OpenAI",
      logo: "",
      domain: "Software Development",
      location: "Redmond,Washington",
      followers: "21M",
    },
  ],
};
export const filterCategories = {
  Jobs: [
    {
      label: "DatePosted",
      data: "postDate",
      values: ["AnyTime", "Past month", "Past week", "Past 24 hours"],
    },
    {
      label: "Experience Level",
      data: "",
      values: [
        "Internship",
        "Entry Level",
        "Associate",
        "Mid-Senior level",
        "Director",
        "Executive",
      ],
    },
    {
      label: "Job type",
      values: ["Full-time", "Part-time", "Temporary"],
      data: "",
    },

    {
      label: "On-site/Remote",
      values: ["On-site", "Remote", "Hybrid"],
      data: "workplaceType",
    },
  ],
  People: [
    {
      label: "Connections",
      values: ["1st", "2nd", "3rd"],
      data: "connectionDegree",
    },
    {
      label: "Locations",
      values: ["India", "United States", "Karnataka India", "Bengaluru"],
      data: "location",
    },
    {
      label: "Current Company",
      values: ["India", "United States", "Karnataka India", "Bengaluru"],
      data: "companyName",
    },
  ],
};
export const getDetails = async (query) => {
  let newPromise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(details);
    }, 1000);
  });
  let data = await newPromise;
  return data;
};
export const getJobs = async () => {
  let data = await fetch(
    "https://alivecore360.com/api/stats/searchExport?&handlername=ibm&key=15d273cc-0b8a-4460-9cd8-55fa55a3e1c1"
  );
  return data.json();
};
export const getPeople = async () => {
  let data = await fetch(
    "https://alivecore360.com/api/stats/salesNavigator?handlername=ai%20engineer&key=15d273cc-0b8a-4460-9cd8-55fa55a3e1c1"
  );
  return data.json();
};
