import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatSliderModule} from '@angular/material/slider';
import {MatRadioModule} from '@angular/material/radio';


@NgModule({
  imports: [
        MatMenuModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatIconModule,
        MatTabsModule, 
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatDividerModule,
        MatExpansionModule,
        MatInputModule,
        MatDialogModule,
        MatButtonModule,
        MatTooltipModule,
        MatAutocompleteModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatSelectModule,
        MatButtonToggleModule,
        MatProgressBarModule,
        MatStepperModule,
        MatSliderModule,
        MatRadioModule
  ],
  exports: [
    MatMenuModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule, 
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonToggleModule,
    MatProgressBarModule,
    MatStepperModule,
    MatSliderModule,
    MatRadioModule
  ]
})

export class MaterialModule { }
