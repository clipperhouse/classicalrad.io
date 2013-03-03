$(function() {
	MediaElement('player', {
		success: function(me) {
			var control = $('#control');
			var status = $("#status")
			me.play();
			
			control.click(function() {
				if (me.paused)
					me.play();
				else
					me.pause();
			});

			me.addEventListener('play', function() {
				control.addClass('playing');
			}, false);

			me.addEventListener('pause', function() {
				control.removeClass('playing');
			}, false);

			me.addEventListener('timeupdate', function() {
				status.text("Playing for " + Math.round(me.currentTime) + " seconds");
			}, false);				
		}
	});
});