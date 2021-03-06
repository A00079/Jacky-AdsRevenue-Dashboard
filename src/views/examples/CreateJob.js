// /*!

// =========================================================
// * Argon Dashboard React - v1.1.0
// =========================================================

// * Product Page: https://www.creative-tim.com/product/argon-dashboard-react
// * Copyright 2019 Creative Tim (https://www.creative-tim.com)
// * Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

// * Coded by Creative Tim

// =========================================================

// * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

// */
// import React from "react";

// // reactstrap components
// import {
//   Button,
//   Card,
//   CardHeader,
//   CardBody,
//   FormGroup,
//   Form,
//   Input,
//   Container,
//   Row,
//   Col
// } from "reactstrap";
// // core components
// import UserHeader from "components/Headers/UserHeader.js";

// class Profile extends React.Component {
//   render() {
//     return (
//       <>
//         <UserHeader />
//         {/* Page content */}
//         <Container className="mt--7" fluid>
//           <Row>
//             <Col className="order-xl-2 mb-5 mb-xl-0" xl="4">
//               <Card className="card-profile shadow">
//                 <Row className="justify-content-center">
//                   <Col className="order-lg-2" lg="3">
//                     <div className="card-profile-image">
//                       <a href="#pablo" onClick={e => e.preventDefault()}>
//                         <img
//                           alt="..."
//                           className="rounded-circle"
//                           src={require("assets/img/theme/team-4-800x800.jpg")}
//                         />
//                       </a>
//                     </div>
//                   </Col>
//                 </Row>
//                 <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
//                   <div className="d-flex justify-content-between">
//                     <Button
//                       className="mr-4"
//                       color="info"
//                       href="#pablo"
//                       onClick={e => e.preventDefault()}
//                       size="sm"
//                     >
//                       Connect
//                     </Button>
//                     <Button
//                       className="float-right"
//                       color="default"
//                       href="#pablo"
//                       onClick={e => e.preventDefault()}
//                       size="sm"
//                     >
//                       Message
//                     </Button>
//                   </div>
//                 </CardHeader>
//                 <CardBody className="pt-0 pt-md-4">
//                   <Row>
//                     <div className="col">
//                       <div className="card-profile-stats d-flex justify-content-center mt-md-5">
//                         <div>
//                           <span className="heading">22</span>
//                           <span className="description">Friends</span>
//                         </div>
//                         <div>
//                           <span className="heading">10</span>
//                           <span className="description">Photos</span>
//                         </div>
//                         <div>
//                           <span className="heading">89</span>
//                           <span className="description">Comments</span>
//                         </div>
//                       </div>
//                     </div>
//                   </Row>
//                   <div className="text-center">
//                     <h3>
//                       Jessica Jones
//                       <span className="font-weight-light">, 27</span>
//                     </h3>
//                     <div className="h5 font-weight-300">
//                       <i className="ni location_pin mr-2" />
//                       Bucharest, Romania
//                     </div>
//                     <div className="h5 mt-4">
//                       <i className="ni business_briefcase-24 mr-2" />
//                       Solution Manager - Creative Tim Officer
//                     </div>
//                     <div>
//                       <i className="ni education_hat mr-2" />
//                       University of Computer Science
//                     </div>
//                     <hr className="my-4" />
//                     <p>
//                       Ryan — the name taken by Melbourne-raised, Brooklyn-based
//                       Nick Murphy — writes, performs and records all of his own
//                       music.
//                     </p>
//                     <a href="#pablo" onClick={e => e.preventDefault()}>
//                       Show more
//                     </a>
//                   </div>
//                 </CardBody>
//               </Card>
//             </Col>
//             <Col className="order-xl-1" xl="8">
//               <Card className="bg-secondary shadow">
//                 <CardHeader className="bg-white border-0">
//                   <Row className="align-items-center">
//                     <Col xs="8">
//                       <h3 className="mb-0">My account</h3>
//                     </Col>
//                     <Col className="text-right" xs="4">
//                       <Button
//                         color="primary"
//                         href="#pablo"
//                         onClick={e => e.preventDefault()}
//                         size="sm"
//                       >
//                         Settings
//                       </Button>
//                     </Col>
//                   </Row>
//                 </CardHeader>
//                 <CardBody>
//                   <Form>
//                     <h6 className="heading-small text-muted mb-4">
//                       User information
//                     </h6>
//                     <div className="pl-lg-4">
//                       <Row>
//                         <Col lg="6">
//                           <FormGroup>
//                             <label
//                               className="form-control-label"
//                               htmlFor="input-username"
//                             >
//                               Username
//                             </label>
//                             <Input
//                               className="form-control-alternative"
//                               defaultValue="lucky.jesse"
//                               id="input-username"
//                               placeholder="Username"
//                               type="text"
//                             />
//                           </FormGroup>
//                         </Col>
//                         <Col lg="6">
//                           <FormGroup>
//                             <label
//                               className="form-control-label"
//                               htmlFor="input-email"
//                             >
//                               Email address
//                             </label>
//                             <Input
//                               className="form-control-alternative"
//                               id="input-email"
//                               placeholder="jesse@example.com"
//                               type="email"
//                             />
//                           </FormGroup>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col lg="6">
//                           <FormGroup>
//                             <label
//                               className="form-control-label"
//                               htmlFor="input-first-name"
//                             >
//                               First name
//                             </label>
//                             <Input
//                               className="form-control-alternative"
//                               defaultValue="Lucky"
//                               id="input-first-name"
//                               placeholder="First name"
//                               type="text"
//                             />
//                           </FormGroup>
//                         </Col>
//                         <Col lg="6">
//                           <FormGroup>
//                             <label
//                               className="form-control-label"
//                               htmlFor="input-last-name"
//                             >
//                               Last name
//                             </label>
//                             <Input
//                               className="form-control-alternative"
//                               defaultValue="Jesse"
//                               id="input-last-name"
//                               placeholder="Last name"
//                               type="text"
//                             />
//                           </FormGroup>
//                         </Col>
//                       </Row>
//                     </div>
//                     <hr className="my-4" />
//                     {/* Address */}
//                     <h6 className="heading-small text-muted mb-4">
//                       Contact information
//                     </h6>
//                     <div className="pl-lg-4">
//                       <Row>
//                         <Col md="12">
//                           <FormGroup>
//                             <label
//                               className="form-control-label"
//                               htmlFor="input-address"
//                             >
//                               Address
//                             </label>
//                             <Input
//                               className="form-control-alternative"
//                               defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
//                               id="input-address"
//                               placeholder="Home Address"
//                               type="text"
//                             />
//                           </FormGroup>
//                         </Col>
//                       </Row>
//                       <Row>
//                         <Col lg="4">
//                           <FormGroup>
//                             <label
//                               className="form-control-label"
//                               htmlFor="input-city"
//                             >
//                               City
//                             </label>
//                             <Input
//                               className="form-control-alternative"
//                               defaultValue="New York"
//                               id="input-city"
//                               placeholder="City"
//                               type="text"
//                             />
//                           </FormGroup>
//                         </Col>
//                         <Col lg="4">
//                           <FormGroup>
//                             <label
//                               className="form-control-label"
//                               htmlFor="input-country"
//                             >
//                               Country
//                             </label>
//                             <Input
//                               className="form-control-alternative"
//                               defaultValue="United States"
//                               id="input-country"
//                               placeholder="Country"
//                               type="text"
//                             />
//                           </FormGroup>
//                         </Col>
//                         <Col lg="4">
//                           <FormGroup>
//                             <label
//                               className="form-control-label"
//                               htmlFor="input-country"
//                             >
//                               Postal code
//                             </label>
//                             <Input
//                               className="form-control-alternative"
//                               id="input-postal-code"
//                               placeholder="Postal code"
//                               type="number"
//                             />
//                           </FormGroup>
//                         </Col>
//                       </Row>
//                     </div>
//                     <hr className="my-4" />
//                     {/* Description */}
//                     <h6 className="heading-small text-muted mb-4">About me</h6>
//                     <div className="pl-lg-4">
//                       <FormGroup>
//                         <label>About Me</label>
//                         <Input
//                           className="form-control-alternative"
//                           placeholder="A few words about you ..."
//                           rows="4"
//                           defaultValue="A beautiful Dashboard for Bootstrap 4. It is Free and
//                           Open Source."
//                           type="textarea"
//                         />
//                       </FormGroup>
//                     </div>
//                   </Form>
//                 </CardBody>
//               </Card>
//             </Col>
//           </Row>
//         </Container>
//       </>
//     );
//   }
// }

