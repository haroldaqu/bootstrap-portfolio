import SkillsCard from "./SkillsCard";
import skillsData from "../data/skillsData";

const Skills = () => {
    return ( 
        <section className="container-xxl" id="skills">
            <div className="w-50" id="skills-header" >
                <h1 id="headers" >SKILLS</h1>
                <p> ... and technologies </p>
                {/* <h2 className="border-bottom border-info" >Skills</h2>
                <p>Technologies I've learned</p> */}
            </div>
            <div className="w-50 row row-cols-1 row-cols-md-5 g-4" id="skills-group">
                {
                    skillsData.map((skill, i) => <div className="col"><SkillsCard key={i} skill={skill}/></div>)
                }
            </div>
        </section>
     );
}
 
export default Skills;