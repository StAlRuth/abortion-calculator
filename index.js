function getTrimesters(birth) {
  let now = new Date();
  var t = 0;
  for(var temp = new Date(birth); temp.setMonth(temp.getMonth() + (t*3)) < now; t++) {
    temp = new Date(birth);
  }
  return t + 3;
}

function index(number) {
  switch(number % 10) {
  case 1:
    return number + "st";
  case 2:
    return number + "nd";
  case 3:
    return number + "rd";
  default:
    return number + "th";
  }
}

function getArticle(number) {
  string = "" + Math.floor(number);
  if(string.length % 3 == 2) {
    string = string.substring(0, 2);
    return string == "18" || string[0] == "8" ? "an" : "a";
  } else {
    string = string[0];
    return string == "8" ? "an" : "a";
  }
}

document.getElementById('button').onclick = function(e) {
  let birthday = new Date(document.getElementById('year').value, document.getElementById('month').value, document.getElementById('date').value);
  console.log(birthday);
  let trimesters = getTrimesters(birthday);
  document.getElementById('main').innerHTML = '<h1>If your mother killed you today, it would be ' + getArticle(trimesters) + ' <strong>' + index(trimesters) + '</strong> trimester abortion.</h1>'
  document.getElementById('second').innerHTML = '<a href="https://twitter.com/intent/tweet?text=' + encodeURIComponent('If my mother killed me today, it would be ' + getArticle(trimesters) + ' ' + index(trimesters) + ' trimester abortion! Find out for yourself at https://stalruth.github.io/abortion-calculator/ #PostNatalAbortion #HerChildrenHerChoice') + '" class="button large expanded">Tweet this!</a>';
}

