import ProjectsCard from "./ProjectCards";
import projectData from "../data/projectData";

const Projects = () => {
    return ( 
        <section className="container-xxl" id="projects">
            <h2>Projects</h2>
            <p>Personal projects I have created</p>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {
                    projectData.map((project, i) => <div className="col"><ProjectsCard  key={i} project={project} /></div>)
                }
            </div>
        </section>
     );
}
 
export default Projects;