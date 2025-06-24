import {
  ContentChildren,
  Directive,
  HostListener,
  QueryList,
} from '@angular/core';
import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';

@Directive({
  selector: '[appKm]',
})
export class KeyboardManagerDirective {
  @ContentChildren(KeyboardManagedItemDirective)
  public items: QueryList<KeyboardManagedItemDirective>;

  @HostListener('keyup', ['$event'])
  public manageKeys(event: KeyboardEvent): void {
    let nextItem: KeyboardManagedItemDirective | undefined;
    switch (event.key) {
      case 'ArrowUp':
        console.log('UP');
        nextItem = this.moveFocus(ArrowDirection.RIGHT);
        break;
      case 'ArrowDown':
        console.log('Down');
        nextItem = this.moveFocus(ArrowDirection.LEFT);
        break;
      case 'ArrowLeft':
        console.log('Left');
        nextItem = this.moveFocus(ArrowDirection.LEFT);
        break;
      case 'ArrowRight':
        console.log('Right');
        nextItem = this.moveFocus(ArrowDirection.RIGHT);
        break;
    }
    if (nextItem) {
      nextItem.focus();
    }
  }

  public moveFocus(direction: ArrowDirection): KeyboardManagedItemDirective {
    const items = this.items.toArray();
    const curentSelectedIndex = items.findIndex((item) => item.isFocused());
    const targetElementFocus = items[curentSelectedIndex + direction];

    if (targetElementFocus) {
      return targetElementFocus;
    }

    return direction === ArrowDirection.LEFT
      ? items[items.length - 1]
      : items[0];
  }
}

enum ArrowDirection {
  LEFT = -1,
  RIGHT = 1,
}
