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
  Col
} from "reactstrap";

// reactstrap components
import { Card, Container, CardHeader, CardBody, Row } from "reactstrap";
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2
} from "variables/charts.js";
// core components
import Header from "components/Headers/Header.js";
// mapTypeId={google.maps.MapTypeId.ROADMAP}
class Maps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeNav: 1,
      chartExample1Data: "data1"
    };
    if (window.Chart) {
      parseOptions(Chart, chartOptions());
    }
  }
  toggleNavs = (e, index) => {
    e.preventDefault();
    this.setState({
      activeNav: index,
      chartExample1Data:
        this.state.chartExample1Data === "data1" ? "data2" : "data1"
    });
  };
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
                  <h3 className=" mb-0">Edit Job</h3>
                </CardHeader>
                <CardBody>
                  <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="8">
                      <Card className="shadow">
                        <CardHeader className="border-0">
                          <Row className="align-items-center">
                            <div className="col">
                              <h3 className="mb-0">Today's Raised Tickets</h3>
                            </div>
                            <div className="col text-right">
                              <Button
                                color="primary"
                                href="#pablo"
                                onClick={e => e.preventDefault()}
                                size="sm"
                              >
                                See all
                      </Button>
                            </div>
                          </Row>
                        </CardHeader>
                        <Table className="align-items-center table-flush" responsive>
                          <thead className="thead-light">
                            <tr>
                              <th scope="col">Page name</th>
                              <th scope="col">Visitors</th>
                              <th scope="col">Unique users</th>
                              <th scope="col">Bounce rate</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">/argon/</th>
                              <td>4,569</td>
                              <td>340</td>
                              <td>
                                <i className="fas fa-arrow-up text-success mr-3" />{" "}
                        46,53%
                      </td>
                            </tr>
                            <tr>
                              <th scope="row">/argon/index.html</th>
                              <td>3,985</td>
                              <td>319</td>
                              <td>
                                <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                        46,53%
                      </td>
                            </tr>
                            <tr>
                              <th scope="row">/argon/charts.html</th>
                              <td>3,513</td>
                              <td>294</td>
                              <td>
                                <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                        36,49%
                      </td>
                            </tr>
                            <tr>
                              <th scope="row">/argon/tables.html</th>
                              <td>2,050</td>
                              <td>147</td>
                              <td>
                                <i className="fas fa-arrow-up text-success mr-3" />{" "}
                        50,87%
                      </td>
                            </tr>
                            <tr>
                              <th scope="row">/argon/profile.html</th>
                              <td>1,795</td>
                              <td>190</td>
                              <td>
                                <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                        46,53%
                      </td>
                            </tr>
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
      </>
    );
  }
}

export default Maps;
