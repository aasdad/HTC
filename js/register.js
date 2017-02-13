$(function(){
	$(".select").load("select.html");
	
	$(".birthdayM").css("display","none")
	$(".mouth2").toggle(function(){
	$(".birthdayM").css("display","block")
	$(".birthdayM").attr("size","15");
	},function(){
		$(".birthdayM").removeAttr("size");
		$(".birthdayM").css("display","none")
	})
	
	$(".birthdayD").css("display","none")
	$(".day2").toggle(function(){
	$(".birthdayD").css("display","block")
	$(".birthdayD").attr("size","15");
	},function(){
		$(".birthdayD").removeAttr("size");
		$(".birthdayD").css("display","none")
	})
	
	$(".birthdayY").css("display","none")
	$(".year2").toggle(function(){
	$(".birthdayY").css("display","block")
	$(".birthdayY").attr("size","15");
	},function(){
		$(".birthdayY").removeAttr("size");
		$(".birthdayY").css("display","none")
	})
	
})
