// window.onload is optional since it depends on the way in which you fire events
window.onload=function(){

    // selecting the elements for which we want to add a tooltip
    const target = document.getElementById("text");
    const word = document.getElementById("tooltip-text");

    // change display to 'block' on mouseover
    target.addEventListener('mouseover', () => {
      word.style.display = 'block';
    }, false);

    // change display to 'none' on mouseleave
    target.addEventListener('mouseleave', () => {
      word.style.display = 'none';
    }, false);

    }