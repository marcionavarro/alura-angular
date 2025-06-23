import { Injectable } from '@angular/core';
import * as uuid from 'uuid';

@Injectable({ providedIn: 'root' })
export class UniqueIdService {
  public generateUniqueIdWithPrefix(prefix: string): string {
    const uniqueId = this.genrateUniqueId();
    return `${prefix}-${uniqueId}`;
  }

  private genrateUniqueId(): string {
    return uuid.v1();
  }
}
