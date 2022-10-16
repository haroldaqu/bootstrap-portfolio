import ProjectsCard from "./ProjectCards";
import projectData from "../data/projectData";

const Projects = () => {
    return ( 
        <section className="container mb-4" id="projects">
            <h1 className="text-center" >PROJECTS</h1>
            <div className="row row-cols-1 row-cols-lg-2 g-4">
                {
                    projectData.map((project, i) => <div className="col"><ProjectsCard  key={i} project={project} /></div>)
                }
            </div>
        </section>
     );
}
 
export default Projects;