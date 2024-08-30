const appendStyle = () => {
    const linkEl = document.createElement("link");
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.setAttribute('href', 'https://alexarus.github.io/doc_tools/style.css');
    document.head.appendChild(linkEl);
}

appendStyle();