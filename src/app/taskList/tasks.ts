export interface ITasks {
    quoteID?: number;
    quoteType: string;
    contactID: string;
    taskDescription?: string;
    taskDueDate: string;
    taskType: string;
	
}

export class Tasks implements ITasks {

    constructor( public quoteType: string, 
        public contactID: string,
        public taskDescription: string, public taskDueDate: string, public taskType: string) {
    }

}