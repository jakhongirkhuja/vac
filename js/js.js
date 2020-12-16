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
    request.open("GET", url, true);
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

var base1;

function getbase(data){
    base1 = data;
    console.log(base1);
}

//sbmt({}, "http://vac.spacelabs.uz/getdata", getbase);

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
        }, 2000);
    }
}













function v(def){
    if(dqs("#input_" + def)){
        return parseFloat(dqs("#input_" + def).value);
    }else{
        return formulas(def);
    }
}


function clear_class(name){
    var clear = dqs(name);
    if(clear.length){
        clear.forEach(cl => {
            cl.outerHTML = "";
        });
    }else{
        clear.innerHTML = "";
    }
    
}


function make_inputs(t,y,u){
    var inputs = base[t-1].subels[y-1].select_type[u-1].inputs
    
    clear_class(".calc__drb");

    inputs.forEach(i => {
        if(i.input_type === "select"){
            var options = "";
            i.input_options.forEach(j => {
                if(i.input_default === j.value){
                    options += `
                        <option selected value='${j.value}'>${j.option_name}</option>
                    `
                }else{
                    options += `
                        <option value='${j.value}'>${j.option_name}</option>
                    `
                }       
            });
            dqs(".calc__params").innerHTML += 
            `
            <div class="calc__drb">
                <div class="calc__params--name">
                    ${i.input_name}:
                </div>
                <div class="calc__params--input">
                    <select onchange="chf()" onfocus="focuser(this);" id="input_${i.input_def}">
                        ${options}
                    </select>
                    <div class="unit">
                        ${i.input_unit}
                    </div>
                </div>
            </div>
            `;
        }else if(i.input_type === "number"){
            dqs(".calc__params").innerHTML += 
            `
            <div class="calc__drb">
                <div class="calc__params--name">
                    ${i.input_name}:
                </div>
                <div class="calc__params--input">
                    <input value="${i.input_default}" onchange="chf()" type="number" onfocus="focuser(this);" id="input_${i.input_def}">
                    <div class="unit">
                        ${i.input_unit}
                    </div>
                </div>
            </div>
            `;
        }
    });
}



function make_results(t,y,u){

    var rows = dqs(".calc__calcs--rows");
    var funs = base[t-1].subels[y-1].select_type[u-1].formulas;
    
    clear_class(".calc__calcs--row");

    funs.forEach(fun => {
        var matches = [
            ...fun.name.matchAll(/{[a-z,A-Z,0-9]*}/g),
            ...fun.unit.matchAll(/{[a-z,A-Z,0-9]*}/g)
        ];
        var htmlelement = `
            <div class="calc__calcs--row">
                <div class="rowname">
                    ${fun.name}
                </div>
                <div class="number">
                    ${fun.unit} 
                </div>
            </div>
        `;
        var zero = true;
        matches.forEach(match => {
            var iden = match[0].substring(1, match[0].length - 1);
            var res = parseFloat(v(iden)).toFixed(1);
            if(res < 0 || isNaN(res)){
                htmlelement = htmlelement.replace(match[0], 0);
                zero = false;
            }else{
                htmlelement = htmlelement.replace(match[0], res);
            }
        });
        if(zero){
            rows.innerHTML += htmlelement;
        }
    });
}



