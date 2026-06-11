import {
  EmailOutlined,
  Instagram,
  LinkedIn,
  WhatsApp,
  Facebook,
  YouTube
} from "@mui/icons-material";
import { useState } from "react";
import { FaPhone } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Contact = () => {


  const [visitorEmail, setVisitorEmail] = useState("");
    const [visitorName, setVisitorName] = useState("");
    const [visitorMessage, setVisitorMessage] = useState("")
    const [visitorDetails, setVisitorDetails] = useState("")

    const handleMessage = (e) => {
    e.preventDefault();
    const sentOn = Date()
    const visitorDetails ={visitorEmail, visitorName, visitorMessage, sentOn}
if (visitorEmail === "ancemwasy1029@gmail.com" && visitorName === "0753768522" && visitorMessage === "ancecode the coded code") 
  {
     
    console.log("rendered");
    fetch("../../dataBase/data.json")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);
        setVisitorDetails(data);
      })
      .catch((err) => {
        console.log("Error Is..." + err);
      })

}else{
    fetch("../../dataBase/data.json", {
      method: "POST",
      header: {
        "content-type": "application-json",
      },
      body: JSON.stringify(visitorDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Message Sent");
        console.log(Date())
      })
      .catch((err) => console.log(err.message));
}
  };


  return (
    <div style={{ paddingTop: "5%" }} id="contactMe">
      <div className="contact">
        <div className="leftContainer">
          <h2>
            {" "}
            <span> Contact </span> Me{" "}
          </h2>
          <p>
            <h3>Click Link To Contact Me Direct </h3>
            <ul>
              <li>
                {" "}
                <a href="callTo: 255761388218">
                  {" "}
                  <FaPhone /> <span>+255 761 388 218 </span>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="../">
                  {" "}
                  <WhatsApp /> <span>+255 761 388 218 </span>
                </a>{" "}
              </li>
              <li>
                {" "}
                <a href="mailto: laurancendingo29@gmail.com">
                  {" "}
                  <EmailOutlined /> <span>laurancendingo29@gmail.com </span>
                </a>{" "}
              </li>
            </ul>
          </p>

          <div className="socialLinks">
            <h3> You May Link Me On</h3>
            <p>
              <ul>
                <li>
                  <Link to={""}> <LinkedIn style={{fontSize: "35px", color: "#47f" }}/> </Link>  
                </li>
                <li>
                  <Link to={""}>  <Instagram  style={{fontSize: "35px", color: "#7f098a" }}/></Link>
                 
                </li>
                <li>
                  <Link to={""}> <Facebook style={{fontSize: "35px", color: "#47f" }} /> </Link>
                  
                </li>
                <li>
                  <Link to={""}>  <YouTube style={{fontSize: "40px", color: "red" }} /> </Link>
                 
                </li>
              </ul>
            </p>
          </div>
          <div className="downloadCv"><button> Download My CV</button></div>
        </div>
        <div className="rightContainer">
          <form onSubmit={handleMessage}>
            <h3>Leave A Message</h3>
            <label htmlFor="email"> Email </label>
            <input
              type="email"
              required
              name="visitorEmail"
              placeholder="Example... ancemwasy1029@gmail.com"
              onChange={(e) => setVisitorEmail(e.target.value)} 
            />
            <label htmlFor="phone"> Name </label>
            <input 
            type="text" 
            required 
            name="visitorName"
            placeholder="Example... Gwamaka Mwasyupilila"
            onChange={(e) => setVisitorName(e.target.value)} />
            <label htmlFor="message"> Message </label>
            <textarea
              type="text"
              required
              name="visitorMessage"
              placeholder="Type A Message Here..."
            onChange={(e) => setVisitorMessage(e.target.value)} 
            ></textarea>
            <button> Send </button>
          </form>
        </div>
        
      </div>


           {visitorDetails && 
      <div className="visitorDetails">
      <h3>
        Visitors <span>Messages</span>
      </h3>
        <div className="table">


          </div>
         
          <table>
            <thead>
              <tr>
                <td> S/N </td>
                <td> Name </td>
                <td> Email </td>
                <td> Message </td>
                <td> Sent On</td>
              </tr>
            </thead>

            <tbody>
            { visitorDetails && visitorDetails.map((visitor) =>(
              <tr key={visitor.id}>
                <td> {visitor.id} </td>
                <td> {visitor.visitorName} </td>
               { <td>  <a href="mailto: {visitor.visitorEmail}">{visitor.visitorEmail} </a> </td>}
                <td> {visitor.visitorMessage} </td>
                <td> {visitor.sentOn} </td>
              </tr>
                 ))}
            </tbody>
          </table>
        </div>
          }

          <div className="numberOfVisitors"> <div className="head">Visitors</div> <div className="numbers"> 2000 </div></div>
   
    </div>
  );
};

export default Contact;
