const inputLink = document.querySelector("#input-link");
const scanButton = document.querySelector("#scan-button");
const output = document.querySelector("#output");

scanButton.addEventListener("click", async () => {
  const link = inputLink.value;
  const response = await fetch(link);
  const html = await response.text();
  const parser = new DOMParser();
  const doc = parser.parseFromString(html, "text/html");
  const images = doc.querySelectorAll("img");
  let links = [];
  images.forEach(img => {
    const src = img.getAttribute("src");
    if (
      src.endsWith(".jpg") ||
      src.endsWith(".jpeg") ||
      src.endsWith(".png") ||
      src.endsWith(".webp") ||
      src.endsWith(".svg") ||
      src.endsWith(".gif")
    ) {
      links.push(src);
    }
  });
  output.innerHTML = links.map(link => `<p>${link}</p>`).join("");
});
