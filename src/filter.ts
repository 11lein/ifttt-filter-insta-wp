import { InstagramMock } from "./instaMock";
import { WordpressMock } from "./wordpressMock";
import { TextMock } from "./textMock";

// init Mocks
let Instagram: InstagramMock = new InstagramMock;
let Wordpress: WordpressMock = new WordpressMock;
let textMock: TextMock = new TextMock();

Instagram.newPhotoByYouTagged.Caption = textMock.post[0];
Instagram.newPhotoByYouTagged.CaptionNoTag = textMock.post[1];

export class Filter {
    public run(): void {
        /** Snip start filter code */
        let caption: string = Instagram.newPhotoByYouTagged.Caption;

        let arr1: string[] = caption.split(" ");
        let arr2: string[] = Instagram.newPhotoByYouTagged.CaptionNoTag.split(" ");

        // get the hashtag by diff the CaptionNoTag to caption
        let hashTag: string = arr1.filter(x => arr2.indexOf(x) < 0)[0];

        // get the title  (caption from start to first linebreak)
        let title: string = caption.substring(0, caption.indexOf("\n")).replace(/#/g,"");

        // get the text body after first line break to the hashtag
        let body: string = caption.substring(caption.indexOf("\n"))
        .trim()
        .split(hashTag)[0]
        .replace(/#/g,""); // remove '#'s

        // get the tags, words after the hashtag as comma seperated list
        let tags: string = caption.split(hashTag)[1]
        .trim()
        .replace(/#/g,"")
        .split(/\s+/g).join(", ");

        Wordpress.createPhotoPostWp.setTitle(title);

        Wordpress.createPhotoPostWp.setCaption(`${body} <br />
        via Instagram <br /><a href="${Instagram.newPhotoByYouTagged.Url}"
        alt="Intagram Link">${Instagram.newPhotoByYouTagged.Url}</a>`);

        Wordpress.createPhotoPostWp.setTags(tags);

        /** Snip end */

    }
}

