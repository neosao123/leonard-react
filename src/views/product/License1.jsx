import React from "react";
import "../../css/publication1.css";
import { FaFilePdf } from "react-icons/fa";

import "../../css/publication1.css";
const publications = [
  {
    id: 1,
    title: "Aaron Tham",
    no: "LT217",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 2,
    title: "Abdul Rahman bin Ahmad Badayai",
    no: "LT107",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 3,
    title: "Adhila Ismail",
    no: "LT130",
    publisher: "	Certified LPI Assessor",
  },
  {
    id: 4,
    title: "Adibah binti M Saleh",
    no: "LT166",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 5,
    title: "Amy Ong Pei Hoon",
    no: "LT311",
    publisher: "Trainer (limited to practice in TAR UMT)",
  },
  {
    id: 6,
    title: "	Andrea Sim Siok Hui",
    no: "LT141",
    publisher: "	Licensed LPI Trainer",
  },
  {
    id: 7,
    title: "	Andrew Au",
    no: "LT198",
    publisher: "	Licensed LPI Trainer",
  },
  {
    id: 8,
    title: "Andy Cheong Hoon Wah",
    no: "LT211",
    publisher: "	Licensed LPI Trainer",
  },

  {
    id: 9,
    title: "Ang Cheng Aun",
    no: "LT290",
    publisher: "	Licensed LPI Trainer",
  },
  {
    id: 10,
    title: "	Ang Seng Wong",
    no: "LT224",
    publisher: "	Licensed LPI Trainer",
  },
  {
    id: 11,
    title: "Ang Yaw Feng",
    no: "LT142",
    publisher: "	Licensed LPI Trainer",
  },
  {
    id: 12,
    title: "	Annie Margaret a/p Sandela Raran",
    no: "LT118",
    publisher: "	Licensed LPI Trainer",
  },
  {
    id: 13,
    title: "Ariya Ratanapornsiri",
    no: "LT052",
    publisher: "	Licensed LPI Trainer",
  },

  {
    id: 14,
    title: "Arul John Peter",
    no: "LT175",
    publisher: "	Licensed LPI Trainer",
  },
  {
    id: 15,
    title: "Azura Binti Zainal",
    no: "LT313",
    publisher: "	Licensed LPI Trainer",
  },

  {
    id: 16,
    title: "Balachandar A/L Ramakrishnan",
    no: "LT289",
    publisher: "	Licensed LPI Trainer",
  },
  {
    id: 17,
    title: "Balasubramaniam a/l Somasundaram",
    no: "LT105",
    publisher: "	Licensed LPI Trainer",
  },
  {
    id: 18,
    title: "Beh Chong You",
    no: "LT315",
    publisher: "	Licensed LPI Trainer",
  },

  {
    id: 19,
    title: "Brahmmakumari a/p Balaraman",
    no: "LT203",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 20,
    title: "Brenda Yong",
    no: "LT004",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 21,
    title: "Chai Ming Sing, Dr.",
    no: "LT104",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 22,
    title: "Cheah Paik Kin, Dr.",
    no: "LT143",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 23,
    title: "Cheak Sook Kun",
    no: "LT020",
    publisher: "LPI Licensed Psychotherapist (limited to practice in UTAR)",
  },
  {
    id: 24,
    title: "Chee Choong Kooi, Dr.",
    no: "LT179",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 25,
    title: "Chee Kok Beng",
    no: "LT137",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 26,
    title: "Cheng Sau Keng, Dr.",
    no: "LT205",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 27,
    title: "Cheng Wei Fong",
    no: "LT109",
    publisher: "Licensed LPI Trainer",
  },

  {
    id: 28,
    title: "Chew Hock Kee",
    no: "LT165",
    publisher: "Licensed LPI Psychotherapist",
  },
  {
    id: 29,
    title: "Chew Khoon Hee, Dr.",
    no: "LT112",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 30,
    title: "Chew May-Ann",
    no: "LT213",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 31,
    title: "Chew Siew Wei",
    no: "LT018",
    publisher: "LPI Licensed Psychotherapist (limited to practice in UTAR)",
  },
  {
    id: 32,
    title: "Chia Meow Lin",
    no: "LT312",
    publisher: "Licensed LPI Trainer (limited to practice in TAR UMT)",
  },
  {
    id: 33,
    title: "Chong Cheong Ping @ Chris",
    no: "LT283",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 34,
    title: "Choong Hoon Guan",
    no: "LT114",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 35,
    title: "Choong Shiau Huai, Dr.",
    no: "LT308",
    publisher: "Licensed LPI Trainer (limited to practice in TAR UMT)",
  },
  {
    id: 36,
    title: "Christine Velu",
    no: "LT133",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 37,
    title: "Christopher Raj Anthony",
    no: "LT002",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 38,
    title: "Crystal Tan Hooi Ching",
    no: "LT282",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 39,
    title: "Daniel Ng Wee Jin",
    no: "LT272",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 40,
    title: "David Ho",
    no: "LT139",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 41,
    title: "David Lau Lee Hian",
    no: "LT317",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 42,
    title: "Dinishvarkumar a/l Ananthkumar",
    no: "LT284",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 43,
    title: "Diong Fong Wei",
    no: "LT145",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 44,
    title: "Edwin Ooi Teik Chai",
    no: "LT281",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 45,
    title: "Eh Wen A/L Nen Di",
    no: "LT172",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 46,
    title: "Ekkawit Matchawech",
    no: "LT223",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 47,
    title: "Fairuz binti Omar",
    no: "LT276",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 48,
    title: "Feiri Yenna",
    no: "LT163",
    publisher: "Licensed LPI Trainer",
  },

  {
    id: 49,
    title: "Florence Kuek Chee Wee",
    no: "LT180",
    publisher: "Licensed LPI Trainer",
  },

  {
    id: 50,
    title: "Foo Ay Chiwn",
    no: "LT314",
    publisher: "Licensed LPI Trainer (limited to practice in TAR UMT)",
  },

  {
    id: 51,
    title: "Florence Kuek Chee Wee",
    no: "LT180",
    publisher: "Licensed LPI Trainer",
  },

  {
    id: 52,
    title: "Foo Ay Chiwn",
    no: "LT314",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 53,
    title: "Foong Soon Seng",
    no: "LT146",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 54,
    title: "Franklin Morais",
    no: "LT021",
    publisher: "Licensed LPI Trainer",
  },

  {
    id: 55,
    title: "Gan Pei Lee",
    no: "LT186",
    publisher: "Licensed LPI Trainer",
  },
  {
    id: 56,
    title: "Gary De Witt",
    no: "LT140",
    publisher: "Licensed LPI Trainer",
  },
];

const License1 = () => {
  return (
    <div className="publication-up">
      <div className="big-heading-center">List of Licensed LPI trainers.</div>
      <div className="row ">
        <div className="center">
          {publications.map((publication) => (
            <div key={publication.id} className="col-5 mb-1">
              <div className="license-container bg-white p-4 rounded-md mb-4">
                <div className="flex justify-between items-center">
                  <div className="left-section">
                    <div className="tag">
                      <h5 className="font-semibold text-lg text-blue-600">
                        {publication.title}
                      </h5>
                      <div className="status-indicator">
                        <span className="text-sm px-2 py-1 rounded">
                          {publication.no}
                        </span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600">
                      <span>{publication.publisher}</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default License1;
