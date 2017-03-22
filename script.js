var quote = document.getElementById('quote');
var click = document.getElementById('click');
var quoteList = [
  "If you’re not prepared to be wrong, you’ll never come up with anything original.",
                 "Be not afraid of going slowly, be afraid only of standing still.",
                 "I have not failed. I've just found 10,000 ways that won't work.",
                 "When it is dark enough, you can see the stars.",
                 "People rarely succeed unless they have fun in what they are doing.",
                 "Learn from yesterday, live for today, hope for tomorrow..",
                 "I hear and I forget, I see and I remember. I do and I understand.",
                 "In teaching others we teach ourselves.",
                 "God gives every bird a worm, but he does not throw it into the nest.",
                 "Keep in mind that neither success nor failure is ever final.",
                 "You must be the change you wish to see in the world.",
                 "The power of imagination makes us infinite.",
                 "You must do the thing you think you cannot do.",
                 "Example isn't another way to teach, it is the only way to teach.",
                 "Don’t wait. The time will never be just right.",
                 "Whatever you are, be a good one.",
                 "If you have never failed you have never lived.",
                 "Learn on, live on!",
                 "Anyone who stops learning is old, whether at twenty or eighty.",
                 "Yesterday is not ours to recover, but tomorrow is ours to win or lose.",
];
var randomQuote = function(){
  var twitter = document.getElementById('twitter');
  var index = Math.floor(Math.random()*quoteList.length);
  twitter.href = "https://twitter.com/intent/tweet?text=" + "\"" +encodeURI(quoteList[index])+"\"%0D%0ATweeted by RandomQuotesMachine";
  quote.innerHTML = quoteList[index];
};
randomQuote();
click.addEventListener('click', randomQuote, false);