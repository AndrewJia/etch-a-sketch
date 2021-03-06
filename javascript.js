//clear grid, then repopulate with given count
function generateGrid(blockCount) {
    const blockSize = (600/blockCount)+"px";

    //clear container
    removeAllChildNodes(container);

    //add blockCount^2 number of blocks to container
    for(let i = 0; i < blockCount*blockCount; i++) {
        const currBlock = document.createElement('div');
        //currBlock.classList.add('block');
        //currBlock.textContent = i;
        currBlock.style.cssText = `height: ${blockSize}; width: ${blockSize};`;   
        currBlock.addEventListener("mouseenter", function(e) {
            //currBlock.style.backgroundColor = color;
            updateColor(currBlock);
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

//given a block, update its color based on color variable
function updateColor(block) {
    if (color != 'rainbow') {
        block.style.backgroundColor = color;
    } else {
        let randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
        block.style.backgroundColor = randomColor;
    }
}

let dimensions = 12;      //default to 12 x 12 grid
let color = '#deb887';    //default to burlywood (tan-ish color)

const container = document.querySelector('.container');   //container for the blocks
const clear = document.querySelector('.clear');           //this and following are buttons
const resize = document.querySelector('.resize');
const background = document.querySelector('.background');
const black = document.querySelector('.black');
const burlywood = document.querySelector('.burlywood');
const olivedrab = document.querySelector('.olivedrab'); //#6b8e23
const powderblue = document.querySelector('.powderblue'); //#b0e0e6
const goldenrod = document.querySelector('.goldenrod'); //#daa520
const rainbow = document.querySelector('.rainbow');

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

background.addEventListener("click", function(e) {
    document.body.classList.toggle('bgClass');
})

black.addEventListener("click", function(e) {
    color = '#000000'
});

burlywood.addEventListener("click", function(e) {
    color = '#deb887'
});

olivedrab.addEventListener("click", function(e) {
    color = '#6b8e23'
});

powderblue.addEventListener("click", function(e) {
    color = '#b0e0e6'
});

goldenrod.addEventListener("click", function(e) {
    color = '#daa520'
});

rainbow.addEventListener("click", function(e) {
    color = 'rainbow';
});


generateGrid(dimensions);