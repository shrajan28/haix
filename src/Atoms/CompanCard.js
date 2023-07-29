import Tag from "../Components/Tag/Tag";
import CardDetails from "./CardDetails";
import "./CompanCard.css";
const CompanyCard = ({ companyDetails }) => {
  return (
    <div className="CompanyCard">
      <img
        width="96"
        src="https://media.licdn.com/dms/image/C4E0BAQG0lRhNgYJCXw/company-logo_100_100/0/1678382029586?e=1698883200&amp;v=beta&amp;t=RFxsJVgwa_5SXpHeWW9Y4YvUTeJKC8ceRByPS8gHYMw"
        loading="lazy"
        height="96"
        alt="OpenAI"
        id="ember2103"
        class="ivm-view-attr__img--centered EntityPhoto-square-6   evi-image lazy-image ember-view"
      ></img>
      <div>
        <CardDetails
          label={companyDetails.name}
          name={companyDetails.domain}
          location={companyDetails.location}
          styles={{ label: { fontWeight: 600, fontSize: "2.4rem" } }}
        />

        <p style={{ color: "grey", display: "flex", gap: "10px" }}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            class="mercado-match"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M14 11.75V15H9v-3.25A1.75 1.75 0 0110.75 10h1.5A1.75 1.75 0 0114 11.75zM11.5 9A2.5 2.5 0 109 6.5 2.5 2.5 0 0011.5 9zM5 1a3 3 0 103 3 3 3 0 00-3-3zm.75 7h-1.5A2.25 2.25 0 002 10.25V15h6v-4.75A2.25 2.25 0 005.75 8z"></path>
          </svg>
          {companyDetails.followers} followers
        </p>

        <div style={{ display: "flex", gap: "30px" }}>
          <Tag
            style={{
              backgroundColor: "#0a66c2",
              color: "white",
              fontWeight: 600,
              fontSize: "1.1rem",

              padding: "5px 10px",
              cursor: "pointer",
            }}
            label={"+  Follow"}
            b
          ></Tag>
          <Tag label={"View Page"}></Tag>
        </div>
      </div>
    </div>
  );
};
export default CompanyCard;
