
const ProjectsCard = ({project}) => {
    return ( 
        <div  className="card border-0" id="projects">
            <img src={project.img} alt="" className="card-img-top" />
            <div className="card-body text-center">
                <h3 className="card-title">Project Title</h3>
                <p className="card-text">Project Text</p>
            </div>
        </div>
     );
}
 
export default ProjectsCard;