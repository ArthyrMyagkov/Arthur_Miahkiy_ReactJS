import image from '../Images/Avatar.png';

function Header(props){

    return (
        <header>
        <div class="CV-header">
            <img className="animate__animated animate__bounceInDown CV-header__avatar" src={image} alt="Avatar"></img>
            <div className="CV-header__title">
                <h1 className="animate__animated animate__bounce">Arthur Miahkiy</h1>
                <hr color="black"></hr>
                <h4>Open for work</h4>
            </div>

        </div>
    </header>
    )
}


export default Header;
