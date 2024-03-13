// Subject - special type of observable object that allows us to emulate events so that we can have multiple objects that subscribe
// to our observable object /issue single event and multiple objects can listen for that same event/
import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

// Injectable tells angular that this class can be injected in diff places; We can specify where we want to inject the class: 'root', 'platform', 'any'
@Injectable({
    providedIn: 'root' // <-- application level injector
}) 
export class EventService {
    private subject = new Subject(); // allows us to pass messages/events from our observable to the subscribers

    emit(eventName: string, payload: any) {
        this.subject.next({eventName, payload});
    }

    listen(eventName: string, callback: (event: any) => void) {
        this.subject.asObservable().subscribe((nextObj: any) => {
            if (eventName === nextObj.eventName) {
                callback(nextObj.payload)
            }
        }) 
    }
}

// export default new EventService()