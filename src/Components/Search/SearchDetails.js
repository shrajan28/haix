import { JobListing } from "../Job/Job";
import CompanyCard from "../../Atoms/CompanCard";
import "./SearchDetails.css";
const SearchDetails = ({ tagList, details }) => {
  const { relatedCompanies, companyDetails, jobDetails } = details;

  return (
    <div className="DetailsContainer">
      <div className="TagLists">
        <p>On this page</p>
        {tagList.map((a) => {
          return <p>{a.label}</p>;
        })}
      </div>
      <div className="Details-mid">
        <CompanyCard companyDetails={companyDetails} />
        <div
          style={{ background: "white", borderRadius: "10px", padding: "20px" }}
        >
          {" "}
          <h5>Jobs</h5>
          <JobListing showCount={4} />
        </div>
      </div>
      <div className="viewed">
        <h5>People also viewed</h5>
        {relatedCompanies.map((a) => {
          return <RelatedInfo />;
        })}
      </div>
    </div>
  );
};
function RelatedInfo(company) {
  return <></>;
}
export default SearchDetails;
