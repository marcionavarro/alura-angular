import { Injectable, TemplateRef } from '@angular/core';

@Injectable()
export class ModalService {
  public open(config: ModalConfig): ModalRef {
    console.log('open called');
    return new ModalRef();
  }
}

export interface ModalConfig {
  templateref: TemplateRef<any>;
  title: string;
}

export class ModalRef {
  public close() {
    console.log('close called');
  }
}
