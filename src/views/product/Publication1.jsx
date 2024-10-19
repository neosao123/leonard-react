import React from "react";
import "../../css/publication1.css";
import { FaFilePdf } from "react-icons/fa";

const publications = [
  {
    id: 1,
    title: "Tan Wee Wah",

    publisher: "Emotional Intelligence and Leadership Development",
  },
  {
    id: 2,
    title: "Dr Leonard Yong",

    publisher: "Yong EQ Inventory: Norms & Technical Manual",
  },
  {
    id: 3,
    title: "Leonard Personality Incorporated",

    publisher:
      "Norms & Technical Manual: The Leonard Personality Inventory (LPI)",
  },
  {
    id: 4,
    title: "Augustine Tan",

    publisher: "Validation of Emotional Excellence Questionnaire",
  },
  {
    id: 5,
    title: "Kenneth Phun Thean Ming",

    publisher:
      "Personality Profiles of Lecturers In A Private College: An Invesitgation Based on Leonard Personality Inventory Unpublished Master in Education Project Paper, University of Malaya, 2002.",
  },
  {
    id: 6,
    title: "Kalai Selvi a/p Gopal",

    publisher:
      "	Personality Profiles of Teachers In A Secondary School In Petaling Jaya Unpublished Master in Education Project Paper, University of Malaya, 2001.",
  },
  {
    id: 7,
    title: "Dr Leonard Yong",

    publisher:
      "Emotional signs, Star interview with Dr. Leonard Yong regarding Nescafe Kick-Start TV Programme,Star Newspaper 15 September 2004, Youth section page 12",
  },
  {
    id: 8,
    title: "Dr Leonard Yong",

    publisher:
      "Interview with Dr. Leonard Yong on the use of Leonard Personality Inventory Cosmo Magazine, 4 September 2004, Section 2 page 29",
  },

  {
    id: 9,
    title: "Thanayot Sumalrot",

    publisher:
      "	Abstract: The LPI profiles of Thais working-aged people in Bangkoks suburban and agricultural area",
  },
  {
    id: 10,
    title: "	Siriprabha Kaewsrinual",

    publisher:
      "	Abstract: The LPI profiles of Thais working-aged people in Bangkoks residential suburban area",
  },
  {
    id: 11,
    title: "Maliwan Rueankam",

    publisher:
      "Abstract: The LPI profiles of Thais working-aged people in Bangkoks conservative area",
  },
  {
    id: 12,
    title: "	Onvisa Kitpituck",

    publisher:
      "Abstract: The LPI profiles of Thais working-aged people in Bangkoks cd industrial area",
  },
  {
    id: 13,
    title: "Navamani A/P Nagappon",

    publisher: "Clinical Case Study",
  },
];

const Publication1 = () => {
  return (
    <div className="publication-up">
      <div class="big-heading-center  ">LPI - Related Publications</div>
      <div className="row ">
        {" "}
        {/* Added classes to center columns */}
        <div className="center">
          {publications.map((publication) => (
            <div key={publication.id} className="col-5 mb-4">
              <div className="publication-container bg-white  p-4 rounded-md  mb-4">
                <div className="header-section flex justify-between items-center ">
                  <div className="left-section">
                    <h5 className="font-semibold text-lg text-blue-600">
                      {publication.title}
                    </h5>
                    <p className="text-sm text-gray-600">
                      <span>
                        {publication.publisher &&
                        publication.publisher.length > 110
                          ? `${publication.publisher.slice(0, 110)}...`
                          : publication.publisher || "No publisher available."}
                      </span>
                    </p>
                  </div>
                </div>
                <div className="action-buttons flex space-x-3">
                  <button className="border px-2 py-1 rounded-md text-sm flex justify-content-between items-center space-x-2">
                    <FaFilePdf
                      className=""
                      style={{
                        color: "red",
                      }}
                    />
                    <span>Download</span> {/* "Download" text */}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Publication1;
