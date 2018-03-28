/**************************************************************
* pairs(names):
*
* - It accepts an array of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
*
* - It returns a randomized pairing of names:
*       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
*
* - It can handle an odd number of names:
*       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein])
*       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
*
* - It returns an empty array if it gets passed an empty array:
*       pairs([]) returns []
*
* - It returns an empty array if it gets passed nothing:
*       pairs() returns []
****************************************************************/
/*  MY SOLUTIONS!

1st

let names= [ 'Asis', 'Hamsa', 'Fawas', 'Mishmish']

function pairs = () => {
	console.log('names');
	return 'instructors'				// Your code goes here
}

---------------------------------------------------------------

2nd

function pairs(Asis, Hamsa, Fawas, Mishmish) {
	var names = {
		instructors: function (fn) {
		
		return fn.bind( Fawas, Hamsa? Asis.concat(Hamsa):[Asis]);
		},
		instructor: function (squib) {
	
		return Asis.join(' ');
		}
	}

	return names[(Hamsa || Asis.split) ? 'instructors' : 'instructor'](name);
}

export default pairs;


------------------------------------------------------------------

3rd
const pairs = (Asis, Hamsa, Fawas, Mishmish) => {
    console.log('names');
    return `${Asis} overrules ${Hamsa} and ${Fawas}`;
};

pairs("Asis", "Hamsa", "Fawas","Mishmish"); 


-------------------------------------------------------------------

4th

const pairs = ['Asis', 'Hamsa', 'Fawas', 'Mishmish'];

for (let i = 0; i < pairs.length; i++) {
    console.log(pairs[i]);
}

export default pairs;


--------------------------------------------------------------------*/

function pairs(names){
	names= names || [];
	pairs = [];

while(names.length>1){
	pairs.push([ names.getRandom(),names.getRandom()]);
}

if (names.length){
	pairs.push([names[0]]); //test
}

return pairs;
}

export default pairs;







/**********************************************
* READ ME!!!!
*
* We've including this handy method for you.
* It will remove a random element from an array
* and return it to you.
*
* Example Usage:
*
* let numbers = [1, 2, 3, 4];
* let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
* console.log(random); // 3 (the random element)
* console.log(numbers);  // [1, 2, 4] (missing the random element)
************************************************/
Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random()*this.length), 1)[0];
}
