const form = document.querySelector('form');
const urlInput = document.querySelector('#url');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const url = urlInput.value;
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/' + url;
  const xhr = new XMLHttpRequest();
  xhr.open('GET', proxyUrl);
  xhr.onload = function() {
    if (xhr.status === 200) {
      const response = xhr.responseText;
      document.write(response);
    } else {
      console.log('Request failed.  Returned status of ' + xhr.status);
    }
  };
  xhr.send();
});
