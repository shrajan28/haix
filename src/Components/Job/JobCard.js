import CardDetails from "../../Atoms/CardDetails";
import Tag from "../Tag/Tag";

const JobCard = ({ job }) => {
  return (
    <div
      style={{
        display: "flex",

        padding: "10px",
      }}
    >
      <img
        width="60"
        loading="lazy"
        height="60"
        alt="OpenAI"
        src={job.logoUrl}
      ></img>
      <div style={{ flex: "1" }}>
        <CardDetails
          label={job.jobTitle}
          name={job.description}
          location={job.location}
        />
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            data-supported-dps="24x24"
            fill="currentColor"
            class="mercado-match"
            width="24"
            height="24"
            focusable="false"
          >
            <path
              color="#057642"
              d="M12 20a8 8 0 010-16 7.91 7.91 0 014.9 1.69l-1.43 1.42a6 6 0 101.42 1.42l3.82-3.82a1 1 0 000-1.41A1 1 0 0020 3a1 1 0 00-.7.29l-1 1A10 10 0 1022 12h-2a8 8 0 01-8 8zm5-8a5 5 0 11-5-5 4.93 4.93 0 012.76.82l-2.24 2.24A2.24 2.24 0 0012 10a2 2 0 102 2 2.24 2.24 0 00-.07-.51l2.24-2.24A5 5 0 0117 12z"
            ></path>
          </svg>
          <label>Actively Recruiting</label>
        </>
      </div>
      <Tag
        label={"Save"}
        style={{
          color: "#0a66c2",
          fontWeight: 600,
          fontSize: "1.2rem",
          border: "1px solid #0a66c2",
        }}
      />
    </div>
  );
};

export default JobCard;
