function initPhotoDesc(){
	initTopAd();
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
				'<ins class="adsbygoogle" data-ad-client="ca-pub-8384162002444497" data-ad-format="auto" data-ad-slot="1452756561" style="display: block;"></ins>'+
				'</div>'+
				'<!---- GGM 內文廣告:end ---->';
				
		}

		$(this)[0].outerHTML=html+addTitle+addAD;
		if(addAD)(adsbygoogle = window.adsbygoogle || []).push({}); 
	});

}

function initTopAd(){
	if($(window).width()>660){
	$(".post-body img").eq(0).after(
		'<!-- GGMant_側邊欄廣告 -->\
		<div style="width:660px;">\
		<ins class="adsbygoogle"\
		     style="float:left;width:300px;height:250px;margin-right:30px"\
		     data-ad-client="ca-pub-8384162002444497"\
		     data-ad-slot="1767154162"></ins>\
		<ins class="adsbygoogle"\
		     style="float:left;width:300px;height:250px;margin-left:30px"\
		     data-ad-client="ca-pub-8384162002444497"\
		     data-ad-slot="1767154162"></ins>\
		</div><br/>');(adsbygoogle = window.adsbygoogle || []).push({}); (adsbygoogle = window.adsbygoogle || []).push({}); 
	}else{
		$(".post-body img").eq(0).after(
		'<!-- GGMant_側邊欄廣告 -->\
		<div >\
		<ins class="adsbygoogle"\
		     style="display:inline-block;width:336px;height:280px;margin-right:30px"\
		     data-ad-client="ca-pub-8384162002444497"\
		     data-ad-slot="1767154162"></ins>\
		</div><br/>');(adsbygoogle = window.adsbygoogle || []).push({}); 	
	}
}


function initalGoTop(){
	if($("#goTop").length>0){
		$("#goTop").click(function(){
			var body = $("html, body");
			body.stop().animate({scrollTop:0}, '500', 'swing', function() {});
		});
	}
}
