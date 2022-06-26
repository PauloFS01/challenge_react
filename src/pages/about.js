import { useNavigate } from "react-router-dom";

export default function About() {
  let navigate = useNavigate();

  function goTo() {
    navigate("/");
  }
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <button onClick={goTo}>go to feed</button>
        <p>this is about page!</p>
      </main>
    </>
  );
}
