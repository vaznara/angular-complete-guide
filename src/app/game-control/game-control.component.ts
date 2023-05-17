import { Component, EventEmitter, Output } from "@angular/core";

@Component({
    selector: 'app-game-control',
    templateUrl: './game-control.component.html',
    styleUrls: ['game-control.component.css']
})

export class GameControlComponent {
    @Output() gameStarted = new EventEmitter<{counter: number}>();
    @Output() gameStopped = new EventEmitter<{}>();

    onGameStart() {
        this.gameStarted.emit({
            counter: 0
        })
    }

    onGameStop() {
        this.gameStopped.emit();
    }
}