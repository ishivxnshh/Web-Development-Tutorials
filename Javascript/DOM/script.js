let ctr = 0;
function callback() {
    const el = document.querySelectorAll("h2")[1];
    el.textContent = ctr;
    ctr++;
}

setInterval(callback, 1000);