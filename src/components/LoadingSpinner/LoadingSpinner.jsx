
import "./LoadingSpinner.css";
import LoadingSpinnerImg from "../../assets/loading-spinner.gif"

function LoadingSpinner() {
  return (
    <div className=" d-flex al-center jc-center loading-overlay-container">
      <img src={LoadingSpinnerImg} alt="Loading..." height="100px" />
    </div>
  );
}

export default LoadingSpinner;
