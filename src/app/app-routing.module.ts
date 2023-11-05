import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./core/modules/auth/auth.module').then((m) => m.AuthModule),
  },
  // {
  //   path: '',
  //   // component: SidenavComponent,
  //   component: SidenavNewComponent,
  //   children: [
  //     {
  //       path: 'applications',
  //       loadChildren: () =>
  //         import('./features/applications/applications.module').then(
  //           (m) => m.ApplicationsModule
  //         ),
  //     }
     
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
