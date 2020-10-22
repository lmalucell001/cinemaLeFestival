const puces = document.querySelectorAll('#main-navigation li .puce');
const anchors = document.querySelectorAll('.title-anchor');

window.addEventListener('scroll', function() {
    let puceActived = false;

    anchors.forEach(function(title, index) {
        const titleY = title.getBoundingClientRect().y;
        
        if (titleY > 0 && puceActived === false) {
            puces[index].classList.add('is-active');
            puceActived = true;
        } else {
            puces[index].classList.remove('is-active');
        }
    });
});


