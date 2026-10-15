export class Book {

    constructor(title, genre, price, hoursReaded) {
        this.title = title;
        this.genre = genre;
        this.price = price;
        this.hoursReaded = hoursReaded;
    }
    showLibro(){
        console.log(this.title+" | "+this.genre+" | "+this.price+" | "+this.hoursReaded )
    }

}