import { Routes, Route } from "react-router-dom";
import Feed from "./pages/feed";
import About from "./pages/about";
import CreateQuote from "./pages/createQuote";
import Login from "./pages/login";
import SingIn from "./pages/singIn";

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>;

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>;

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="about" element={<About />} />
        <Route path="createQuote" element={<CreateQuote />} />
        <Route path="login" element={<Login />} />
        <Route path="singIn" element={<SingIn />} />
      </Routes>
    </div>
  );
}

export default App;
