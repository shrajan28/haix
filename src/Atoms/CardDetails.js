import "./CardDetails.css";
const CardDetails = ({ label, name, location, styles = {} }) => {
  return (
    <div className="CardDetails">
      {" "}
      <p style={styles["label"]} className="heading">
        {label}
      </p>
      <p style={styles["name"]}>{name}</p>
      <p style={styles["location"]} className="location">
        {location}
      </p>
    </div>
  );
};
export default CardDetails;
