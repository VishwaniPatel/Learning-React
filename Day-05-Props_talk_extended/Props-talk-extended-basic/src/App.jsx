import "./App.css";
import { ComponentComposition } from "./ComponentComposition/ComponentComposition";
import EventsExample from "./EventHandling/EventsExample";
import PropDrilling from "./PropDrilling/PropDrilling";

function App() {
  return (
    <>
      {/* Example of prop drilling */}
      <PropDrilling />

      {/* Example of component composition */}
      <ComponentComposition />

      {/* Examples of event handling */}
      <EventsExample />
    </>
  );
}

export default App;
