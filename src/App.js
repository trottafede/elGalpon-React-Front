import "./App.css";
import Advertisements from "./components/Advertisements/Advertisements";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Products from "./components/Products/Products";

function App() {
  return (
    <div className="App">
      <Header />
      <Advertisements />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
