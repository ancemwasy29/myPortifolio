import { NavigationOutlined, BarChart} from "@mui/icons-material";

const Header = () => {
     return ( 
          <div>
               <div className="header">
                    <div className="name">
                     <h2> <span style={{ color:"aqua" }}>Laur</span>ance </h2>
                    </div>
                        <div className="links">
                              <a href={"#home"}> Home </a>
                              <a href={"#aboutMe"}> About Me </a>
                              <a href={"#myServices"}> Services </a>
                              <a href={"#myWorks"}> Portrfolio </a>
                              <a href={"#contactMe"}> Contact </a>
                         </div>

                         <div className="links1">  <NavigationOutlined /> </div>
               </div>
          </div>
      );
}
 
export default Header;