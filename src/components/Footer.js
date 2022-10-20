import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";
import { TbBrandBootstrap } from "react-icons/tb"
const Footer = () => {
    const [copy, setCopy] = useState(false)

    return ( 
        <footer className="border-0 d-flex flex-column justify-content-between position-relative mt-5" id="footer" >
            <div className="container w-100 position-relative p-2 "  id="contact-cont" >
                <div className="border rounded-3 p-1 position-absolute bg-white w-100 text-center p-4" id="contact">
                    <p className="text-dark fs-5" >Thanks for checking out my portfolio!</p>
                    <p className="fs-5 fw-light text-secondary" >contact me at</p>
                    <a  className="fs-4 position-relative" onClick={(e) =>  {
                        navigator.clipboard.writeText(e.currentTarget.innerText)
                        setCopy(true)
                    }} id="email">
                        <span className="text-primary px-1" ><FaRegCopy /></span>
                        haroldgaquino@gmail.com 
                        <span className={` ${copy ? '' : 'd-none'} border border-secondary position-absolute fs-4 bg-white text-secondary rounded-1 px-1`} id="copy">Copied</span>
                    </a>
                </div>
            </div>
            <div  className="" id="info">
                <div className="container d-flex  flex-column justify-content-end h-100" >
                    <div className="d-flex justify-content-center align-items-end py-4 h-100"  >
                         <a className="bg-dark text-white border-0 fs-5 rounded-1 text-decoration-none p-1 mx-2" href="https://github.com/haroldaqu" target="_blank">GitHub</a>
                                <a className="bg-dark text-white border-0 fs-5 mx-2 rounded-1 text-decoration-none p-1" href="https://linkedin.com/in/harold-aquino" target="_blank">LinkedIn</a>
                                <button className="bg-dark text-white border-0 fs-5 mx-2 rounded-1 text-decoration-none p-1" onClick={() => window.open(require('../assets/DevResume.pdf') )} target="_blank">Resume</button>
                    </div>
                    <p className="text-white-50 fs-5 text-center fw-light" >Hand crafted by Harold Aquino</p>
                    <p className="text-white-50 fs-5 text-center fw-light" >
                        Made with 
                        <span className="fs-2 px-2" ><TbBrandBootstrap /></span>
                    </p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;