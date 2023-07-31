import { Link, useHref } from "react-router-dom";
import Tag from "./Tag";
import { useEffect, useMemo, useState } from "react";
import { filterCategories } from "../../config";
import Dropdown from "react-dropdown";
import { useNavigate, useNavigationType } from "react-router-dom/dist";
import { useFilter } from "../../Context";

const TagList = ({ fetchFilters = false }) => {
  const pathName = useHref();
  const navigate = useNavigate();
  let placeHolder = "";
  const filterContext = useFilter();
  const [tagFilters, setTagFilters] = useState();
  const getfilters = () => {
    var key = pathName.split("/")[2];
    if (key) {
      placeHolder = key;
      if (key == "People") {
        return filterContext.getPeopleCompanyList();
      }

      return filterCategories[key];
    }
  };
  let color;
  const handleFilters = (options, filter) => {
    var filterObject = filterContext.getFilters();
    filterObject[filter.data] = options.value;

    filterContext.OnUpdateFilter(filterObject);
  };

  const filters = useMemo(getfilters, [pathName, filterContext]);
  return (
    <div>
      {filters ? (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <Dropdown
            className="dropdown"
            onChange={(options) => {
              navigate(`/search/${options.value.props.label}`);
              filterContext.OnUpdateFilter({});
            }}
            value={placeHolder}
            options={tagList.map((tag, index) => {
              return <Tag label={tag.label} />;
            })}
          />
          <>
            {" "}
            {filters.map((filter) => {
              return (
                <Dropdown
                  className={`${color} dropdown`}
                  value={filter.label}
                  options={filter.values.map((val) => {
                    return {
                      label: (
                        <div>
                          <input
                            type="checkbox"
                            onClick={() => {
                              console.log("sdsd");
                            }}
                            id={val}
                          />
                          <label>{val}</label>
                        </div>
                      ),
                      value: val,
                    };
                  })}
                  onChange={(options) => {
                    handleFilters(options, filter);
                    color = "green";
                  }}
                />
              );
            })}
          </>
        </div>
      ) : (
        <div className="TagList">
          {tagList.map((tag, index) => {
            return (
              <Link
                className="link"
                style={{
                  textDecoration: "none",
                }}
                to={`/search${tag.to}`}
              >
                <Tag label={tag.label} />
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

var tagList = [
  { label: "Jobs", to: "/Jobs" },
  { label: "Companies", to: "/Companies" },
  { label: "People", to: "/People" },
  { label: "Posts", to: "/Posts" },
  { label: "Groups", to: "/Groups" },
  { label: "Events", to: "/Events" },
  { label: "Schools", to: "/Schools" },
  { label: "Schools", to: "/Schools" },
  { label: "Courses", to: "/Courses" },
];
export default TagList;
