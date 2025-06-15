import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Home, About, Project, Contact } from './pages/index'
import Navbar from './components/Navbar';

const App = () => {
  return (
    <main className="bg-slate-300/20">
        <Router>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/about' element={<About />}/>
                <Route path='/project' element={<Project />}/>
                <Route path='/contact' element={<Contact />}/>
            </Routes>
        </Router>

    </main>
  )
}

export default App

// BrowserRouter (Aliased as Router)
// What it is:

//     BrowserRouter is a higher-level component provided by react-router-dom to manage the routing system of your React app.
//     It uses the HTML5 history API (pushState, replaceState, and popstate) to keep your UI in sync with the URL in the browser.

// Why it’s used:

//     It establishes the context for all routing operations in your app.
//     Without a BrowserRouter, components like Route and Link won't work, as they rely on the routing context provided by it.

// How it works:

//     It wraps your app (or the part of your app that uses routing).
//     It watches for changes in the browser’s address bar (URL) and renders the components corresponding to those URLs.

// Router ()
// What it is:

//     Routes is a container component that holds all your Route components.
//     It ensures that only one route is matched and rendered at a time.
//     Introduced in React Router v6, it replaces the Switch component from earlier versions.

// Why it’s used:

//     It allows you to define all the possible routes for your app in one place.
//     Ensures that only one route matches the URL at a time (unless nested routing is used).


// Route():

// What it is:

//     Route defines the mapping between a URL path and a React component.
//     When the URL matches the path of a Route, the component specified in element is rendered.

// Why it’s used:

//     It determines what content to render for a given URL.
//     Provides flexibility for building dynamic, multi-page apps.

// Key Properties:

//     path: The URL pattern to match.
//     element: The component to render when the URL matches the path.