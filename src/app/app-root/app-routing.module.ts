import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('../home/home.module').then(m => m.HomeModule) },
  { path: 'services', loadChildren: () => import('../static-pages/service/service.module').then(m => m.ServiceModule) },
  { path: 'blogs', loadChildren: () => import('../static-pages/blog/blog.module').then(m => m.BlogModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
