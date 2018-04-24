
$('.EO').each(function() {
	var link = $(this).html();
	$(this).contents().wrap('<a href="test.html" target="_blank"></a>');
});
