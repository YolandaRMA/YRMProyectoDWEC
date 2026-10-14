export class Item{
    #maxQuantity = 0;
    #quantity = 0;

    constructor(title, description, maxQuantity){
        this.title = typeof(title) == "string" ? title.toLowerCase() : String(title);
        this.description = typeof(description) == "string" ? description : String(description);
        this.#maxQuantity = Number.isInteger(maxQuantity) ? 
                                (maxQuantity > 0 ? maxQuantity : -1) : tryParseInt(maxQuantity);
    }

    set quantity(value){
        this.#quantity =  tryParseInt(value) >= 0 ? value : 0;
    }

    get quantity(){
        return this.#quantity;
    }

    set maxQuantity(value){
        this.#maxQuantity =  tryParseInt(value) > 0 ? value : 1;
    }

    get maxQuantity(){
        return this.#maxQuantity;
    }

    compareTo(item){
        if(this.constructor === item.constructor){
            return  this.title === item.title;
        }
        else return false;
    }
}