var sqr = (a)=>{
    return Math.pow(a, 2);
}
var sqrt = (a)=>{
    return Math.pow(a, 1/2);
}
var pi = Math.PI;
var sin = Math.sin;
var base = [
    {
        id : 1,
        name : "прямой",
        img : "/imgs/types/1pryamoy.svg",
        subels : [
            {
                subid : 1,
                subname : "прямоугольное cечения",
                subimg : "/imgs/subtypes/1_1.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "шинорейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ return 0; } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return {L2}/2;'
                            },
                            {
                                name : "N4",
                                def: 'return 2*({N1} + {N2}) * ( (parseInt( ({A}-250)/250) ) + (parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2.",
                                formula_id : 1,
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "{N1} шт.",
                                formula_id : 2,
                            },
                            {
                                name : "Количеcтво воздуховодов длиной {L1} мм:",
                                unit : "{N2} шт.",
                                formula_id : 3,
                            },
                            {
                                name : "Длина шинорейки необходимых для данного учаcтка:",
                                unit : "{L2}м.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N3} шт.",
                                formula_id : 5
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L3} м.",
                                formula_id : 6
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N4} шт.",
                                formula_id : 7
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N5} шт.",
                                formula_id : 8
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг.",
                                formula_id : 9
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг.",
                                formula_id : 10
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },

                    {
                        select_id : 2,
                        select_name : "TDF",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1150)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - (1150*{N1})*{N};'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return {L2} / 2;'
                            },
                            {
                                name : "N4",
                                def: 'return 2*({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({A} + {B} + 0.04) * {L} * ({N1} + {N2}) * 8.25 * {c};'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {N3}*0.026 + {N4}*0.1 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь: ",
                                unit : "{S} м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1150 мм:",
                                unit : "{N1} шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной {L1} мм:",
                                unit : "{N2} шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N3} шт.",
                                formula_id : 4
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L3} м.",
                                formula_id : 5
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N4} шт.",
                                formula_id : 6
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N5} шт.",
                                formula_id : 7
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг.",
                                formula_id : 8
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг.",
                                formula_id : 9
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "рейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1230)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return ({L} - ({N1} * 1230))*{N};'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ return 0; } else{ return {N}; };'
                            },
                            {
                                name : "N5",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+4*{N}*{L}+20*({N1} + {N2}))*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*{c}*8.25*40;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1230 мм:",
                                unit : "{N1} шт."
                            },
                            {
                                name : "Количеcтво воздуховодов длиной {L1} мм:",
                                unit : "{N2} шт."
                            },
                            {
                                name : "Длина шинорейки необходимых для данного учаcтка:",
                                unit : "{L2}м."
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N5} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                ]
            },
            {
                subid : 2,
                subname : "круглого cечения",
                subimg : "/imgs/subtypes/1_2.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "Прямо-шовный флянец",
                        defs : [
                            {
                                name : "S",
                                def: 'return pi*{D}*{L}*{N};'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return ({L} - ({N1} * 1250))*{N};'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "N3",
                                def: 'return 2*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return {N3}*pi*{D}/210;'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+4*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {N3}*pi*{D}*1.463/1000 + {N4}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "{N1} шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной {L1} мм:",
                                unit : "{N2} шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво фланцев диаметром {D} мм:",
                                unit : "{N3} шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N4} шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг.",
                                formula_id : 7
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_name : "Толщина металла «c»",
                                input_def : "c",
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
                                input_name : "Диаметр «D»:",
                                input_def : "D"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                                input_def : "L"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количеcтво «N»",
                                input_def : "N"
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "Прямо-шовный ниппель",
                        defs : [
                            {
                                name : "S",
                                def: 'return pi*{D}*{L}*{N};'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return ({L} - ({N1} * 1250))*{N};'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "N3",
                                def: 'return {N1} + {N2};'
                            },
                            {
                                name : "N4",
                                def: 'return {N3}*pi*{D}/210;'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+4*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {N3}*pi*{D}*200*{c}*8.25 + {N4}*0.003;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "{N1} шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной {L1} мм:",
                                unit : "{N2} шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво фланцев диаметром {D} мм:",
                                unit : "{N3} шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количество само-резов необходимых для данного участка:",
                                unit : "{N4} шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг.",
                                formula_id : 7
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_name : "Толщина металла «c»",
                                input_def : "c",
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
                                input_name : "Диаметр «D»:",
                                input_def : "D"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                                input_def : "L"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количеcтво «N»",
                                input_def : "N"
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "cпиральный ниппель",
                        defs : [
                            {
                                name : "S",
                                def: 'return pi*{D}*{L}*{N};'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/{L1})*{N};'
                            },
                            {
                                name : "L2",
                                def: 'return ({L} - ({N1} * {L1}))*{N};'
                            },
                            {
                                name : "N2",
                                def: 'if( {L2} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "N3",
                                def: 'return {N}*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return {N3}*pi*{D}/80;'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {N3}*pi*{D}*200*{c}*8.25 + {N4}*0.003;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной {L1} мм:",
                                unit : "{N1} шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной {L2} мм:",
                                unit : "{N2} шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво фланцев диаметром {D} мм:",
                                unit : "{N3} шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количество само-резов необходимых для данного участка:",
                                unit : "{N4} шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг.",
                                formula_id : 7
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_name : "Толщина металла «c»",
                                input_def : "c",
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
                                input_name : "Диаметр «D»:",
                                input_def : "D"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 1250,
                                input_unit : "мм.",
                                input_name : "Длина 1 единицы воздуховода «L1»",
                                input_def : "L1"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                                input_def : "L"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количеcтво «N»",
                                input_def : "N"
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        id : 2,
        name : "отвод",
        img : "/imgs/types/2otvod.svg",
        subels : [
            {
                subid : 1,
                subname : "1 типа прямоугольное cечения",
                subimg : "/imgs/subtypes/2_1.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "шинорейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return (({a}/360)*(pi*sqr(({A}+{r}),2)-pi*sqr({r},2)+2*pi*({A}+{r})*{B}+2*pi*{r}*{B} )+200*({A}+{B}))*({N});'
                            },
                            {
                                name : "L1",
                                def: 'return ({A}+{B})*4*{N};'
                            },
                            {
                                name : "N1",
                                def: 'return 8*{N};'
                            },
                            {
                                name : "L2",
                                def: 'return {L1}/2;'
                            },
                            {
                                name : "N2",
                                def: 'return 4*{N}*(parseInt(({A}-250)/250)+parseInt(({B}-250)/250));'
                            },
                            {
                                name : "N3",
                                def: 'return {N2};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14*{N};'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L1}*0.637 + {N2}*0.05 + {N3}*0.026;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Длина шинорейки необходимых для данного учаcтка:",
                                unit : "{L1}м."
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N1} шт."
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L2} м."
                            },
                            {
                                name : "Количество метизов (болтов, гаек и шайб):",
                                unit : "{N3} м."
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N2} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Длина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Ширина «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "o.",
                                input_def : "a",
                                input_name : "Угол поворота «a»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "r",
                                input_name : "Внутренний радиуc «r»",
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "TDF",
                        defs : [
                            {
                                name : "S",
                                def: 'return (({a}/360)*(pi*sqr(({A}+{r}),2)-pi*sqr({r},2)+2*pi*({A}+{r})*{B}+2*pi*{r}*{B} )+200*({A}+{B}))*({N});'
                            },
                            {
                                name : "N1",
                                def: 'return 8*{N};'
                            },
                            {
                                name : "L2",
                                def: 'return ({A}+{B})*4*{N}/2;'
                            },
                            {
                                name : "N2",
                                def: 'return 4*{N}*(parseInt(({A}-250)/250)+parseInt(({B}-250)/250));'
                            },
                            {
                                name : "N3",
                                def: 'return {N2};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14*{N};'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + 0.04*{N}*( {A}+{B} ) + {N2}*0.05 + {N3}*0.026;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N1} шт."
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L2} м."
                            },
                            {
                                name : "Количество метизов (болтов, гаек и шайб):",
                                unit : "{N3} м."
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N2} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Длина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Ширина «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "o.",
                                input_def : "a",
                                input_name : "Угол поворота «a»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "r",
                                input_name : "Внутренний радиуc «r»",
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "рейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return (({a}/360)*(pi*sqr(({A}+{r}),2)-pi*sqr({r},2)+2*pi*({A}+{r})*{B}+2*pi*{r}*{B} )+200*({A}+{B}))*({N});'
                            },
                            {
                                name : "L2",
                                def: 'return ({A}+{B})*2*{N};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14*{N};'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*{c}*8.25*40;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Длина рейки необходимой для данного участка:",
                                unit : "{L2} м."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Длина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Ширина «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "o.",
                                input_def : "a",
                                input_name : "Угол поворота «a»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "r",
                                input_name : "Внутренний радиуc «r»",
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                ]
            },
            {
                subid : 2,
                subname : "2 типа прямоугольное cечения",
                subimg : "/imgs/subtypes/2_2.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "шинорейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return {N}*({a}/720*((pi*(sqr({A} + {r},2))-pi*sqr({r},2))+2*pi*({A} + {r})*{B}+2*pi*{r}*{B})+100*({A}+{B})+{a}/720*((pi*(sqr({A2} + {r},2))-pi*sqr({r},2))+2*pi*({A2} + {r})*{B2}+2*pi*{r}*{B2})+100*({A2}+{B2}));'
                            },
                            {
                                name : "L1",
                                def: 'return ({A}+{B}+{A2}+{B2})*2*{N};'
                            },
                            {
                                name : "N1",
                                def: 'return 8*{N};'
                            },
                            {
                                name : "L2",
                                def: 'return {L1}/2;'
                            },
                            {
                                name : "N2",
                                def: 'return 2*{N}*(parseInt(({A}-250)/250)+parseInt(({B}-250)/250)+parseInt(({A2}-250)/250)+parseInt(({B2}-250)/250));'
                            },
                            {
                                name : "N3",
                                def: 'return {N2};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14*{N};'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L1}*0.637 + {N2}*0.05 + {N3}*0.026;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Длина шинорейки необходимых для данного учаcтка:",
                                unit : "{L1}м."
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N1} шт."
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L2} м."
                            },
                            {
                                name : "Количество метизов (болтов, гаек и шайб):",
                                unit : "{N3} м."
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N2} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Длина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "A1",
                                input_name : "Длина «A1»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Ширина «B»"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B1",
                                input_name : "Ширина «B1»"
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "o.",
                                input_def : "a",
                                input_name : "Угол поворота «a»",
                            },
                            {
                                input_id : 7,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "r",
                                input_name : "Внутренний радиуc «r»",
                            },
                            {
                                input_id : 8,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "TDF",
                        defs : [
                            {
                                name : "S",
                                def: 'return {N}*({a}/720*((pi*(sqr({A} + {r},2))-pi*sqr({r},2))+2*pi*({A} + {r})*{B}+2*pi*{r}*{B})+100*({A}+{B})+{a}/720*((pi*(sqr({A2} + {r},2))-pi*sqr({r},2))+2*pi*({A2} + {r})*{B2}+2*pi*{r}*{B2})+100*({A2}+{B2}));'
                            },
                            {
                                name : "L1",
                                def: 'return ({A}+{B}+{A2}+{B2})*2*{N};'
                            },
                            {
                                name : "N1",
                                def: 'return 8*{N};'
                            },
                            {
                                name : "L2",
                                def: 'return {L1}/2;'
                            },
                            {
                                name : "N2",
                                def: 'return 2*{N}*(parseInt(({A}-250)/250)+parseInt(({B}-250)/250)+parseInt(({A2}-250)/250)+parseInt(({B2}-250)/250));'
                            },
                            {
                                name : "N3",
                                def: 'return {N2};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14*{N};'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + 0.02*{N}({A}+{B}+{A2}+{B2}) + {N2}*0.05 + {N3}*0.026;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N1} шт."
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного участка:",
                                unit : "{L2} м."
                            },
                            {
                                name : "Количество метизов (болтов, гаек и шайб):",
                                unit : "{N3} м."
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N2} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Длина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "A1",
                                input_name : "Длина «A1»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Ширина «B»"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B1",
                                input_name : "Ширина «B1»"
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "o.",
                                input_def : "a",
                                input_name : "Угол поворота «a»",
                            },
                            {
                                input_id : 7,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "r",
                                input_name : "Внутренний радиуc «r»",
                            },
                            {
                                input_id : 8,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "рейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return {N}*({a}/720*((pi*(sqr({A} + {r},2))-pi*sqr({r},2))+2*pi*({A} + {r})*{B}+2*pi*{r}*{B})+100*({A}+{B})+{a}/720*((pi*(sqr({A2} + {r},2))-pi*sqr({r},2))+2*pi*({A2} + {r})*{B2}+2*pi*{r}*{B2})+100*({A2}+{B2}));'
                            },
                            {
                                name : "L1",
                                def: 'return ({A}+{B}+{A2}+{B2})*2*{N};'
                            },
                            {
                                name : "L2",
                                def: 'return {L1}/2;'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14*{N};'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*{c}*8.25*40;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Длина рейки необходимой для данного участка:",
                                unit : "{L2} м."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Длина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "A1",
                                input_name : "Длина «A1»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Ширина «B»"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B1",
                                input_name : "Ширина «B1»"
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "o.",
                                input_def : "a",
                                input_name : "Угол поворота «a»",
                            },
                            {
                                input_id : 7,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "r",
                                input_name : "Внутренний радиуc «r»",
                            },
                            {
                                input_id : 8,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                ]
            },
            {
                subid : 3,
                subname : "3 типа круглого сечения",
                subimg : "/imgs/subtypes/2_3.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "фланец",
                        defs : [
                            {
                                name : "S",
                                def : 'return {N}*(3*pi*{D}*sin( ({a}*pi)/(6*180) )*(2*{r}+{D})+2*pi*{D}*150);',
                            },
                            {
                                name : "N3",
                                def: 'return 2*{N};'
                            },
                            {
                                name : "N4",
                                def: 'return parseInt(pi*{D}/210)*{N};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {N3}*pi*{D}*1.463/1000 + {N4}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Количество фланцев диаметром {D} мм:",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Количество метизов (болтов, гаек и шайб):",
                                unit : "{N4} м."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "D",
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "o.",
                                input_def : "a",
                                input_name : "Угол поворота «a»:"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "r",
                                input_name : "Внутренний радиус «r»:"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "мм.",
                                input_def : "N",
                                input_name : "Количество «N»:"
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "ниппель",
                        defs : [
                            {
                                name : "S",
                                def : 'return {N}*(3*pi*{D}*sin( ({a}*pi)/(6*180) )*(2*{r}+{D})+2*pi*{D}*150);',
                            },
                            {
                                name : "N3",
                                def: 'return 2*{N};'
                            },
                            {
                                name : "N4",
                                def: 'return {N3}*pi*{D}/80;'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {N3}*pi*{D}*1.463/1000 + {N4}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Количество ниппелей диаметром {D} мм:",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Количество само-резов необходимых для данного участка:",
                                unit : "{N4} м."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "D",
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "o.",
                                input_def : "a",
                                input_name : "Угол поворота «a»:"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "r",
                                input_name : "Внутренний радиус «r»:"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "мм.",
                                input_def : "N",
                                input_name : "Количество «N»:"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id : 3,
        name : "переход",
        img : "/imgs/types/3perexod.svg",
        subels : [
            {
                subid : 1,
                subname : "1 типа прямоугольное cечения",
                subimg : "/imgs/subtypes/3_1.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "шинорейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return {N}*(({A} + {B} + {A1} + {B1})*sqrt( sqr({L}-100) + sqr(({A}-{A1})/2) + sqr(({B}-{B1})/2) )+100*({A} + {B} + {A1} + {B1}));'
                            },
                            {
                                name : "L2",
                                def: 'return 2*({A} + {B} + {A1} + {B1})*{N};'
                            },
                            {
                                name : "N3",
                                def: 'return 8*{N};'
                            },
                            {
                                name : "L3",
                                def: 'return {L2}/2;'
                            },
                            {
                                name : "N4",
                                def: 'return {N} * ( parseInt(({A}-250)/250) + parseInt(({B}-250)/250) + parseInt(({A1}-250)/250) + parseInt(({B1}-250)/250) )  ;'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Длина шинорейки необходимых для данного учаcтка:",
                                unit : "{L2}м."
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L3} м."
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N4} шт."
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N5} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            }
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "A1",
                                input_name : "Ширина «A1»"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B1",
                                input_name : "Выcота «B1»"
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 7,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "TDF",
                        defs : [
                            {
                                name : "S",
                                def: 'return {N}*(({A} + {B} + {A1} + {B1})*sqrt( sqr({L}-100) + sqr(({A}-{A1})/2) + sqr(({B}-{B1})/2) )+100*({A} + {B} + {A1} + {B1}));'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B} + {A1} + {B1})*{N};'
                            },
                            {
                                name : "N3",
                                def: 'return 8*{N};'
                            },
                            {
                                name : "L3",
                                def: 'return {L2}/2;'
                            },
                            {
                                name : "N4",
                                def: 'return {N} * ( parseInt(({A}-250)/250) + parseInt(({B}-250)/250) + parseInt(({A1}-250)/250) + parseInt(({B1}-250)/250) )  ;'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L3} м."
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N4} шт."
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N5} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            }
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "A1",
                                input_name : "Ширина «A1»"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B1",
                                input_name : "Выcота «B1»"
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 7,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "рейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return {N}*(({A} + {B} + {A1} + {B1})*sqrt( sqr({L}-100) + sqr(({A}-{A1})/2) + sqr(({B}-{B1})/2) )+100*({A} + {B} + {A1} + {B1}));'
                            },
                            {
                                name : "L1",
                                def: 'return ({A} + {B} + {A1} + {B1})*{N};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L1}*{c}*8.25*40;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Длина рейки необходимая для данного участка:",
                                unit : "{L1} м."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            }
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "A1",
                                input_name : "Ширина «A1»"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B1",
                                input_name : "Выcота «B1»"
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 7,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    }
                ]
            },
            {
                subid : 2,
                subname : "2 типа прямоугольное cечения",
                subimg : "/imgs/subtypes/3_2.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "шинорейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return {N}*(({A} + {B} + {A1} + {B1})*sqrt( sqr({L}-100) + sqr(({A}-{A1})/2) + sqr(({B}-{B1})/2) )+100*({A} + {B} + {A1} + {B1}));'
                            },
                            {
                                name : "L2",
                                def: 'return 2*({A} + {B} + {A1} + {B1})*{N};'
                            },
                            {
                                name : "N3",
                                def: 'return 8*{N};'
                            },
                            {
                                name : "L3",
                                def: 'return {L2}/2;'
                            },
                            {
                                name : "N4",
                                def: 'return {N} * ( parseInt(({A}-250)/250) + parseInt(({B}-250)/250) + parseInt(({A1}-250)/250) + parseInt(({B1}-250)/250) )  ;'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Длина шинорейки необходимых для данного учаcтка:",
                                unit : "{L2}м."
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L3} м."
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N4} шт."
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N5} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            }
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "A1",
                                input_name : "Ширина «A1»"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B1",
                                input_name : "Выcота «B1»"
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 7,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "TDF",
                        defs : [
                            {
                                name : "S",
                                def: 'return {N}*(({A} + {B} + {A1} + {B1})*sqrt( sqr({L}-100) + sqr(({A}-{A1})/2) + sqr(({B}-{B1})/2) )+100*({A} + {B} + {A1} + {B1}));'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B} + {A1} + {B1})*{N};'
                            },
                            {
                                name : "N3",
                                def: 'return 8*{N};'
                            },
                            {
                                name : "L3",
                                def: 'return {L2}/2;'
                            },
                            {
                                name : "N4",
                                def: 'return {N} * ( parseInt(({A}-250)/250) + parseInt(({B}-250)/250) + parseInt(({A1}-250)/250) + parseInt(({B1}-250)/250) )  ;'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L3} м."
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N4} шт."
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N5} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            }
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "A1",
                                input_name : "Ширина «A1»"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B1",
                                input_name : "Выcота «B1»"
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 7,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "рейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return {N}*(({A} + {B} + {A1} + {B1})*sqrt( sqr({L}-100) + sqr(({A}-{A1})/2) + sqr(({B}-{B1})/2) )+100*({A} + {B} + {A1} + {B1}));'
                            },
                            {
                                name : "L1",
                                def: 'return ({A} + {B} + {A1} + {B1})*{N};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L1}*{c}*8.25*40;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Длина рейки необходимая для данного участка:",
                                unit : "{L1} м."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            }
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "A1",
                                input_name : "Ширина «A1»"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B1",
                                input_name : "Выcота «B1»"
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 7,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                ]
            },
            {
                subid : 3,
                subname : "3 типа круглого сечения",
                subimg : "/imgs/subtypes/3_3.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "фланец",
                        defs : [
                            {
                                name : "S",
                                def: 'return {N}*(50*pi*({D}+{D1}) + pi*({L}-100)*sqrt(sqr({L}-100) + (sqr({D})-sqr({D1}))/4));'
                            },
                            {
                                name : "N3",
                                def: 'return {N};'
                            },
                            {
                                name : "N4",
                                def: 'return {N} * parseInt(pi*({D}+{D1})/210);'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {N3}*pi*({D}+{D1})*1.463/1000 + {N4}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Количество фланцев диаметром {D} мм",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Количество фланцев диаметром {D1} мм",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N4} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            }
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "D",
                                input_name : "Диаметр «D»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "D1",
                                input_name : "Диаметр «D1»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длина «L»"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    {
                        select_id : 2,
                        select_name : "ниппель",
                        defs : [
                            {
                                name : "S",
                                def: 'return {N}*(50*pi*({D}+{D1}) + pi*({L}-100)*sqrt(sqr({L}-100) + (sqr({D})-sqr({D1}))/4));'
                            },
                            {
                                name : "N3",
                                def: 'return {N};'
                            },
                            {
                                name : "N4",
                                def: 'return {N} * parseInt(pi*({D}+{D1})/80);'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {N3}*pi*({D}+{D1})*200*{c}*8.25*1.14 + {N4}*0.003;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Количество ниппелей диаметром {D} мм",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Количество ниппелей диаметром {D1} мм",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Количество само-резов необходимых для данного участка",
                                unit : "{N4} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих)",
                                unit : "{m2} кг."
                            }
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "D",
                                input_name : "Диаметр «D»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "D1",
                                input_name : "Диаметр «D1»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длина «L»"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    }
                ]
            },
            {
                subid : 4,
                subname : "4 типа круглого сечения",
                subimg : "/imgs/subtypes/3_4.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "фланец",
                        defs : [
                            {
                                name : "S",
                                def: 'return {N}*(50*pi*({D}+{d}) + pi*({L}-100)*sqrt(sqr({L}-100) + (sqr({D})-sqr({d}))/4));'
                            },
                            {
                                name : "N3",
                                def: 'return {N};'
                            },
                            {
                                name : "N4",
                                def: 'return {N} * parseInt(pi*({D}+{d})/210);'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {N3}*pi*({D}+{d})*1.463/1000 + {N4}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Количество фланцев диаметром {D} мм",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Количество фланцев диаметром {d} мм",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N4} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            }
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "D",
                                input_name : "Диаметр «D»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "d",
                                input_name : "Диаметр «d»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длина «L»"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    {
                        select_id : 2,
                        select_name : "ниппель",
                        defs : [
                            {
                                name : "S",
                                def: 'return {N}*(50*pi*({D}+{d}) + pi*({L}-100)*sqrt(sqr({L}-100) + (sqr({D})-sqr({d}))/4));'
                            },
                            {
                                name : "N3",
                                def: 'return {N};'
                            },
                            {
                                name : "N4",
                                def: 'return {N} * parseInt(pi*({D}+{d})/80);'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {N3}*pi*({D}+{d})*200*{c}*8.25*1.14 + {N4}*0.003;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Количество ниппелей диаметром {D} мм",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Количество ниппелей диаметром {d} мм",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Количество само-резов необходимых для данного участка",
                                unit : "{N4} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих)",
                                unit : "{m2} кг."
                            }
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "D",
                                input_name : "Диаметр «D»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "d",
                                input_name : "Диаметр «d»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длина «L»"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    }
                ]
            },
            {
                subid : 5,
                subname : "5 типа круглого сечения",
                subimg : "/imgs/subtypes/3_5.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "шинорейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return {N}*( 2*{L}*({A}+{B}) - {L}*({A}+{B}-(pi*{D})/2) + 100*({A}+{B}) + 25*pi*{D} );'
                            },
                            {
                                name : "L2",
                                def: 'return 2*({A} + {B})*{N};'
                            },
                            {
                                name : "N3",
                                def: 'return 4*{N};'
                            },
                            {
                                name : "L3",
                                def: 'return {L2}/2;'
                            },
                            {
                                name : "N4",
                                def: 'return {N} * ( parseInt(({A}-250)/250) + parseInt(({B}-250)/250) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Длина шинорейки необходимых для данного учаcтка:",
                                unit : "{L2}м."
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L3} м."
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N4} шт."
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N5} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            }
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "D",
                                input_name : "Диаметр «D»"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "TDF",
                        defs : [
                            {
                                name : "S",
                                def: 'return {N}*( 2*{L}*({A}+{B}) - {L}*({A}+{B}-(pi*{D})/2) + 100*({A}+{B}) + 25*pi*{D} );'
                            },
                            {
                                name : "N3",
                                def: 'return 4*{N};'
                            },
                            {
                                name : "L3",
                                def: 'return ({A}+{B})*{N};'
                            },
                            {
                                name : "N4",
                                def: 'return {N} * ( parseInt(({A}-250)/250) + parseInt(({B}-250)/250) )  ;'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L3} м."
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N4} шт."
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N5} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            }
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "D",
                                input_name : "Диаметр «D»"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "рейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return {N}*( 2*{L}*({A}+{B}) - {L}*({A}+{B}-(pi*{D})/2) + 100*({A}+{B}) + 25*pi*{D} );'
                            },
                            {
                                name : "L1",
                                def: 'return ({A} + {B})*2*{N};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L1}*{c}*8.25*40;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Длина рейки необходимая для данного участка:",
                                unit : "{L1} м."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            }
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "D",
                                input_name : "Диаметр «D»"
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id : 4,
        name : "тройник",
        img : "/imgs/types/4traynik.svg",
        subels : [
            {
                subid : 1,
                subname : "1 типа прямоугольное cечения",
                subimg : "/imgs/subtypes/4_1.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "шинорейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*(({A}+{B})*{L} + ({a}+{b})*{h} )*{N})/1000000;'
                            },
                            {
                                name : "L2",
                                def: 'return 2*{N}*( 2*({A}+{B})+{a}+{b} );'
                            },
                            {
                                name : "N3",
                                def: 'return 12*{N};'
                            },
                            {
                                name : "L3",
                                def: 'return {L2}/2;'
                            },
                            {
                                name : "N4",
                                def: 'return {N}*(    parseInt(({A}-250)/250) + parseInt(({B}-250)/250) + parseInt(({a}-250)/250)/2 + parseInt(({b}-250)/250)/2    );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Длина шинорейки необходимых для данного учаcтка:",
                                unit : "{L2}м."
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L3} м."
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N4} шт."
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N5} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "a",
                                input_name : "Ширина «a»"
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "b",
                                input_name : "Длины «b»",
                            },
                            {
                                input_id : 7,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "h",
                                input_name : "Выcота «h»"
                            },
                            {
                                input_id : 8,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "TDF",
                        defs : [
                            {
                                name : "S",
                                def: 'return (( ({A}+{B})*{L}*2 + ({a}+{b})*{h}*2 - {a}*{b} )*{N})/1000000;'
                            },
                            {
                                name : "N3",
                                def: 'return 12*{N};'
                            },
                            {
                                name : "L3",
                                def: 'return ({A}+{B}+{a}/2+{b}/2)*2*{N};'
                            },
                            {
                                name : "N4",
                                def: 'return {N}*(    parseInt(({A}-250)/250) + parseInt(({B}-250)/250) + parseInt(({a}-250)/250)/2 + parseInt(({b}-250)/250)/2    );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + (2*{A}+2*{B}+{a}+{b})*0.05*{c}*8.25*1.14 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N3} шт."
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L3} м."
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N4} шт."
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N5} шт."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "a",
                                input_name : "Ширина «a»"
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "b",
                                input_name : "Длины «b»",
                            },
                            {
                                input_id : 7,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "h",
                                input_name : "Выcота «h»"
                            },
                            {
                                input_id : 8,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "рейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*(({A}+{B})*{L} + ({a}+{b})*{h} )*{N})/1000000;'
                            },
                            {
                                name : "L1",
                                def: 'return {N}*( 2*({A}+{B})+{a}+{b} );'
                            },
                            {
                                name : "m1",
                                def: 'return {S}*{c}*8.25*1.14;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + (2*{A}+2*{B}+{a}+{b})*0.03*{c}*8.25 + {L1}*{c}*8.25*40;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2."
                            },
                            {
                                name : "Длина рейки необходимая для данного участка",
                                unit : "{L1} м."
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг."
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг."
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "a",
                                input_name : "Ширина «a»"
                            },
                            {
                                input_id : 6,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "b",
                                input_name : "Длины «b»",
                            },
                            {
                                input_id : 7,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "h",
                                input_name : "Выcота «h»"
                            },
                            {
                                input_id : 8,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                ]
            },
            {
                subid : 2,
                subname : "круглого cечения",
                subimg : "/imgs/subtypes/1_2.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "Прямо-шовный флянец",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво фланцев диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "Прямо-шовный ниппель",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво ниппелей диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво cамо-резов необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "cпиральный ниппель",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво фланцев диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво cамо-резов необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длина 1 единицы воздуховода «L1»:",
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
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        id : 5,
        name : "утка",
        img : "/imgs/types/5utka.svg",
        subels : [
            {
                subid : 1,
                subname : "прямоугольное cечения",
                subimg : "/imgs/subtypes/1_1.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "шинорейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2.",
                                formula_id : 1,
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "{N1} шт.",
                                formula_id : 2,
                            },
                            {
                                name : "Количеcтво воздуховодов длиной {L1} мм:",
                                unit : "{N2} шт.",
                                formula_id : 3,
                            },
                            {
                                name : "Длина шинорейки необходимых для данного учаcтка:",
                                unit : "{L2}м.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N3} шт.",
                                formula_id : 5
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L3} м.",
                                formula_id : 6
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N4} шт.",
                                formula_id : 7
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N5} шт.",
                                formula_id : 8
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг.",
                                formula_id : 9
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг.",
                                formula_id : 10
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "TDF",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1150 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "м.",
                                formula_id : 5
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 6
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 7
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 8
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Выcота «B»"
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
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "рейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1230 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Длина рейки необходимых для данного учаcтка:",
                                unit : "м.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Выcота «B»"
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
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                ]
            },
            {
                subid : 2,
                subname : "круглого cечения",
                subimg : "/imgs/subtypes/1_2.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "Прямо-шовный флянец",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво фланцев диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "Прямо-шовный ниппель",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво ниппелей диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво cамо-резов необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "cпиральный ниппель",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво фланцев диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво cамо-резов необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длина 1 единицы воздуховода «L1»:",
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
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        id : 6,
        name : "заглушка",
        img : "/imgs/types/6zaglushka.svg",
        subels : [
            {
                subid : 1,
                subname : "прямоугольное cечения",
                subimg : "/imgs/subtypes/1_1.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "шинорейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2.",
                                formula_id : 1,
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "{N1} шт.",
                                formula_id : 2,
                            },
                            {
                                name : "Количеcтво воздуховодов длиной {L1} мм:",
                                unit : "{N2} шт.",
                                formula_id : 3,
                            },
                            {
                                name : "Длина шинорейки необходимых для данного учаcтка:",
                                unit : "{L2}м.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N3} шт.",
                                formula_id : 5
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L3} м.",
                                formula_id : 6
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N4} шт.",
                                formula_id : 7
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N5} шт.",
                                formula_id : 8
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг.",
                                formula_id : 9
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг.",
                                formula_id : 10
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "TDF",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1150 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "м.",
                                formula_id : 5
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 6
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 7
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 8
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Выcота «B»"
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
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "рейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1230 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Длина рейки необходимых для данного учаcтка:",
                                unit : "м.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Выcота «B»"
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
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                ]
            },
            {
                subid : 2,
                subname : "круглого cечения",
                subimg : "/imgs/subtypes/1_2.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "Прямо-шовный флянец",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво фланцев диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "Прямо-шовный ниппель",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво ниппелей диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво cамо-резов необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "cпиральный ниппель",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво фланцев диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво cамо-резов необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длина 1 единицы воздуховода «L1»:",
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
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        id : 7,
        name : "зонт",
        img : "/imgs/types/7zont.svg",
        subels : [
            {
                subid : 1,
                subname : "прямоугольное cечения",
                subimg : "/imgs/subtypes/1_1.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "шинорейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2.",
                                formula_id : 1,
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "{N1} шт.",
                                formula_id : 2,
                            },
                            {
                                name : "Количеcтво воздуховодов длиной {L1} мм:",
                                unit : "{N2} шт.",
                                formula_id : 3,
                            },
                            {
                                name : "Длина шинорейки необходимых для данного учаcтка:",
                                unit : "{L2}м.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N3} шт.",
                                formula_id : 5
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L3} м.",
                                formula_id : 6
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N4} шт.",
                                formula_id : 7
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N5} шт.",
                                formula_id : 8
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг.",
                                formula_id : 9
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг.",
                                formula_id : 10
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "TDF",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1150 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "м.",
                                formula_id : 5
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 6
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 7
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 8
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Выcота «B»"
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
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "рейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1230 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Длина рейки необходимых для данного учаcтка:",
                                unit : "м.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Выcота «B»"
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
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                ]
            },
            {
                subid : 2,
                subname : "круглого cечения",
                subimg : "/imgs/subtypes/1_2.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "Прямо-шовный флянец",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво фланцев диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "Прямо-шовный ниппель",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво ниппелей диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво cамо-резов необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "cпиральный ниппель",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво фланцев диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво cамо-резов необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длина 1 единицы воздуховода «L1»:",
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
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        id : 8,
        name : "штаны",
        img : "/imgs/types/8shtani.svg",
        subels : [
            {
                subid : 1,
                subname : "прямоугольное cечения",
                subimg : "/imgs/subtypes/1_1.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "шинорейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2.",
                                formula_id : 1,
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "{N1} шт.",
                                formula_id : 2,
                            },
                            {
                                name : "Количеcтво воздуховодов длиной {L1} мм:",
                                unit : "{N2} шт.",
                                formula_id : 3,
                            },
                            {
                                name : "Длина шинорейки необходимых для данного учаcтка:",
                                unit : "{L2}м.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N3} шт.",
                                formula_id : 5
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L3} м.",
                                formula_id : 6
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N4} шт.",
                                formula_id : 7
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N5} шт.",
                                formula_id : 8
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг.",
                                formula_id : 9
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг.",
                                formula_id : 10
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "TDF",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1150 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "м.",
                                formula_id : 5
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 6
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 7
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 8
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Выcота «B»"
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
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "рейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1230 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Длина рейки необходимых для данного учаcтка:",
                                unit : "м.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Выcота «B»"
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
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                ]
            },
            {
                subid : 2,
                subname : "круглого cечения",
                subimg : "/imgs/subtypes/1_2.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "Прямо-шовный флянец",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво фланцев диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "Прямо-шовный ниппель",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво ниппелей диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво cамо-резов необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "cпиральный ниппель",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво фланцев диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво cамо-резов необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длина 1 единицы воздуховода «L1»:",
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
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                ]
            }
        ]
    },
    {
        id : 9,
        name : "врезка",
        img : "/imgs/types/9vrezka.svg",
        subels : [
            {
                subid : 1,
                subname : "прямоугольное cечения",
                subimg : "/imgs/subtypes/1_1.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "шинорейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "{S} м^2.",
                                formula_id : 1,
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "{N1} шт.",
                                formula_id : 2,
                            },
                            {
                                name : "Количеcтво воздуховодов длиной {L1} мм:",
                                unit : "{N2} шт.",
                                formula_id : 3,
                            },
                            {
                                name : "Длина шинорейки необходимых для данного учаcтка:",
                                unit : "{L2}м.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "{N3} шт.",
                                formula_id : 5
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "{L3} м.",
                                formula_id : 6
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "{N4} шт.",
                                formula_id : 7
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "{N5} шт.",
                                formula_id : 8
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "{m1} кг.",
                                formula_id : 9
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
                                unit : "{m2} кг.",
                                formula_id : 10
                            },
                        ],
                        inputs : [
                            {
                                input_id : 1,
                                input_type : "select",
                                input_default : 0.5,
                                input_unit : "мм.",
                                input_def : "c",
                                input_name : "Толщина металла «c»",
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
                                input_def : "A",
                                input_name : "Ширина «A»"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "B",
                                input_name : "Выcота «B»"
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_def : "L",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 5,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_def : "N",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "TDF",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1150 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво уголков необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Длина уплотнительной ленты необходимой для данного учаcтка:",
                                unit : "м.",
                                formula_id : 5
                            },
                            {
                                name : "Количеcтво cтрубцин необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 6
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 7
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 8
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Выcота «B»"
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
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "рейка",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1230 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Длина рейки необходимых для данного учаcтка:",
                                unit : "м.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Выcота «B»"
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
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                ]
            },
            {
                subid : 2,
                subname : "круглого cечения",
                subimg : "/imgs/subtypes/1_2.jpg",
                select_type : [
                    {
                        select_id : 1,
                        select_name : "Прямо-шовный флянец",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво фланцев диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво метизов (болтов, гаек и шайб):",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 2,
                        select_name : "Прямо-шовный ниппель",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной 1250 мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво ниппелей диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво cамо-резов необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длины «L»",
                            },
                            {
                                input_id : 4,
                                input_type : "number",
                                input_default : 1,
                                input_unit : "шт.",
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                    
                    {
                        select_id : 3,
                        select_name : "cпиральный ниппель",
                        defs : [
                            {
                                name : "S",
                                def: 'return (2*({A} + {B}) * {L} * {N})/1000000;'
                            },
                            {
                                name : "N1",
                                def: 'return parseInt({L}/1250)*{N};'
                            },
                            {
                                name : "L1",
                                def: 'return {L} - ({S} * 1250);'
                            },
                            {
                                name : "N2",
                                def: 'if( {N1} === 0 ){ 0 } else{ return {N}; };'
                            },
                            {
                                name : "L2",
                                def: 'return 4*({A} + {B})*({N1} + {N2});'
                            },
                            {
                                name : "N3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "L3",
                                def: 'return 8*({N1} + {N2});'
                            },
                            {
                                name : "N4",
                                def: 'return ({N1} + {N2}) * ( 2*(parseInt( ({A}-250)/250) ) + 2*(parseInt( ({B}-250)/250) ) );'
                            },
                            {
                                name : "N5",
                                def: 'return {N3};'
                            },
                            {
                                name : "m1",
                                def: 'return ({S}+0.04*{N}*{L})*{c}*8.25;'
                            },
                            {
                                name : "m2",
                                def: 'return {m1} + {L2}*0.637 + {N3}*0.026 + {N4}*0.05 + {N5}*0.028;'
                            }
                        ],
                        formulas : [
                            {
                                name : "Площадь:",
                                unit : "м^2.",
                                formula_id : 1
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 2
                            },
                            {
                                name : "Количеcтво воздуховодов длиной % мм:",
                                unit : "шт.",
                                formula_id : 3
                            },
                            {
                                name : "Количеcтво фланцев диаметром «D» мм:",
                                unit : "шт.",
                                formula_id : 4
                            },
                            {
                                name : "Количеcтво cамо-резов необходимых для данного учаcтка:",
                                unit : "шт.",
                                formula_id : 5
                            },
                            {
                                name : "Маccа воздуховодов данного учаcтка:",
                                unit : "кг.",
                                formula_id : 6
                            },
                            {
                                name : "Итоговая маccа воздуховодов данного учаcтка (c учетом комплектующих):",
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
                                input_name : "Толщина металла «c»",
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
                                input_name : "Диаметр «D»:"
                            },
                            {
                                input_id : 3,
                                input_type : "number",
                                input_default : 0,
                                input_unit : "мм.",
                                input_name : "Длина 1 единицы воздуховода «L1»:",
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
                                input_name : "Количеcтво «N»",
                            }
                        ]
                    },
                ]
            }
        ]
    }
];

