function initPhotoDesc(){
	$(".post-body img").each(function(){
		var width=$(this).attr('title');
		if(width){
			$(this).width(width)
		}
		var title=$(this).attr('alt');
		var html=$(this)[0].outerHTML;
		if(title&&title.trim()){
			$(this)[0].outerHTML=html+'<p class="photo-desc">“ '+title+' ”</p>';
		}
		
	});
}


function initalGoTop(){
	if($("#goTop").length>0){
		$("#goTop").click(function(){
			var body = $("html, body");
			body.stop().animate({scrollTop:0}, '500', 'swing', function() {});
		});
	}
}