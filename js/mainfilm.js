const puces = document.querySelectorAll('#main-navigation li .puce');
const anchors = document.querySelectorAll('.title-anchor');
const map = document.querySelector('.maps');
const contpuces = document.querySelector('.contpuces')

// les puces qui suive le scroll

window.addEventListener('scroll', function () {
    let puceActived = false;





    const mapY = map.getBoundingClientRect().y;
    console.log(mapY)
    const titleY = title.getBoundingClientRect().y;
    
    anchors.forEach(function (title, index,) {
            if (titleY > 0 && puceActived === false) {
                puces[index].classList.add('is-active');
                puceActived = true;
            } else {
                puces[index].classList.remove('is-active');

            }
    
    
        });





});
// rideau quand on part de la page 
const btn = document.querySelectorAll('.btnanim');

btn.forEach(function (button) {
    button.addEventListener('click', function (event) {
        event.preventDefault()
        const href = button.getAttribute('href')
        //console.log(href)

        const panels = document.querySelectorAll('.panel')
        console.log('click')
        panels.forEach((panel) => {
            panel.classList.add('is-opened')
        })

        setTimeout(function () {
            document.location.href = href
        }, 1000)


    })
})

// rideau quand la page est chargé 


const panels = document.querySelectorAll('.panel')
setTimeout(function () {
  panels.forEach((panel) => {
    panel.classList.remove('is-opened');
  })
}, 1000);

/*
const panels = document.querySelectorAll('.panel')
console.log('click')
panels.forEach((panel) => {
panel.classList.remove('is-opened')})
*/
