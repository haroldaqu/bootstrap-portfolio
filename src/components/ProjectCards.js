import { useState } from "react";

const ProjectsCard = ({project}) => {

    const [hover, setHover] = useState(false)

    const openInNewTab = (event, url) => {
        window.open(url, '_blank')
    }

    return ( 
        <div className="card border-0"  id="project-card" onMouseOver={() => setHover(true)}  onMouseOut={() => setHover(false)} onClick={(e) => project.live ? openInNewTab(e, project.live) :  openInNewTab(e, project.git) }>
            <div className="position-relative p-5 rounded-3" style={{backgroundColor : project.bg}}>
                <img src={project.img} alt="" className="card-img rounded-1" />
                <div className={`rounded-3 card-body  position-absolute w-100 h-100 ${hover ? 'd-flex' : 'd-none' } flex-column justify-content-evenly align-items-center`} id="card-body">
                    <div className="d-flex justify-content-evenly w-100" >
                    {project.stack.map((stack, i) =>  <p key={i} className="border rounded-pill text-center bg-light text-secondary px-1" id="stack">{stack}</p> )}
                    </div>
                    <p className="card-text text-secondary w-100 text-white text-center">{project.description}</p>
                    <div className="d-flex justify-content-evenly w-100" >
                        {project.live &&                        
                            <a className=" text-dark border-0 fs-5 rounded-1 text-decoration-none text-center" id="project-btn"  href={project.live} target="_blank" style={{backgroundColor: '#38CEAC'}} onClick={(e => e.stopPropagation())}>Live</a>
                        }
                        <a className=" text-dark border-0 fs-5 rounded-1 text-decoration-none text-center" id="project-btn" href={project.git} target="_blank" style={{backgroundColor : '#38CEAC'}} onClick={(e => e.stopPropagation())} >Code</a>
                    </div>
                </div>
            </div>
            <h3 className={`card-title text-center py-3 ${hover ? 'text-dark' : 'text-secondary'}`}>{project.title}</h3>
        </div>
     );
}
 
export default ProjectsCard;