import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { KeyclockTestSharedCommonModule, HasAnyAuthorityDirective } from './';

@NgModule({
  imports: [KeyclockTestSharedCommonModule],
  declarations: [HasAnyAuthorityDirective],
  exports: [KeyclockTestSharedCommonModule, HasAnyAuthorityDirective],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class KeyclockTestSharedModule {
  static forRoot() {
    return {
      ngModule: KeyclockTestSharedModule
    };
  }
}
