import ProjectsCard from "./ProjectCards";

const Projects = () => {
    return ( 
        <section id="projects">
            <h2>Skills</h2>
            <p>Technologies I've learned</p>
            <div className="card-group">
                <ProjectsCard />
            </div>
        </section>
     );
}
 
export default Projects;