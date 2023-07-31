import { useMemo, useState } from "react";
import Popup from "reactjs-popup";
import CompanyCard from "../../Atoms/CompanCard";
import CardDetails from "../../Atoms/CardDetails";
import { act } from "react-dom/test-utils";
import Graph from "../Graph";

const Insight = ({ personInfo }) => {
  const [activeMenu, setActiveMenu] = useState("skills");
  const Component = useMemo(() => {
    return getComponent(activeMenu, personInfo);
  }, [activeMenu]);
  return (
    <Popup
      trigger={<a>more</a>}
      modal
      closeOnDocumentClick
      overlayStyle={{ background: "rgba(0,0,0,0.5)" }}
    >
      {(close) => (
        <div className="modal">
          <button className="close" onClick={close}>
            &times;
          </button>
          <div className="header"> Insights </div>
          <div className="body">
            <div className="menu-left">
              <p
                onClick={() => setActiveMenu("skills")}
                className={activeMenu == "skills" ? "activeskill" : ""}
              >
                Skills
              </p>
              <p
                onClick={() => setActiveMenu("jobs")}
                className={activeMenu == "jobs" ? "activeskill" : ""}
              >
                Jobs
              </p>
              <p
                onClick={() => setActiveMenu("schools")}
                className={activeMenu == "schools" ? "activeskill" : ""}
              >
                Schools
              </p>
              <p
                onClick={() => setActiveMenu("trends")}
                className={activeMenu == "trends" ? "activeskill" : ""}
              >
                Employee Trends
              </p>
            </div>
            <div className="details">
              {getComponent(activeMenu, personInfo)}
            </div>
          </div>
        </div>
      )}
    </Popup>
  );
};
function getComponent(activeMenu, data) {
  switch (activeMenu) {
    case "trends":
      return <Graph skills={data?.skills} />;
    case "jobs":
      return (
        <Listing
          data={data ? data[activeMenu] : []}
          labelKey={"companyName"}
          nameKey={"jobTitle"}
          locationKey={"location"}
        />
      );
    case "skills":
      return (
        <Listing
          data={data ? data[activeMenu] : []}
          labelKey={"name"}
          nameKey={"endorsements"}
          locationKey={"location"}
        />
      );
    case "schools":
      return (
        <Listing
          data={data ? data[activeMenu] : []}
          labelKey={"schoolName"}
          nameKey={"degree"}
          locationKey={"location"}
        />
      );
  }
}
function Listing({ data, labelKey, locationKey, nameKey }) {
  return (
    <>
      {data.map((d) => {
        return (
          <div style={{ padding: "20px", display: "flex", gap: "10px" }}>
            <img
              src={d.logoUrl}
              width={40}
              height={40}
              style={{ borderRadius: "50%" }}
              alt={d.companyName}
            ></img>

            <div>
              <CardDetails
                label={d[labelKey]}
                name={d[nameKey]}
                location={d[locationKey]}
              />
              <label>{d.dateRange}</label>
            </div>
          </div>
        );
      })}
    </>
  );
}
export default Insight;
