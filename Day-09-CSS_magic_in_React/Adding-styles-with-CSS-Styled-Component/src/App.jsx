import "./App.css";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

function App() {
  return (
    <>
      <div className="app">
        <Header />
        <div className="main-content">
          <Content />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
