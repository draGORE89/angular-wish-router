// import in app/app.component.ts
export class WishItem {
    //we want the info to be public so that we can access it from outside the class
    constructor(public wishText: string, public id: string, public isComplete: boolean = false) { 
        
    } 
}