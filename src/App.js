import './App.css';
import React from 'react';
import Root from './components/root/Root';
import Home from './pages/home/Home';
import Projects from './pages/projects/Projects';
import Suppliers from './pages/suppliers/Suppliers';
import Clients from './pages/clients/Clients';
import TimeTracking from './pages/timetracking/TimeTracking';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={ <Root /> }>
    <Route index element={<Navigate to="home"/>}/>
    <Route path="home" element={ <Home />}/>
    <Route path="projects" element={ <Projects />}/>
    <Route path="clients" element={ <Clients />}/>
    <Route path="timetracking" element={ <TimeTracking />}/>
  </Route>
));

function App() {
  return (
    <RouterProvider router={ router } />
  );
}

export default App;
