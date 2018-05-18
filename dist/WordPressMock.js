"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WordpressMock {
    constructor() {
        this.createPhotoPostWp = {
            setCaption: (s) => { console.log("Caption: " + s); },
            setTitle: (s) => { console.log("Title: " + s); },
        };
    }
}
exports.WordpressMock = WordpressMock;
//# sourceMappingURL=WordPressMock.js.map