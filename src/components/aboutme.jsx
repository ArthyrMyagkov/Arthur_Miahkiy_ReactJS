import image from '../Images/AboutMe.jpg';

function AboutMe(){
    return (
        <div className="About-me animate__animated animate__bounceInUp" id="id_AboutMe">
                    <h2>About me</h2>
                    <hr></hr>
                    <p>Hightly motivated to develop my own skills. I believe in life-long learning and I always trying to
                        find more eficicent way to solve assigned tasks. <br></br>
                        I am experienced in building and costruction as the director of finance, and in International Transportation and Logistics as the Import Export Officer with a strong focus on safety regulations, cost optimization, and compliance with local and international transportation laws.
                    </p>
                    <img src={image} alt='about me'></img>
        </div>
    )
}

export default AboutMe;