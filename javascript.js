//clear grid, then repopulate with given count
function generateGrid(blockCount) {
    const blockSize = (600/blockCount)+"px";

    //clear container
    removeAllChildNodes(container);

    //add blockCount^2 number of blocks to container
    for(let i = 0; i < blockCount*blockCount; i++) {
        const currBlock = document.createElement('div');
        //currBlock.classList.add('block');
        currBlock.textContent = i;
        currBlock.style.cssText = `height: ${blockSize}; width: ${blockSize};`;   
        currBlock.addEventListener("mouseenter", function(e) {
            currBlock.classList.add('colored');
        });
        
        container.appendChild(currBlock);
    }
}

//"borrowed" from javascripttutorial.net
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function updateColor() {
    
}

let dimensions = 12; //default to 12 x 12 grid

const container = document.querySelector('.container');
const clear = document.querySelector('.clear');
console.log(clear);
const resize = document.querySelector('.resize');

clear.addEventListener("click", function(e) {
    generateGrid(dimensions);
});

resize.addEventListener("click", function(e) {
    let input = parseInt(prompt("Please enter desired grid length (from 1 to 100)"));
    if(isNaN(input) || input < 0 || input > 100) {
        console.log('invalid input to resize');
    } else {
        dimensions = input;
        generateGrid(dimensions);
    }
});


generateGrid(dimensions);