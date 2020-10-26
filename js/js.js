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

var side = false;

function slide_left(){
    var act = dqs(".proj__name h1.active");
    var actp = dqs(".proj__img img.active");
    
    if(act.nextElementSibling){
        act.classList.remove("active");
        act.classList.add("back");
        act.nextElementSibling.classList.add("active");
        act.nextElementSibling.classList.remove("next");
    }
    if(actp.nextElementSibling){
        actp.classList.remove("active");
        actp.classList.add("back");
        actp.nextElementSibling.classList.add("active");
        actp.nextElementSibling.classList.remove("next");
    }

    if(dqs(".proj__name h1.active").nextElementSibling){
        side = false;
    }else{
        side = true;
    }
}

function slide_right(){
    var act = dqs(".proj__name h1.active");
    var actp = dqs(".proj__img img.active");
    
    if(act.previousElementSibling){
        act.classList.remove("active");
        act.classList.add("next");
        act.previousElementSibling.classList.add("active");
        act.previousElementSibling.classList.remove("back");
    }
    
    if(actp.previousElementSibling){
        actp.classList.remove("active");
        actp.classList.add("next");
        actp.previousElementSibling.classList.add("active");
        actp.previousElementSibling.classList.remove("back");
    }

    if(dqs(".proj__name h1.active").previousElementSibling){
        side = true;
    }else{
        side = false;
    }
}

if(dqs(".proj__name h1") && dqs(".proj__name h1").length){
    dqs(".proj__name h1")[0].classList.add("active");

    for (let i = 1; i < dqs(".proj__name h1").length; i++) {
        dqs(".proj__name h1")[i].classList.add("next");
    }
}

if(dqs(".proj__img img") && dqs(".proj__img img").length){
    dqs(".proj__img img")[0].classList.add("active");

    for (let i = 1; i < dqs(".proj__img img").length; i++) {
        dqs(".proj__img img")[i].classList.add("next");
    }
}

var intervalFunction = () => {
    if(side){
        slide_right();
    }else{
        slide_left();
    }
    
    dqs(".proj__redline--line").style.transition = "width 0s";
    dqs(".proj__redline--line").style.width = "0%";
    
    dqs(".proj__redline--line").style.transition = "width 4s";
    dqs(".proj__redline--line").style.width = "100%";
    timeout = setTimeout(() => {
        dqs(".proj__redline--line").style.transition = "width 0.2s";
        dqs(".proj__redline--line").style.width = "0%";
    }, 3800);
}

var inter = setInterval(intervalFunction, 4000);
var timeout = null;
function slide_left_btn(){
    clearInterval(inter);
    clearTimeout(timeout);
    
    inter = setInterval(intervalFunction, 4000);

    dqs(".proj__redline--line").style.transition = "width 0.2s";
    dqs(".proj__redline--line").style.width = "0%";

    setTimeout(() => {
        dqs(".proj__redline--line").style.transition = "width 3.8s";
        dqs(".proj__redline--line").style.width = "100%";
    }, 200);
    
    slide_left();
}

function slide_right_btn(){
    clearInterval(inter);
    clearTimeout(timeout);

    inter = setInterval(intervalFunction, 4000);

    dqs(".proj__redline--line").style.transition = "width 0.2s";
    dqs(".proj__redline--line").style.width = "0%";

    setTimeout(() => {
        dqs(".proj__redline--line").style.transition = "width 3.8s";
        dqs(".proj__redline--line").style.width = "100%";
    }, 200);
    
    slide_right();
}