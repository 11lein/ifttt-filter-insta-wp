"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const InstaMock_1 = require("./InstaMock");
const WordPressMock_1 = require("./WordPressMock");
let Instagram = new InstaMock_1.InstagramMock;
let WordPress = new WordPressMock_1.WordPressMock;
Instagram.newPhotoByYouTagged.Caption = `
Test #foodblog Test
test 12345
Test 2 3`;
Instagram.newPhotoByYouTagged.CaptionNoTag = "Test Test";
let arr1 = Instagram.newPhotoByYouTagged.Caption.split(" ");
let arr2 = Instagram.newPhotoByYouTagged.CaptionNoTag.split(" ");
let hashTag = arr1.filter(x => arr2.indexOf(x) < 0)[0];
let myTitle = Instagram.newPhotoByYouTagged.Caption.split(hashTag)[0];
let myCaption = Instagram.newPhotoByYouTagged.Caption.split(hashTag)[1];
WordPress.createPhotoPostWp.setTitle(myTitle);
WordPress.createPhotoPostWp.setCaption(`HashTag : ${hashTag} <br> ${myCaption}`);
//# sourceMappingURL=filter.js.map