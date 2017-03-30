"use strict";
class HtmlSnapshot
{
    constructor(pSettings){
        this.settings = {};
        Object.assign(this.settings, this.constructor.defaultSettings);
        Object.assign(this.settings, pSettings);
        this.ctx = {};
        Object.assign(this.ctx, this.constructor.defaultContext);
    }
    
    Snapshot(){

    }

    //Private

    /**
     * Подменяет src на base64 закодированное изображение
     * @param {HTMLImageElement} pImageElement
     * @return {Promise} промис разрешиться после того как изображение будет преобразованно
     */
    BakeImage(pImageElement){
        if(IsImageLoaded(pImageElement))
        {
            return new Promise((pRes, pRej)=>{

            });
        }
        else
        {
            let reason = `Image ${pImageElement.src} doens't loaded`;
            console.log(reason);
            return Promise.reject(new Error(reason));
        }
    }

    IsImageLoaded(pImageElement){
        let isLoaded = pImageElement.complete && pImageElement.src !== "" && pImageElement.naturalWidth !== 0;
        
    }

    ImageToBase64(pImageElement){

    }
}
HtmlSnapshot.defaultSettings = {

};
HtmlSnapshot.defaultContext = {

};