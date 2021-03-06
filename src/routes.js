/*!

=========================================================
* Argon Dashboard React - v1.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Index from "views/Index.js";
import CreateJob from "views/examples/CreateJob.js";
import EditBlog from "views/examples/EditBlog.js";
import Register from "views/examples/Register.js";
import Login from "views/examples/Login.js";
import Tables from "views/examples/Tables.js";
import CreateBlog from "views/examples/CreateBlog.js";
import EditJob from "views/examples/EditJob.js";
import TeamMembers from "views/examples/TeamMembers.js";

var routes = [
  {
    path: "/index",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-purple",
    component: Index,
    layout: "/portal"
  },
  // {
  //   path: "/createblog",
  //   name: "Create Blog",
  //   icon: "ni ni-single-copy-04 text-blue",
  //   component: CreateBlog,
  //   layout: "/portal"
  // },
  // {
  //   path: "/editblog",
  //   name: "Edit Blog",
  //   icon: "ni ni-single-02 text-orange",
  //   component: EditBlog,
  //   layout: "/portal"
  // },
  {
    path: "/createjob",
    name: "Create Job",
    icon: "ni ni-circle-08 text-yellow",
    component: CreateJob,
    layout: "/portal"
  },
  {
    path: "/editjob",
    name: "Edit Job",
    icon: "fas fa-user-edit text-red",
    component: EditJob,
    layout: "/portal"
  },
  {
    path: "/teammembers",
    name: "Team Members",
    icon: "ni ni-satisfied text-green",
    component: TeamMembers,
    layout: "/portal"
  },
  // {
  //   path: "/tables",
  //   name: "Logout",
  //   icon: "ni ni-button-power text-red",
  //   component: Tables,
  //   layout: "/portal"
  // },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: Login,
    layout: "/auth"
  },
  // {
  //   path: "/register",
  //   name: "Register",
  //   icon: "ni ni-circle-08 text-pink",
  //   component: Register,
  //   layout: "/auth"
  // }
];
export default routes;