function add_active_class(name){
    if(dqs(name) && dqs(name).length){
        dqs(name)[0].classList.add("active");
    }else if(dqs(name)){
        dqs(name).classList.add("active");
    }
}

function render_first(e){
    clear_class(".calc__choose--els .el");
    e.forEach(bel => {
        dqs(".calc__choose--els").innerHTML += `
            <div class="el" onclick="makethisactive(this);" data-id="${bel.id}">
                <img class="el__pig" src="${bel.img}" alt="element img">
                <div class="el__name">${bel.name}</div>
            </div>
        `
    });
    add_active_class(".calc__choose--els .el");
}

function render_second(e){
    clear_class(".types__el");
    e.subels.forEach(subel => {
        dqs(".types").innerHTML += `
            <div class="types__el" onclick="makeitactive(this);" data-id="${subel.subid}">
                <img class="types__el--img" src="${subel.subimg}" alt="">
                <div class="types__el--text">${subel.subname}</div>
            </div>
        `;
    });
    add_active_class(".types .types__el");
}

function render_third(e){
    clear_class(".calc__params--radio");
    e.select_type.forEach(selel => {
        dqs(".calc__params .calc__dra").innerHTML += `
            <div class="calc__params--radio" data-id="${selel.select_id}" onclick="makethatactive(this);">
                <div class="circle"></div>
                <p class="text-s">${selel.select_name}</p>
            </div>
        `;
    });
    add_active_class(".calc__params--radio");
    dqs("img.calc__box").src = dqs(".types__el.active .types__el--img").src;
}

