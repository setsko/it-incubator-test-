

/* Задача №3.
let search = document.getElementById("search");
let butt = document.getElementById("butt");

butt.addEventListener("click", () => {
	alert(search.value)
});


/* Задача №4

let search = document.getElementById("search");
let butt = document.getElementById("butt");

butt.addEventListener("click", () => {
		if ( search.value === "google") {
		alert ("Yandex круче. Но это не точно");
	}
})

*/

/* Задача №5
let objects = []; 
butt.addEventListener("click", () => {
	            for(let i =0; i < 5; i++) {
            objects.push({
                'name': 'Egor #' + i,
                'age': 24
            });
        }

      
        console.log(objects);
        alert(objects.shift().name);
})

*/

/* Задача №6
function superSum(a, b) {
	a = Number(5);
	b = Number(8);
	alert(a + b);
}

*/

/* Задача №7

function getMax() {

        let array = [];
        let max = 0;

        for(let i =0; i < 24; i++) {
            array.push(Math.random());
        }

        array.forEach((value) => {
            if(value > max) {
                max = value;
            }
        })

        console.log(array);
        console.log('Максимальный элемент', max);
    }
*/

/*
    function getMin() {

		let array = [];
        let min = 0;

        for(let i =0; i < 24; i++) {
            array.push(Math.random());
        }

        array.forEach((value) => {
            if(value < min) {
                min = value;
            }
        })

        console.log(array);
        console.log('Минимальный элемент', min);
    }

	*/


	/* Задача №8

	  	let a = 24;
        let b = 8;
        console.log('Было', 'a:', a,'b:', b);

        let c = a;
        a = b;
        b = c;

        console.log('Стало', 'a:', a,'b:', b);
    }

	/*


	/* Задача №9
	   
	 function findMax(arr) {
        return Math.max(...arr);
    }

	/*

	/*  Задача №10

		function alertWithTimer() {
        setTimeout(() => {
            alert('alert с таймером 3 секунды');
        }, 3000);
    }
	
	*/



    
