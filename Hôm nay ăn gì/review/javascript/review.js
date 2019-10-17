// 4 buttons
var button1= document.getElementById('dhn');
var button2= document.getElementById('tc');
var button3= document.getElementById('da');
var button4= document.getElementById('du');

//button list
var btn_list = document.getElementsByClassName('bt');
console.log(btn_list);
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
	for (var i = 0; i < btn_list.length; i++) {
		btn_list[i].style.borderBottom ="none";
	}
	for (var i = 0; i < name_arr.length; i++) {
		name_arr[i].href ="";
	}
	for (var i = 0; i < add_arr.length; i++) {
		add_arr[i].href = "";
	}
	btn_list[3].style.borderBottom = "solid 2px #BFA640" ; 
}


//all food
var arr_foods_img = ['https://images.foody.vn/res/g11/105260/prof/s750x400/foody-upload-api-foody-mobile-com-jpg-180813103513.jpg',
'https://images.foody.vn/res/g81/800274/prof/s750x400/foody-upload-api-foody-mobile-hoang-hue-jpg-181114155443.jpg',
'https://images.foody.vn/res/g70/692705/prof/s750x400/foody-mobile-linh-jpg.jpg',
'https://images.foody.vn/res/g25/243395/prof/s750x400/foody-upload-api-foody-mobile-ava-com-tam-hang-1-190912101526.jpg',
'https://images.foody.vn/res/g86/859888/prof/s750x400/foody-upload-api-foody-mobile-avata-bun-dau-191007114147.jpg',
'https://images.foody.vn/res/g66/652355/prof/s750x400/foody-mobile-foody-banh-mi-pho-ha-746-636280230558379455.jpg',
'https://images.foody.vn/res/g31/301198/prof/s750x400/foody-upload-api-foody-mobile-avar40-190409115739.jpg',
'https://images.foody.vn/res/g71/708698/prof/s750x400/foody-upload-api-foody-mobile-dzui-jpg-180528113631.jpg',
'https://images.foody.vn/res/g1/8921/prof/s750x400/foody-upload-api-foody-mobile-avar45-190904101635.jpg',
'https://images.foody.vn/res/g23/222582/prof/s750x400/foody-mobile-5879-jpg-154-636341507032302599.jpg'];

var arr_foods_add = ['263 Trần Đại Nghĩa, Quận Hai Bà Trưng, Hà Nội',
'8B Ngõ 4 Ao Sen, Quận Hà Đông, Hà Nội',
'1 Ngách 5 Ngõ 20 Nguyễn Chánh, Quận Cầu Giấy, Hà Nội',
'12 Ngõ 16 Huỳnh Thúc Kháng, Quận Đống Đa, Hà Nội',
'110 A8 Nghĩa Tân (Đối Diện 44 Trần Tử Bình), Quận Cầu Giấy, Hà Nội',
'8 Quán Sứ, Quận Hoàn Kiếm, Hà Nội',
'102 Ngõ 4C Đặng Văn Ngữ, Quận Đống Đa, Hà Nội',
'9C Ngõ 4C Đặng Văn Ngữ, Quận Đống Đa, Hà Nội',
'55 Phố Huế, Quận Hai Bà Trưng, Hà Nội',
'303 - 305 Tô Hiệu, Quận Cầu Giấy, Hà Nội'];

var arr_foods_res = ['Cơm Gà Giòn Booby - Trần Đại Nghĩa',
'Hoàng Huệ - Cơm Rang & Bún Bò Trộn',
'Eatwell - Healthy Food',
'Cơm Tấm Hằng',
'Bún Đậu Mắm Tôm - Nghĩa Tân',
'Bánh Mì Phố - Quán Sứ',
'The Canteen - Food & Drinks - Đặng Văn Ngữ',
'Dzui - Đồ Ăn Vặt',
'Cơm 123 - Phố Huế',
'Jollibee - Tô Hiệu'];

function but3click()
{
	for (var i = 0; i < img_arr.length; i++) {
		img_arr[i].src = arr_foods_img[i];
		img_arr[i].title = arr_foods_res[i];
		name_arr[i].innerHTML = "<strong>"+arr_foods_res[i]+"</strong>";
		add_arr[i].innerHTML = arr_foods_add[i];
	}
	for (var i = 0; i < btn_list.length; i++) {
		btn_list[i].style.borderBottom ="none";
	}
	for (var i = 0; i < name_arr.length; i++) {
		name_arr[i].href ="";
	}
	for (var i = 0; i < add_arr.length; i++) {
		add_arr[i].href = "";
	}
	btn_list[2].style.borderBottom = "solid 2px #BFA640" ; 
	name_arr[0].href = "com_ga_bobby.html";
	add_arr[0].href = "com_ga_bobby.html";

}

