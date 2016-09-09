var chars = ["█","▓","▒","░","█","▓","▒","░","█","▓","▒","░","<",">","/"];
var b = baffle('#hero', {characters : chars});
b.start()
$('#hero').css('display','block');
b.reveal(2000);
var revealed = true;

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();
  console.log(wScroll);
	if (wScroll > $(window).height() && revealed) {
		b.once();
		console.log("Ocultar");
		revealed = false;
	}

	if (wScroll < $(window).height() && !revealed) {
		b.reveal(500);
		console.log("Reveal");
		revealed = true;
	}


});
