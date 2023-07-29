import { Link } from "react-router-dom";

import SearchDetails from "./SearchDetails";

import { useQuery } from "react-query";
import { getDetails } from "../../config";

const SearchResult = () => {
  const { isLoading, data } = useQuery("company", getDetails);
  return (
    <>
      {" "}
      {isLoading ? (
        <div>Loading.....</div>
      ) : (
        <SearchDetails tagList={tagList} details={data} />
      )}
    </>
  );
};
var tagList = [
  { label: "Jobs", to: "/jobs" },
  { label: "Companies", to: "/companies" },
  { label: "People", to: "/People" },
  { label: "Posts", to: "/Posts" },
  { label: "Groups", to: "/Groups" },
  { label: "Events", to: "/Events" },
  { label: "Schools", to: "/Schools" },
  { label: "Schools", to: "/Schools" },
  { label: "Courses", to: "/Courses" },
];
export default SearchResult;