console.log(name_arr[0].src)
//all deal

var arr_deals_res =['Apollato - Chicken & Pizza',
'63 Trần Nhân Tông, Quận Hai Bà Trưng, Hà Nội',
'Chè Ngon Hà Nội & Món Ngon Đường Phố - Tô Hiệu',
'Cơm Tấm Sài Gòn Út Thắng - Kim Mã',
'Vit Meiwei - Mỹ Vị Hongkong',
'Bà Béo - Ăn Vặt Online',
'TacoZone - Shop Online - Trung Kính',
'Trà Sữa Heytea - Đào Tấn',
'Cơm Gà Bảo Nam - Cơm Văn Phòng Online',
'Cốm Làng Vòng Gia Truyền Chính Hiệu - Shop Online'];

var arr_deals_add =['Ki Ốt 8 Nhà G3 ĐH Quốc Gia Hà Nội, 144 Xuân Thủy, Quận Cầu Giấy, Hà Nội',
'Trư Ký Hotpot - Lẩu 1 Người',
'297 Tô Hiệu, Quận Cầu Giấy, Hà Nội',
'269 Kim Mã, Quận Ba Đình, Hà Nội',
'42A Lý Thương Kiệt, Quận Hoàn Kiếm, Hà Nội',
'44 Ngõ 178 Kim Hoa, Quận Đống Đa, Hà Nội',
'168 Trung Kính, Quận Cầu Giấy, Hà Nội',
'58 Đào Tấn, Quận Ba Đình, Hà Nội',
'26A Ngõ 143 Ngõ Chợ Khâm Thiên, Quận Đống Đa, Hà Nội',
'26 Ngách 44/130 Trần Thái Tông, Quận Cầu Giấy, Hà Nội'];

var arr_deals_img =['https://images.foody.vn/res/g92/916761/prof/s750x400/foody-upload-api-foody-mobile-mi-y-190515102818.jpg',
'https://images.foody.vn/res/g71/702953/prof/s750x400/foody-upload-api-foody-mobile-t-jpg-181123145032.jpg',
'https://images.foody.vn/res/g26/255600/prof/s750x400/foody-upload-api-foody-mobile-avar1-jpg-181126093556.jpg',
'https://images.foody.vn/res/g79/789758/prof/s750x400/foody-upload-api-foody-mobile-ut-thang-jpg-181208143441.jpg',
'https://images.foody.vn/res/g72/715549/prof/s750x400/foody-mobile-vit-quay-tieu-bo-jpg.jpg',
'https://images.foody.vn/res/g89/889000/prof/s750x400/foody-upload-api-foody-mobile-ba-beo-190401163222.jpg',
'https://images.foody.vn/res/g91/905993/prof/s750x400/foody-upload-api-foody-mobile-taco1-190416105058.jpg',
'https://images.foody.vn/res/g71/702519/prof/s750x400/foody-upload-api-foody-mobile-tra-jpg-180905091431.jpg',
'https://images.foody.vn/res/g32/317363/prof/s750x400/foody-upload-api-foody-mobile-comgabn-190524164843.jpg',
'https://images.foody.vn/res/g96/952518/prof/s750x400/foody-upload-api-foody-mobile-avar8-190903103620.jpg'];

function but1click()
{
	for (var i = 0; i < img_arr.length; i++) {
		img_arr[i].src = arr_deals_img[i];
		img_arr[i].title = arr_deals_res[i];
		name_arr[i].innerHTML = "<strong>"+arr_deals_res[i]+"</strong>";
		add_arr[i].innerHTML = arr_deals_add[i];
	}
	for (var i = 0; i < btn_list.length; i++) {
		btn_list[i].style.borderBottom ="none";
	}
	for (var i = 0; i < name_arr.length; i++) {
		name_arr[i].href ="";
	}
	for (var i = 0; i < add_arr.length; i++) {
		add_arr[i].href = "";
	}
	btn_list[0].style.borderBottom = "solid 2px #BFA640" ; 
		name_arr[0].href = "che_ngon_hn.html";
	add_arr[0].href = "che_ngon_hn.html";
}

//all

