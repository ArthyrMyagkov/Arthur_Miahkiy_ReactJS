import image from '../Images/SoftSkills.jpg';

function SoftSkills(){
    return (
        <div className="My-soft-skills animate__animated animate__bounceInUp" id="id_mySoftSkills">
                    <h2>My soft skills</h2>
                    <hr></hr>
                    <ul>
                        <li>Time managment</li>
                        <li>Research & Analysis</li>
                        <li>Responsibility</li>
                        <li>Creativity</li>
                        <li>Ability to think critically</li>
                        <li>Punctuality</li>
                        <li>Teamwork</li>
                        <li>Adaptability</li>
                        <li>Communication</li>
                        <li>Attentive to details</li>
                    </ul>
                    <img src={image} alt="SoftSkills"></img>
                </div>
    )
}

export default SoftSkills;