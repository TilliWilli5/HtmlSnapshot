function IsImageLoaded(img){
    return img.complete && img.src !== "" && img.naturalWidth !== 0;
}
function img2strv2(pImageElement, cb){
    if(!IsImageLoaded(pImageElement)) return;
    var img = new Image();
    img.setAttribute('crossOrigin', 'anonymous');
    img.crossOrigin="anonymous";
    img.onload = function(){
        var canvas = document.createElement('canvas');
        canvas.width = img.naturalWidth; // or 'width' if you want a special/scaled size
        canvas.height = img.naturalHeight; // or 'height' if you want a special/scaled size
        canvas.getContext('2d').drawImage(img, 0, 0);
        cb(canvas.toDataURL('image/png'));
    };
    img.src = pImageElement.src;
}
function img2str(pImageElement){
    if(!IsImageLoaded(pImageElement)) return;
    pImageElement.crossOrigin = "anonymous";
    var canvas = document.createElement('canvas');
    canvas.width = pImageElement.naturalWidth; // or 'width' if you want a special/scaled size
    canvas.height = pImageElement.naturalHeight; // or 'height' if you want a special/scaled size
    canvas.getContext('2d').drawImage(pImageElement, 0, 0);
    return canvas.toDataURL('image/png');
}