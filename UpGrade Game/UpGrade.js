		function Qb(name, pass, focus) {
			this.name = name;
			this.pass = pass;
			this.focus = focus;
			this.position = 0;
			this.sack = -4;

			this.isFocused = function() {
				return Math.floor(Math.random(0) * 10) < this.focus;
			}

			this.advance = function() {
				if (this.isFocused()) {
					this.position += this.pass;
				} else {
					this.position += this.sack;
				}
			}
			}

		function onButtonClick() {

		var brees = new Qb("Drew Brees", 8, 7);
		var brady = new Qb("Tom Brady", 6, 5);
		var wilson = new Qb("Russell Wilson", 7, 7);
		var kaepernick = new Qb("Colin Kaepernick", 7, 7);
		var yards = 100;

		var timerId = setInterval(function(){
			if (brees.position < yards && brady.position < yards && wilson.position < yards && kaepernick.position < yards) {

			brees.advance();
			brady.advance();
			wilson.advance();
			kaepernick.advance();

			$('#saints').css('left', brees.position + '1.5px');
			$('#patriots').css('left', brady.position + '1.5px');
			$('#sanfran').css('left', kaepernick.position + '1.5px');
			$('#seahawks').css('left', wilson.position + '1.5px');
			} else {
		    	clearInterval(timerId);
		 	 }
			} , 100);
	}

	$( "button" ).on('click', onButtonClick);