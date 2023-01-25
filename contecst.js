"use strict";

// 1 
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
//     let self = this
// 	alert( square() );

	
// 	function square() {
// 		return self.value * self.value;
// 	}
// }

//2

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
// 	alert( square(this) );
	
// 	function square(param) {
// 		return param.value * param.value;
// 	}
// }

//305

///1
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');

// function func() {
// 	console.log(this.value);
// }

// func.call(elem1)
// func.call(elem2)
// func.call(elem3)

//2
// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + 
// 		surname); 
// }

// func.call(elem, 'Jonh', 'Smith' );

//306
// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }

// func.apply(elem, ['John', 'Smith']); 

//307
// let elem = document.getElementById('elem');

// function func(name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + 
// 		surname); 
// }

// let newFunc = func.bind(elem)

// newFunc('John', 'Smit');
// newFunc('Eric', 'Luis');
