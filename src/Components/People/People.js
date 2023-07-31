import { useQuery } from "react-query";
import "./People.css";
import { filterCategories, getPeople } from "../../config";
import { useEffect, useMemo, useState } from "react";
import CardDetails from "../../Atoms/CardDetails";
import Skeletal from "../../Skeletal";
import Pagination from "../Pagination/Pagination";
import Tag from "../Tag/Tag";
import Popup from "reactjs-popup";
import { useFilter } from "../../Context";
import { GetFilteredData } from "../Job/Job";
import Insight from "../Insights/Insight";
const People = () => {
  const filters = useFilter();
  const { isLoading, data } = useQuery("people", getPeople);
  const [activePage, setActivePage] = useState(1);
  const pageSize = 10;
  const currentPeopleList = useMemo(() => {
    if (isLoading) return;
    const firstPageIndex = (activePage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    var temp = data.statsTimeline.salesLead.slice(
      firstPageIndex,
      lastPageIndex
    );
    if (filters.getPeopleCompanyList().length == 0) {
      getFiltersOptions(temp, filters);
    }
    temp = GetFilteredData(temp, filters.getFilters());
    return temp;
  }, [isLoading, activePage, filters]);

  return (
    <div className="PeopleContainer">
      {isLoading ? (
        <Skeletal />
      ) : (
        <>
          <PeopleList peopleList={currentPeopleList} />
          <Pagination
            currentPage={activePage}
            totalCount={data.statsTimeline.salesLead.length}
            pageSize={pageSize}
            onPageChange={(page) => setActivePage(page)}
          />
        </>
      )}
    </div>
  );
};
const PeopleList = ({ peopleList }) => {
  return (
    <div className="PeopleList">
      {peopleList.map((person) => {
        return (
          <div className="PeopleCard">
            <img
              width={50}
              height={50}
              style={{ borderRadius: "50%" }}
              src={person.profileImageUrl}
            ></img>
            <div style={{ flex: "1" }}>
              <CardDetails
                label={person.fullName}
                name={person.title}
                location={person.location}
              />
              <div></div>
              <div>
                <Insight personInfo={person.personInfo} />
              </div>
            </div>

            <Tag
              label={"Connect"}
              style={{ color: "#0a66c2", border: "1.5px solid #0a66c2" }}
            ></Tag>
          </div>
        );
      })}
    </div>
  );
};

const getFiltersOptions = (data, filters) => {
  var filter = filterCategories.People.map((a) => {
    const optionset = new Set();
    data.forEach((d) => {
      optionset.add(d[a.data]);
    });
    return {
      label: a.label,
      values: Array.from(optionset),
      data: a.data,
    };
  });
  filters.OnUpdatePeopleCompanyList(filter);
};
const PageNumber = ({ count }) => {
  return <div></div>;
};
export default People;
