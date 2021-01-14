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

// reactstrap components
import { Card, CardBody, CardTitle, Container, Row, Col } from "reactstrap";
import jobApi from "../../REST/JobsApi.js";

class Header extends React.Component {
  constructor(props) {
    super();
    this.state = {
      totalJobs: 0,
      totalAppliedJobs: 0,
      totalEmp: 0,
    }
  }
  componentDidMount() {
    this.fetchPanelDetails();
  }
  fetchPanelDetails() {
    let api_url = "/api/dashboard/info";
    jobApi
      .getList(api_url)
      .then((res) => {
        console.log('Dashboard info',res);
        this.setState({});
        this.setState({});
        this.setState({});
      })
      .catch((err) => console.log("Err", err));
  }
  render() {
    return (
      <>
        <div className="header pb-8 pt-5 pt-md-8" style={{ background: 'linear-gradient(90deg, rgb(255, 134, 87) 0%, rgb(255, 50, 37) 120%)' }}>
          <Container fluid>
            <div className="header-body">
              {/* Card stats */}
              <Row>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Today's Date
                          </CardTitle>
                          <span className="h5 font-weight-bold mb-0">
                            {new Date().toDateString()}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-danger text-white rounded-circle shadow">
                            <i class="fas fa-clock"></i>
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fa fa-clock" /> {new Date().toLocaleDateString()}
                        </span>{" "}
                        {/* <span className="text-nowrap">Since last month</span> */}
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Total Jobs
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            {this.state.totalJobs}
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-warning text-white rounded-circle shadow">
                            <i className="fas fa-running" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-danger mr-2">
                          <i className="fas fa-arrow-up" />
                        </span>{" "}
                        <span className="text-nowrap">Last Updated Today</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Jobs Applied
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">{this.state.totalAppliedJobs}</span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-yellow text-white rounded-circle shadow">
                            <i className="fas fa-check" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-warning mr-2">
                          <i className="fas fa-arrow-up" />
                        </span>{" "}
                        <span className="text-nowrap">Last Updated Today</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg="6" xl="3">
                  <Card className="card-stats mb-4 mb-xl-0">
                    <CardBody>
                      <Row>
                        <div className="col">
                          <CardTitle
                            tag="h5"
                            className="text-uppercase text-muted mb-0"
                          >
                            Team Members
                          </CardTitle>
                          <span className="h2 font-weight-bold mb-0">
                            10
                          </span>
                        </div>
                        <Col className="col-auto">
                          <div className="icon icon-shape bg-info text-white rounded-circle shadow">
                            <i className="fas fa-users" />
                          </div>
                        </Col>
                      </Row>
                      <p className="mt-3 mb-0 text-muted text-sm">
                        <span className="text-success mr-2">
                          <i className="fas fa-arrow-up" />
                        </span>{" "}
                        <span className="text-nowrap">Last Updated Today</span>
                      </p>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
      </>
    );
  }
}

export default Header;
