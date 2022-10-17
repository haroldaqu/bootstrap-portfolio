import { useState } from "react";
import { FaRegCopy } from "react-icons/fa";

const Footer = () => {
    const [copy, setCopy] = useState(false)

    return ( 
        <footer className="border-0 d-flex flex-column justify-content-between position-relative mt-5" id="footer" >
            <div className="container h-25 w-100 position-relative p-2">
                <div className="border rounded-1 p-1 position-absolute bg-white w-100 text-center p-4" id="contact">
                    <p className="text-dark fs-5" >Thanks for checking out my portfolio!</p>
                    <p className="fs-5 fw-light text-secondary" >contact me at</p>
                    <a  className="fs-4 position-relative" onClick={(e) =>  {
                        navigator.clipboard.writeText(e.currentTarget.innerText)
                        setCopy(true)
                    }} id="email">
                        <span className="text-secondary px-1" ><FaRegCopy /></span>
                        haroldgaquino@gmail.com 
                        <span className={` ${copy ? '' : 'd-none'} position-absolute fs-4 bg-primary text-white-50 rounded-1 px-1`} id="copy">Copied</span>
                    </a>
                </div>
            </div>
            <div  className="border h-75" id="info">
                <div className="container d-flex  flex-column h-100"  id="info">
                    <div className="d-flex justify-content-center align-items-end py-4 h-100"  >
                        {/* <a className="text-light border border-white fs-5 m-2 rounded-1 text-decoration-none p-1" id="skills-ind" href="https://github.com/haroldaqu" target="_blank">GitHub</a>
                        <a className="text-light border border-white fs-5 m-2 rounded-1 text-decoration-none p-1" id="skills-ind" href="https://linkedin.com/in/harold-aquino" target="_blank">LinkedIn</a>
                        <a className="text-light border border-white fs-5 m-2 rounded-1 text-decoration-none p-1" id="skills-ind" href="https://drive.google.com/file/d/1_EBnLeH5rQrWJ2vCKgLSIRTz6JAOxUYQ/view?usp=sharing" target="_blank">Resume</a> */}
                         <a className="bg-dark text-white border-0 fs-5 rounded-1 text-decoration-none p-1 mx-2" href="https://github.com/haroldaqu" target="_blank">GitHub</a>
                                <a className="bg-dark text-white border-0 fs-5 mx-2 rounded-1 text-decoration-none p-1" href="https://linkedin.com/in/harold-aquino" target="_blank">LinkedIn</a>
                                <a className="bg-dark text-white border-0 fs-5 mx-2 rounded-1 text-decoration-none p-1" href="https://drive.google.com/file/d/1_EBnLeH5rQrWJ2vCKgLSIRTz6JAOxUYQ/view?usp=sharing" target="_blank">Resume</a>
                    </div>
                    <p className="col text-white-50 fs-5 text-center fw-light" >Hand crafted by Harold Aquino</p>
                    <p className="col text-white-50 fs-6 text-center fw-light" >Made with Bootstrap</p>
                </div>
            </div>
        </footer>
     );
}
 
export default Footer;