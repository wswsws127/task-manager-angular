import { NgModule } from '@angular/core';
import { MatDatepickerModule}from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import { MatFormFieldModule}from '@angular/material/form-field';
import { MatInputModule }from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import {MatSortModule} from '@angular/material/sort';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  imports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    NgxMaterialTimepickerModule,
    NgxMatDatetimePickerModule,
    NgxMatTimepickerModule,
    NgxMatTimepickerModule,
    MatSortModule,
    MatIconModule, MatButtonModule,
  ],
  exports: [
    MatDatepickerModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatSortModule,
    MatButtonModule,
    MatButtonModule
  ],
  providers: [ MatDatepickerModule ],
})

export class MaterialModule {}