import { Routes, Route } from "react-router-dom";
import Feed from "./pages/feed";
import About from "./pages/about";
import CreateQuote from "./pages/createQuote";
import Login from "./pages/login";
import SingIn from "./pages/singIn";

function App() {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
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
