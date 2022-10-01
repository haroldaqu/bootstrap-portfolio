const SkillsCard = ({skill}) => {
    return ( 
        <div  className="h-75 card border-0" id="card__skills">
            <div className="h-100 card-body text-center" id="skills-body" >
                <h3 className="h-75 card-title">{skill.logo}</h3>
                <p className="h-25card-text">{skill.name}</p>
            </div>
        </div>
     );
}
 
export default SkillsCard;