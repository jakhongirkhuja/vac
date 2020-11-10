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















function f_1_1_1_1(_str, ){

}





var base = [
    {
        id : 1,
        name : "прямой",
        img : "/imgs/types/1pryamoy.svg",
        subels : [
            {
                subid : 1,
                subname : "прямоугольное сечения",
                subimg : "/imgs/subtypes/1_1.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "шинорейка",
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количество воздуховодов длиной 1250 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количество воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Длина шинорейки необходимых для данного участка:",
                                unit : "м.",
                                formula_id : 4
                            },
                            {
                                name : "Количество уголков необходимых для данного участка:",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного участка:",
                                unit : "м.",
                                formula_id : 6
                            },
                            {
                                name : "Количество струбцин необходимых для данного участка:",
                                unit : "шт.",
                                formula_id : 7
                            },
                            {
                                name : "Количество метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 8
                            },
                            {
                                name : "Масса воздуховодов данного участка:",
                                unit : "кг.",
                                formula_id : 9
                            },
                            {
                                name : "Итоговая масса воздуховодов данного участка (с учетом комплектующих):",
                                unit : "кг.",
                                formula_id : 10
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_name : "Толщина металла «с»",
                                input_options : [
                                    {
                                        value : 0.5,
                                        option_name : "0.5"
                                    },
                                    {
                                        value : 0.6,
                                        option_name : "0.6"
                                    },
                                    {
                                        value : 0.7,
                                        option_name : "0.7"
                                    },
                                    {
                                        value : 0.8,
                                        option_name : "0.8"
                                    },
                                    {
                                        value : 0.9,
                                        option_name : "0.9"
                                    },
                                    {
                                        value : 1.0,
                                        option_name : "1.0"
                                    },
                                    {
                                        value : 1.1,
                                        option_name : "1.1"
                                    },
                                    {
                                        value : 1.2,
                                        option_name : "1.2"
                                    }
                                ]
                            },
                            {
                                input_id : 2,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Высота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количество «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "TDF",
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количество воздуховодов длиной 1150 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количество воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количество уголков необходимых для данного участка:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного участка:",
                                unit : "м.",
                                formula_id : 5
                            },
                            {
                                name : "Количество струбцин необходимых для данного участка:",
                                unit : "шт.",
                                formula_id : 6
                            },
                            {
                                name : "Количество метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 7
                            },
                            {
                                name : "Масса воздуховодов данного участка:",
                                unit : "кг.",
                                formula_id : 8
                            },
                            {
                                name : "Итоговая масса воздуховодов данного участка (с учетом комплектующих):",
                                unit : "кг.",
                                formula_id : 9
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_name : "Толщина металла «с»",
                                input_options : [
                                    {
                                        value : 0.5,
                                        option_name : "0.5"
                                    },
                                    {
                                        value : 0.6,
                                        option_name : "0.6"
                                    },
                                    {
                                        value : 0.7,
                                        option_name : "0.7"
                                    },
                                    {
                                        value : 0.8,
                                        option_name : "0.8"
                                    },
                                    {
                                        value : 0.9,
                                        option_name : "0.9"
                                    },
                                    {
                                        value : 1.0,
                                        option_name : "1.0"
                                    },
                                    {
                                        value : 1.1,
                                        option_name : "1.1"
                                    },
                                    {
                                        value : 1.2,
                                        option_name : "1.2"
                                    }
                                ]
                            },
                            {
                                input_id : 2,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Высота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количество «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "рейка",
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количество воздуховодов длиной 1230 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количество воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Длина рейки необходимых для данного участка:",
                                unit : "м.",
                                formula_id : 4
                            },
                            {
                                name : "Количество метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Масса воздуховодов данного участка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая масса воздуховодов данного участка (с учетом комплектующих):",
                                unit : "кг.",
                                formula_id : 7
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_name : "Толщина металла «с»",
                                input_options : [
                                    {
                                        value : 0.5,
                                        option_name : "0.5"
                                    },
                                    {
                                        value : 0.6,
                                        option_name : "0.6"
                                    },
                                    {
                                        value : 0.7,
                                        option_name : "0.7"
                                    },
                                    {
                                        value : 0.8,
                                        option_name : "0.8"
                                    },
                                    {
                                        value : 0.9,
                                        option_name : "0.9"
                                    },
                                    {
                                        value : 1.0,
                                        option_name : "1.0"
                                    },
                                    {
                                        value : 1.1,
                                        option_name : "1.1"
                                    },
                                    {
                                        value : 1.2,
                                        option_name : "1.2"
                                    }
                                ]
                            },
                            {
                                input_id : 2,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Высота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количество «N»",
                            }
                        ]
                    },
                ]
            },
        ]

    }
];



if(dqs(".calc")){
    dqs(".logo img").src = dqs(".logo img").dataset.black;
    dqs(".menu").classList.add("black");
}
if(dqs(".calc__params--radio") && dqs(".calc__params--radio").length){
    dqs(".calc__params--radio")[0].classList.add("active");
}
if(dqs(".calc__choose--els .el") && dqs(".calc__choose--els .el").length){
    dqs(".calc__choose--els .el")[0].classList.add("active");
}
if(dqs(".types__el") && dqs(".types__el").length){
    dqs(".types__el")[0].classList.add("active");
}
function makeitactive(a){
    dqs(".types__el.active").classList.remove("active");
    a.classList.add("active");

    //inputdata = {"name": name, "email": email, "number": message, "_token": token, "token": token}
    //url = {.{ route('form_submit') }.}

    // var inputs = {};
    // inputs.id2 = a.dataset.id;
    // sbmt(inputdata, url, console.log);

}
function makethatactive(a){
    dqs(".calc__params--radio.active").classList.remove("active");
    a.classList.add("active");
}
function focuser(a){
    if(dqs(".calc__drb.active")){
        dqs(".calc__drb.active").classList.remove("active");
    }
    a.parentElement.parentElement.classList.add("active");
}
function  makethisactive(a){
    dqs(".calc__choose--els .el.active").classList.remove("active");
    a.classList.add("active");

    //a.dataset.id

    // var inputs = {};
    // inputs.id = a.dataset.id;
    // sbmt(inputdata, url, console.log);
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
    tX = event.changedTouches[0].screenX;
    tY = event.changedTouches[0].screenY;
}
function touchControlEnd(event){
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
if(blocks && blocks.length){
    document.addEventListener("touchstart", touchControl);
    document.addEventListener("touchend", touchControlEnd);
}


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

    dqs(".proj__redline--line").classList.remove("active");
    setTimeout(() => {
        dqs(".proj__redline--line").classList.add("active");
    }, 200);
}

if(dqs(".proj")){
    var inter = setInterval(intervalFunction, 4000);
}

var timeout = null;
function slide_left_btn(){
    clearInterval(inter);
    clearTimeout(timeout);
    
    inter = setInterval(intervalFunction, 4000);

    dqs(".proj__redline--line").classList.remove("active");
    setTimeout(() => {
        dqs(".proj__redline--line").classList.add("active");
    }, 200);
    
    slide_left();
}

function slide_right_btn(){
    clearInterval(inter);
    clearTimeout(timeout);

    inter = setInterval(intervalFunction, 4000);


    dqs(".proj__redline--line").classList.remove("active");
    setTimeout(() => {
        dqs(".proj__redline--line").classList.add("active");
    }, 200);
    
    slide_right();
}

window.onload = function(){
    dqs(".prel").classList.remove("active");
    setTimeout(()=>{
        dqs(".prel__hid--text").innerHTML = dqs(".prel__hid--text").dataset.src;
    },1000);
    
}
