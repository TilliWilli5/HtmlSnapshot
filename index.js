(()=>{
    function Snapshot(){
        var cssRules = [];
        for(var style of document.styleSheets)
            if(style && style.cssRules)
                for(var rule of style.cssRules)
                    cssRules.push(rule.cssText);
        RemoveElements(document.querySelectorAll("script"));
        RemoveElements(document.querySelectorAll(`*[style*="display:none"]`));
        var body = document.body.innerHTML;
        return ComposeTemplate({
            body,
            style:cssRules.join("\n")
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