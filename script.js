const appendStyle = () => {
    const linkEl = document.createElement("link");
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.setAttribute('href', 'https://raw.githubusercontent.com/AlexArus/doc_tools/main/style.css');
    document.head.appendChild(linkEl);
}

appendStyle();