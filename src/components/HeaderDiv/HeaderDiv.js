import './HeaderDiv.css'
import Menu from './Menu/Menu';

const HeaderDiv = () => {
    
    window.onscroll = () => {
        if (window.pageYOffset >= 80){
            document.getElementById('top-header').classList.add('top-header-scrolled');
        }
        else{
            document.getElementById('top-header').classList.remove('top-header-scrolled');
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
        <div className="header">
            <div className='top-header' id="top-header">
                <i className="fa-light fa-bars-staggered menuIcon" onClick={OpenSlider}></i>
                <div className='menuSlider'>
                    <div className="menu-item">
                        <i className="fa-light fa-flower"></i>
                        <li>گلخانه من</li>
                    </div>
                    <div className="menu-item">
                        <i className="fa-light fa-bag-shopping"></i>
                        <li>گلفروشی</li>
                    </div>
                    <div className="menu-item">
                        <i className="fa-light fa-scissors"></i>
                        <li>باغبون</li>
                    </div>
                </div>
                <i className="fa-regular fa-cart-shopping-fast cartIcon"><p>سبد خرید</p></i>
            </div>
            <Menu CloseSlider={CloseSlider} />
        </div>
    )
}

export default HeaderDiv