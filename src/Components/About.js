import anceDP from "../images/anceDP.jpg";

import {
  JavascriptRounded,
  HtmlRounded,
  CssRounded
} from "@mui/icons-material";

import { FaReact } from "react-icons/fa6";
import { SiLaravel, SiDjango } from "react-icons/si";
const About = () => {


  return (
    <div style={{ paddingTop: "5%" }} id="aboutMe">
      <div className="about">
        <div className="aboutDP">
          {" "}
          <src href={anceDP} />{" "}
        </div>
        <div className="aboutInfo">
          <h1> About Me </h1>
          <p>
            I'm a Web Developer, With High Passion Of Developing Products With
            Relevance To Current Technological Development That's Why I Keep
            Learning New Releases Day To Day. Web Development To Me It Is Not
            Only A carrier It Is My Hobby
          </p>
          <div className="skillsEducationAndEperience">
            <div className="skillsLinks">
              <a href="#education"> Education </a>
              <a href="#skills"> Skills </a>
              <a href="#experience"> Experience </a>{" "}
            </div>
          </div>
          <div className="skieduespContainer">
          <div id="education" className="educationContent">
            <h3> 2008 - 2015</h3>
            <abbr title="Located At Tukuyu, Mbeya">
              {" "}
              Bujinga Primary School
            </abbr>

            <h3> 2016 - 2019</h3>
            <abbr title="Located At Tukuyu, Mbeya">
              {" "}
              Bujinga Secondary School
            </abbr>

            <h3> 2020 - 2022</h3>
            <abbr title="Located At Tosamaganga, Iringa">
              {" "}
              Tosamaganga High School
            </abbr>

            <h3> 2022 - 2025</h3>
            <abbr title="Located At Shaaban Robert Street, Ilala, Dar Es Salaam. I was there taking Bachelor Degree In Information Technology">
              {" "}
              Institute Of Finance Management (IFM){" "}
            </abbr>
          </div>


          <div id="skills" className="skillsContent">

            <div className="languages">
                <h3>
                    Languages
                </h3>
                <p>
                <ul>
                <li> <JavascriptRounded sx={{ fontSize: "25px", border: "2px solid ", borderRadius: "50%" }} /> Java Script <div className="progContainer"> <div className="progBar"></div> </div> </li>
                <li> <JavascriptRounded  sx={{ fontSize: "25px", border: "2px solid ", borderRadius: "50%" }}  /> Python</li>
                <li> <HtmlRounded sx={{ fontSize: "25px", border: "2px solid ", borderRadius: "50%" }} /> HTML </li>
                <li> <CssRounded  sx={{ fontSize: "25px", border: "2px solid ", borderRadius: "50%" }}  /> CSS </li>
                </ul>
                   
                </p>
            </div>
            <div className="frameWorks">
                <h3> FrameWorks </h3>

                <h4> Front End</h4>

                <p>
                <ul>
                    <li> <FaReact  style={{ fontSize: "30px" }}  /> React</li>
                   
                </ul>
                  
                </p>

                <h4> Back End</h4>

                <p>
                    <ul>
                        <li> <SiLaravel  style={{ fontSize: "30px" }}  /> Laravel</li>
                        <li> <SiDjango  style={{ fontSize: "30px"}}  /> Django</li>
                    </ul>
                </p>
                </div>
            </div>
          </div>
          <div className="ecperience"></div>
        </div>
      </div>
    </div>
  );
};

export default About;
