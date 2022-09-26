import { FiChevronDown  } from "react-icons/fi";


const Banner = () => {
    return ( 
        <section className="container-xxl" id="banner">
            <h1 id="headers" >HAROLD AQUINO</h1>
            <p className="w-50 text-center" >Front Web Developer</p>
            <a href="#skills"><FiChevronDown  /></a>
        </section>
     );
}
 
export default Banner;