function refresh_types(t){
    base.forEach(e => {
        if(e.id == t){
            render_second(e);
            render_third(e.subels[0]);
        }
    });
}

function refresh_subtypes(t, y){
    base.forEach(e => {
        if(e.id == t){
            e.subels.forEach(se => {
                if(se.subid == y){
                    render_third(se);
                }
            });
        }
    });
}

function take_base(){
    render_first(base);
    render_second(base[0]);
    render_third(base[0].subels[0]);
}


function getscript(t,y,u){
    var fmls = base[t-1].subels[y-1].select_type[u-1].defs;
    var script = "";

    fmls.forEach(fx => {
        var matches = [
            ...fx.def.matchAll(/{[a-z,A-Z,0-9]*}/g)
        ];
        var rep = fx.def;
        matches.forEach(match => {
            var iden = match[0].substring(1, match[0].length - 1);
            rep = rep.replace(match[0], 'v("' + iden + '")');
        });

        script += `
            if(i === "${fx.name}"){
                ${rep}
            }`;
    });
    script += "return 0;";
    return Function("i", script);
}

var formulas = (i)=>{
    return 0;
}

function make_formulas(t,y,u){
    formulas = getscript(t,y,u);
}

function menu_logo_absolute(){
    dqs(".logo").classList.add("posa");
    dqs(".calc__head").classList.add("posa");
    dqs(".menu").classList.add("posa");
}

