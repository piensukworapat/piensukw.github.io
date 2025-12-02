document.addEventListener("DOMContentLoaded", () => {
    const toc = document.getElementById("toc");
    if (!toc) return;

    const headers = document.querySelectorAll("h2");
    let html = "<strong>Table of Contents</strong><br>";

    headers.forEach((h, i) => {
        const id = "section-" + i;
        h.id = id;
        html += `<a href="#${id}">${h.innerText}</a>`;
    });

    toc.innerHTML = html;
});
