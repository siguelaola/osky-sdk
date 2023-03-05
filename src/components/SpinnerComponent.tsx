 import "./css/SpinnerComponent.css";
 
function SpinnerComponent() {
  return (
    <div className="spinner-container">
      <div className="spinner"></div>
      <div className="message">Fetching your session...</div>
    </div>
  );
}

export default SpinnerComponent;