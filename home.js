var song = document.getElementById('song');
var slideIndex = 0;
const quoteHtml=document.getElementById("quote");
const author=document.getElementById("author");

showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000);
}

const getNewQuote = async () =>
{
    var url="https://type.fit/api/quotes";    

    const response=await fetch(url);
    const quotes = await response.json();

    const index = Math.floor(Math.random()*quotes.length);

    const quote=quotes[index].text;

    const auth=quotes[index].author;

    if(auth==null)
    {
        author = "Anonymous";
    }

    quoteHtml.innerHTML=quote;
    author.innerHTML="~ "+auth;
}

function playSong() {
  song.play();
}