function dqs(name){
    var n = document.querySelectorAll(name);
    if(n.length === 0){
        return undefined;
    }else if(n.length === 1){
        return n[0];
    }else{
        return n;
    }
}

function iv(name){
    var el = dqs(name);
    if(el !== undefined){
        return el.value;
    }
    return undefined;
}

function sbmt(inputdata, url, func_name) {
    //inputdata = {"name": name, "email": email, "number": message, "_token": token, "token": token}
    //url = {.{ route('form_submit') }.}
    var request = new XMLHttpRequest();
    request.open("POST", url, true);
    request.setRequestHeader("Content-Type", "application/json");
    request.onreadystatechange = function () {
        if (request.readyState === 4 && request.status === 200) {
            //var jsonData = JSON.parse(request.response);
            func_name(request.response);
            //alert("Принято");
        }
    };
    var data = JSON.stringify(inputdata);
    request.send(data);
    request.onload = function() {
        //console.log(request.responseText);
    }
}

var scrollLock = true;
var scrollEventCatch = (event)=>{
    // console.log(event);
    if(scrollLock){
        if(event.deltaY > 0){
            // pasga
            activeOne = dqs("section.block.active");
            if(activeOne.nextElementSibling && activeOne.nextElementSibling.classList.contains("block")){
                activeOne.classList.remove("active");
                activeOne.classList.add("up");
                activeOne.nextElementSibling.classList.add("active");
                activeOne.nextElementSibling.classList.remove("down");
            }
        }else{
            // tepaga
            activeOne = dqs("section.block.active");
            if(activeOne.previousElementSibling && activeOne.previousElementSibling.classList.contains("block")){
                activeOne.classList.remove("active");
                activeOne.classList.add("down");
                activeOne.previousElementSibling.classList.add("active");
                activeOne.previousElementSibling.classList.remove("up");
            }
        }

        if(dqs("section.block.active").classList.contains("block--white")){
            dqs(".logo img").src = dqs(".logo img").dataset.black;
            dqs(".menu").classList.add("black");
        }else{
            dqs(".logo img").src = dqs(".logo img").dataset.white;
            dqs(".menu").classList.remove("black");
        }
        
        scrollLock = false;
        setTimeout(()=>{
            scrollLock = true;
        }, 1000);
    }
}

var blocks = dqs("section.block");
if(blocks && blocks.length){
    blocks.forEach(block => {
        block.classList.add("down");
    });
    blocks[0].classList.remove("down");
    blocks[0].classList.add("active");
    document.addEventListener("wheel", scrollEventCatch);
}

var menu = dqs(".menu__ins");
function flamie(){
    if(menu){
        setTimeout(() => {
            menu.classList.add("text");
        }, 8000);
        setTimeout(() => {
            menu.classList.remove("text");
            flamie();
        }, 10000);
    }    
}
flamie();

var burger = dqs(".menu");
if(burger){
    burger.addEventListener("click", ()=>{
        dqs(".mlist").classList.toggle("active");
        dqs(".menu__ins").classList.toggle("active");
        dqs(".menu__hid").classList.toggle("active");
    });
}


var tX = 0;
var tY = 0;
function touchControl(event){
    // console.log(event.touches[0].pageX);
    // console.log(event.touches[0].pageY);
    tX = event.changedTouches[0].screenX;
    tY = event.changedTouches[0].screenY;
    console.log(event.changedTouches[0].screenY);
    //console.log(event);
}
function touchControlEnd(event){
    //console.log(event);
    console.log(event.changedTouches[0].screenY);
    var ev = {};
    if(event.changedTouches[0].screenY - tY > 50){
        //tepaga
        ev.deltaY = -100;
        scrollEventCatch(ev);
    }else if(event.changedTouches[0].screenY - tY < -50){
        //pasga
        ev.deltaY = 100;
        scrollEventCatch(ev);
    }
}
document.addEventListener("touchstart", touchControl);
document.addEventListener("touchend", touchControlEnd);
// touches: TouchList
// 0: Touch
// clientX: 191
// clientY: 228
// force: 1
// identifier: 0
// pageX: 191
// pageY: 228
// radiusX: 11.5
// radiusY: 11.5
// rotationAngle: 0
// screenX: 951
// screenY: 366