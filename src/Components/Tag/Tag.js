import "./Tag.css";
const Tag = ({ label, style = null }) => {
  return (
    <div className="Tag" style={style}>
      <label>{label}</label>
    </div>
  );
};
export default Tag;
