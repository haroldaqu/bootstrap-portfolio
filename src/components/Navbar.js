const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="container-xxl">
                <a href="#" className="navbar-brand" data-bs-toggle="collapse" data-bs-target="#nav" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">Harold.</a>
                <button className="navbar-toggler"></button>
                <div className="collapse navbar-collapse navbar-nav" id="nav">
                    <a href="">Home</a>
                    <a href="">Skills</a>
                    <a href="">Projects</a>
                </div>
            </div>
        </nav>
     );
}
 
export default Navbar;