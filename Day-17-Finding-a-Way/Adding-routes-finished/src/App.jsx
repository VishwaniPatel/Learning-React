import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import './App.css'
import Home from "./components/Home";
// import About from "./components/About";
import Contact from "./components/Contact";
import ContactDetails from "./components/ContactDetails";
import PageNotFound from "./components/PageNotFound";
import ProjectList from "./components/ProjectList";
import Project from "./components/Project";
import Task from "./components/Task";
import { Suspense, lazy } from "react";
import Loader from "./components/Loader";
const LazyAbout = lazy(() => import('./components/About'));
function App() {

  return (
    <>
      <Router>
        <Routes>
          {/* Basic Routes */} {/* Using absolute paths */}
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<LazyAboutWithSuspense />} />

          {/* Nested Routes */} {/* Using relative paths */}
          <Route path="/contact" element={<Contact />}>
            {/* Dynamic Routes */}
            <Route path=":id" element={<ContactDetails />} />
          </Route>

          {/* Nested Routes */}
          <Route path="/projectList" loader={<Loader/>} element={<ProjectList />}>
            <Route path="project/:projectId" element={<Project />}>
              <Route path=":taskId" element={<Task />} />
            </Route>
          </Route>

          {/* Index Route */}
          {/* <Route index element={<Home />} /> */}

          {/* Page Not Found */}
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
    </>
  )
}
// About component with Suspense
function LazyAboutWithSuspense() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyAbout />
    </Suspense>
  );
}

export default App
