const ELEMENTS = ['A', 'B', 'C', 'D', 'E', 'F', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

function getRandElement() {
	const index = Math.floor(Math.random() * ELEMENTS.length);

	return ELEMENTS[index];
}

function getRandHash(size) {
  let hash = '';

  for (let i = 0; i < size; i++) {
    hash += getRandElement();
  }
  
  return hash;
}

function generateRandHash() {
	const size = document.getElementById('size').value;
  
  alert(getRandHash(size));
}

function presetSize(value) {
	document.getElementById('size').value = value;
}
