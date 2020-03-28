

$(function() {
	//初始化地址控件
	$('#getArea').getArea({
		defaultArea: [0, 0, 0],
		inpEle: '#getArea',
		normalArea: true
	});
})

function getAddress() {
	//如果使用了智能识别的话就自动清空信息
	$("#userReceiveName").val("");
	$("#userMobile").val("");


	var parse_list = smart($('#textarea').val())
	console.log(parse_list);

	var userReceiveName = parse_list.name;
	var userMobile = parse_list.phone;
	var province = parse_list.province == undefined ? '' : parse_list.province;
	var city = parse_list.city == undefined ? '' : parse_list.city;
	var county = parse_list.county == undefined ? '' : parse_list.county;
	var street = parse_list.street;
	var address = parse_list.address;

	if (userReceiveName != "" && userReceiveName != undefined) {
		$("#userReceiveName").val(userReceiveName);
	}
	if (userMobile != "" && userMobile != undefined) {
		$("#userMobile").val(userMobile);
	}
	var detailAddress = "";
	if (street != "" && street != undefined) {
		detailAddress += street;
	}

	if (address != "" && address != undefined) {
		detailAddress += address
	}
	$("#userAddress").val(detailAddress);

	//下面进行省市县地区的选择
	userPCAStr = "";
	if(province != ''){
		userPCAStr = province;
	}
	if(city != ''){
		userPCAStr +=  ","+city;
	}
	if(county !=''){
		userPCAStr +=  ","+county;
	}
	$("#getArea").val(userPCAStr);
}

//IOS版本下可能会有fastClick相关的问题
// 首先禁止body
document.body.addEventListener('touchmove' , function(e){
　　var e=e||window.event;
　　e.preventDefault();
},{ passive: false })

 $(".myNeedFocus").bind("click",function(){
 	$(this).focus();
 })