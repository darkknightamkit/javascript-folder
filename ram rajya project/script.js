const text = "This is Ram Rajya.";
const heading = document.getElementById("first");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    heading.innerHTML += text.charAt(index);
    index++;
    setTimeout(typeWriter, 200); 
  }
}


typeWriter();
