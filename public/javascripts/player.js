$(function() {
	$('audio').mediaelementplayer({
		mode: 'auto_plugin',
		audioWidth: '92',
		audioHeight: '92',
		features: ['playpause'],
		pluginPath: '/mediaelement/',
		success : function(me) {
			var status = $("#status");

			me.addEventListener('play', function() {
				status.text('Loading...');
			}, false);

			me.addEventListener('timeupdate', function() {
				if (me.currentTime > 1) {
					status.text(timeDisplay(me.currentTime, 'Playing for '));
				}
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