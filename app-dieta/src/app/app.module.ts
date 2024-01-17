import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HttpClient } from "@angular/common/http";



import { provideHttpClient } from '@angular/common/http';
import { PacienteService } from "./clases/Paciente.service";
import { NgModel } from "@angular/forms";




@NgModule({
    declarations: [
        NgModule

    ],
    imports: [
        AppComponent,
        BrowserModule,
        NgModel

    ],
    providers: [AppComponent, PacienteService, provideHttpClient()],
    bootstrap: []
})

export class AppModule { }