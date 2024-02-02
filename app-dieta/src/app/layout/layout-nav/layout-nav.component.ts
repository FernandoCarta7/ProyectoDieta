import { Component } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { TabMenuModule } from 'primeng/tabmenu';
import { MegaMenuModule } from 'primeng/megamenu';

@Component({
  selector: 'layout-nav',
  standalone: true,
  imports: [TabMenuModule, MegaMenuModule],
  templateUrl: './layout-nav.component.html',
  styleUrl: './layout-nav.component.css'
})
export class LayoutNavComponent {
  items: MegaMenuItem[] | undefined;

  

  ngOnInit() {
    this.items = [
      {
        label: 'Pacientes',
        icon: 'pi pi-fw pi-users',
        items: [
          [
            {
              label: 'Lista de pacientes',
              items: [{ label: 'Ver pacientes' , routerLink : '/lista-pacientes' }]
            },
            {
              label: 'Registar pacientes',
              items: [{ label: 'Registrar paciente', routerLink:'/registrar-paciente' }],              
            }
          ],
          
        ]
      },
      {
        label: 'Turnos',
        icon: 'pi pi-fw pi-calendar-minus',
        items: [
          [
            {
              label: 'User 1',
              items: [{ label: 'User 1.1' }, { label: 'User 1.2' }]
            },
            {
              label: 'User 2',
              items: [{ label: 'User 2.1' }, { label: 'User 2.2' }]
            }
          ],
          
        ]
      },
      {
        label: 'Agendar cita',
        icon: 'pi pi-fw pi-calendar',
        routerLink : '/agendar-cita'
        /*items: [
          [
            {
              label: 'Event 1',
              items: [{ label: 'Event 1.1' }, { label: 'Event 1.2' }]
            },
            {
              label: 'Event 2',
              items: [{ label: 'Event 2.1' }, { label: 'Event 2.2' }]
            }
          ],
         
        ]*/
      },
      /*
      {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
        items: [
          [
            {
              label: 'Setting 1',
              items: [{ label: 'Setting 1.1' }, { label: 'Setting 1.2' }]
            },
            {
              label: 'Setting 2',
              items: [{ label: 'Setting 2.1' }, { label: 'Setting 2.2' }]
            },
            
          ],
          
        ]
      }*/
    ];
  }
}
