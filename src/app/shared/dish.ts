import {Comment} from'./comment'
export class Dish {
    id: string;
    name: string;
    image: string;
    category : string;
    featured : boolean;
    label : string;
    price : string;
    description : string;
    comments:Comment[];
    constructor() {
        this.id = '';
        this.name = '';
        this.image = '';
        this.category = '';
        this.featured = true;
        this.label = '';
        this.price = '';
        this.description = '';
        this.comments=[];
    }
}