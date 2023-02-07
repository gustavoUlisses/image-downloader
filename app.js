const submitBtn = document.getElementById('submit');
const outputDiv = document.getElementById('output');

submitBtn.addEventListener('click', function() {
  const xhr = new XMLHttpRequest();
  const url = document.getElementById('url').value;
  
  xhr.open('GET', url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(xhr.responseText, 'text/html');
      const images = htmlDoc.getElementsByTagName('img');
      
      let imageLinks = '';
      for (let i = 0; i < images.length; i++) {
        imageLinks += `<p>${images[i].src}</p>`;
      }
      
      outputDiv.innerHTML = `<h2>Image Links:</h2>${imageLinks}`;
    }
  };
  xhr.send();
});
