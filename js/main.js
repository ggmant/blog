initPhotoDesc(){
	$(".post-body img").each(function(){
		var title=$(this).attr('alt');
		var html=$(this)[0].outerHTML;
		$(this)[0].outerHTML=html+'<p class="photo-desc">“ '+title+' ”</p>';
	});
}