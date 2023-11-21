// org
import { Routes } from '@angular/router';

import { ServerComponent } from './server/server.component'
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';





// org
export const routes: Routes = [
    { path: 'server-component', component: ServerComponent },
    { path: 'app-product-detail-page', component: ProductDetailPageComponent }
];
