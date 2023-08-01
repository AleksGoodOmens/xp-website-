if (resizerLeft) {
    resizerLeft.addEventListener('mousedown', (event) => {
        let startX = window.clientX;
        console.log(startX);
        console.log(window.style.width = 250 + 'px');
    });
}
// if (window) {
//     window.addEventListener('click', function init() {
//         window.removeEventListener('click', init, false);
//         window.className = window.className + ' resizable';
//         let resizer = document.createElement('div');
//         resizer.className = 'resizer';
//         window.appendChild(resizer);
//         resizer.addEventListener('mousedown', initDrag, false);
//         resizerRight.addEventListener('mousedown', initDragLeftAndRight, false);

//     }, false);
// }
function initDrag(e) {
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(window).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(window).height, 10);
    document.documentElement.addEventListener('mousemove', doDrag, false);
    document.documentElement.addEventListener('mouseup', stopDrag, false);
}
function initDragLeftAndRight(e) {
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(window).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(window).height, 10);
    if (resizerRight) {
        document.documentElement.addEventListener('mousemove', doDragRight, false);
        document.documentElement.addEventListener('mouseup', stopDrag, false);
    }



}
function doDrag(e) {
    window.style.width = (startWidth + e.clientX - startX) + 'px';
    window.style.height = (startHeight + e.clientY - startY) + 'px';
}
function doDragLeft(e) {
    window.style.width = (startWidth + e.clientX - startX) + 'px';
}
function doDragRight(e) {
    window.style.width = (startWidth + e.clientX - startX) + 'px';
}
function stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', doDrag, false);
    document.documentElement.removeEventListener('mouseup', stopDrag, false);
    document.documentElement.removeEventListener('mousemove', doDragRight, false);
    document.documentElement.removeEventListener('mouseup', doDragRight, false);
}