import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HttpClient } from "@angular/common/http";



import { provideHttpClient } from '@angular/common/http';
import { PacienteService } from "./clases/Paciente.service";
import { NgModel } from "@angular/forms";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CommonModule } from "@angular/common";




@NgModule({
    declarations: [
        NgModule

    ],
    imports: [
        AppComponent,
        BrowserModule,
        BrowserAnimationsModule,
        NgModule,
        
        NgModel

    ],
    providers: [AppComponent, PacienteService, provideHttpClient()],
    bootstrap: [NgModel, CommonModule],
    exports : [NgModel]
})

export class AppModule { }