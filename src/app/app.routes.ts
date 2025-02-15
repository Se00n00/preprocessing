import { Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { LicenseComponent } from './license/license.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {path:"",title:"Preprocessing", component:HomeComponent},
    {path:"about",title:"about me",component:AboutComponent},
    {path:"license",title:"license",component:LicenseComponent},
    {path:"**",title:"oops! page not found",component:NotfoundComponent}
];
