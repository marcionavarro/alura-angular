import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActionDirective } from './action.directive';
import { ActionDirectiveModule } from './action.module';
import { Component } from '@angular/core';

describe(ActionDirective.name, () => {
    let fixture: ComponentFixture<ActionDirectiveTestComponent>;
    let component: ActionDirectiveTestComponent;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [ActionDirectiveTestComponent],
            imports: [ActionDirectiveModule]
        }).compileComponents();

        fixture = TestBed.createComponent(ActionDirectiveTestComponent);
        component = fixture.componentInstance;
    });

    it(`(D) (@Output appAction) should emit event with payload when ENTER key is pressed`, () => {
        const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
        const event = new KeyboardEvent('keyup', { key: 'Enter' });
        divEl.dispatchEvent(event);
        expect(component.hasEvent()).toBeTrue();
    });

    it(`(D) (@Output appAction) should emit event with payload when clicked`, () => {
        const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
        const event = new Event('click');
        divEl.dispatchEvent(event);
        expect(component.hasEvent()).toBeTrue();
    });

    it(`(D) (@Output appAction) should emit event with payload when clicked or ENTER key pressed`, () => {
        const divEl: HTMLElement = fixture.nativeElement.querySelector('.dummy-component');
        const clickEvent = new Event('click');
        const keyboardEvent = new KeyboardEvent('keyup', { key: 'Enter' });
        divEl.dispatchEvent(clickEvent);
        expect(component.hasEvent()).withContext('Click event').toBeTrue();
        component.resetForNewExpectation();
        divEl.dispatchEvent(keyboardEvent);
        expect(component.hasEvent()).withContext('Keyboard event "keyup"').toBeTrue();
    })

});

@Component({
    template: `<div class="dummy-component" (appAction)="actionHandler($event)"></div>`
})

class ActionDirectiveTestComponent {
    private event: Event = null;

    public actionHandler(event: Event): void {
        this.event = event;
    }

    public hasEvent(): Boolean {
        return !!this.event;
    }

    public resetForNewExpectation(): void {
        this.event = null;
    }
}