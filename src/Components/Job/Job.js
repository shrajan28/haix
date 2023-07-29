import { useParams } from "react-router-dom";
import "./Job.css";
import { useQuery } from "react-query";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";
import moment from "moment/moment";
import Skeletal from "../../Skeletal";
import { getJobs } from "../../config";
const Job = () => {
  const { isLoading, data } = useQuery("jobs", getJobs);
  const [activeJob, setActiveJob] = useState();
  useEffect(() => {
    if (!isLoading) {
      setActiveJob(data.statsTimeline.jobDetails[0]);
    }
  }, [isLoading]);
  return (
    <div className="JobContainer">
      {isLoading ? (
        <Skeletal />
      ) : (
        <>
          {" "}
          <div className="Job-left">
            <JobListing
              JobListing={data.statsTimeline.jobDetails}
              activeJob={activeJob}
              setActiveJob={setActiveJob}
            />
          </div>
          {activeJob ? (
            <div className="Job-right">
              <JobDetails job={activeJob} />
            </div>
          ) : null}
        </>
      )}
    </div>
  );
};
export function JobListing({
  JobListing,
  activeJob = null,
  setActiveJob = () => {},
  showCount = undefined,
}) {
  const { isLoading, data } = useQuery("jobs", getJobs);
  JobListing = data?.statsTimeline?.jobDetails;
  return (
    <>
      {JobListing?.map((job, index) => {
        if (index > showCount) return;
        var isActive = activeJob?.jobId == job.jobId;
        return (
          <div
            onClick={() => setActiveJob(job)}
            className={isActive ? "active" : ""}
          >
            <JobCard job={job} />
          </div>
        );
      })}
    </>
  );
}
function JobDetails({ job }) {
  return (
    <div className="JobDetailsContainer">
      <a href={job.jobUrl}>
        <h2>{job.jobTitle}</h2>
      </a>
      <div>
        <a href={job.jobUrl}>{job.companyName}</a>
        <span>{` ${job.location} |${getDays(job.postDate)} Days ago|  ${
          job.applicantCount
        } applicants`}</span>
        <span></span>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
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
          <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
        </svg>{" "}
        <span>Full-time</span>
      </div>
    </div>
  );
}
function getDays(value) {
  var jobDate = moment(value);
  var today = moment().startOf("day");
  return moment.duration(today.diff(jobDate)).asDays();
}
export default Job;
