import image from '../Images/KPI.jpg';

function Education(){
    return(
        <div className="My-education animate__animated animate__bounceInUp" id="id_myEducation">
                        <h2> <i class="fa-solid fa-graduation-cap"></i> NATIONAL TECHNICAL UNIVERSITY OF UKRAINE "Igor Sikorsky Kyiv Polytechnic Institute"</h2>
                        <hr></hr>
                        <p>Specialization: Automation and
                            computer-integrated technologies <br></br>
                            Master`s degree</p>
                        <hr></hr>
                        <h3>Skills</h3>
                        <ul>
                            <li>Engineering</li>
                            <li>Programming</li>
                            <li>Enterprise resource planning</li>
                        </ul>
                        <img src={image} alt="KPI"></img>
            </div>
    )
}

export default Education;