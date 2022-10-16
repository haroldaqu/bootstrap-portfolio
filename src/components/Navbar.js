import { CgMenuRight } from "react-icons/cg";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="container" id="nav-cont">
                <a href="#" className="navbar-brand fs-1 " id="logo-me" >H.</a>
                <button className="navbar-toggler border-0 fs-1 text-dark" data-bs-toggle="collapse" data-bs-target="#nav" aria-label="Toggle Navigation" id="logo-btn">
                    <CgMenuRight />
                </button>
                <div className="collapse navbar-collapse" id="nav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a href="#banner"  className="nav-link">Home</a>
                        </li>
                        <li className="nav-item">
                            <a href="#skills" className="nav-link" >Skills</a>
                        </li>
                        <li className="nav-item">
                            <a href="#projects" className="nav-link" >Projects</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;