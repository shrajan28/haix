import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import SearchResult from "./Components/Search/Search";
import Home from "./Components/Home/Home";
import { QueryClient, QueryClientProvider } from "react-query";
import People from "./Components/People/People";
import Job from "./Components/Job/Job";
import { ListProvider } from "./Context";

const queryClient = new QueryClient();
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <ListProvider>
          <Home />
          <div className="MainLayout">
            <Routes>
              <Route exact path="/search" element={<SearchResult />}></Route>
              <Route exact path="/search/jobs" element={<Job />}></Route>
              <Route exact path="/search/people" element={<People />}></Route>
            </Routes>
          </div>
        </ListProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
