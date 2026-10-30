function changeClass(name) {
    document.querySelectorAll(".topnav a").forEach(link => 
        {
            link.classList.remove("active");
        }
    );

    document.querySelector(`a[id="${name}"]`).classList.add("active");
} 

function changePage(event, button, content) {
    event.preventDefault();

    document.querySelectorAll(".topnav a").forEach(element =>
        {
        element.classList.remove("active");
        }
    );

    document.querySelectorAll(".content").forEach(element =>
        {
        element.hidden = true;
        }
    );

    document.getElementById(button).classList.add("active");

    document.getElementById(content).hidden = false;
}