"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instaMock_1 = require("./instaMock");
const wordpressMock_1 = require("./wordpressMock");
const textMock_1 = require("./textMock");
// init Mocks
let Instagram = new instaMock_1.InstagramMock;
let Wordpress = new wordpressMock_1.WordpressMock;
let textMock = new textMock_1.TextMock();
Instagram.newPhotoByYouTagged.Caption = textMock.post[0];
Instagram.newPhotoByYouTagged.CaptionNoTag = textMock.post[1];
class Filter {
    run() {
        /** Snip start filter code */
        let caption = Instagram.newPhotoByYouTagged.Caption;
        let arr1 = caption.split(" ");
        let arr2 = Instagram.newPhotoByYouTagged.CaptionNoTag.split(" ");
        // get the hashtag by diff the CaptionNoTag to caption
        let hashTag = arr1.filter(x => arr2.indexOf(x) < 0)[0];
        // get the title  (caption from start to first linebreak)
        let title = caption.substring(0, caption.indexOf("\n"));
        // get the text body after first line break to the hashtag
        let body = caption.substring(caption.indexOf("\n"))
            .trim()
            .split(hashTag)[0]
            .replace(/#/g, ""); //remove '#'s 
        // get the tags, words after the hashtag as comma seperated list
        let tags = caption.split(hashTag)[1]
            .trim()
            .replace(/#/g, "")
            .split(/\s+/g).join(", ");
        Wordpress.createPhotoPostWp.setTitle(title);
        Wordpress.createPhotoPostWp.setCaption(`${body} <br />
        via Instagram <br /><a href="${Instagram.newPhotoByYouTagged.Url}" 
        alt="Intagram Link">${Instagram.newPhotoByYouTagged.Url}</a>`);
        Wordpress.createPhotoPostWp.setTags(tags);
        /** Snip end */
    }
}
exports.Filter = Filter;
//# sourceMappingURL=filter.js.map