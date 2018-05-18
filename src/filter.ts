import { InstagramMock } from "./InstaMock";
import { WordpressMock } from "./WordpressMock";

// init Mocks
let Instagram: InstagramMock = new InstagramMock;
let Wordpress: WordpressMock = new WordpressMock;

Instagram.newPhotoByYouTagged.Caption = `Kartoffel Blumenkohl Feta Hack Auflauf

das 2. Bild erinnert mich an #littleshopofhorrors mit #rickmoranis und bevor der #Blumenkohl von mir #FeedMeee verlangt ,
 hab ich ihn gefuttert. #foodblog #cauliflower #potato #mincedmeat #feta #cream #sahne`;
Instagram.newPhotoByYouTagged.CaptionNoTag = `Kartoffel Blumenkohl Feta Hack Auflauf

das 2. Bild erinnert mich an #littleshopofhorrors mit #rickmoranis und bevor der #Blumenkohl von mir #FeedMeee verlangt ,
 hab ich ihn gefuttert. #cauliflower #potato #mincedmeat #feta #cream #sahne`;

class Filter {
    public static main(): number {
        /** Snip start filter code */
        let caption: string = Instagram.newPhotoByYouTagged.Caption;

        let arr1: string[] = caption.split(" ");
        let arr2: string[] = Instagram.newPhotoByYouTagged.CaptionNoTag.split(" ");

        let hashTag: string = arr1.filter(x => arr2.indexOf(x) < 0)[0];

        let myTitle: string = caption.substring(0, caption.indexOf("\n"));


        let myCaption: string = caption.substring(caption.indexOf("\n"))
        .split(hashTag)[0]
        .replace(/#/g,"")
        .trim();

        Wordpress.createPhotoPostWp.setTitle(myTitle);

        Wordpress.createPhotoPostWp.setCaption(`${myCaption} <br>
        via Instagram <a href="${Instagram.newPhotoByYouTagged.Url}" alt="Intagram Link">${Instagram.newPhotoByYouTagged.Url}</a>`);

        /** Snip end */

        return 0;
    }
}

Filter.main();