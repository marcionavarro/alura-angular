import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { KeyboardManagerDirective } from './keyboard-manager.directive';
import { KeyboardManagedItemDirective } from './keyboard-managed-item.directive';

@NgModule({
  declarations: [KeyboardManagerDirective, KeyboardManagedItemDirective],
  imports: [CommonModule],
  exports: [KeyboardManagerDirective, KeyboardManagedItemDirective],
})
export class KeybordManagerModule {}
