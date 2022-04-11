import './MainDiv.css'
import PlantList from './PlantList/PlantList'

const MainDiv = () => {
    return (
        <div className='main-div'>
            <p className="TopTitle">پربازدیدها</p>
            <div className="category">
                <li>برترین</li>
                <li>بیرونی</li>
                <li>داخل خانه</li>
            </div>
            <PlantList />
            <div className="descripe">
                <p>گل های مورد علاقه خود را نشان کنید تا آنها را در گلخانه خود مشاهده کنید.</p>
            </div>
        </div>
    )
}

export default MainDiv