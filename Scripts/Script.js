const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})  

document.addEventListener('click', () => {
cursor.classList.add("expand");

setTimeout(() => {
  cursor.classList.remove("expand");
}, 500)
})

anime.timeline()
  .add({
    targets: '.ml15 .word',
    scale: [2,1],
    opacity: [0,1],
    easing: "linear",
    duration: 1800,
    delay: (el, i) => 2000 * i
  })




  
  