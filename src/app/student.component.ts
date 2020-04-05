import { Component, EventEmitter } from '@angular/core';
import { threadId } from 'worker_threads';

@Component({
    selector: 'student',
    inputs: ['name'],
    outputs: ['studentSelected'],
    template: `
        <p (click)="onClicked()">{{name}}</p>
    `

})

export class Student{
    name: string;
    studentSelected: EventEmitter<string>;

    constructor(){
        this.studentSelected = new EventEmitter();
    }

    onClicked(){
        this.studentSelected.emit(this.name);
    }

}