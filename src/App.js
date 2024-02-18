import Header from "./components/Header";
import DashBoard from "./components/Dashboard";
import DetailPage from "./components/DetailPage";
import "./App.css";
const App = () => (
  <div className="bg-container">
    <Header />
    <div className="bg-page">
      <DashBoard />
      <DetailPage />
    </div>
  </div>
);

export default App;
