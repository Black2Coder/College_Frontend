export class Blog{
    title:string;
    description:string;
    date:Date;
    
    constructor(title: string, desc: string, date: Date){
            this.title=title;
            this.description=desc;
            this.date=date;
    }
}