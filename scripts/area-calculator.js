// // step-1: get a function 
// function calculateTriangleArea(){

// // step:2 get triangle base value 
// const baseField = document.getElementById("triangle-base");
// const baseTextValue = baseField.value;
// const base = parseFloat(baseTextValue);
// // console.log(base)

// // step:3 get triangle height value 
// const heightField = document.getElementById("triangle-height");
// const heightTextValue = heightField.value;
// const height = parseFloat(heightTextValue);
// // console.log(height)

// const area = 0.5 * base * height;
// console.log(area)

// // show triangleArea 
// const areaSpan = document.getElementById("triangle-area");
// areaSpan.innerText = area;


// }



// function calculateRectangleArea(){
//     const widthField = document.getElementById('rectangle-width');
//     const widthValueText = widthField.value;
//     const width = parseFloat(widthValueText);
//     console.log(width);

//     const lengthField = document.getElementById('rectangle-length');
//     const lengthValueText = lengthField.value;
//     const length = parseFloat(lengthValueText);
//     console.log(length);
    
    
//     const area = width * length;
//     console.log(area)

//     const rectangleArea = document.getElementById('rectangle-area');
//     rectangleArea.innerText = area;
// }






// reusable function ----> reduce duplicate code 
function calculateTriangleArea(){
    const base = getInputValue('triangle-base');
    // console.log(base)


    const height = getInputValue("triangle-height");
    // console.log(height)

    const area = base * height;
    setElementInnerText('triangle-area', area)

}


function calculateEllipseArea(){
    const majorRadius = getInputValue("ellipse-major-radius");
    const minorRadius = getInputValue('ellipse-minor-radius');

    const ellipseArea = 3.14 * majorRadius * minorRadius;
    setElementInnerText('ellipse-area', ellipseArea);
}


// reusable get input value field in number 
function getInputValue(fieldId){
     const inputField = document.getElementById(fieldId);
     const inputFieldValue = inputField.value;
     const value = parseFloat(inputFieldValue);
     return value;
}
   

// reusable set  span, p, div, etc text
function setElementInnerText(elementId, area){
    const element = document.getElementById(elementId);
    element.innerText = area;
}