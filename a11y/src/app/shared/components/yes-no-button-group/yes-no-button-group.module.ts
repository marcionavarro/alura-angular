import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { YesNoButtonGroupComponent } from './yes-no-button-group.component';
import { KeybordManagerModule } from '../../directives/keybord-manager/keyboard-manager.module';

@NgModule({
  declarations: [YesNoButtonGroupComponent],
  imports: [CommonModule, KeybordManagerModule],
  exports: [YesNoButtonGroupComponent],
})
export class YesNoButtonGroupModule {}
