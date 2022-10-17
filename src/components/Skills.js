import SkillsCard from "./SkillsCard";
import skillsData from "../data/skillsData";
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandBootstrap, TbBrandSass } from "react-icons/tb"
import { FaReact, FaGithub } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si"

const Skills = () => {
    return ( 
            <section className="" id="skills" >
                <div className="container pt-4">
                    <h1 className="text-center text-light py-4" >Tech Stack</h1>
                    <div className="border rounded-3 bg-white py-3 d-flex justify-content-evenly" id="shadow">
                        <div className="col-4 border-end" >
                            <h3 className="text-dark text-center" >Foundation</h3>
                            <div className="d-flex justify-content-evenly align-items-center flex-column bg-white px-2 rounded-1 text-secondary">
                                <div className="">
                                    <p className="fs-1 text-center"><TbBrandHtml5 /></p>
                                    <p className="text-center" >HTML</p>
                                </div>
                                <div className="">
                                    <p className="fs-1 text-center"><TbBrandCss3 /></p>
                                    <p className="text-center" >CSS</p>    
                                </div>
                                <div className="">
                                    <p className="fs-1 text-center" ><TbBrandJavascript /></p>
                                    <p className="text-center">Javascript</p>    
                                </div>
                            </div>
                        </div>
                        <div className="col-4 border-end ">
                            <h3 className="text-dark text-center" >Frameworks</h3>
                            <div className="d-flex justify-content-evenly align-items-center flex-column bg-white px-2 rounded-1 text-secondary">
                                <div className="">
                                    <p className="fs-1"><FaReact /></p>
                                    <p className="text-center">React</p>    
                                </div>
                                <div className="">
                                    <p className="fs-1"><TbBrandBootstrap /></p>
                                    <p className="text-center">Bootstrap</p>    
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <h3 className="text-dark text-center" >Tools</h3>
                            <div className="d-flex justify-content-evenly align-items-center flex-column bg-white px-2 rounded-1 text-secondary">
                                <div >
                                    <p className="fs-1 text-center"><SiVisualstudiocode />  </p>
                                    <p className="text-center" >VS Code</p>    
                                </div>
                                <div className="">
                                    <p className="fs-1 text-center"><FaGithub/></p>
                                    <p className="text-center" >GitHub</p>    
                                </div>
                            </div>
                        </div>                        
                    </div>
                </div>
                  
            </section>

     );
}
 
export default Skills;