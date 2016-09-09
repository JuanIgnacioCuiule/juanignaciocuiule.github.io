var chars = ["█","▓","▒","░","█","▓","▒","░","█","▓","▒","░","<",">","/"];
var b = baffle('#hero', {characters : chars});
b.start()
$('#hero').css('display','block');
b.reveal(2000);
var revealed = true;

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  console.log(wScroll);

	if (wScroll > 300 && revealed) {
		b.start();
		revealed = false;
	}

	if (wScroll < 300 && !revealed) {
		b.reveal(500)
		revealed = true;
	}


});
