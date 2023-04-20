import { Pattern, RegisterPattern } from "../../Pattern"

RegisterPattern(Pattern.ParsePatFile(`
*HEXAGONS,HEXAGONS verbose
;By John Hyslop,    Tile2Hatch tool © CVH 2020
;Developed in inch as imperial QCAD3 pattern
239.931417,0.21999999,0.99999998,8.06212908,0.04554875,0.21954496,-21.73495344
239.931417,0.89,0.19,8.06212908,0.04554875,0.21954496,-21.73495344
300.068583,0.78000001,0.99999998,13.89236932,0.04554875,0.21954496,-21.73495344
60.068488,0.12,0.5,8.06221498,0.02626129,0.38078866,-37.69807687
119.931512,0.31,0.17,30.01665055,0.02626129,0.38078865,-37.69807687
300.068583,0.11,0.19,13.89236932,0.04554875,0.21954496,-21.73495344
180,0.11,0.19,0,1,0.21999996,-0.78000004
299.931512,0.69,0.83,30.01665055,0.02626129,0.38078865,-37.69807687
0,0.31,0.83,0,1,0.38,-0.62
180,0.69,0.17,0,1,0.38,-0.62
240.068488,0.88,0.5,8.06221498,0.02626129,0.38078866,-37.69807687
180,0.11,0.81,0,1,0.21999996,-0.78000004
`), false)
