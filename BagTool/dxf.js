function createRectangleDXF(width, height) {

let dxf =
`0
SECTION
2
ENTITIES
0
LWPOLYLINE
8
0
90
4
70
1
10
0
20
0
10
${width}
20
0
10
${width}
20
${height}
10
0
20
${height}
0
ENDSEC
0
EOF`;

return dxf;

}