var arr_all_img =['https://images.foody.vn/res/g8/77052/prof/s750x400/foody-upload-api-foody-mobile-toco1-jpg-180814092043.jpg',
					
					'https://images.foody.vn/res/g75/745970/prof/s750x400/foody-upload-api-foody-mobile-lt1-jpg-181005101950.jpg',
					'https://images.foody.vn/res/g78/776460/prof/s640x400/foody-upload-api-foody-mobile-mixue-jpg-181225135911.jpg',
					'https://images.foody.vn/res/g95/942669/prof/s640x400/foody-upload-api-foody-mobile-avar61-190809091935.jpg',
					
					'https://images.foody.vn/res/g81/800274/prof/s750x400/foody-upload-api-foody-mobile-hoang-hue-jpg-181114155443.jpg',
					'https://images.foody.vn/res/g70/692705/prof/s750x400/foody-mobile-linh-jpg.jpg',
					'https://images.foody.vn/res/g25/243395/prof/s750x400/foody-upload-api-foody-mobile-ava-com-tam-hang-1-190912101526.jpg',
					'https://images.foody.vn/res/g86/859888/prof/s750x400/foody-upload-api-foody-mobile-avata-bun-dau-191007114147.jpg',
					'https://images.foody.vn/res/g66/652355/prof/s750x400/foody-mobile-foody-banh-mi-pho-ha-746-636280230558379455.jpg',
					
					'https://images.foody.vn/res/g23/222582/prof/s750x400/foody-mobile-5879-jpg-154-636341507032302599.jpg'];

var arr_all_res =['Trà sữa Tocotoco - Cầu Diễn',
					
					'Leetee - Tea & Juice - Hồ Tùng Mậu',
					'Trà Sữa Mixue - Chùa Láng',
					'Trà Chanh Bụi Phố - Phan Đình Phùng',
					
					'Hoàng Huệ - Cơm Rang & Bún Bò Trộn',
					'Eatwell - Healthy Food',
					'Cơm Tấm Hằng',
					'Bún Đậu Mắm Tôm - Nghĩa Tân',
					'Bánh Mì Phố - Quán Sứ',
					
					'Jollibee - Tô Hiệu',
				];

var arr_all_add =['263 Trần Đại Nghĩa, Quận Hai Bà Trưng, Hà Nội',

'110 A8 Nghĩa Tân (Đối Diện 44 Trần Tử Bình), Quận Cầu Giấy, Hà Nội',
'8 Quán Sứ, Quận Hoàn Kiếm, Hà Nội',
'102 Ngõ 4C Đặng Văn Ngữ, Quận Đống Đa, Hà Nội',

'Trư Ký Hotpot - Lẩu 1 Người',
'297 Tô Hiệu, Quận Cầu Giấy, Hà Nội',
'269 Kim Mã, Quận Ba Đình, Hà Nội',
'42A Lý Thương Kiệt, Quận Hoàn Kiếm, Hà Nội',
'44 Ngõ 178 Kim Hoa, Quận Đống Đa, Hà Nội',

'26 Ngách 44/130 Trần Thái Tông, Quận Cầu Giấy, Hà Nội'];


function but2click()
{
	for (var i = 0; i < img_arr.length; i++) {
		img_arr[i].src = arr_all_img[i];
		img_arr[i].title = arr_all_res[i];
		name_arr[i].innerHTML = "<strong>"+arr_all_res[i]+"</strong>";
		add_arr[i].innerHTML = arr_all_add[i];
	}
	for (var i = 0; i < btn_list.length; i++) {
		btn_list[i].style.borderBottom ="none";
	}

	for (var i = 0; i < name_arr.length; i++) {
		name_arr[i].href ="";
	}
	for (var i = 0; i < add_arr.length; i++) {
		add_arr[i].href = "";
	}
	btn_list[1].style.borderBottom = "solid 2px #BFA640" ; 
}


var arr_all_search_res = arr_drinks_res.concat(arr_foods_res);
function ac(value) { 
        document.getElementById('datalist').innerHTML = ''; 
         //setting datalist empty at the start of function 
         //if we skip this step, same name will be repeated 
           
         l=value.length; 
         //input query length 
     for (var i = 0; i<arr_all_search_res.length; i++) { 
         if(((arr_all_search_res[i].toLowerCase()).indexOf(value.toLowerCase()))>-1) 
         { 
             //comparing if input string is existing in tags[i] string 
  				
             var node = document.createElement("option"); 
             var val = document.createTextNode(arr_all_search_res[i]); 
              node.appendChild(val); 
  
               document.getElementById("datalist").appendChild(node); 
                   //creating and appending new elements in data list 
             } 
         } 
     } 
