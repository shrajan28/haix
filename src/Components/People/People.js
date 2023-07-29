import { useQuery } from "react-query";
import "./People.css";
import { getPeople } from "../../config";
import { useEffect, useMemo, useState } from "react";
import CardDetails from "../../Atoms/CardDetails";
import Skeletal from "../../Skeletal";
import Pagination from "../Pagination/Pagination";
import Tag from "../Tag/Tag";
const People = () => {
  const { isLoading, data } = useQuery("people", getPeople);
  const [activePage, setActivePage] = useState(1);
  const pageSize = 10;
  const currentPeopleList = useMemo(() => {
    if (isLoading) return;
    const firstPageIndex = (activePage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return data.statsTimeline.salesLead.slice(firstPageIndex, lastPageIndex);
  }, [isLoading, activePage]);

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
            <CardDetails
              label={person.fullName}
              name={person.title}
              location={person.location}
              st
            />
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

const PageNumber = ({ count }) => {
  return <div></div>;
};
export default People;
