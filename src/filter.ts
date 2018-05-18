import {InstagramMock} from "./InstaMock";
import {WordPressMock} from "./WordPressMock";

let Instagram:InstagramMock = new InstagramMock;
let WordPress:WordPressMock = new WordPressMock;

Instagram.newPhotoByYouTagged.Caption = `
Test #foodblog Test
test 12345
Test 2 3`;
Instagram.newPhotoByYouTagged.CaptionNoTag = "Test Test";

let arr1:string[] = Instagram.newPhotoByYouTagged.Caption.split(" ");
let arr2:string[] = Instagram.newPhotoByYouTagged.CaptionNoTag.split(" ");

let hashTag:string = arr1.filter(x => arr2.indexOf(x) < 0)[0];

let myTitle:string = Instagram.newPhotoByYouTagged.Caption.split(hashTag)[0];

let myCaption:string = Instagram.newPhotoByYouTagged.Caption.split(hashTag)[1];


WordPress.createPhotoPostWp.setTitle(myTitle);

WordPress.createPhotoPostWp.setCaption(`HashTag : ${hashTag} <br> ${myCaption}`);