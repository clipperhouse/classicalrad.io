$(function(){
	var pop = $("span.pop");
	pop.fastClick(function() {
		if (window['player'] != undefined) {
			window.player.pause();
		}
		var url = $(this).data('url');
		var width = 350;
		window.open(url, 'pop', 'left=' + (screen.width - width) + ', width=' + width + ', height=400, location=no');
		return false;
	});

	$("a").fastClick(function () {
		top.window.location.href=$(this).attr('href');
	});
});