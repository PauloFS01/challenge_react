import { useNavigate } from "react-router-dom";

export default function Home() {
  let navigate = useNavigate();

  function goTo() {
    navigate("about");
  }
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <button onClick={goTo}>go to about</button>
        <p>This is feed page.</p>
      </main>
    </>
  );
}
