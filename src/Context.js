import { createContext, useContext, useState } from "react";

const FilterContext = createContext();
const useFilterProvider = () => {
  const [filter, setFilters] = useState({});
  const [peopleCompanyList, setPeopleCompanyList] = useState([]);
  const [jobfilterList, setJobFilterList] = useState([]);

  const OnUpdateFilter = (values) => {
    setFilters(values);
  };

  const getFilters = () => {
    return { ...filter };
  };

  const getPeopleCompanyList = () => {
    return [...peopleCompanyList];
  };
  const OnUpdatePeopleCompanyList = (values) => {
    setPeopleCompanyList(values);
  };
  const getJobFilterList = () => {
    return [...jobfilterList];
  };
  const OnUpdateJobFilterList = (values) => {
    setJobFilterList(values);
  };

  return {
    getFilters,
    getPeopleCompanyList,
    OnUpdateFilter,
    OnUpdatePeopleCompanyList,
    getJobFilterList,
    OnUpdateJobFilterList,
  };
};
function ListProvider({ children }) {
  const filter = useFilterProvider();
  return (
    <FilterContext.Provider value={filter}> {children} </FilterContext.Provider>
  );
}
function useFilter() {
  return useContext(FilterContext);
}
export { ListProvider, useFilter };
