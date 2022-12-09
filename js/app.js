const imgZoom = document.getElementById("imgZoom")
const img = document.getElementById("img")

let rect = img.getBoundingClientRect();

img.addEventListener("mousemove", (ev) => {
    const cursor_x = ev.clientX - 350
    const cursor_y = ev.clientY - 260

    const img_x = img.offsetLeft
    const img_y = img.offsetTop

    let coor_x = cursor_x - img_x
    let coor_y = cursor_y - img_y

    imgZoom.clientX = coor_x
    imgZoom.clientY = coor_y

    // console.log(imgZoom.clientY);
    // console.log(imgZoom.clientX)

    let x = coor_x * 100 / imgZoom.clientWidth
    let y = coor_y * 100 / imgZoom.clientHeight

    console.log(x, y)

    imgZoom.style.transform = `translate(${x * -1}%,${y * -1}%)`
})
