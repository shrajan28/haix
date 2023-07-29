import { Link, useHref } from "react-router-dom";
import Tag from "./Tag";

const TagList = () => {
  const pathName = useHref();

  return (
    <div className="TagList">
      {tagList.map((tag) => {
        return (
          <Link
            className="link"
            style={{ textDecoration: "none" }}
            to={`/search${tag.to}`}
          >
            <Tag label={tag.label} />
          </Link>
        );
      })}
    </div>
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
export default TagList;
