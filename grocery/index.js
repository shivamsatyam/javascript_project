let message_info = document.querySelector('.message h2')
let input = document.querySelector('input')
let submit_btn = document.getElementById('submit')
let clear_btn = document.getElementById('clear')
let list = document.getElementsByClassName('list')[0]
let edit_btn = document.getElementsByClassName('edit')
let delete_btn = document.getElementsByClassName('delete')


show_all_data()

function deleteAll () {
	console.log('deletting all the item')
	localStorage.setItem('grocery',JSON.stringify([]))
	show_all_data()
}

function check_existence () {
	const return_value = localStorage.getItem('grocery')
	if(return_value==null){
		localStorage.setItem('grocery',JSON.stringify([]))
         console.log('changing to null')
	}
}


function show_all_data () {
	check_existence()
	const all_local_data = JSON.parse(localStorage.getItem('grocery'))
    let str = ''
    all_local_data.map((item,index)=>{
    	str = str + `<div class="list-box">
            		<h3>${item.title}</h3>
            		<div class="item-image">
            		    <button class="edit"><img src="download (4).png"></button>
            		    <button class="delete"><img src="images (5).png"></button>
            		</div>
            	</div>`
    })


    list.innerHTML = str

Array.from(delete_btn).forEach((item) => {
  item.addEventListener('click',delete_function);
})



Array.from(edit_btn).forEach((item) => {
  item.addEventListener('click',edit_function);
})


}



function check_empty_string (str) {
	if(str=='' || str==null || str==undefined){
		return 1;
	}else{
		return 0;
	}
}


function add_item (item) {
	let grocery_item  = JSON.parse(localStorage.getItem('grocery'))
	grocery_item.push({"title":item})
	localStorage.setItem('grocery',JSON.stringify(grocery_item))
	console.log('item adding')
	show_all_data();
}


function submit_function (event) {
	let button = event.target
	if(!check_empty_string(input.value)){
		console.log('submit')
		add_item(input.value);
		input.value = ''
	}
}

submit_btn.addEventListener('click',submit_function);



clear_btn.addEventListener('click',deleteAll);


function delete_function (event) {
	console.log('clicked')
	let data = event.target.parentNode.parentNode.parentNode.querySelector('h3').innerText
	console.log(data)
	console.log(event.target.parentNode)
	console.log(event.target.parentNode.parentNode.parentNode.querySelector('h3'))
	const all_local_data = JSON.parse(localStorage.getItem('grocery'))

	function filtered(item){
		return item.title!=data
	}

	const filtered_data = all_local_data.filter(filtered)
	console.log(filtered_data)

	localStorage.setItem('grocery',JSON.stringify(filtered_data))
	show_all_data()

}


function get_all () {
	let list_box = document.getElementsByClassName('list-box')
	let all_data = []
	Array.from(list_box).forEach((item) => {
	  let h3 = item.querySelector('h3').innerText
		all_data.push({'title':h3})
	})

	localStorage.setItem('grocery',JSON.stringify(all_data))
}

function edit_function (event) {
	let data = event.target.parentNode.parentNode.parentNode.querySelector('h3').innerText
	let local_data = JSON.parse(localStorage.getItem('grocery'))
	let prompt_btn = prompt(data)
	
		
		event.target.parentNode.parentNode.parentNode.querySelector('h3').innerText = prompt_btn
		console.log(event.target.parentNode.parentNode.parentNode)
		console.log('edit')
		get_all();
		show_all_data()
	

}

Array.from(delete_btn).forEach((item) => {
  item.addEventListener('click',delete_function);
})



Array.from(edit_btn).forEach((item) => {
  item.addEventListener('click',edit_function);
})
















































