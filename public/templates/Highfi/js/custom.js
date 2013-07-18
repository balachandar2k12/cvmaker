WebFontConfig = {
	google: { families: [ 'Nova+Round::latin', 'Michroma::latin', 'Oxygen+Mono::latin', 'PT+Serif+Caption::latin', 'Wire+One::latin', 'Anton::latin', 'Merriweather+Sans::latin', 'Fjalla+One::latin' ] }
};
(function() {
	var wf = document.createElement('script');
	wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
	'://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	wf.type = 'text/javascript';
	wf.async = 'true';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(wf, s);
})();
$(document).ready( function() {
    $('#cp4').colorpicker().on('changeColor', function(ev) {
        color = ev.color.toHex();
        $(".blue_bar, .ui-progressbar .ui-progressbar-value").css("background",color);
    });

	$(".ui-progressbar-value").remove();
	$(".progressBar").each(function(){
		var pres_val = ($(this).attr("aria-valuenow"))? parseInt($(this).attr("aria-valuenow")):60;
		console.log(pres_val);
		$(this).progressbar({"value": pres_val});
	});
	$(document).on("click",".progressBar",function(e){
		var maxWidth = $(this).css("width").slice(0, -2); //remove the 'px' from the css-value
		var clickPos = e.pageX - this.offsetLeft; //where have you clicked in the progressbar?
		var percentage = Math.round(clickPos / maxWidth * 100); //convert it to a percentage
		$(this).find(".ui-progressbar-value").animate({
			width: "'"+ percentage+"%'"
		}, 5000);
		$(this).progressbar({"value": percentage});
	});
	// Theme Settings
	$("#themeSettings").click(function () {
		$(".selectionPlace").slideToggle( 400 , "swing" , function(){
			if($("#themeSettings").html()=="Theme Settings")
			{
				$("#themeSettings").html("Close Settings");
				$(".setting-arrow-up").animate({marginTop : "-10px"},500);
			}
			else
			{
				$("#themeSettings").html("Theme Settings");
				$(".setting-arrow-up").animate({marginTop : "0px"},500);
			}
		});
	});
	if(window.cv_id==undefined)
		$("#getPdf").attr("disabled","disabled")
	else
		$("#getPdf").removeAttr("disabled","disabled")
});