import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PocComponent } from './pages/poc/poc.component';
import { CarouselComponent } from './pages/carousel/carousel.component';

const routes: Routes = [
  {
    path: 'poc',
    component: PocComponent,
  },
  {
    path: 'carousel',
    component: CarouselComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
