import { Link, useNavigate, useParams } from "react-router-dom";
import "./Home.css";
import { useQuery } from "react";
import { getDetails } from "../../config";
import TagList from "../Tag/TagList";

const Home = () => {
  const navigate = useNavigate();
  const isSearch = window.location.href.indexOf("search") > -1 ? true : false;
  const handlSubmit = (e) => {
    navigate(`/search?query=${e.value}`, {});
  };

  return (
    <div className="HomeContainer">
      <input
        placeholder="Search"
        onKeyDown={(e) =>
          e.key === "Enter" ? handlSubmit(e.currentTarget) : null
        }
        onSubmit={handlSubmit}
        className="SearchField"
      />
      {isSearch ? (
        <div>
          {" "}
          <TagList />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Home;
