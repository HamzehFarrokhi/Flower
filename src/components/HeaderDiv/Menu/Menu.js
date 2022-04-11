import './Menu.css'

const Menu = ( {CloseSlider} ) => {
    return (
        <div className="slider" id="slider">
            <i className="fa-light fa-xmark closeSlider" onClick={CloseSlider}></i>
            <p>منو</p>
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
    )
}

export default Menu