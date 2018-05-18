export class WordPressMock {
    createPhotoPostWp = {
        setCaption: (s: string): void => { console.log('Caption: ' +  s)},
        setTitle: (s: string): void => { console.log('Title: ' +  s)},
    }
}