// 4 buttons
var button1= document.getElementById('dhn');
var button2= document.getElementById('tc');
var button3= document.getElementById('da');
var button4= document.getElementById('du');

//data drinks
var arr_drinks_img = ['https://images.foody.vn/res/g8/77052/prof/s750x400/foody-upload-api-foody-mobile-toco1-jpg-180814092043.jpg',
					'https://images.foody.vn/res/g91/908416/prof/s640x400/foody-upload-api-foody-mobile-foody-upload-api-foo-190422153927.jpg',
					'https://images.foody.vn/res/g80/797909/prof/s640x400/foody-upload-api-foody-mobile-foody-upload-api-foo-190624100557.jpg',
					'https://images.foody.vn/res/g74/739183/prof/s640x400/foody-upload-api-foody-mobile-royal-4-jpg-180508114551.jpg',
					'https://images.foody.vn/res/g75/745970/prof/s750x400/foody-upload-api-foody-mobile-lt1-jpg-181005101950.jpg',
					'https://images.foody.vn/res/g78/776460/prof/s640x400/foody-upload-api-foody-mobile-mixue-jpg-181225135911.jpg',
					'https://images.foody.vn/res/g95/942669/prof/s640x400/foody-upload-api-foody-mobile-avar61-190809091935.jpg',
					'https://images.foody.vn/res/g94/935551/prof/s640x400/foody-upload-api-foody-mobile-foody-upload-api-foo-190704163901.jpg',
					'https://images.foody.vn/res/g96/951851/prof/s640x400/foody-upload-api-foody-mobile-foody-upload-api-foo-190829155725.jpg',
					'https://images.foody.vn/res/g64/631708/prof/s750x400/foody-upload-api-foody-mobile-toco1-jpg-180814094718.jpg'];
var arr_drinks_res = ['Trà sữa Tocotoco - Cầu Diễn',
					'Phúc Long Coffee & Tea - Hàng Điếu',
					'The Alley - Trà Sữa Đài Loan - Trần Đăng Ninh',
					'Royaltea Vietnam By Hongkong - Xa La',
					'Leetee - Tea & Juice - Hồ Tùng Mậu',
					'Trà Sữa Mixue - Chùa Láng',
					'Trà Chanh Bụi Phố - Phan Đình Phùng',
					'Tmore - Tiệm Trà Chanh - Nguyễn Văn Huyên',
					'Trà Sữa Tasters Choice - Vũ Trọng Phụng',
					'Trà Sữa Tocotoco - 39 Quang Trung'];
var arr_drinks_add = ['2 Nguyễn Đổng Chi (153 Hồ Tùng Mậu), Quận Nam Từ Liêm, Hà Nội',
					'82 - 84 Hàng Điếu, Quận Hoàn Kiếm, Hà Nội',
					'17 Trần Đăng Ninh Kéo Dài, Quận Cầu Giấy, Hà Nội',
					'Chung Cư Newhouse, KĐT Xa La, Quận Hà Đông, Hà Nội',
					'58 Hồ Tùng Mậu, P. Mai Dịch, Quận Cầu Giấy, Hà Nội',
					'46 Chùa Láng, Quận Đống Đa, Hà Nội',
					'11 Phan Đình Phùng, P. Quán Thánh, Quận Ba Đình, Hà Nội',
					'16 Nguyễn Văn Huyên, Quận Cầu Giấy, Hà Nội',
					'112 Vũ Trọng Phụng, Quận Thanh Xuân, Hà Nội',
					'39 Quang Trung, Quận Hà Đông, Hà Nội'];
//button 4 Do uong
var img_arr= document.getElementsByName('img');
var name_arr= document.getElementsByName('res');
var add_arr = document.getElementsByName('add');
function but4click()
{
	for (var i = 0; i < img_arr.length; i++) {
		img_arr[i].src = arr_drinks_img[i];
		img_arr[i].title = arr_drinks_res[i];
		name_arr[i].innerHTML = "<strong>"+arr_drinks_res[i]+"</strong>";
		add_arr[i].innerHTML = arr_drinks_add[i];
	}
}



