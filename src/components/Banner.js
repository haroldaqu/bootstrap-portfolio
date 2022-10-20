import SkillsCard from "./SkillsCard";
import skillsData from "../data/skillsData";
import { FiChevronDown  } from "react-icons/fi";


const Banner = () => { 
    return ( 
        <section className="container">
            <div className="row mb-4 d-flex justify-content-center align-items-end"  id="banner">
                    <div className="row">
                        <div className="col-lg-4 d-flex justify-content-center">
                            <img src={require('../assets/myavatar5.png')} alt="" className="rounded-circle img-fluid" id="img"/>
                        </div>
                        <div className="col-lg-8">
                            <div id="banner1"  className="d-flex flex-column align-items-center">
                                <h1 id="headers" className="text-darktext-center" >Harold Aquino</h1>                                        
                            </div>
                            <p className="fs-4 text-secondary text-center fw-light" >Hello! I am a <span id="developer" >web developer</span> focused on clean and reusable code.</p>
                            <div className="d-flex justify-content-center align-items-center"  >
                                <a className="bg-dark text-white border-0 fs-5 m-2 rounded-1 text-decoration-none p-1" href="https://github.com/haroldaqu" target="_blank">GitHub</a>
                                <a className="bg-dark text-white border-0 fs-5 m-2 rounded-1 text-decoration-none p-1" href="https://linkedin.com/in/harold-aquino" target="_blank">LinkedIn</a>
                                <button className="bg-dark text-white border-0 fs-5 m-2 rounded-1 text-decoration-none p-1"  onClick={() => window.open(require('../assets/DevResume.pdf') )} target="_blank">Resume</button>
                            </div>
                        </div>
                    </div> 
                    <div className="text-center d-flex align-items-end" id="down-btn-cont" >
                        <a className="border-0 bg-white fs-2" id="down-btn" href="#skills"> <FiChevronDown /> </a>
                    </div>       
            </div>
        </section>
    );
}
 
export default Banner;