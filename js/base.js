var sqr = Math.pow;
var pi = Math.PI;
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
                    }
                ]
            }
        ]
    },
    {
        id : 3,
        name : "утка",
        img : "/imgs/types/3utka.svg",
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
        id : 4,
        name : "тройник",
        img : "/imgs/types/4traynik.svg",
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
        id : 5,
        name : "переход",
        img : "/imgs/types/5perexod.svg",
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