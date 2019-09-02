import { NgModule } from '@angular/core';

import { KeyclockTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
  imports: [KeyclockTestSharedLibsModule],
  declarations: [JhiAlertComponent, JhiAlertErrorComponent],
  exports: [KeyclockTestSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class KeyclockTestSharedCommonModule {}
