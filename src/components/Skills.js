import SkillsCard from "./SkillsCard";
import skillsData from "../data/skillsData";
import { TbBrandHtml5, TbBrandCss3, TbBrandJavascript, TbBrandBootstrap, TbBrandSass } from "react-icons/tb"
import { FaReact, FaGithub } from "react-icons/fa";
import { SiVisualstudiocode } from "react-icons/si"

const Skills = () => {
    return ( 
            <section className="mb-4" id="skills" >
                <div className="container pt-5">
                    <h1 className="text-center text-white" >TOOLKITS</h1>
                        {/* <div className="d-flex justify-content-evenly flex-row bg-white border rounded-1" id="skills-group">
                            {
                                skillsData.map((skill, i) => <div className=""><SkillsCard key={i} skill={skill}/></div>)
                            }
                        </div>                                        */}
                    <div className="border rounded-1 bg-white p-3 d-flex flex-column justify-content-center" id="shadow">
                        <div className="row border-bottom" >
                            <div className="col-sm-8">
                                <h3 className="text-dark" >Foundation</h3>
                                <div className="d-flex justify-content-evenly bg-white px-2 rounded-1 text-secondary">
                                    <div className="">
                                        <p className="fs-1"><TbBrandHtml5 /></p>
                                        <p>HTML</p>
                                    </div>
                                    <div className="">
                                        <p className="fs-1"><TbBrandCss3 /></p>
                                        <p>CSS</p>    
                                    </div>
                                    <div className="">
                                        <p className="fs-1"><TbBrandJavascript /></p>
                                        <p>Javascript</p>    
                                    </div>
                                </div>
                            </div>
                            <div className="col-4" id="transparent"></div>
                        </div>
                        <div className="row border-bottom pt-3">
                            <div className="col-4"></div>
                            <div className="col-sm-8">
                                <h3 className="text-dark text-end" id="frameworks" >Frameworks</h3>
                                <div className="d-flex justify-content-evenly bg-white px-2 rounded-1 text-secondary">
                                    <div className="">
                                        <p className="fs-1"><FaReact /></p>
                                        <p>React</p>    
                                    </div>
                                    <div className="">
                                        <p className="fs-1"><TbBrandBootstrap /></p>
                                        <p>Bootstrap</p>    
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row pt-3">
                            <div className="col-sm-8">
                                <h3 className="text-dark" >Tools</h3>
                                <div className="d-flex justify-content-evenly bg-white px-2 rounded-1 text-secondary">
                                    <div className="">
                                        <p className="fs-1"><SiVisualstudiocode />  </p>
                                        <p>VS Code</p>    
                                    </div>
                                    <div className="">
                                        <p className="fs-1"><FaGithub/></p>
                                        <p>GitHub</p>    
                                    </div>
                                </div>
                            </div>
                            <div className="col-4"></div>
                        </div>                        
                    </div>

                </div>
                  
            </section>

     );
}
 
export default Skills;