"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const instaMock_1 = require("./instaMock");
const wordpressMock_1 = require("./wordpressMock");
// init Mocks
let Instagram = new instaMock_1.InstagramMock;
let Wordpress = new wordpressMock_1.WordpressMock;
Instagram.newPhotoByYouTagged.Caption = `Vanillepuddingkuchen mit Schokoboden und Erdbeeren 🍓😍
Wer möchte?
Danke an alle die bereits an der #diespicebarrastetaus Challenge mitgemacht haben! Wer noch dabei sein möchte, bis Freitag 12 Uhr habt ihr die Chance auf 3x3 Gewürze von der @spice_bar 💚. Alle Infos findet ihr über mein Profil!💚 [Werbung]
.
Ich bin aus dem Bett gefallen und steh schon in den Schuhen. Irgendwie muss ich mich hier immer zwischen Straßenlärm und Ersticken entscheiden. 🤐
Naja, der frühe Vogel und so... blah blah... Für mich geht es heute in die Museen Berlins. Mal sehen wie viel ich schaffe. 😂 Entweder renne ich durch sowas durch, oder ich verliere mich und vergesse Raum und Zeit...
Welches ist denn euer MUST-SEE Museum in Berlin?😀
.
.
[Rezept enthält Werbung]
➡️Für den Boden 25g Kokosmehl, 25g Dinkelgrieß, 10g Backkakao, 1 Ei, Süße und Tonkabohne @spice_bar mit ca 60ml Milch verrühren bis ein formbarer Teig entsteht, in eine 12er Form füllen und an den Rändern etwas hochziehen, ca 20 Minuten bei 180°Grad backen
➡️Vanillepudding mit 350ml Milch und 2EL Erythrit @spice_bar kochen (oder eine andere Süße) und in den Boden füllen
➡️Erdbeeren rein und abkühlen lassen.
🍓😍
.
____________________
Auf Spicebar.de könnt ihr ab 15€ Einkauf mit spicytina 5€ sparen 💚
🍫🍫🍫🍫🍫
#foodblog #puddingkuchen #esstmehrkuchen #kuchengehtimmer #healthycake #projektgesundleben #gesundbacken #backenistliebe #breakfastcake #frühstückskuchen #frühstücksliebe #lowcarbkuchen #lowcarbfrühstück #bragyourplate #kokosmehl #sweettooth #fitfamgermany #foodblogger_de #foodlover #himbeeren #vanillepudding #erdbeeren #erdbeerkuchen #strawberry #strawberrycake #heresmyfood #cakelover #cakeporn`;
Instagram.newPhotoByYouTagged.CaptionNoTag = `Vanillepuddingkuchen mit Schokoboden und Erdbeeren 🍓😍
Wer möchte?
Danke an alle die bereits an der #diespicebarrastetaus Challenge mitgemacht haben! Wer noch dabei sein möchte, bis Freitag 12 Uhr habt ihr die Chance auf 3x3 Gewürze von der @spice_bar 💚. Alle Infos findet ihr über mein Profil!💚 [Werbung]
.
Ich bin aus dem Bett gefallen und steh schon in den Schuhen. Irgendwie muss ich mich hier immer zwischen Straßenlärm und Ersticken entscheiden. 🤐
Naja, der frühe Vogel und so... blah blah... Für mich geht es heute in die Museen Berlins. Mal sehen wie viel ich schaffe. 😂 Entweder renne ich durch sowas durch, oder ich verliere mich und vergesse Raum und Zeit...
Welches ist denn euer MUST-SEE Museum in Berlin?😀
.
.
[Rezept enthält Werbung]
➡️Für den Boden 25g Kokosmehl, 25g Dinkelgrieß, 10g Backkakao, 1 Ei, Süße und Tonkabohne @spice_bar mit ca 60ml Milch verrühren bis ein formbarer Teig entsteht, in eine 12er Form füllen und an den Rändern etwas hochziehen, ca 20 Minuten bei 180°Grad backen
➡️Vanillepudding mit 350ml Milch und 2EL Erythrit @spice_bar kochen (oder eine andere Süße) und in den Boden füllen
➡️Erdbeeren rein und abkühlen lassen.
🍓😍
.
____________________
Auf Spicebar.de könnt ihr ab 15€ Einkauf mit spicytina 5€ sparen 💚
🍫🍫🍫🍫🍫
#puddingkuchen #esstmehrkuchen #kuchengehtimmer #healthycake #projektgesundleben #gesundbacken #backenistliebe #breakfastcake #frühstückskuchen #frühstücksliebe #lowcarbkuchen #lowcarbfrühstück #bragyourplate #kokosmehl #sweettooth #fitfamgermany #foodblogger_de #foodlover #himbeeren #vanillepudding #erdbeeren #erdbeerkuchen #strawberry #strawberrycake #heresmyfood #cakelover #cakeporn`;
class Filter {
    run() {
        /** Snip start filter code */
        let caption = Instagram.newPhotoByYouTagged.Caption;
        let arr1 = caption.split(" ");
        let arr2 = Instagram.newPhotoByYouTagged.CaptionNoTag.split(" ");
        // get the hashtag by diff the CaptionNoTag
        let hashTag = arr1.filter(x => arr2.indexOf(x) < 0)[0];
        console.log(hashTag);
        // get the title  (caption from start to first linebreak)
        let title = caption.substring(0, caption.indexOf("\n"));
        // get the text body after first line break to the hashtag
        let body = caption.substring(caption.indexOf("\n"))
            .trim()
            .split(hashTag)[0]
            .replace(/#/g, ""); //remove '#'s 
        // get the tags, words after the hashtag
        let tags = caption.split(hashTag)[1]
            .trim()
            .replace(/#/g, "")
            .replace(/\s/g, ", ");
        Wordpress.createPhotoPostWp.setTitle(title);
        Wordpress.createPhotoPostWp.setCaption(`${body} <br />>
        via Instagram <br />><a href="${Instagram.newPhotoByYouTagged.Url}" 
        alt="Intagram Link">${Instagram.newPhotoByYouTagged.Url}</a>`);
        Wordpress.createPhotoPostWp.setTags(tags);
        /** Snip end */
    }
}
exports.Filter = Filter;
//# sourceMappingURL=filter.js.map