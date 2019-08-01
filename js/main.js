function initPhotoDesc(){
	var index=0;
	$(".post-body img").each(function(){
		var width=$(this).attr('title');
		var addTitle="";
		var addAD="";
		if(width){
			$(this).width(width)
		}
		var title=$(this).attr('alt');
		var html=$(this)[0].outerHTML;
		if(title&&title.trim()){
			addTitle='<p class="photo-desc"><span class="font-farro">“<span> '+title+' <span class="font-farro">”<span></p>';
		}
		index++;
		if(index%10==0){
				addAD='<!---- GGM 內文廣告:start ---->'+
				'<br />'+
				'<div class="ads">'+
				'<!-- GGMant_內文廣告 -->'+
				'<br />'+
				'<ins class="adsbygoogle" data-ad-client="ca-pub-8384162002444497" data-ad-format="auto" data-ad-slot="1452756561" style="display: block;"></ins><script>'+
				'(adsbygoogle = window.adsbygoogle || []).push({}); </scr'+'ipt>'+
				'</div>'+
				'<!---- GGM 內文廣告:end ---->';
		}

		$(this)[0].outerHTML=html+addTitle+addAD;
		
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