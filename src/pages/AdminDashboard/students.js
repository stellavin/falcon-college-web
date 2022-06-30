import ManageStudents from "../../components/manageStudents";

const data = [
  {
    name: "Stella Sikhila",
    id: " 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    haspassword: "yes",
    email: "stellavinmaris@gmail.com",
    password: "",
    department: "Engineering",
  },
  {
    name: "Mustafa Lopaev",
    id: " 9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    haspassword: "yes",
    password: "",
    email: "mustafa@rebartek.com",
    department: "Science",
  },
];

export default function ManageStudentsPage() {
  return <ManageStudents title="" Students={data} />;
}
