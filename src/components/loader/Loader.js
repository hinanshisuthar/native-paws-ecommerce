import loader from "../../assets/loader.svg";
import "./Loader.css";

export function Loader() {
  return (
    <div className="loader-wrapper center">
      <img src={loader} className="loader"></img>;
    </div>
  );
}
