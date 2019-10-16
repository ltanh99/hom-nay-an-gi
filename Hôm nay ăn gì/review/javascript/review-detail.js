
function Fsearch(){
arr_food = document.getElementsByName('food-title');

search_food = document.getElementById('Search-food');

type = document.getElementById('type-title');

type_arr  = document.getElementsByClassName('type');

filter = search_food.value.toUpperCase();
	
	for (var i = 0; i < arr_food.length; i++) {
		a = arr_food[i];
		txtval = a.textContent || a.innerText;
		if(txtval.toUpperCase().indexOf(filter)>-1){
			arr_food[i].parentNode.parentNode.parentNode.style.display = "";
		}	
		else{
			arr_food[i].parentNode.parentNode.parentNode.style.display ="none";
			}			
		}

arr_tmp =[];
arr_tmp.unshift(type_arr[0]);
arr_tmp.length = arr_tmp.length + arr_food.length;
	
	for (var i = 0; i < arr_tmp.length-1; i++) {
			arr_tmp[i+1] = arr_food[i];
	}

	for (var i = 0; i < arr_tmp.length-1; i++) {
		for (var j = 1; j < type_arr.length; j++) {
			if(arr_tmp[i].parentNode.parentNode.parentNode.nextSibling.nextSibling == type_arr[j]) {
				arr_tmp.length++;					
				for(var k= arr_tmp.length-1; k>i+1;k--)
				{
					arr_tmp[k]=arr_tmp[k-1];
				}
				arr_tmp[i+1] = type_arr[j]; 	
			}
		}
	}

arr_check = [];
arr_check.length = arr_tmp.length+1;	 
	for (var i = 0; i < arr_check.length-1; i++) {
		
		//console.log(arr_tmp[i].parentNode.parentNode.parentNode.style.display == "none");
		if(arr_tmp[i].parentNode.parentNode.parentNode.style.display == "none"){
			arr_check[i] = false;
		}
		else arr_check[i] = true;		
		
	}
arr_check[arr_check.length-1] = true;
	//console.log(arr_check);
arr_tmp2 = [];
arr_tmp2.length = type_arr.length+1;
	for (var i = 0; i < arr_tmp.length; i++) {
		for (var j = 0; j < type_arr.length; j++) {
			if(arr_tmp[i] == type_arr[j]) arr_tmp2[j] = i;
		}
	}
arr_tmp2[arr_tmp2.length-1] = arr_tmp.length;	
	console.log(arr_tmp2);
	for (var i = 0; i < arr_tmp.length; i++) {
		for (var j = 0; j < arr_tmp2.length; j++) {
			var count = 0;
			var count1 = 0;
			if(i == arr_tmp2[j]){
				for(k = i+1; k<arr_tmp2[j+1];k++)
				{
					if(arr_check[k] == false) count++; 
				}
				if(count == arr_tmp2[j+1]-i-1) arr_tmp[arr_tmp2[j]].style.display ="none";
				else arr_tmp[arr_tmp2[j]].style.display = "";

		}
	}
	}
}