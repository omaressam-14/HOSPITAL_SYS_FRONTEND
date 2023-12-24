import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Departments from "./views/Departments";
import Doctors from "./views/Doctors";
import AboutUs from "./views/AboutUs";
import ContactUs from "./views/ContactUs";
import AppLayout from "./Components/AppLayout/AppLayout";
import SignUp from "./views/SignUp";
import Signin from "./views/Signin";
import { Toaster } from "react-hot-toast";
import ProtectedRoute from "./Components/ProtectedRoute/ProtectedRoute";
import Contact from "./views/Contact";
import Account from "./views/Account";
import Reports from "./views/Reports";
import UpdateAccount from "./views/UpdateAccount";
import Appointments from "./views/Appointments";
import CreateMedicalRecord from "./views/CreateMedicalRecord";
import MedicalRecords from "./views/MedicalRecords";
import Medicines from "./views/Medicines";
import MedicineDetails from "./views/MedicineDetails";
import CreaetMedicine from "./views/CreaetMedicine";
import Rooms from "./views/Rooms";
import Room from "./views/Room";
import Users from "./views/Users";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Navigate replace to="/home" />} />
        <Route path="home" element={<Home />} />
        <Route
          element={
            <ProtectedRoute>
              <AppLayout />
            </ProtectedRoute>
          }>
          <Route path="departments" element={<Departments />} />
          <Route path="doctors" element={<Doctors />} />
          <Route path="contact/:id" element={<Contact />} />
          <Route path="my-account" element={<Account />} />
          <Route path="my-reports" element={<Reports />} />
          <Route path="update-me" element={<UpdateAccount />} />
          <Route path="appointments" element={<Appointments />} />
          <Route path="medical-record" element={<MedicalRecords />} />
          <Route path="medicines" element={<Medicines />} />
          <Route path="medicines/create" element={<CreaetMedicine />} />
          <Route path="medicines/:id" element={<MedicineDetails />} />
          <Route path="room" element={<Rooms />} />
          <Route path="room/:id" element={<Room />} />
          <Route path="users" element={<Users />} />
          <Route
            path="medical-record/create/:id"
            element={<CreateMedicalRecord />}
          />
        </Route>
        <Route path="signup" element={<SignUp />} />
        <Route path="signin" element={<Signin />} />
        <Route path="about-us" element={<AboutUs />} />
        <Route path="contact-us" element={<ContactUs />} />
      </Routes>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 5000,
          },
          error: {
            duration: 7000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "#fafafa",
            color: "#383838",
          },
        }}
      />
    </BrowserRouter>
  );
}

export default App;