// export default Profile;

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
import React from "react";
// react plugin used to create google maps
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

// reactstrap components
import { Card, Container, CardHeader, CardBody, Row } from "reactstrap";
// core components
import Header from "components/Headers/Header.js";
import postDetailsApi from "../../REST/JobsApi.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// mapTypeId={google.maps.MapTypeId.ROADMAP}
class CreateJob extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      Location: '',
      experience: '',
      salary: '',
      education: '',
      keyskill: '',
      discription: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(formfield, event) {
    this.setState({ [formfield]: event.target.value });
  }
  notify(flag, msg) {
    if (flag === 'error') {
      toast.error(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } else if (flag === 'success') {
      toast.success(msg, {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }
  postJobData() {
    if (!!this.state.title && !!this.state.Location && !!this.state.experience && !!this.state.salary && !!this.state.education && !!this.state.keyskill && !!this.state.discription) {
      let api_url = "/api/careers/createjob";
      let data = {
        'jobTitle': this.state.title,
        'location': this.state.Location,
        'experience': this.state.experience,
        'salary': this.state.salary,
        'education': this.state.education,
        'keySkills': this.state.keyskill,
        'jobDescription': this.state.discription
      }
      postDetailsApi
        .postdetails(api_url, data)
        .then(response => {
          if (response) {
            this.state = {};
            document.getElementById('title').value = "";
            document.getElementById('Location').value = "";
            document.getElementById('experience').value = "";
            document.getElementById('salary').value = "";
            document.getElementById('education').value = "";
            document.getElementById('keyskill').value = "";
            document.getElementById('discription').value = "";
            this.notify('success', 'Job Created Successfully.');
          }
          console.log("Response Data...", response);
        }).catch(err => console.log('Err', err));
    } else {
      this.notify('error', 'Please Fill All Fields!');
    }
  }
  render() {
    return (
      <>
        <Header />
        {/* Page content */}
        <Container className="mt--7" fluid>
          <Row>
            <div className="col">
              <Card className="shadow border-0">
                <CardHeader className=" bg-transparent">
                  <h3 className=" mb-0">Create Job</h3>
                </CardHeader>
                <CardBody>
                  <div class="form bg-white my-2 relative">
                    {/* <div class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5" style={{left:'-40px'}}><i class="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div> */}
                    <h3 class="text-2xl text-gray-900 font-semibold">Let's Create New Job !</h3>
                    {/* <p class="text-gray-600"> To help you choose your property</p> */}
                    <div class="flex space-x-5 mt-3">
                      <input required type="text" name="title" id="title" placeholder="Title..." class="border p-2  w-1/2" value={this.state.title} onChange={(event) => this.handleChange('title', event)} />
                      <input required type="text" name="Location" id="Location" placeholder="Location..." class="border p-2 w-1/2" value={this.state.Location} onChange={(event) => this.handleChange('Location', event)} />
                    </div>
                    <div class="flex space-x-5 mt-3">
                      <input required type="text" name="experience" id="experience" placeholder="Expeirence..." class="border p-2 w-full mt-3" value={this.state.experience} onChange={(event) => this.handleChange('experience', event)} />
                      <input required type="text" name="salary" id="salary" placeholder="Salary..." class="border p-2 w-full mt-3" value={this.state.salary} onChange={(event) => this.handleChange('salary', event)} />
                    </div>
                    <div class="flex space-x-5 mt-3">
                      <input required type="text" name="education" id="education" placeholder="Education..." class="border p-2 w-full mt-3" value={this.state.education} onChange={(event) => this.handleChange('education', event)} />
                      <input required type="text" name="keyskill" id="keyskill" placeholder="Key Skills..." class="border p-2 w-full mt-3" value={this.state.keyskill} onChange={(event) => this.handleChange('keyskill', event)} />
                    </div>
                    <textarea required name="discription" id="discription" cols="10" rows="3" placeholder="Discription..." class="border p-2 mt-3 w-full" value={this.state.discription} onChange={(event) => this.handleChange('discription', event)}></textarea>
                    {/* <p class="font-bold text-sm mt-3">GDPR Agreement *</p> */}
                    {/* <div class="flex items-baseline space-x-2 mt-2">
                      <input type="checkbox" name="" id="" class="inline-block" />
                      <p class="text-gray-600 text-sm">I consent to having this website store my submitted information so they can respond to my inquiry.</p>
                    </div> */}
                    <button onClick={() => this.postJobData()} className="cursor-pointer w-30  rounded-md mt-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2">
                      Create Job
                    </button>
                    {/* <input required type="submit" value="Create Job" class="cursor-pointer w-30  rounded-md mt-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold p-2" /> */}
                  </div>
                </CardBody>
                {/* <MapWrapper
                  googleMapURL="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY_HERE"
                  loadingElement={<div style={{ height: `100%` }} />}
                  containerElement={
                    <div
                      style={{ height: `600px` }}
                      className="map-canvas"
                      id="map-canvas"
                    />
                  }
                  mapElement={
                    <div style={{ height: `100%`, borderRadius: "inherit" }} />
                  }
                /> */}
              </Card>
            </div>
          </Row>
        </Container>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        {/* Same as */}
        <ToastContainer />
      </>
    );
  }
}

export default CreateJob;
