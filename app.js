const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  // console.log(document.documentElement);
}

// attempt to get document.documentElement to display in textarea
function insertText(text) {
  document.documentElement = text;
  // console.log(document.documentElement);
}


inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));




$('.home').click(function(e){
  $(document).scrollTop(100)
});

$('.buttons').click(function(e){
    $(document).scrollTop(90)
  });

  $('.images').click(function(e){
    $(document).scrollTop(80)
  });

  $('.neumorphism').click(function(e){
    $(document).scrollTop(70)
  });