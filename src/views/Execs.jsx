import React, { useState } from "react";
import { Button, ButtonGroup } from "@mui/material";

export default function Execs() {
  const executives = [
    {
      year: "2017-2018",
      members: [
        { role: "Club Faculty Advisor", name: "Ms. Sandra Khan" },
        { role: "President", name: "Mr. Kwesi Elliot" },
        { role: "Vice-President", name: "Mr. Teekae Jordan" },
        { role: "Secretary", name: "Mr. Shemar Austin" },
        { role: "Treasurer", name: "?" },
        { role: "Events Coordinator", name: "?" },
        { role: "PRO", name: "?" },
        { role: "Immediate Past President", name: "-" },
      ],
        activities: [
  "The Clubs were launched at Orientation 2017/2018. Ms. Sandra Khan, a cybersecurity professional and lecturer, was asked to be the Cybersecurity Club’s advisor, and she made a presentation about the Club at Orientation 2017/2018. Ms. Khan reports that 'After I made a presentation about Cybersecurity, and was heading back to my office, two students ran behind me and said, Miss, Miss, Miss we are interested in this club.' Those two students were 2nd year students Teekae Jordan and Shemar Austin, making them the founding members of the UGCC. The club gave them the opportunity and the space to share their passion for cybersecurity with the rest of the University community, and they used every chance they had to do so.",
      ],
      images: ["/public/Executives 20182019/1.jpg"],
    },
    {
      year: "2018-2019",
      members: [
        { role: "Club Faculty Advisor", name: "Ms. Sandra Khan" },
        { role: "President", name: "Mr. Cloyd London" },
        { role: "Vice-President", name: "Mr. Teekae Jordan" },
        { role: "Secretary", name: "Mr. Shemar Austin" },
        { role: "Treasurer", name: "Mr. Cleadon Brummel" },
        { role: "Events Coordinator", name: "Mr. Jason Jacobs" },
        { role: "PRO", name: "-" },
        { role: "Immediate Past President", name: "-" },
      ],
      activities: [
          "It was the second club president, Cloyd London, a student of UG’s Distance Learning computer science Program during the period of 2018-2019, who pursued the education objectives set by Kwesi when he noticed that members within the club lacked training within the field of Cybersecurity. He began providing weekly training to the members, focusing on the basic knowledge needed to succeed in the field."
        ],

      images: ["/public/Executives 20182019/2.jpg"],
    },
    {
      year: "2019-2020",
      members: [
        { role: "Club Faculty Advisor", name: "Ms. Sandra Khan" },
        { role: "President", name: "Mr. Jason Jacobs" },
        { role: "Vice-President", name: "Mr. Wayne Forde" },
        { role: "Secretary", name: "Ms. Krystal Pereira" },
        { role: "Treasurer", name: "Mr. Sharukh Khan" },
        { role: "Events Coordinator", name: "Mr. Teekae Jordan" },
        { role: "PRO", name: "-" },
        { role: "Immediate Past President", name: "-" },
      ],
      activities: [
        "As the journey for UGCC continues, we have seen an increase in the interest for Cybersecurity grown among club members. The club continued to provide insight and practical experience to the participating members on topics of Cybersecurity and Information Security."
      ],
      images: ["/public/Executives 20182019/2.jpg"],
    },
    {
      year: "2020-2021",
      members: [
        { role: "Club Faculty Advisor", name: "Ms. Sandra Khan" },
        { role: "President", name: "Mr. Jason Jacobs" },
        { role: "Vice-President", name: "Mr. Wayne Forde" },
        { role: "Secretary", name: "Ms. Krystal Pereira" },
        { role: "Treasurer", name: "Mr. Shahrukh Khan" },
        { role: "Events Coordinator", name: "Mr. Teekae Jordan" },
        { role: "PRO", name: "-" },
        { role: "Immediate Past President", name: "-" },
      ],
      activities: [
        "As the journey for UGCC continues, we have seen an increase in the interest for Cybersecurity grown among club members. The club continued to provide insight and practical experience to the participating members on topics of Cybersecurity and Information Security."
      ],
      images: [""],
    },
    {
      year: "2021-2022",
      members: [
        { role: "Club Faculty Advisor", name: "Ms. Sandra Khan" },
        { role: "President", name: "Ms. Waynetta Naughton" },
        { role: "Vice-President", name: "Ms. Marissa Lowe" },
        { role: "Secretary", name: "Mr. Marion Glasgow" },
        { role: "Treasurer", name: "Mr. Wilton Lawrence" },
        { role: "Events Coordinator", name: "Ms. Felicia Gouveia" },
        { role: "PRO", name: "-" },
        { role: "Immediate Past President", name: "-" },
      ],
      activities: [
        "CyberEX, 2021. On an international level, the University of Guyana Cybersecurity club represented Guyana in the CyberEx competition; an annual OAS/INCIBE initiative which seeks to help strengthen the incident response abilities of individuals. Guyana was well represented by UGCC and ranked 36th among 82 countries for this competition where our members demonstrated a set of digital forensic skills with various tools to investigate data breaches. The members who represented the club and by extension Guyana not only gained exposure to international competitions, but also gained a lot of technical exposure in incident response."
      ],
      images: [""],
    },
    {
      year: "2022-2023",
      members: [
        { role: "Club Faculty Advisor", name: "Ms. Sandra Khan" },
        { role: "President", name: "Ms. Waynetta Naughton" },
        { role: "Vice-President", name: "Mr. Kieron Abrigo" },
        { role: "Secretary", name: "Ms. Rokaylia Thomas" },
        { role: "Treasurer", name: "Ms. Shawnna Fredricks" },
        { role: "Events Coordinator", name: "Mr. Ngozi Thomas" },
        { role: "PRO", name: "Mr. Marion Glasgow" },
        { role: "Immediate Past President", name: "Mr. Jason Jacobs" },
      ],
      activities: [
        "Cybersecurity Awareness Month, 2022. In 2022, the University of Guyana Cybersecurity Club during Cybersecurity Awareness Month went to several public schools across the country and interacted with both students and teachers educating them on what cybersecurity is all about, the different forms of breaches in cybersecurity as well as educating them on Guyana’s Cybercrime Act.",
        "FumaCon, 2022. The University of Guyana Cybersecurity Club was invited by Seishonen Guyana to participate in FumaCon 2022, Guyana’s first Multi-Genre Convention, at the Marriott Hotel, alongside the University of Guyana Robotics Club to showcase the club and what we have worked on throughout our time."
      ],
      images: [""],
    }
  ];

  const [selectedYear, setSelectedYear] = useState(executives[0].year);
  const selectedExec = executives.find((exec) => exec.year === selectedYear);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Executive Bodies through the Years</h1>

      <ButtonGroup variant="outlined" style={{ marginBottom: "20px" }}>
        {executives.map((exec) => (
          <Button
            key={exec.year}
            onClick={() => setSelectedYear(exec.year)}
            style={{
              fontWeight: selectedYear === exec.year ? "bold" : "normal",
            }}
          >
            {exec.year}
          </Button>
        ))}
      </ButtonGroup>

      <div>
        {selectedExec.images.length > 0 &&
          selectedExec.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Exec ${selectedExec.year}`}
              width="200"
              style={{ marginRight: "10px" }}
            />
          ))}

        <h2>{selectedExec.year}</h2>
        <ul>
          {selectedExec.members.map((member, index) => (
            <li key={index}>
              {member.role}: {member.name}
            </li>
          ))}
        </ul>
        <div>
          {selectedExec.activities.map((activity, idx) => (
            <p key={idx}>{activity}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
