const form = document.querySelector('form');
const urlInput = document.querySelector('#url');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const url = urlInput.value;
  const proxyUrl = 'https://api.codetabs.com/v1/proxy/?quest=' + encodeURIComponent(url);
  const xhr = new XMLHttpRequest();
  xhr.open('GET', proxyUrl);
  xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
  xhr.onload = function() {
    if (xhr.status === 200) {
      const response = xhr.responseText;
      const parser = new DOMParser();
      const htmlDoc = parser.parseFromString(response, 'text/html');
      const body = htmlDoc.querySelector('body');
      document.write(body.innerHTML);
    } else {
      console.log('Request failed.  Returned status of ' + xhr.status);
    }
  };
  xhr.send();
});
