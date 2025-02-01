let secunde = 0;

function incrementare_secunde() {
    secunde++;
    document.getElementById('secunde').textContent = secunde;
}

setInterval(incrementare_secunde, 1000);


let frameworks = 0;

function incrementare_frameworks() {
    frameworks++;
    document.getElementById('frameworks').textContent = frameworks;
}

setInterval(incrementare_frameworks, 2000);