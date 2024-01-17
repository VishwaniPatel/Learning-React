import "./App.css";
import { HeaderSection } from "./HeaderSection"; //import using named syntax
import MainSection from "./MainSection"; //import using default syntax

function FooterSection() {
  return (
    <footer>
      <p>Reference: React.dev </p>
    </footer>
  );
}

function App() {
  return (
    <>
      <HeaderSection />
      <MainSection />
      <FooterSection />
    </>
  );
}

export default App;
