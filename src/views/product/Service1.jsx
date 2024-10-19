import React, { useState } from "react";
import "../../css/service1.css";
import img1 from "../../assets/images/inner-ser-1.jpg";
import img2 from "../../assets/images/inner-ser-2.jpg";
import img3 from "../../assets/images/inner-ser-3.jpg";
import img4 from "../../assets/images/inner-ser-4.jpg";
import { MdPictureAsPdf } from "react-icons/md";

const Service1 = () => {
  const [activeTab, setActiveTab] = useState("page1");

  const handleTabClick = (event, tabId) => {
    event.preventDefault();
    setActiveTab(tabId);
  };

  return (
    <>
      <div className="inner-services tnb7 service-up">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-4 col-xs-12">
              <div className="tabs_bg">
                <h4>All Services</h4>
                <div className="tab">
                  <button
                    className={`tablinks ${
                      activeTab === "page1" ? "active" : ""
                    }`}
                    onClick={(event) => handleTabClick(event, "page1")}
                  >
                    Training Workshops
                  </button>
                  <button
                    className={`tablinks ${
                      activeTab === "page2" ? "active" : ""
                    }`}
                    onClick={(event) => handleTabClick(event, "page2")}
                  >
                    Psychometric Testing
                  </button>
                  <button
                    className={`tablinks ${
                      activeTab === "page3" ? "active" : ""
                    }`}
                    onClick={(event) => handleTabClick(event, "page3")}
                  >
                    Statistical Data Processing
                  </button>
                  <button
                    className={`tablinks ${
                      activeTab === "page4" ? "active" : ""
                    }`}
                    onClick={(event) => handleTabClick(event, "page4")}
                  >
                    Publications & Trainers
                  </button>
                </div>
                <div className="clearfix"></div>
              </div>
              <div className="download_bro" style={{ display: "none" }}>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <i className="fa fa-file-pdf-o" aria-hidden="true"></i>{" "}
                  Download Our Brochures
                </a>
              </div>
            </div>
            <div className="col-md-8 col-sm-8 col-xs-12">
              <div
                className="tab-body"
                style={{
                  height: "100%",
                }}
              >
                <div
                  id="page1"
                  className={`tabcontent ${
                    activeTab === "page1" ? "active" : ""
                  }`}
                >
                  <p>
                    We cater to your various needs by offering training
                    workshops for your organization. These workshops can be
                    tailor-made to suit your organization's needs. Among our
                    current topics are:
                  </p>
                  <img src={img1} alt="Training Workshops" />
                  <ul>
                    <li>
                      <p>
                        <a
                          href="/assets/customer/pdf/Emotional Excellence for Innovative Leadership.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Emotional Excellence for Innovative Leadership
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/assets/customer/pdf/courseEESuccess.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Emotional Excellence for Success in Work and Life
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        <a
                          href="/assets/customer/pdf/Licensed LPI Trainer certification program.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Licensed LPI Trainer Certification Programme
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>

                <div
                  id="page2"
                  className={`tabcontent ${
                    activeTab === "page2" ? "active" : ""
                  }`}
                >
                  <p>We conduct psychometric testing for:</p>
                  <img src={img2} alt="Psychometric Testing" />
                  <ul>
                    <li>
                      <p>
                        Personality Profiling using the LEONARD Personality
                        Inventory
                      </p>
                    </li>
                    <li>
                      <p>EQ Measure</p>
                    </li>
                    <li>
                      <p>IQ Tests</p>
                    </li>
                  </ul>
                  <p>
                    Please contact us for further details regarding the
                    psychometric testing available.
                  </p>
                  <h5>Download Brochure (*.pdf format)</h5>
                  <p>
                    Instructions: To save the file in Internet Explorer,
                    right-click and select "Save Target As.."
                  </p>
                  <ul>
                    <li>
                      <p>
                        LEONARD Personality Inventory Brochure
                        <a
                          href="/assets/customer/pdf/lpi%20brochure.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className="fa fa-file-pdf-o"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </p>
                    </li>
                    <li>
                      <p>
                        Sample LEONARD Personality Inventory Report
                        <a
                          href="/assets/customer/pdf/LPI%20sample%20report.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i
                            className="fa fa-file-pdf-o"
                            aria-hidden="true"
                          ></i>
                        </a>
                      </p>
                    </li>
                  </ul>
                </div>

                <div
                  id="page3"
                  className={`tabcontent ${
                    activeTab === "page3" ? "active" : ""
                  }`}
                >
                  <img src={img3} alt="Statistical Data Processing" />
                  <h5>We provide data analysis services for:</h5>
                  <ul>
                    <li>
                      <p>
                        Undergraduate and graduate students in management,
                        business, social science, and research methods courses.
                      </p>
                    </li>
                    <li>
                      <p>
                        Students preparing dissertations and theses for degree,
                        masters and PhD level
                      </p>
                    </li>
                  </ul>
                  <h5>Statistical services we offer for students:</h5>
                  <ul>
                    <li>Identify research questions</li>
                    <li>Formulate research hypotheses</li>
                    <li>Determine suitable sample size Instrumentation</li>
                    <li>
                      Design the data collection process Data analysis planning
                    </li>
                    <li>Analyze the collected data</li>
                  </ul>
                  <h5>Results for the analysis includes</h5>
                  <ul>
                    <li>SPSS report (tables, graphs, charts)</li>
                    <li>Written report of results in APA format</li>
                  </ul>
                  <h5>
                    Contact us for a detailed estimate, we offer the following
                    packages:
                  </h5>
                  <ul>
                    <li>
                      Basic Descriptive statistical analyses (e.g. frequencies,
                      means, medians, mode)
                    </li>
                    <li>
                      Basic Inferential statistical analyses (e.g. t-tests,
                      ANOVA, chi-square, etc)
                    </li>
                    <li>
                      Advanced inferential statistical analyses (e.g. factor
                      analyses)
                    </li>
                    <li>
                      Formulate research hypotheses, determine sample size, data
                      collection planning and instrumentation design
                    </li>
                  </ul>
                  <p>
                    Data to be provided for statistical analysis needs to be in
                    Microsoft Excel or SPSS format. If data entry is required,
                    we will advise the pricing based on the volume of data
                    entry. Further interpretation of the results and literature
                    review must be done by the candidate. Statistical analyses
                    service is provided by our PhD-level consultants. We will
                    provide email support and work with you to complete your
                    project successfully.
                  </p>
                  <p>
                    Email:
                    <a href="mailto:leonardpersonality@gmail.com">
                      {" "}
                      leonardpersonality@gmail.com
                    </a>
                  </p>
                </div>

                <div
                  id="page4"
                  className={`tabcontent ${
                    activeTab === "page4" ? "active" : ""
                  }`}
                >
                  <h5>
                    LPI - Related Publications & List of Certified Trainers
                  </h5>
                  <p>
                    Click here to view a list of{" "}
                    <a href="#" target="blank">
                      Licensed LPI Trainers
                    </a>
                  </p>
                  <p>
                    Listed below are publications involving the LEONARD
                    Personality Inventory (LPI) and the Yong EQ Inventory.
                  </p>
                  <img src={img4} alt="Publications & Trainers" />
                  <div className="tabcontent-scroll">
                    <table
                      width="100%"
                      border="0"
                      align="center"
                      cellspacing="3"

                      className="table-responsive"
                    >
                      <tbody>
                        <tr>
                          <th width="5%">
                            <strong>No</strong>
                          </th>
                          <th width="33%">
                            <strong>Name</strong>
                          </th>
                          <th width="49%">
                            <strong>Title</strong>
                          </th>
                          <th width="5%">
                            <div align="center">
                              <strong>Download</strong>
                            </div>
                          </th>
                        </tr>
                        
                        
                        
                        
                        
                        <tr>
                          <td>1.</td>
                          <td>Tan Wee Wah</td>
                          <td>
                            Emotional Intelligence and Leadership Development
                          </td>
                          <td align="center">
                            <a
                              href="/assets/customer/pdf/Tan Wee Wah - EQ and Leadership Development.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                                <MdPictureAsPdf size={24} color="red" />
                            </a>
                          </td>
                      
                        </tr>
                       
                       
                       
                       
                       
                       
                        <tr>
                          <td>2.</td>
                          <td>Dr Leonard Yong</td>
                          <td>
                            Yong EQ Inventory: Norms &amp; Technical Manual
                          </td>
                          <td align="center">
                            <a
                              href="/assets/customer/pdf/Yong EQ Inventory Norms Technical Manual.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            <MdPictureAsPdf size={24} color="red" />
                            </a>
                          </td>
                        </tr>








                        <tr>
                          <td>3.</td>
                          <td>Leonard Personality Incorporated</td>
                          <td>
                          Norms & Technical Manual: The Leonard Personality Inventory (LPI)
                          </td>
                          <td align="center">
                            <a
                              href="/assets/customer/pdf/Yong EQ Inventory Norms Technical Manual.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            <MdPictureAsPdf size={24} color="red" />
                            </a>
                          </td>
                        </tr>










                        <tr>
                          <td>4.</td>
                          <td>Augustine Tan</td>
                          <td>
                          Validation of Emotional Excellence Questionnaire
                          </td>
                          <td align="center">
                            <a
                              href="/assets/customer/pdf/Yong EQ Inventory Norms Technical Manual.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            <MdPictureAsPdf size={24} color="red" />
                            </a>
                          </td>
                        </tr>



                        <tr>
                          <td>5.</td>
                          <td>Kenneth Phun Thean Ming</td>
                          <td>
                          Personality Profiles of Lecturers In A Private College: An Invesitgation Based on Leonard Personality Inventory Unpublished Master in Education Project Paper, University of Malaya, 2002.
                          </td>
                          <td align="center">
                            <a
                              href="/assets/customer/pdf/Yong EQ Inventory Norms Technical Manual.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            <MdPictureAsPdf size={24} color="red" />
                            </a>
                          </td>
                        </tr>



                        <tr>
                          <td>6.</td>
                          <td>Kalai Selvi a/p Gopal</td>
                          <td>
                          Personality Profiles of Teachers In A Secondary School In Petaling Jaya Unpublished Master in Education Project Paper, University of Malaya, 2001.
                          </td>
                          <td align="center">
                            <a
                              href="/assets/customer/pdf/Yong EQ Inventory Norms Technical Manual.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            <MdPictureAsPdf size={24} color="red" />
                            </a>
                          </td>
                        </tr>








                        <tr>
                          <td>7.</td>
                          <td>Dr Leonard Yong</td>
                          <td>
                          Emotional signs, Star interview with Dr. Leonard Yong regarding Nescafe Kick-Start TV Programme,
                          Star Newspaper 15 September 2004, Youth section page 12                          </td>
                          <td align="center">
                            <a
                              href="/assets/customer/pdf/Yong EQ Inventory Norms Technical Manual.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            <MdPictureAsPdf size={24} color="red" />
                            </a>
                          </td>
                        </tr>








                        <tr>
                          <td>8.</td>
                          <td>Dr Leonard Yong</td>
                          <td>
                          Interview with Dr. Leonard Yong on the use of Leonard Personality Inventory
                          Cosmo Magazine, 4 September 2004, Section 2 page 29                      </td>
                          <td align="center">
                            <a
                              href="/assets/customer/pdf/Yong EQ Inventory Norms Technical Manual.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            <MdPictureAsPdf size={24} color="red" />
                            </a>
                          </td>
                        </tr>









                        <tr>
                          <td>9.</td>
                          <td>Thanayot Sumalrot</td>
                          <td>
                          Abstract: The LPI profiles of Thais working-aged people in Bangkok's suburban and agricultural area                      </td>
                          <td align="center">
                            <a
                              href="/assets/customer/pdf/Yong EQ Inventory Norms Technical Manual.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            <MdPictureAsPdf size={24} color="red" />
                            </a>
                          </td>
                        </tr>







                        <tr>
                          <td>10.</td>
                          <td>Siriprabha Kaewsrinual</td>
                          <td>
                          Abstract: The LPI profiles of Thais working-aged people in Bangkok's residential suburban area                        </td>
                          <td align="center">
                            <a
                              href="/assets/customer/pdf/Yong EQ Inventory Norms Technical Manual.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            <MdPictureAsPdf size={24} color="red" />
                            </a>
                          </td>
                        </tr>








                        <tr>
                          <td>11.</td>
                          <td>Maliwan Rueankam</td>
                          <td>
                          Abstract: The LPI profiles of Thais working-aged people in Bangkok's conservative area                   </td>
                          <td align="center">
                            <a
                              href="/assets/customer/pdf/Yong EQ Inventory Norms Technical Manual.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            <MdPictureAsPdf size={24} color="red" />
                            </a>
                          </td>
                        </tr>









                        <tr>
                          <td>12.</td>
                          <td>Onvisa Kitpituck</td>
                          <td>
                          Abstract: The LPI profiles of Thais working-aged people in Bangkok's commercial and industrial area           </td>
                          <td align="center">
                            <a
                              href="/assets/customer/pdf/Yong EQ Inventory Norms Technical Manual.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            <MdPictureAsPdf size={24} color="red" />
                            </a>
                          </td>
                        </tr>










                        <tr>
                          <td>13.</td>
                          <td>Navamani A/P Nagappon</td>
                          <td>
                          Clinical Case Study                      </td>
                          <td align="center">
                            <a
                              href="/assets/customer/pdf/Yong EQ Inventory Norms Technical Manual.pdf"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                            <MdPictureAsPdf size={24} color="red" />
                            </a>
                          </td>
                        </tr>






                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service1;
