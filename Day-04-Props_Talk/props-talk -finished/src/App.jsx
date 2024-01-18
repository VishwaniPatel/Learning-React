import "./App.css";
import reactLogo from "./assets/images/ReactLogo.png";
import Blog from "./assets/Blog";
function App() {
  // Object
  // const userData = {
  //   firstname: "Vishwani",
  //   lastname: "Patel",
  //   domain: "Frontend",
  // };

  // Array
  // const myList = ["Item 1", "Item 2", "Item 3"];
  // const list = myList.map((item, index) => <li>{item}</li>);

  // Conditional Rendering
  const isLoggedIn = false;
  let content;
  const Login = () => <p>First Login to the system</p>;
  const Home = () => <p>You have successfully logged in to the system</p>;

  if (isLoggedIn) {
    content = <Home />;
  } else {
    content = <Login />;
  }

  // Array of object
  const blogs = [
    {
      title:
        "React Canaries: Enabling Incremental Feature Rollout Outside Meta",
      date: "May 3, 2023",
      content:
        "Traditionally, new React features used to only be available at Meta first, and land in the open source releases later. We’d like to offer the React community an option to adopt individual new features as soon as their design is close to final—similar to how Meta uses React internally. We are introducing a new officially supported Canary release channel. It lets curated setups like frameworks decouple adoption of individual React features from the React release schedule.",
    },
    {
      title: "React Labs: What We've Been Working On – March 2023",
      date: "March 22, 2023",
      content:
        "In React Labs posts, we write about projects in active research and development. Since our last update, we’ve made significant progress on React Server Components, Asset Loading, Optimizing Compiler, Offscreen Rendering, and Transition Tracing, and we’d like to share what we learned.",
    },
    {
      title: "Introducing react.dev",
      date: "March 16, 2023",
      content:
        "Today we are thrilled to launch react.dev, the new home for React and its documentation. In this post, we would like to give you a tour of the new site.",
    },
    {
      title: "React v18.0",
      date: "March 29, 2022",
      content:
        "React 18 is now available on npm! In our last post, we shared step-by-step instructions for upgrading your app to React 18. In this post, we’ll give an overview of what’s new in React 18, and what it means for the future",
    },
  ];

  // const MyButton = () => <button>Read More</button>;

  // Receive props
  // const Blog = (props) => (
  //   <div>
  //     <h2>{props.title}</h2>
  //     <p>Date: {props.date}</p>
  //     <p>{props.content}</p>
  //     <hr />
  //   </div>
  // );

  // Destructuring props
  // const Blog = ({ title, date, content }) => (
  //   <div>
  //   <h2>{title}</h2>
  //   <p>{date}</p>
  //   <p>{content}</p>
  //   <hr />
  // </div>
  // )

  // Receiving props as an whole object
  // const Blog = (props) => (
  //   <div className="blog">
  //     <h2>{props.blog.title}</h2>
  //     <p>Date: {props.blog.date}</p>
  //     <p>{props.blog.content}</p>
  //     <MyButton />
  //   </div>
  // );

  return (
    <>
      <div>
        {/* Render component using conditional render */}
        {content}
        {/* <p>{userData.firstname}</p> */}

        {/* Passing src as string */}
        {/* <img src="https://i.imgur.com/yXOvdOSs.jpg" alt="profileImage" /> */}

        {/* Passing image src dynamically */}
        {/* <img src={reactLogo} alt="logo" height={250} width={250} /> */}

        {/* Rendering list */}
        {/* <ul>{list}</ul> */}

        {/* Displaying object data */}
        {/* <p>First Name: {userData.firstname}</p>
      <p>Last Name: {userData.lastname}</p>
      <p>Domain: {userData.domain}</p> */}

        {/* Displaying array of object */}
        {/* {blogs.map((blog) => (
          <>
            <h1>{blog.title}</h1>
            <span>{blog.date}</span>
            <p>{blog.content}</p>
          </>
        ))} */}

        {/* passing props with the JSX spread syntax   */}
        {/* {blogs.map((blog, index) => (
          <Blog
            key={index}
            title={blog.title}
            date={blog.date}
            content={blog.content}
          />
        ))} */}

        {/* Passing whole object as prop */}
        {/* {blogs.map((blog, index) => (
          <Blog key={index} blog={blog} />
        ))} */}

        {/* Passing props using spread syntax */}
        {blogs.map((blog, index) => (
          <Blog key={index} {...blog} />
        ))}
      </div>
    </>
  );
}

export default App;
