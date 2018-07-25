import { RouterModule, Routes } from '@angular/router';

//Components
import { 
	HomeComponent, 
	CategoriesComponent, 
	CategoryComponent, 
	ContactsComponent,
	AboutComponent
} from './components/index.pages';

const app_routes: Routes = [
	 { path: '', component: HomeComponent },
	// { path: 'categorias', component: CategoriesComponent },
	// { path: 'categoria', component: CategoryComponent },
	// { path: 'contacto', component: ContactsComponent },
	// { path: 'sobre-nosotros', component: AboutComponent },
	{ path: '**', pathMatch: 'full', redirectTo: '' }
];

export const app_routing = RouterModule.forRoot(app_routes);