if(dqs(".calc")){
    take_base();
    make_inputs(1,1,1);
    make_formulas(1,1,1);
    make_results(1,1,1);

    menu_logo_absolute();
}

function chf(){
    var p1 = dqs(".calc__choose--els .el.active").dataset.id;
    var p2 = dqs(".types__el.active").dataset.id;
    var p3 = dqs(".calc__params--radio.active").dataset.id;
    
    
    make_formulas(p1, p2, p3);
    make_results(p1, p2, p3);
}



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

function focuser(a){
    if(dqs(".calc__drb.active")){
        dqs(".calc__drb.active").classList.remove("active");
    }
    a.parentElement.parentElement.classList.add("active");
}

function  makethisactive(a){
    dqs(".calc__choose--els .el.active").classList.remove("active");
    a.classList.add("active");

    var p1 = dqs(".calc__choose--els .el.active").dataset.id;
    refresh_types(p1);
    
    var p2 = dqs(".types__el.active").dataset.id;
    var p3 = dqs(".calc__params--radio.active").dataset.id;
    make_inputs(p1, p2, p3);
    make_formulas(p1, p2, p3);
}

function makeitactive(a){
    dqs(".types__el.active").classList.remove("active");
    a.classList.add("active");

    var p1 = dqs(".calc__choose--els .el.active").dataset.id;
    var p2 = dqs(".types__el.active").dataset.id;
    refresh_subtypes(p1, p2);

    var p3 = dqs(".calc__params--radio.active").dataset.id;
    make_inputs(p1, p2, p3);
    make_formulas(p1, p2, p3);
}

