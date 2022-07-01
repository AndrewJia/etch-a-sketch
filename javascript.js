//clear grid, then repopulate with given count
function generateGrid(blockCount) {
    const blockSize = (600/blockCount)+"px";

    //clear container
    removeAllChildNodes(container);

    //add blockCount^2 number of blocks to container
    for(let i = 0; i < blockCount*blockCount; i++) {
        const currBlock = document.createElement('div');
        currBlock.classList.add('block');
        currBlock.textContent = i;
        currBlock.style.cssText = `height: ${blockSize}; width: ${blockSize};`;     
        container.appendChild(currBlock);
    }
}

//"borrowed" from javascripttutorial.net
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


const container = document.querySelector('.container');

generateGrid(12);
generateGrid(13);