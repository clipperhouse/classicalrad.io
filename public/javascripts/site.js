$(function(){
	var pop = $("span.pop");

	pop.click(function() {
		if (window['player'] != undefined) {
			window.player.pause();
		}
		var url = $(this).data('url');
		var width = 350;
		window.open(url, 'pop', 'left=' + (screen.width - width) + ', width=' + width + ', height=360, location=no');
		document.location.href = '/';
		return false;
	});

	var mobile = $("body").hasClass("mobile");
	if (mobile) {
		$("a").fastClick(function () {
			top.window.location.href=$(this).attr('href');
		});
	}
});