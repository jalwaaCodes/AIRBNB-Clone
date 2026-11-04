// GST
let taxSwitch = document.getElementById("switchCheckDefault");
taxSwitch.addEventListener('click', () => {
    let taxInfo = document.getElementsByClassName('tax-info');
    for (info of taxInfo) {
        if (info.style.display != "inline") {
            info.style.display = "inline";
        } else {
            info.style.display = "none";
        }
    }
})

// ICONS
document.querySelectorAll("#filters .filter").forEach(filter => {
    filter.addEventListener("click", function () {
        document.querySelectorAll("#filters .filter").forEach(item => {
            item.classList.remove("active");
        });

        this.classList.add("active");
    });
});

