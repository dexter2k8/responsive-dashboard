import "./styles.css";

export default function Switch({ onClick }: { onClick: () => void }) {
  return (
    <>
      <input type="checkbox" id="switch" hidden />
      <label className="switch" htmlFor="switch" onClick={onClick}></label>
    </>
  );
}
