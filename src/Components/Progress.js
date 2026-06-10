import { useEffect, useState } from "react";

const skills = [
  { name: "React", level: 80, color: "rgb(250, 125, 5)" },
  { name: "HTML", level: 90, color: "rgb(250, 125, 5)" },
  { name: "CSS", level: 90, color: "rgb(250, 125, 5)" },
  { name: "JavaScript", level: 75, color: "rgb(250, 125, 5)" },
];

export default function Skills() {
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    setAnimated(true); // triggers animation on page load
  }, []);

  return (
    <div style={{ width: "400px" }}>
      {skills.map((skill, i) => (
        <div key={i} style={{ marginBottom: "20px" }}>
          <p>{skill.name} - {skill.level}%</p>

          <div style={{
            background: "transparent",
            border: "1px solid aqua",
            height: "20px",
            borderRadius: "20px",
            overflow: "hidden",
            textAlign: "-khtml-right"
          }}>
            <div
              style={{
                width: animated ? `${skill.level}%` : "0%",
                height: "100%",
                background: skill.color,
                transition: "2s ease",
                borderBottomRightRadius: "20px",
                borderTopRightRadius: "20px",
                textAlign:"center",
                
              }}
            >   <span style={{ color: "aqua" }}> {(skill.level)}% </span>
         </div>
          </div>
        </div>
      ))}
    </div>
  );
}