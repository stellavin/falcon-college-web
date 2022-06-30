import DocumentsIcon from "./icons/documents";

const userType = localStorage.getItem("usertype");
console.log("user------", userType);
// const userType = "student";
// const userType = "president";

let data = [
  {
    section: "Dashboard",
    icon: <DocumentsIcon />,
    content: [
      {
        title: "Lectures",
        link: "/dashboard/allLectures",
      },
      {
        title: "Teachers",
        link: "/dashboard/manage-teachers",
      },
      {
        title: "Students",
        link: "/dashboard/manage-students",
      },
    ],
  },
];

if (userType === "ROLE_ADMIN") {
  data = [
    {
      section: "Dashboard",
      icon: <DocumentsIcon />,
      content: [],
    },
  ];
}

if (userType === "ROLE_USER") {
  data = [
    {
      section: "Dashboard",
      icon: <DocumentsIcon />,
      content: [],
    },
  ];
}

export default data;
