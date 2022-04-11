import './PlantList.css'
import $ from 'jquery'

const PlantList = () => {

    var pointer;
    const OpenPlant = (p) => {
        if (!disableClick)
        {
            document.body.style.overflow="hidden";
            pointer = p;
            $(".plant-card")[p].classList.add("plant-card-open");
            $(".plant-image")[p].classList.add("plant-image-open");
            $(".buyIcon")[p].classList.add("buyIcon-open");
            $(".options")[p].classList.add("options-open");
            for(var i = 0; i < 8; i++){
                $(".des")[p].innerHTML+="<h3>توضیحات</h3><p>دمای گل</p><p>دوره آبدهی</p><p>دمای مطلوب گیاه</p><br>";
            }
            document.getElementById("ClosePlant").classList.add("ClosePlant-open");
            $(".plant-card")[p].onscroll=function() {myFunction()};
        }
        else
            disableClick=false;
    }
    const ClosePlant = () => {
        document.body.style.overflow="auto";
        $(".plant-card")[pointer].scrollTop=0;
        $(".plant-card")[pointer].classList.remove("plant-card-open");
        $(".plant-image")[pointer].classList.remove("plant-image-open");
        $(".buyIcon")[pointer].classList.remove("buyIcon-open");
        $(".options")[pointer].classList.remove("options-open");
        $(".des")[pointer].innerHTML="";
        document.getElementById("ClosePlant").classList.remove("ClosePlant-open");
    }
    
    function myFunction(){
        if ($(".plant-card")[pointer].scrollTop >= 200){
            $(".plant-image")[pointer].classList.add("plant-image-top");
            $(".plant-main-items")[pointer].classList.add("plant-main-items-top");
            $(".insideOut")[pointer].style.display="none";
        }
        else{
            $(".plant-image")[pointer].classList.remove("plant-image-top");
            $(".plant-main-items")[pointer].classList.remove("plant-main-items-top");
            $(".insideOut")[pointer].style.display="block";
        }
    }
    
    ///////mouse-drag codes/////
    var enableDrag = false, dragStartX = 0, currentIndex = 0;
    var disableClick = false;
    const ContentMouseDown = (e) => {
        enableDrag = true;
        dragStartX = e.pageX;
        currentIndex = $('#content').scrollLeft();
        e.preventDefault();
    }
    const ContentMouseMove = (e) => {
        if (enableDrag) {
            disableClick = true;
            var delta = e.pageX - dragStartX;
            $('#content').scrollLeft(currentIndex-delta);
        }
        e.preventDefault();
    }
    const EndScroll = (e) => {
        enableDrag = false;
        e.preventDefault();
        setTimeout(TimedCode, 10);
        function TimedCode() {
            disableClick = false;
        }
    }

    var nameArr = ["میخک", "بنفشه", "مریم", "رز"];
    return (
        <div id="content" className="content"
            onMouseDown={ContentMouseDown}
            onMouseMove={ContentMouseMove}
            onMouseUp={EndScroll}
            onMouseLeave={EndScroll}
        >
            {nameArr.map((item, index) => (
                <div className="plant-card" key={index}>
                    <div onClick={() => OpenPlant(index)} className="plant-image">
                        <img src={process.env.PUBLIC_URL + `img/plant (${index + 1}).png`} alt='' />
                    </div>
                    <div className="plant-main-items">
                        <p className="insideOut">مناسب داخل منزل</p>
                        <p onClick={() => OpenPlant(index)} className="plant-name">گل {item}</p>
                        <div className="options">
                            <i className="fa-light fa-sun-bright"></i>
                            <i className="fa-light fa-droplet"></i>
                            <i className="fa-light fa-temperature-full"></i>
                            <i className="fa-light fa-angle-right"></i>
                        </div>
                    </div>
                    <i /*onClick={() => AddPlant(index)}*/ className="fa-light fa-cart-plus buyIcon"></i><div className="des"></div>
                </div>
            ))}
            <i onClick={ClosePlant} className="fa-light fa-arrow-left ClosePlant" id="ClosePlant"></i>
        </div>
    )
}

export default PlantList