"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InstaMock_1 = require("./InstaMock");
const WordpressMock_1 = require("./WordpressMock");
// init Mocks
let Instagram = new InstaMock_1.InstagramMock;
let Wordpress = new WordpressMock_1.WordpressMock;
Instagram.newPhotoByYouTagged.Caption = `Kartoffel Blumenkohl Feta Hack Auflauf

das 2. Bild erinnert mich an #littleshopofhorrors mit #rickmoranis und bevor der #Blumenkohl von mir #FeedMeee verlangt ,
 hab ich ihn gefuttert. #foodblog #cauliflower #potato #mincedmeat #feta #cream #sahne`;
Instagram.newPhotoByYouTagged.CaptionNoTag = `Kartoffel Blumenkohl Feta Hack Auflauf

das 2. Bild erinnert mich an #littleshopofhorrors mit #rickmoranis und bevor der #Blumenkohl von mir #FeedMeee verlangt ,
 hab ich ihn gefuttert. #cauliflower #potato #mincedmeat #feta #cream #sahne`;
class Filter {
    static main() {
        /** Snip start filter code */
        let caption = Instagram.newPhotoByYouTagged.Caption;
        let arr1 = caption.split(" ");
        let arr2 = Instagram.newPhotoByYouTagged.CaptionNoTag.split(" ");
        let hashTag = arr1.filter(x => arr2.indexOf(x) < 0)[0];
        let myTitle = caption.substring(0, caption.indexOf("\n"));
        let myCaption = caption.substring(caption.indexOf("\n"))
            .split(hashTag)[0]
            .replace(/#/g, "")
            .trim();
        Wordpress.createPhotoPostWp.setTitle(myTitle);
        Wordpress.createPhotoPostWp.setCaption(`${myCaption} <br>
        via Instagram <a href="${Instagram.newPhotoByYouTagged.Url}" alt="Intagram Link">${Instagram.newPhotoByYouTagged.Url}</a>`);
        /** Snip end */
        return 0;
    }
}
Filter.main();
//# sourceMappingURL=filter.js.map