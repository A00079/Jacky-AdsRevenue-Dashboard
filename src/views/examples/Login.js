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
import React, { useEffect } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col
} from "reactstrap";
import logo from "../../assets/img/brand/logo.png";
import { useHistory } from "react-router-dom";
const Login = (props) => {
  const history = useHistory();
  const [authEmail, setAuthEmail] = React.useState('');
  const [authPass, setAuthPass] = React.useState('');

  const handleAuthEmail = (e) => {
    console.log('Email', e.target.value);
    setAuthEmail(e.target.value);
  }
  const handleAuthPass = (e) => {
    setAuthPass(e.target.value);
  }
  useEffect(() => {
    if (sessionStorage.getItem("token") === 'xxx-snfh0FBVD474-BCDBVD-VDVBDV-484505') {
      history.push("/portal/index");
    }
  }, []);
  const handleSignin = () => {
    console.log('authEmail', authEmail, authPass)
    if (authEmail === "jaitiwari1020@gmail.com" && authPass === "adsrevenue@1020") {
      sessionStorage.setItem("token", "xxx-snfh0FBVD474-BCDBVD-VDVBDV-484505");
      history.push("/portal/index");
    } else {
      alert('Wrong ID or Password Combination');
    }
  }
  return (
    <React.Fragment>
      <div class="mt-60 h-96 rounded-md flex items-center justify-center bg-gray-50 py-2 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-2">
          <div>
            <img class="mx-auto h-12  w-auto" src={logo} alt="Workflow" />
            <h2 class="mt-10 text-center text-3xl font-extrabold text-gray-900">
              Sign in to your account
            </h2>
          </div>
          <div class="mt-0 space-y-6">
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" onChange={e => handleAuthEmail(e)} name="email" type="text" autocomplete="email" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
              </div>
              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password" onChange={e => handleAuthPass(e)} name="password" type="password" autocomplete="current-password" required class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
              </div>
            </div>
            <div>
              <button onClick={() => { handleSignin() }} class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
                  </svg>
                </span>
          Sign in
        </button>
            </div>
          </div>
        </div>
      </div>

    </React.Fragment>
  );
}

export default Login;
