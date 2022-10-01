import SkillsCard from "./SkillsCard";
import skillsData from "../data/skillsData";

const Skills = () => {
    return ( 
        <section className="container-xxl text-center" id="skills">
            <div className="w-100 h-25" id="skills-header" >
                <h1 >SKILLS</h1>
                <p> and technologies </p>
                {/* <h2 className="border-bottom border-info" >Skills</h2>
                <p>Technologies I've learned</p> */}
            </div>
            <div className="w-75 h-75 row row-cols-2 row-cols-md-3 g-4" id="skills-group">
                {
                    skillsData.map((skill, i) => <div className="col"><SkillsCard key={i} skill={skill}/></div>)
                }
            </div>
        </section>
     );
}
 
export default Skills;