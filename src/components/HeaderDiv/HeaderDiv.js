import './HeaderDiv.css'
import Menu from './Menu/Menu';

const HeaderDiv = () => {
    
    window.onscroll = () => {
        if (window.pageYOffset >= 80){
            document.getElementById('header').classList.add('header-scrolled');
        }
        else{
            document.getElementById('header').classList.remove('header-scrolled');
        }
    }

    const OpenSlider = () => {
        document.body.style.overflow="hidden";
        document.getElementById("slider").style.width="100%";
    }
    const CloseSlider = () => {
        document.body.style.overflow="auto";
        document.getElementById("slider").style.width="0";
    }
    return (
        <div className="header" id="header">
            <i className="fa-light fa-bars-staggered menuIcon" onClick={OpenSlider}></i>
            <i className="fa-regular fa-cart-shopping-fast cartIcon"><p>سبد خرید</p></i>
            <Menu CloseSlider={CloseSlider} />
        </div>
    )
}

export default HeaderDiv