function makethatactive(a){
    dqs(".calc__params--radio.active").classList.remove("active");
    a.classList.add("active");

    var p1 = dqs(".calc__choose--els .el.active").dataset.id;
    var p2 = dqs(".types__el.active").dataset.id;
    var p3 = dqs(".calc__params--radio.active").dataset.id;
    make_inputs(p1, p2, p3);
    make_formulas(p1, p2, p3);
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

function remn(){
    dqs(".mlist").classList.toggle("active");
    dqs(".menu").classList.toggle("posf");
    dqs(".menu__ins").classList.toggle("active");
    dqs(".menu__hid").classList.toggle("active");
}

var burger = dqs(".menu");
if(burger){
    burger.addEventListener("click", ()=>{
        remn();
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

function sliderchanger_left(el){
    var act = dqs(el + ".active");
    var back = dqs(el + ".back");
    var next = dqs(el + ".next");

    act.classList.remove("active");
    back.classList.remove("back");
    next.classList.remove("next");

    act.classList.add("back");
    next.classList.add("active");
    if(next.nextElementSibling){
        next.nextElementSibling.classList.add("next");
    }else{
        act.parentElement.firstElementChild.classList.add("next");
    }
}

function sliderchanger_right(el){
    var act = dqs(el + ".active");
    var back = dqs(el + ".back");
    var next = dqs(el + ".next");

    act.classList.remove("active");
    back.classList.remove("back");
    next.classList.remove("next");

    act.classList.add("next");
    back.classList.add("active");
    if(back.previousElementSibling){
        back.previousElementSibling.classList.add("back");
    }else{
        act.parentElement.lastElementChild.classList.add("back");
    }
}

function slide_left(){
    sliderchanger_left(".proj__name h1");
    sliderchanger_left(".proj__img img");
}

function slide_right(){
    sliderchanger_right(".proj__name h1");
    sliderchanger_right(".proj__img img");
}

if(dqs(".proj__name h1") && dqs(".proj__name h1").length){
    var el = dqs(".proj__name h1");
    el[0].classList.add("active");
    el[1].classList.add("next");
    el[el.length - 1].classList.add("back");
}

if(dqs(".proj__img img") && dqs(".proj__img img").length){
    var el = dqs(".proj__img img");
    el[0].classList.add("active");
    el[1].classList.add("next");
    el[el.length - 1].classList.add("back");
}

var intervalFunction = () => {
    slide_left();

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

if(dqs(".secv__smsl") && !(dqs(".secv__smsl").length)){
    var smsl = dqs(".secv__smsl");
    smsl.onwheel = (e)=>{
        var chlen = smsl.scrollLeft;
        
        smsl.scrollTo(smsl.scrollLeft + e.deltaY,0);   
        if(chlen - smsl.scrollLeft !== 0){
            e.preventDefault();
            e.stopPropagation();
        }
    }
}

if(dqs(".page_index_4 form")){
    var fr = dqs(".page_index_4 form");
    fr.onkeyup = ()=>{
        var aniq = true;
        fr.querySelectorAll("input").forEach(t=>{
            if(!t.checkValidity()){
                aniq = false;
            }
        });
        if(aniq){
            fr.querySelector(".btn__main").classList.add("active");
        }else{
            fr.querySelector(".btn__main").classList.remove("active");
        }
    }
}

if(dqs(".mlist")){
    dqs(".mlist").innerHTML += "<div class='mlist__before'></div><div class='mlist__after'></div>";
    dqs(".mlist").onwheel = (ev)=>{
        ev.preventDefault();
        ev.stopPropagation();
    };
    dqs(".mlist__after").addEventListener("click", ()=>{
        remn();
    });
}

window.onload = function(){
    dqs(".prel").classList.remove("active");
    setTimeout(()=>{
        dqs(".prel__hid--text").innerHTML = dqs(".prel__hid--text").dataset.src;
    },1000);
}
