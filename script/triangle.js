

function triangleCalculation(){
    const triangleBase = parseFloat(document.getElementById("triangle-base").value);
    const triangleHeight = parseInt(document.getElementById("triangle-height").value);
    const areaTriangle = 0.5 * triangleBase * triangleHeight;
    
    const addElement = document.createElement("p");
    addElement.innerText = "Area of Triangle is = " + areaTriangle;
    const showTriangleResult = document.getElementById("show-result").append(addElement);
    console.log(showTriangleResult);
}

