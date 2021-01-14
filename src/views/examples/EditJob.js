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
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
  Button,
  NavItem,
  NavLink,
  Nav,
  Progress,
  Table,
  Col,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from "reactstrap";

// reactstrap components
import { Card, Container, CardHeader, CardBody, Row } from "reactstrap";
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
} from "variables/charts.js";
// core components
import Header from "components/Headers/Header.js";
import jobApi from "../../REST/JobsApi.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// mapTypeId={google.maps.MapTypeId.ROADMAP}

const EditJobs = (props) => {
  const { buttonLabel, className } = props;
  const [jobList, setJobList] = React.useState([]);

  const [jobTitle, setjobTitle] = React.useState("");
  const [jobLocation, setjobLocation] = React.useState("");
  const [jobEducation, setjobEducation] = React.useState("");
  const [jobExperience, setjobExperience] = React.useState("");
  const [jobSalary, setjobSalary] = React.useState("");
  const [jobKeySkills, setjobKeySkills] = React.useState("");
  const [jobDescription, setjobDescription] = React.useState("");

  const [modal, setModal] = React.useState(false);
  const [EditDetails, setEditDetails] = React.useState([]);
  const toggle = () => setModal(!modal);
  React.useEffect(() => {
    fetchJobList();
  }, []);
  const fetchJobList = () => {
    let api_url = "/api/careers/jobs";
    jobApi
      .getList(api_url)
      .then((res) => {
        setJobList(res.jobs);
      })
      .catch((err) => console.log("Err", err));
  };

  const handleJobTitle = (e) => {
    setjobTitle(e.target.value);
  };
  const handleJobLocation = (e) => {
    setjobLocation(e.target.value);
  };
  const handleJobExperience = (e) => {
    setjobExperience(e.target.value);
  };
  const handleJobSalary = (e) => {
    setjobSalary(e.target.value);
  };
  const handleJobEducation = (e) => {
    setjobEducation(e.target.value);
  };
  const handleJobKeyskill = (e) => {
    setjobKeySkills(e.target.value);
  };
  const handleJobDiscription = (e) => {
    setjobDescription(e.target.value);
  };

  const handleJobEdit = (editData) => {
    setModal(true);
    setEditDetails(editData);
    setjobTitle(editData.job_title);
    setjobLocation(editData.location);
    setjobExperience(editData.experience);
    setjobSalary(editData.salary);
    setjobEducation(editData.education);
    setjobKeySkills(editData.key_skills);
    setjobDescription(editData.job_description);
  };
  const ModifyJobDetails = () => {
    if (!!jobTitle && !!jobLocation && !!jobEducation && !!jobExperience && !!jobSalary && !!jobKeySkills && !!jobDescription) {
      let api_url = "/api/careers/updatejob/" + EditDetails.id;
      let data = {
        jobTitle: jobTitle,
        location: jobLocation,
        experience: jobEducation,
        salary: jobExperience,
        education: jobSalary,
        keySkills: jobKeySkills,
        jobDescription: jobDescription,
      };
      jobApi
        .updatedetails(api_url, data)
        .then((response) => {
          if (response) {
            setModal(false);
            fetchJobList();
            notify('success', 'Job Edited Successfully!');
          }
          console.log("Response Data...", response);
        })
        .catch((err) => console.log("Err", err));
    } else {
      notify('error', 'Please Fill All Fields!');
    }
  };
  const notify = (flag, msg) => {
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
  const handleJobDelete = (jobId) => {
    let flag = window.confirm("Are You Sure You Want To Delete?");
    if (!!flag) {
      let api_url = "/api/careers/deletejob/" + jobId;
      let data = {
        id: jobId,
      };
      jobApi.deleteDetails(api_url, data).then((response) => {
        console.log("Response Data...", response);
        fetchJobList();
        notify('success', 'Job Deleted Successfully.');
      });
    }
  };
  return (
    <React.Fragment>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <div className="col">
            <Card className="shadow border-0">
              <CardHeader className=" bg-transparent">
                <h3 className=" mb-0">Edit Job</h3>
              </CardHeader>
              <CardBody>
                <Row className="mt-0">
                  <Col className="mb-5 mb-xl-0" xl="12">
                    <Card className="shadow">
                      <CardHeader className="border-0">
                        <Row className="align-items-center">
                          <div className="col">
                            <h3 className="mb-0">Edit Job's</h3>
                          </div>
                          {/* <div className="col text-right">
                              <Button
                                color="primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                                size="sm"
                              >
                                See all
                      </Button>
                            </div> */}
                        </Row>
                      </CardHeader>
                      <Table
                        className="align-items-center table-flush"
                        responsive
                      >
                        <thead className="thead-light">
                          <tr>
                            <th scope="col">Title</th>
                            <th scope="col">Location</th>
                            <th scope="col">Experience</th>
                            <th scope="col">Salary</th>
                            <th scope="col">Key Skills</th>
                            <th scope="col" className="text-right">
                              Actions
                            </th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {jobList.map((el, index) => {
                            return (
                              <tr key={index}>
                                <th scope="row">{el.job_title}</th>
                                <td>{el.location}</td>
                                <td>{el.experience}</td>
                                <td>{el.salary}</td>
                                <td>{el.key_skills}</td>
                                <td
                                  className="cursor-pointer"
                                  onClick={() => handleJobEdit(el)}
                                >
                                  <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path d="M17.414 2.586a2 2 0 00-2.828 0L7 10.172V13h2.828l7.586-7.586a2 2 0 000-2.828z"></path>
                                    <path
                                      fill-rule="evenodd"
                                      d="M2 6a2 2 0 012-2h4a1 1 0 010 2H4v10h10v-4a1 1 0 112 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </td>
                                <td
                                  className="cursor-pointer"
                                  onClick={() => handleJobDelete(el.id)}
                                >
                                  <svg
                                    class="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                  >
                                    <path
                                      fill-rule="evenodd"
                                      d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                                      clip-rule="evenodd"
                                    ></path>
                                  </svg>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </Table>
                    </Card>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </Row>
        <Modal isOpen={modal} toggle={toggle} className={className}>
          <ModalHeader toggle={toggle}>Edit Job</ModalHeader>
          <ModalBody>
            <div class="form bg-white my-2 relative">
              {/* <div class="icon bg-blue-600 text-white w-6 h-6 absolute flex items-center justify-center p-5" style={{left:'-40px'}}><i class="fal fa-phone-volume fa-fw text-2xl transform -rotate-45"></i></div> */}
              <h3 class="text-2xl text-gray-900 font-semibold">
                Modify Job Details.
              </h3>
              {/* <p class="text-gray-600"> To help you choose your property</p> */}
              <div class="flex space-x-5 mt-3">
                <input
                  required
                  type="text"
                  name="title"
                  id=""
                  placeholder="Title..."
                  class="border p-2  w-1/2"
                  onChange={(e) => handleJobTitle(e)}
                  defaultValue={jobTitle ? jobTitle : EditDetails.job_title}
                />
                <input
                  required
                  type="text"
                  name="Location"
                  id=""
                  placeholder="Location..."
                  class="border p-2 w-1/2"
                  onChange={(e) => handleJobLocation(e)}
                  defaultValue={
                    jobLocation ? jobLocation : EditDetails.location
                  }
                />
              </div>
              <div class="flex space-x-5 mt-3">
                <input
                  required
                  type="text"
                  name="experience"
                  id=""
                  placeholder="Expeirence..."
                  class="border p-2 w-full mt-3"
                  onChange={(e) => handleJobExperience(e)}
                  defaultValue={
                    jobExperience ? jobExperience : EditDetails.experience
                  }
                />
                <input
                  required
                  type="text"
                  name="salary"
                  id=""
                  placeholder="Salary..."
                  class="border p-2 w-full mt-3"
                  onChange={(e) => handleJobSalary(e)}
                  defaultValue={jobSalary ? jobSalary : EditDetails.salary}
                />
              </div>
              <div class="flex space-x-5 mt-3">
                <input
                  required
                  type="text"
                  name="education"
                  id=""
                  placeholder="Education..."
                  class="border p-2 w-full mt-3"
                  onChange={(e) => handleJobEducation(e)}
                  defaultValue={
                    jobEducation ? jobEducation : EditDetails.education
                  }
                />
                <input
                  required
                  type="text"
                  name="keyskill"
                  id=""
                  placeholder="Key Skills..."
                  class="border p-2 w-full mt-3"
                  onChange={(e) => handleJobKeyskill(e)}
                  defaultValue={
                    jobKeySkills ? jobKeySkills : EditDetails.key_skills
                  }
                />
              </div>
              <textarea
                required
                name="discription"
                id=""
                cols="10"
                rows="3"
                placeholder="Discription..."
                class="border p-2 mt-3 w-full"
                onChange={(e) => handleJobDiscription(e)}
                defaultValue={
                  jobDescription ? jobDescription : EditDetails.job_description
                }
              ></textarea>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>
              Cancel
            </Button>
            <Button color="primary" onClick={() => ModifyJobDetails()}>
              Edit Job
            </Button>{" "}
          </ModalFooter>
        </Modal>
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
    </React.Fragment>
  );
};

export default EditJobs;
