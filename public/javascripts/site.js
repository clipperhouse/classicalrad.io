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

	var home = $("body").hasClass("home");
	if (home) {
		$("p.more > a").each(function(){
			$(this).data("original", $(this).text())
		})
		.fastClick(function () {
			var a = $(this);
			$("#surprise").slideToggle(function(){
				var visible = $(this).is(":visible");
				if (visible) {
					a.text(a.data("toggle"));
				} else {
					a.text(a.data("original"));					
				}
			});
			return false;
		});
	}
});