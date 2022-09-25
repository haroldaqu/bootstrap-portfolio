import SkillsCard from "./SkillsCard";
import skillsData from "../data/skillsData";

const Skills = () => {
    return ( 
        <section className="container-xxl" id="skills">
            <h2 className="border-bottom border-info ">Skills</h2>
            <p>Technologies I've learned</p>
            <div className="container-fluid row row-cols-1 row-cols-md-5 g-4">
                {
                    skillsData.map((skill, i) => <div className="col"><SkillsCard key={i} skill={skill}/></div>)
                }
            </div>
        </section>
     );
}
 
export default Skills;