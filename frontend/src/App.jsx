import { BrowserRouter, Route } from "react-router-dom";
import SignUpForm from "./auth/forms/SignUpForm";
import SigninForm from "./auth/forms/SigninForm";
import Home from "./pages/Home";
import About from "./pages/About";
import Dasboard from "./pages/Dasboard";
import NewsArticles from "./pages/NewsArticles";

const App = () => {
  return (
    <>
      <BrowserRouter>
      <Route>
        <Route path="/sign-in" element={<SignUpForm/>} />
        <Route path="/sign-up" element={<SigninForm/>} />
        <Route path="/sign-in" element={<SignUpForm/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/dasboard" element={<Dasboard/>} />
        <Route path="/news" element={<NewsArticles/>} />

        <Route path="/" element={<Home/>} />
      </Route>
      </BrowserRouter>
    </>
  );
};

export default App;
