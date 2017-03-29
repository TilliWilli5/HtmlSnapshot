function Snapshot(){
    var cssRules = [];
    let iRule = 0;
    for(var style of document.styleSheets)
        if(style)
        {
            if(style.cssRules === null)
            {
                if(style.href != "")//пробуем загрузить запросом css
                {
                    cssRules.push(null);
                    let theRuleIndex = iRule;
                    iRule++;
                    TryFetchCssContent(style.href).then((text)=>{
                        debugger;
                        cssRules[theRuleIndex] = text || "";
                    });
                }
            }
            else
                for(var rule of style.cssRules)
                {
                    cssRules.push(rule.cssText);
                    iRule++;
                }
        }
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
function TryFetchCssContent(pURL){
    return fetch(pURL).then(r=>r.text());
}