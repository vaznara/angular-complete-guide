import { Component, ViewChild, ElementRef, Input } from "@angular/core";

@Component({
    selector: 'app-even',
    templateUrl: './even.component.html',
    styleUrls: ['./even.component.css']
})

export class EvenComponent {
    @Input('evenCounter') counter: number;
}