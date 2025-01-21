import Image1 from '../Images/HumanitarianAid.jpg';
import Image2 from '../Images/Office.jpg';

function WorkExperience(){
    return(
        <div className="My-work-experience animate__animated animate__bounceInUp" id="id_myWork">

                        <h2> International Committee of the Red Cross (ICRC), Import Export Officer, Logistics Assistant <br></br><i className="fa-solid fa-location-dot"></i> Kyiv, Ukraine</h2>
                        <hr></hr>
                        <h3>(November 2022 - December 2024)</h3>
                        <h4><br></br>Core Responsibilities:</h4>
                        <ul>
                            <li>Transportation by road</li>
                            <li>Transportation by air</li>
                            <li>Transportation by sea</li>
                            <li>Customs Clearence</li>
                            <li>Procurment</li>
                            <li>Document Managment</li>
                            <li>Communication</li>
                        </ul>
                        <img className="My-work-experience__image" src={Image1} alt='Work1'></img>

                        <br></br>
                        <br></br>
                        <hr></hr>

                        <h2>LLC «Dominant Trust Service», director of
                            economics in town of <i className="fa-solid fa-location-dot"></i> Severodonetsk</h2>
                        <hr></hr>
                        <h3>(JULE 2020 - MARCH 2022)</h3>
                        <h4><br></br>Core Responsibilities:</h4>
                        <ul>
                            <li>Managment of documents (preparation of tender
                                documentation, contracts)</li>
                            <li>Participating in auctions</li>
                            <li>Building of economic ties</li>
                            <li>Market analysis</li>
                            <li>Development and folowing of building technology</li>
                            <li>Researching of technical documentation</li>
                            <li>Development of technical documentation</li>
                            <li>Preparation of budget documentation</li>
                            <li>Monitoring progress of work completion</li>
                            <li>Development of advartising baners, passports of building objects, sharing ADs in WEB
                            </li>
                            <li>Accaunting</li>
                            <li>Communication</li>
                        </ul>
                        <img className="My-work-experience__image"src={Image2} alt="Work2"></img>
                    </div>
    )
}

export default WorkExperience;