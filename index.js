const container = document.getElementById("container");

function gridsize(){
    let x = prompt ("Enter Grid (24 x 24) Number")
 
        

function makeRows(rows, cols){
    container.style.setProperty('--grid-rows', rows);
    container.style.setProperty('--grid-cols', cols);
    for ( c = 0; c < (rows * cols); c++){
        let cell =document.createElement("div");
        container.appendChild(cell).className = "grid-item";
    };
};

makeRows(x, x);
}
// $(document).ready(function(){
//     $(".grid-items").mouseover(function(){
//         $(this).css("background-color : black")
//     });
// });

$("#colour").change(function(event) {
    console.log($(this).val());
    $("#color_front").css('background-color',$(this).val());
});

$("#color_front").click(function(event) {
    $("#colour").click();
});

// const container = document.getElementById("container");

// function makeRows(rows, cols) {
//   container.style.setProperty('--grid-rows', rows);
//   container.style.setProperty('--grid-cols', cols);
//   for (c = 0; c < (rows * cols); c++) {
//     let cell = document.createElement("div");
//     cell.innerText = (c + 1);
//     container.appendChild(cell).className = "grid-item";
//   };
// };

// makeRows(10, 10);