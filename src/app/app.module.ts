import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavListComponent } from './header/sidenav-list/sidenav-list.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from "ngx-spinner";
import { ButtonDirective } from './button.directive';
import { ServicesComponent } from './homepage/services/services.component';
import { CompanyintroComponent } from './homepage/companyintro/companyintro.component';
import { FactsComponent } from './homepage/facts/facts.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { HowitworksComponent } from './homepage/howitworks/howitworks.component';
import { HttpClientModule} from '@angular/common/http';
import { NgxGalleryModule } from '@kolkov/ngx-gallery';
import { ProjectsComponent } from './projects/projects.component';
import { EstimatorComponent } from './estimator/estimator.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    FooterComponent,
    HeaderComponent,
    SidenavListComponent,
    ButtonDirective,
    ServicesComponent,
    CompanyintroComponent,
    FactsComponent,
    HowitworksComponent,
    ProjectsComponent,
    EstimatorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    NgxSpinnerModule,
    SlickCarouselModule,
    HttpClientModule,
    NgxGalleryModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
