const createPlayground = () => {
    const poster = document.getElementById("poster")
    const gif = document.getElementById("gif")
    const playground = document.querySelector(".playground")
    let [file] = poster.files
    if (file) {
        let image = document.createElement("img")
        image.src = URL.createObjectURL(file)
        image.classList.add("img")
        image.classList.add("poster")
        playground.querySelector(".poster-wrapper").appendChild(image)
    }
    [file] = gif.files
    if (file) {
        let image = document.createElement("img")
        image.src = URL.createObjectURL(file)
        image.classList.add("img")
        image.classList.add("gif")
        playground.querySelector(".gif-wrapper").appendChild(image)
    }
    const form = document.querySelector("form")
    while (form.firstChild)
        form.removeChild(form.firstChild)
    setTimeout(() => {
        $('.poster').resizable({
            handles: "n, e, s, w"
        });
        $('.gif').resizable({
            handles: "n, e, s, w"
        });
        $(function () {
            $(".poster-wrapper").draggable({
                grid: [25, 10]
            });
        });
        $(function () {
            $(".gif-wrapper").draggable({
                grid: [25, 10]
            });
        });
    }, 100)
}


