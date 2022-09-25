import SkillsCard from "./SkillsCard";

const Skills = () => {
    return ( 
        <section className="skills" id="skills">
            <h2>Skills</h2>
            <p>Technologies I've learned</p>
            <div className="card-group">
                <SkillsCard />
            </div>
        </section>
     );
}
 
export default Skills;