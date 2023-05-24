const background = document.getElementById('gradient-background');

document.addEventListener('mousemove', function(e) {
    let x = e.pageX / window.innerWidth * 80;
    // let y = e.pageY / window.innerHeight * 100;
    background.style.background = `linear-gradient(${x}deg, rgba(255, 0, 0, 0.7), rgba(255, 165, 0, 0.7), rgba(255, 255, 0, 0.7), rgba(0, 128, 0, 0.7), rgba(0, 0, 255, 0.7), rgba(75, 0, 130, 0.7), rgba(143, 0, 255, 0.7))`;
});

