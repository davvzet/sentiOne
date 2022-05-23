import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Employees } from "./pages/Employees";
import { EmployeeDetails } from "./pages/EmployeeDetails";
import { PageNotFound } from "./components/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Employees />} />
        <Route path="/employees/:slug" element={<EmployeeDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export { App };
