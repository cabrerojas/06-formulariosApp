import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DinamicosComponent } from './pages/dinamicos/dinamicos.component';
import { SwitchesComponent } from './pages/switches/switches.component';
import { BasicosComponent } from './pages/basicos/basicos.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'basicos', component: BasicosComponent },
      { path: 'dinamicos', component: DinamicosComponent },
      { path: 'switches', component: SwitchesComponent },
      { path: '**', redirectTo: 'basicos' },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TemplateRoutingModule { }
