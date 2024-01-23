import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { PacienteService } from './clases/Paciente.service';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HistoriaSaludService } from './clases/HistoriaSaludServicio.service';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideClientHydration(), 
    PacienteService,HistoriaSaludService, 
    provideHttpClient(),
    provideAnimationsAsync()
  ]
};
