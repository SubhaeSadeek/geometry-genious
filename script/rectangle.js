function rectangleCalc(){
    const widthRecta = parseFloat(document.getElementById("recta-width").value);
    const lengthRecta = parseFloat(document.getElementById("recta-length").value);
    const areaRecta = widthRecta * lengthRecta;
    console.log(areaRecta);
    const resultShow = document.createElement("p");
    resultShow.innerText = "Area of rectangle is = " + areaRecta;
    document.getElementById("area-container").appendChild(resultShow);
}