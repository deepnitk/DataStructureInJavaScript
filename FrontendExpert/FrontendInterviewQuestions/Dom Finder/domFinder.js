/**
 * Problem statement: 
* You have a DOM. That DOM have two identical elments 
* i.e. rootA and rootB. you will be given reference of rootA and nodeA.
* You need to find nodeB under rootB. 
 */

const getPathFromChildToParent = (parent, child) => {
    let currentNode = child;
    const pathArray = [];
    while(currentNode !== parent) {
        const parentElement = currentNode.parentElement;
        const childrensArray = Array.from(parentElement.children);
        pathArray.push(childrensArray.indexOf(currentNode));
        currentNode = parentElement;
    }
    return pathArray;
};

const getValueFromPath = (parent, path) => {
    let currentNode = parent;
    while(path.length) {
        currentNode = currentNode.children[path.pop()];
    }
    return currentNode.innerText;
};
const findNodeValue = () => {
    const rootA = document.getElementById('rootA');
    const rootB = document.getElementById('rootB');
    const nodeA = document.getElementById('nodeA');

    //we will move bottom to up, because in that case we will have only one parent and
    //traversing will be easy.
    const path = getPathFromChildToParent(rootA, nodeA);
    return getValueFromPath(rootB, path);
}

console.log(findNodeValue());