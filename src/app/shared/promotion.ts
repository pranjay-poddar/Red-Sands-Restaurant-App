export class Promotion {
    id: string;
    name: string;
    image: string;
    label: string;
    price: string;
    featured: boolean;
    description: string;
    constructor(){
        this.id="";
        this.name="";
        this.image="";
        this.label="";
        this.price="";
        this.featured=true;
        this.description="";
    }
}