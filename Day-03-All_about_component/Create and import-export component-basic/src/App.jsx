import "./App.css";

function App() {
  return (
    <div>
      <header>
        <h1>React Essentials</h1>
        <p>
          Fundamental React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
      <main>
        <h2>Time to get started!</h2>
        <div>
          <h1>Creating and nesting components </h1>
          <p>
            React apps are made out of components. A component is a piece of the
            UI (user interface) that has its own logic and appearance. A
            component can be as small as a button, or as large as an entire
            page.
          </p>
        </div>
        <div>
          <h1>Writing markup with JSX </h1>
          <p>
            The markup syntax you’ve seen above is called JSX. It is optional,
            but most React projects use JSX for its convenience. All of the
            tools we recommend for local development support JSX out of the box.
          </p>
        </div>
        <div>
          <h1>Displaying data </h1>
          <p>
            JSX lets you put markup into JavaScript. Curly braces let you
            “escape back” into JavaScript so that you can embed some variable
            from your code and display it to the user.{" "}
          </p>
        </div>
      </main>
      <footer>
        <p>Reference: React.dev </p>
      </footer>
    </div>
  );
}

export default App;
