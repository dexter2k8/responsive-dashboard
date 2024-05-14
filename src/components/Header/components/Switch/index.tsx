import "./styles.css";

export default function Switch() {
  return (
    <>
      <input type="checkbox" id="switch" hidden />
      <label className="switch" htmlFor="switch"></label>
    </>
  );
}
