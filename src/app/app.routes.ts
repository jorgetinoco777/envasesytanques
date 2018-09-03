import { RouterModule, Routes } from '@angular/router';

//Components
import { 
	HomeComponent,
	ContactsComponent,
	AboutComponent,
	ProductsComponent,
	ManagementComponent
} from './components/index.pages';

const app_routes: Routes = [
	 { path: '', component: HomeComponent },
	// { path: 'categorias', component: CategoriesComponent },
	{ path: 'productos', component: ProductsComponent },
	{ path: 'contactenos', component: ContactsComponent },
	{ path: 'quienes-somos', component: AboutComponent },
	{ path: 'gestion-ambiental', component: ManagementComponent },
	{ path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);