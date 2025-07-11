import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, takeUntil } from 'rxjs/operators';

@Component({
    selector: 'app-photo-frame',
    templateUrl: './photo-frame.component.html',
    styleUrls: ['photo-frame.component.scss']

})
export class PhotoFrameComponent implements OnInit, OnDestroy {
    @Output() public liked: EventEmitter<void> = new EventEmitter();
    @Input() public description = '';
    @Input() public src = '';
    @Input() public likes = 0;

    private debounceSubject: Subject<void> = new Subject();
    private unsubscribe: Subject<void> = new Subject();

    public ngOnInit(): void {
        this.debounceSubject
            .asObservable()
            .pipe(debounceTime(500))
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(() => this.liked.emit());
    }

    public ngOnDestroy(): void {
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    public like(): void {
        this.debounceSubject.next();
    }

}