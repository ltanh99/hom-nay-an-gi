
const checkall = document.getElementById('checkall');
var check = document.getElementsByName('check');
var dongia = document.getElementsByName('dongia');
var soluong = document.getElementsByName('soluong');
var sotien = document.getElementsByName('sotien');
var tru = document.getElementsByName('tru');
var cong = document.getElementsByName('cong');
var tongmon = document.getElementById('tongmon');
var tongtien = document.getElementById('tongtien');
var button = document.getElementsByName('button');
var thanhtoan = document.getElementById('thanhtoan');
var cuahang = document.getElementById('cuahang');
var menu = document.getElementById('menu');
var trong = document.getElementById("trong");
trong.style.display = "none";
var dem = button.length;
tongmon.innerHTML = 0;
tongtien.innerHTML = 0;
for( var i = 0; i<check.length; i++){
	tongmon.innerHTML = parseInt(tongmon.innerHTML) + parseInt(soluong[i].innerHTML);
	check[i].onchange = function(){
		if(this.checked){
			for(var i=0; i<check.length; i++){
				if(check[i] == this){
				 tongtien.innerHTML = parseInt(tongtien.innerHTML) + parseInt(sotien[i].innerHTML);
				}
			}
			var j =0;
			for(j; j<check.length; j++){
				if(check[j].checked == false){
					checkall.checked = false;
				 break;
				}
			}if(j == check.length) checkall.checked = true;

		}else{
			checkall.checked = false;
			
			for(var j=0; j<check.length; j++){
				if(check[j] == this){
				 tongtien.innerHTML = parseInt(tongtien.innerHTML) - parseInt(sotien[j].innerHTML);
				}
			}
		}

	}
	
	tru[i].parentElement.onclick = function(){
		
		for(var i = 0; i< tru.length; i++){
			if(tru[i].parentElement == this){
				soluong[i].innerHTML = parseInt(soluong[i].innerHTML) - 1;
				tongmon.innerHTML = parseInt(tongmon.innerHTML) - 1;
				sotien[i].innerHTML = parseInt(dongia[i].innerHTML) * parseInt(soluong[i].innerHTML);
				if(soluong[i].innerHTML <= 0) button[i].onclick();
				if(check[i].checked){
					tongtien.innerHTML = parseInt(tongtien.innerHTML) - parseInt(dongia[i].innerHTML);
				}

			}
		}
	}
	cong[i].parentElement.onclick = function(){
		for(var i = 0; i< cong.length; i++){
			if(cong[i].parentElement == this){
				soluong[i].innerHTML = parseInt(soluong[i].innerHTML) + 1;
				tongmon.innerHTML = parseInt(tongmon.innerHTML) + 1;
				sotien[i].innerHTML = parseInt(dongia[i].innerHTML) * parseInt(soluong[i].innerHTML);
				if(check[i].checked){
					tongtien.innerHTML = parseInt(tongtien.innerHTML) + parseInt(dongia[i].innerHTML);
				}
			}
		}
	}

	tru[i].onclick = function(){
		for(var i = 0; i<tru.length;i++){
			if(tru[i] == this){
				cong[i].parentElement.onclick();
			}
		}
	}
	cong[i].onclick = function(){
		for(var i = 0; i<cong.length;i++){
			if(cong[i] == this){
				tru[i].parentElement.onclick();
			}
		}
	}
	
	button[i].onclick = function(){
		dem--;
		if(dem == 0){
			thanhtoan.style.display = "none";
			cuahang.style.display = "none";
			menu.style.display = "none";
			trong.style.display  ="";
		}
	
		this.parentElement.parentElement.parentElement.parentElement.parentElement.style.display = "none";
		
		for(var i=0; i<button.length; i++){
			
			if(button[i] == this){
				tongmon.innerHTML = parseInt(tongmon.innerHTML) -parseInt(soluong[i].innerHTML);
				if(check[i].checked){
				tongtien.innerHTML = parseInt(tongtien.innerHTML) - parseInt(sotien[i].innerHTML);
				}
			}
		}
		
	}
	sotien[i].innerHTML = parseInt(dongia[i].innerHTML) * parseInt(soluong[i].innerHTML);
}
checkall.onchange = function(){

	var check = document.getElementsByName('check');
	if(checkall.checked){
		tongtien.innerHTML = 0;
		for(var i =0; i<check.length; i++){
			check[i].checked = true;
			check[i].onchange();
		}
	}else{
		for(var i =0; i<check.length; i++){
			check[i].checked = false;
			check[i].onchange();
			tongtien.innerHTML = 0;
		}
	}
}
