//storing input and listbox
const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions ul');


//list of stored fruits
const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];



//Add eventlistener to input from user, if input text is empty, clear the list, if not populate results
input.addEventListener('input',() =>{
	const inputText = input.value;
	if (inputText !== "")
	{
		const searchResults = search(inputText);
		showSuggestions(searchResults);
	}
	else
	{
		suggestions.innerHTML = "";
	}
});



//takes user's input as parameter, then returns an array (results) that contains items from fruit array that contain user's input.
function search(str) {
	let results = [];
	results = fruit.filter(fr => fr.toLowerCase().includes(str.toLowerCase()));

	return results;
}

function searchHandler(e) {

}

//populates the list of suggestions by creating list items under the suggestions ul. 
function showSuggestions(results) {

	suggestions.innerHTML = "";
   results.map(res => {
   	 const li=document.createElement('li');
     li.innerText = `${res}`;
     suggestions.appendChild(li);
   })
}

//activated by clicking on a list item, sets the input value to be the text in the list item that was clicked on, then clears the suggestions list.
function useSuggestion(ev) {
	if (ev.target.tagName === 'LI') {

		//couldn't clear the list using HTML = "", so this gets all the list items, iterates through them and gets rid of them.
		const lis = document.querySelectorAll('li')
		{
			for(let i = 0;i < lis.length;i++)
			{
				lis[i].parentNode.removeChild(lis[i]);
			}	
		}
		suggestions.innerHtML = "";
		input.value = ev.target.innerText;
	  }
}

input.addEventListener('keyup', searchHandler);


suggestions.addEventListener('click', useSuggestion);


