const urlInput = document.getElementById("urlInput");
const scanButton = document.getElementById("scanButton");
const imageList = document.getElementById("imageList");

scanButton.addEventListener("click", () => {
  const url = urlInput.value;
  fetch(url)
    .then(response => response.text())
    .then(data => {
      const parser = new DOMParser();
      const html = parser.parseFromString(data, "text/html");
      const images = html.getElementsByTagName("img");
      for (let i = 0; i < images.length; i++) {
        const image = images[i];
        const imageSrc = image.getAttribute("src");
        if (imageSrc) {
          const imageLink = document.createElement("a");
          imageLink.setAttribute("href", imageSrc);
          imageLink.innerText = imageSrc;
          imageList.appendChild(imageLink);
        }
      }
    })
    .catch(error => {
      console.error(error);
    });
});
