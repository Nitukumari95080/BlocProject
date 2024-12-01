import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import NewsArticles from "./pages/NewsArticles";
import Dasboard from "./pages/Dasboard";
import About from "./pages/About";
import SigninForm from "./auth/forms/SigninForm";
import SignUpForm from "./auth/forms/SignUpForm";
import Header from "./components/shered/Header";




const App = () => {
  return (
    <BrowserRouter>
     <Header/>
      <Routes>
        <Route path="/sign-up" element={<SignUpForm />} />
        <Route path="/sign-in" element={<SigninForm />} />
        <Route path="/about" element={< About/>} />
        <Route path="/dashboard" element={<Dasboard />} />
        <Route path="/news" element={<NewsArticles />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
