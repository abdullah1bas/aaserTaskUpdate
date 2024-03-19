// @ts-nocheck
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Search from './pages/user/Search.jsx';
import FreelanceRequest from './pages/user/FreelanceRequest.jsx';
import AllBlogs from './pages/blogs/AllBlogs.jsx';
import AddBlogs from './pages/blogs/AddBlogs.jsx';
import AddServices from './pages/blogsService/AddServices.jsx';
import AllServices from './pages/blogsService/AllServices.jsx';
import AllComplaints from './pages/support/AllComplaints.jsx';
import Profile from './pages/user/Profile.jsx';
import AllCategory from './pages/categories/AllCategory.jsx';
import AddCategories from './pages/categories/AddCategories.jsx';
import Reports from './pages/home/Reports.jsx';
import Appointments from './pages/home/Appointments.jsx';
import Schedule from './pages/home/Schedule.jsx';
import Financial from './pages/home/Financial.jsx';
import Overview from './pages/home/Overview.jsx';
import HomePage from './pages/HomePage.jsx';
import data from './data.jsx';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App {...{data}} />}>
      <Route index element={<HomePage />} />
      <Route path='home/Overview' element={<Overview {...{data}} />} />
      <Route path='home/Reports' element={<Reports />} />
      <Route path='home/Appointments' element={<Appointments />} />
      <Route path='home/Schedule' element={<Schedule />} />
      <Route path='home/Financial' element={<Financial />} />
      <Route path='user/Profile' element={<Profile />} />
      <Route path='user/Search' element={<Search />} />
      <Route path='user/FreelanceRequest' element={<FreelanceRequest />} />
      <Route path='blogs/AllBlogs' element={<AllBlogs />} />
      <Route path='blogs/AddBlogs' element={<AddBlogs />} />
      <Route path='blogsService/AllServices' element={<AllServices />} />
      <Route path='blogsService/AddServices' element={<AddServices />} />
      <Route path='categories/AllCategory' element={<AllCategory />} />
      <Route path='categories/AddCategories' element={<AddCategories />} />
      <Route path='support/AllComplaints' element={<AllComplaints />} />
      {/* ... etc. */}
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);