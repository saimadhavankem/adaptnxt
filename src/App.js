import Header from "./components/Header";
import NavigationBar from "./components/NavigationBar";
import OrderTab from "./components/OrderTab";
import "./App.css";
const App = () => (
  <div className="bg-container">
    <Header />
    <div className="bg-page">
      <NavigationBar />
      <OrderTab />
    </div>
  </div>
);

export default App;
