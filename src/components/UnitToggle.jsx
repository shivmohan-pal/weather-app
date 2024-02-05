
//Unit Toggel
const UnitToggle = ({ onToggle,unitName }) => {
  const handleToggle = () => {
    onToggle((prev) => (prev === "Fahrenheit" ? "Celcius" : "Fahrenheit"));// Fahrenheit or Celcius
  };

  return (
    <div className="unit">
      <button className={`unit-toggle ${unitName}`} onClick={handleToggle}>
        <span className="F">&deg;C </span>
        <span className="C">&deg;F </span>
        <span className="overlay"></span>
      </button>
    </div>
  );
};

export default UnitToggle;
