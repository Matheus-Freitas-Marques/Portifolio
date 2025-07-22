window.addEventListener('load', function() {
    window.scrollTo(0, 0)
});


const cursor = document.querySelector('.cursor')

document.addEventListener('mousemove', function(info){
    cursor.style.left = info.clientX + 'px'
    cursor.style.top = info.clientY + 'px'
})


const link = document.getElementById('meu-link')

link.addEventListener('mouseover', function(event) {
    event.preventDefault();  
  });