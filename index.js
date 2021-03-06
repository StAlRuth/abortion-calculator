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
  var string = "" + Math.floor(number);
  if(string.length % 3 == 2) {
    string = string.substring(0, 2);
    return string == "18" || string[0] == "8" ? "an" : "a";
  } else {
    string = string[0];
    return string == "8" ? "an" : "a";
  }
}

document.getElementById('button').onclick = (e) => {
  const birthday = new Date(document.getElementById('year').value, document.getElementById('month').value, document.getElementById('date').value);
  const trimesters = getTrimesters(birthday);
  const tweet = `If my mother aborted me today, it would be ${getArticle(trimesters)} ${index(trimesters)} trimester abortion! Find out for yourself at https://abortion.stalruth.dev/ #PostNatalAbortion #HerChildrenHerChoice`;
  document.getElementById('main').style.display = 'none';
  document.getElementById('result').style.display = 'block';
  document.getElementById('part-1').innerText = `If your mother killed you today, it would be ${getArticle(trimesters)} `;
  document.getElementById('part-2').innerText = `${index(trimesters)}`;
  document.getElementById('part-3').innerText = ` trimester abortion. `;
  document.getElementById('tweet-this').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(tweet)}`;
}

document.getElementById('restart').onclick = ()=>{
  document.getElementById('main').style.display = 'block';
  document.getElementById('result').style.display = 'none';
}
