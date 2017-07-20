for( var i = 1; i < 101; i++ ){
	var output = "";
  var word = false;

  if (i % 3 == 0 ){
  	output += "Fizz"
    word = true;
  }
  if (i % 5 == 0 ){
  	output += "Buzz"
    word = true;
  }
  if( word == false ){
  	output = i.toString();
  }
	console.log( output );
}