// function that builds a grid in the "container"
function createGrid(x) {
    var container = document.getElementById("container");
    for (var rows = 0; rows < x; rows++) {
        for (var columns = 0; columns < x; columns++) {
            // $("#container").append("<div class='grid'></div>");
            var newDiv = document.createElement("div");
            newDiv.classList.add("grid");
            container.appendChild(newDiv);
        };
    };
    var gridItems = document.querySelectorAll(".grid");
    gridItems.forEach(function(item){

    
    $(".grid").width(700/x);
    $(".grid").height(490/x);
});
};


// function that clears the grid
function clearGrid(){
    var gridItems = document.querySelectorAll(".grid");
    gridItems.forEach(function(item){
    $(".grid").remove();
    });
};  

// function that prompts the user to select the number of boxes in a new grid
// the function then also creates that new grid
function refreshGrid(){
    var z = prompt("How many boxes per side?");
    clearGrid();
    createGrid(z);
};

// create a 16x16 grid when the page loads
// creates a hover effect that changes the color of a square to black when the mouse passes over it, leaving a (pixel) trail through the grid
document.addEventListener("DOMContentLoaded", function() {
    createGrid(24);

    var gridItems = document.querySelectorAll(".grid");
    color = document.getElementById('picker');
     //var gridItems = document.getElementsById('pick').value= "#FF8040";
     gridItems.forEach(function(item) {
      color = document.getElementById('picker');
      item.addEventListener("mouseover", function() {
      this.style.backgroundColor = color.value;
      });
    });
    //   const color = document.getElementById('favcolor').value;
    //   document.querySelectorAll(".row").forEach(function(row) {
    //   row.addEventListener("mouseover", function() {
    //     this.style.backgroundColor = color;
    //   });
    // });

    var newGridButton = document.querySelector(".newGrid");
    newGridButton.addEventListener("click", function() {
      refreshGrid();

      var gridItems = document.querySelectorAll(".grid");
      gridItems.forEach(function(item) {
        item.addEventListener("mouseover", function() {
          this.style.backgroundColor = color.value;
        });
      });
    });
  });

if (refreshid()) {
    eraser() = false;
}

// var newGrid2 = document.getElementsByClassName("newGrid2");
//     newGrid2.addEventListener("click"),function(){
//         container.addEventListener('mouseover', e => {
//             e.target.style.backgroundColor = null;
          
//     });
//     };
// allows the click of a button to prompt the user to create a new grid
// document.addEventListener("DOMcontentloaded",function() {
//     createGrid(24);

//     var gridItems = document.querySelectorAll(".grid");
//     color = document.getElementsByClassName('picker');
//     gridItems.forEach(function(item) {
//     color = document.getElementsByClassName('picker');
        
//     });

    
// });

// $(".grid").mouseover(function() {
    //     color = document.getElementsByClassName('picker');
    //     this.style.backgroundColor = color.value;
    //     });

    // $(".newGrid").click(function() {
    //     refreshGrid();

    //     $(".grid").mouseover(function() {
    //     $(this).css("background-color", "picker");
    //     });
    // });

// const childdiv = document.getElementsByClassName(".childdiv");


// childdiv.addEventListener('mouseover', function() {
//     childdiv.style.backgroundcolor = 'red';
//   });
  // function that builds a grid in the "container"
