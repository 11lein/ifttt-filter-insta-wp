"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class WordPressMock {
    constructor() {
        this.createPhotoPostWp = {
            setCaption: (s) => { console.log('Caption: ' + s); },
            setTitle: (s) => { console.log('Title: ' + s); },
        };
    }
}
exports.WordPressMock = WordPressMock;
//# sourceMappingURL=WordPressMock.js.map