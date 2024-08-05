const bear = document.getElementById("bear");
const overlay = document.createElement('div');
const footer = document.querySelector('footer');
const logo = document.getElementById('logo');
const container = document.querySelector('.container')
//const footerPhone = document.querySelector('.footer-text-container')



overlay.classList.add('overlay');
document.body.appendChild(overlay);

bear.addEventListener('click', () => {
        window.location.href = 'site.html';
    })
     
bear.addEventListener('mouseover', function() {
    bear.style.transform = 'scale(1.05)'
    //logo.style.transform = 'scale(1.05)'
    bear.classList.toggle('glow')
    //logo.classList.toggle('glow')
})

bear.addEventListener('mouseout', () => {
    bear.style.transform = 'scale(1.0)'
    //logo.style.transform = 'scale(1.0)'
    bear.classList.toggle('glow')
    //logo.classList.toggle('glow')
})

overlay.addEventListener('click', () => {
    document.body.style.backgroundColor = ''; // Reset the background color
    document.querySelectorAll('.container, .footercontainer').forEach(element => {
        element.style.opacity = '1';
    })
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)'; // Reset the overlay
});

/*function isScrolledToBottom() {
    return window.innerHeight + window.scrollY >= document.body.offsetHeight;
}

window.addEventListener('scroll', function() {
    if ((window.innerWidth < 600) && (isScrolledToBottom())) {
        document.querySelector('.footer-phone').style.display = 'flex'; 
    } else {
        document.querySelector('.footer-phone').style.display = 'none';
    }
})*/
