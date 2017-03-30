"use strict";
class BaseBaker
{

    constructor(pSettings){
        this.settings = {};
        Object.assign(this.settings, this.constructor.defaultSettings);
        Object.assign(this.settings, pSettings);
        // this.ctx = {};
        // Object.assign(this.ctx, this.constructor.defaultContext);
    }

    Bake(pElement){
        var ctx = {
            element: pElement,
            settings: this.settings
        };
        return Promise.resolve(ctx)
            .then(this._BeforeBake)
            .then(this._Bake)
            .then(this._AfterBake);
    }

    _BeforeBake(ctx){
        if( ctx.element && ctx.element.nodeName === ctx.settings.type)
            return ctx;
        throw new Error(`Invalid element ${ctx.element}`);
    }

    _Bake(ctx){
        return ctx;
    }

    _AfterBake(ctx){
        return ctx;
    }
}
BaseBaker.defaultSettings = {
    type: ""
};
// BaseBaker.defaultContext = {};