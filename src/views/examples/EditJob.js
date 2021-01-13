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
// mapTypeId={google.maps.MapTypeId.ROADMAP}

const EditJobs = () => {
  const [jobList, setJobList] = React.useState([]);
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
  const handleJobEdit = () => {
    // let api_url = "/api/careers/createjob";
    // jobApi
    //   .updatedetails(api_url, data)
    //   .then(response => {
    //     if (response) {
    //       this.state = {};
    //     }
    //     console.log("Response Data...", response);
    //   }).catch(err => console.log('Err', err));
  };
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
      </Container>
    </React.Fragment>
  );
};

export default EditJobs;
