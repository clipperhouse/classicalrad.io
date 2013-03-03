$(function() {
	MediaElement('player', {
		success: function(me) {
			window.player = me;
			var control = $('#control');
			var status = $("#status")
			var title = $("title");
			
			me.play();
			
			control.fastClick(function() {
				if (me.paused) {
					me.play();
				}
				else {
					me.pause();
				}
				return false;
			});

			me.addEventListener('play', function() {
				control.addClass('playing');
				status.text('Loading...');
			}, false);

			me.addEventListener('pause', function() {
				control.removeClass('playing');
			}, false);

			me.addEventListener('timeupdate', function() {
				status.text(timeDisplay(me.currentTime, 'Playing for '));
			}, false);
		}
	});

	function timeDisplay(seconds, prefix) {
		var secs = Math.floor(seconds) % 60;
		var minutes = Math.floor(seconds / 60) % 60;
		var hours = Math.floor(seconds / 3600);

		if (hours > 23) {
			return prefix + pluralize(' hour', hours)
		}

		if (hours > 0) {
			return prefix + pluralize(' hour', hours) + ' and ' + pluralize(' minute', minutes);
		}

		if (minutes > 0) {
			return prefix + pluralize(' minute', minutes) + ' and ' + pluralize(' second', secs);
		}

		return prefix + pluralize(' second', secs);
	}

	function pluralize(word, num) {
		return num + (num != 1 ? word + 's' : word);
	}
});