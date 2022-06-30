import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomePage from "./pages";
import DashboardLayout from "./dashboard/layout";
import LecturesPage from "./pages/TeacherDashboard/lectures";
import StudentPage from "./pages/StudentDashboard/student";
import PresidentPage from "./pages/AdminDashboard/president";
import ManageStudentsPage from "./pages/AdminDashboard/students";
import ManageTeacherPage from "./pages/AdminDashboard/teachers";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/dashboard/lecture">
          <DashboardLayout>
            <LecturesPage />
          </DashboardLayout>
        </Route>
        <Route exact path="/dashboard/results">
          <DashboardLayout>
            <StudentPage />
          </DashboardLayout>
        </Route>

        <Route exact path="/dashboard/allLectures">
          <DashboardLayout>
            <PresidentPage />
          </DashboardLayout>
        </Route>

        <Route exact path="/dashboard/manage-students">
          <DashboardLayout>
            <ManageStudentsPage />
          </DashboardLayout>
        </Route>

        <Route exact path="/dashboard/manage-teachers">
          <DashboardLayout>
            <ManageTeacherPage />
          </DashboardLayout>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
