function generateDXF() {

let width = parseFloat(document.getElementById("width").value);
let height = parseFloat(document.getElementById("height").value);

if (!width || !height) {
    alert("Enter width and height");
    return;
}

let dxf = createRectangleDXF(width, height);

let blob = new Blob([dxf], { type: "application/dxf" });

let link = document.createElement("a");
link.href = URL.createObjectURL(blob);
link.download = "rectangle.dxf";

link.click();

}
