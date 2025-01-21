import image from '../Images/AboutMe.jpg';

function AboutMe(){
    return (
        <div className="About-me animate__animated animate__bounceInUp" id="id_AboutMe">
                    <h2>About me</h2>
                    <hr></hr>
                    <p>Highly motivated and driven to continuously develop my skills, I am a firm believer in lifelong learning and always strive to find smarter, more efficient solutions to challenges.

                    With a diverse professional background, I bring a unique blend of expertise across multiple industries:</p>
                    
                    <br></br>
                        <p><b>1. Frontend Development:</b> Experienced in building dynamic, user-friendly web applications with a strong focus on clean code, responsive design, and delivering seamless user experiences.</p>
                        
                        <p><b>2. International Transportation and Logistics:</b> As an Import-Export Officer in International Commitee of the Red Cross, I honed my skills and knowledge in safety regulations, cost efficiency, and compliance with both local and international transportation laws.</p>
                        <p><b>3. Finance and Construction:</b> As a Director of Finance, I successfully managed operations, optimized budgets, and ensured seamless project execution.</p>
                    <br></br>
                    
                    <p>My passion lies in combining my technical and managerial expertise to deliver impactful, results-driven solutions across all areas of my work.</p>
                    <img src={image} alt='about me'></img>
        </div>
    )
}

export default AboutMe;