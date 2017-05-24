console.log("sourced");

function isEvenOrOdd(num) {
  if (num%2  === 0){
    return "even";
  }
  else {
    return "odd";
  }
}


function makeTitle(str){
  var words = str.split(" ");
  for (i=0; i>str.length; i++){
    i.toUpperCase();
  }
  return words;
}

var string1 = "hello my name is tessa";

function makeTitle(str){
  var words = str.split(" ");
  console.log(words);


  for (var i = 0; i < words.length; i++) {
    // var oneWord = words[i].toString();
    // console.log(oneWord);
    // console.log(oneWord.charAt(0).toUpperCase());
    firstLetter = words[i].charAt(0).toUpperCase();

    arrayWords = words[i].split("");
    console.log("arrayWords", arrayWords);
    arrayWords[0].toUpperCase();
    console.log(arrayWords);



    // words[i].charAt(0) = firstLetter;

    // console.log(words[i]);

    // console.log(oneWord);

    // .toUpperCase();
  }
  // words.charAt(0).toUpperCase();

 //  var roots = words.map(function(x) {
 //    x.charAt(0).toUpperCase();
 //    return words.charAt().toUpperCase();
 // });
  console.log(words);
}

makeTitle(string1);
