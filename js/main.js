function getInputValue(input_id) {
	const element = document.getElementById(input_id);
	const value = parseInt(element.value);
	const max = parseInt(element.getAttribute('max'));

	if (value > max)
		return max;

	return value
}

function getRandElement(elements) {
	const index = Math.floor(Math.random() * elements.length);

	return elements[index];
}

function getRandHash(size, elements) {
	let hash = '';

	for (let i = 0; i < size; i++) {
		hash += getRandElement(elements);
	}

	return hash;
}

function generateHexadecimalKey(size_input_id) {
	const size = getInputValue(size_input_id);
	const elements = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  
	alert(getRandHash(size, elements));
}

function generateRASID(size_input_id) {
	const size = getInputValue(size_input_id);
	const elements = [
		'-', '_', '$', '#', 'A', 'a', 'B', 'b', 'C', 'c', 'D', 'd', 'E', 'e', 'F', 'f', 
		'G', 'g', 'H', 'h', 'I', 'i', 'J', 'j', 'K', 'k', 'L', 'l', 'M', 'm', 'N', 'n', 
		'O', 'o', 'P', 'p', 'Q', 'q', 'R', 'r', 'S', 's', 'T', 't', 'U', 'u', 'V', 'v', 
		'W', 'w', 'X', 'x', 'Y', 'y', 'Z', 'z', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9
	];
  
	alert(getRandHash(size, elements));
}
