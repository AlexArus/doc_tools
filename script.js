const appendStyle = () => {
    const date = new Date();
    const minutes = date.getMinutes();
    const five_minute_timestamp = date.setMinutes(minutes - minutes % 5, 0, 0);
    const rnd = five_minute_timestamp.toString().slice(0, 8);

    const linkEl = document.createElement("link");
    linkEl.setAttribute('rel', 'stylesheet');
    linkEl.setAttribute('href', `https://alexarus.github.io/doc_tools/style.css?rnd=${rnd}`);
    document.head.appendChild(linkEl);
}

appendStyle();