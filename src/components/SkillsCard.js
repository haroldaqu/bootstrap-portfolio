const SkillsCard = ({skill}) => {
    return ( 
        <div  className="card border-0" id="card__skills">
            <div className="card-body text-center rounded-1 text-secondary" id="skills-body" >
                <h3 className="card-title">{skill.logo}</h3>
                <p className="card-text">{skill.name}</p>
            </div>
        </div>
     );
}
 
export default SkillsCard;