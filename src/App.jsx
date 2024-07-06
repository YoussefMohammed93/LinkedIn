import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/home/Home";
import UserPage from "./components/user/user-page";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/user/:userID" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
}
