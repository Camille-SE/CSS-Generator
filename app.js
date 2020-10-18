const inputs = document.querySelectorAll('.controls input');
const textareaImg = document.getElementById("code-container-img");
const textareaBtn = document.getElementById("code-container-btn");
const textareaSav = document.getElementById("code-container-sav");

document.getElementById("btn-slide").addEventListener("click",
function() {
  document.getElementById("code-container-btn").innerHTML = "transition: color 300ms ease-in-out;"
})

document.getElementById("btn-pop").addEventListener("click",
function() {
  document.getElementById("code-container-btn").innerHTML = "transition: top, left, right, bottom, 100ms ease-in-out;"
})

document.getElementById("btn-glow").addEventListener("click",
function() {
  document.getElementById("code-container-btn").innerHTML = "background: linear-gradient(45deg, #fb0094, #00f, #0f0, #ff0, #f00,#fb0094, #00f, #0f0, #ff0, #f00);"
})

document.getElementById("btn-circle").addEventListener("click",
function() {
  document.getElementById("code-container-btn").innerHTML = "transition: transform 500ms ease-in-out;"
})

document.getElementById("btn-shine").addEventListener("click",
function() {
  document.getElementById("code-container-btn").innerHTML = "background: linear-gradient(90deg, transparent, #fff, transparent);"
})

document.getElementById("btn-line").addEventListener("click",
function() {
  document.getElementById("code-container-btn").innerHTML = "transition: transform 300ms ease-in-out;"
})

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  // console.log(document.documentElement);
  textareaImg.innerText = this.alt + ": " + this.value
  // textareaSav.innerText = this.name + ": " + this.value
}

document.getElementById("save-btn").addEventListener("click",
function() {
  document.getElementById("code-container-sav").innerHTML = textareaBtn.innerHTML
})

document.getElementById("save-btn-img").addEventListener("click",
function() {
  document.getElementById("code-container-sav").innerHTML = textareaImg.innerHTML
})

inputs.forEach(input => input.addEventListener('change', handleUpdate));
// inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));




$('.home').click(function(e){
  $(document).scrollTop(100)
});

$('.buttons').click(function(e){
  $(document).scrollTop(90)
});

$('.images').click(function(e){
  $(document).scrollTop(80)
});

$('.saved').click(function(e){
  $(document).scrollTop(70)
});