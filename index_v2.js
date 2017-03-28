(()=>{
    function Snapshot(){
        RemoveElements(document.querySelectorAll("script"));
        RemoveElements(document.querySelectorAll(`*[style*="display:none"]`));
        var all = document.querySelectorAll("*");
        Array.prototype.forEach.call(all, (el)=>{
            var css = getComputedStyle(el);
            Object.entries(css).forEach((e)=>{el.style[e[0]] = e[1];});
        });
        var body = document.body.innerHTML;
        return ComposeTemplate({
            body
        });
    };
    function ComposeTemplate(pCore){
        return `<!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8">
            <title>${pCore.title}</title>
            <style>${pCore.style}</style>
        </head>
        <body>${pCore.body}</body>
        </html>`;
    }
    function RemoveElements(pElements){
        Array.prototype.forEach.call(pElements, (el)=>{
            el.parentNode.removeChild(el);
        });
    }
    window.Snapshot = Snapshot;
})();