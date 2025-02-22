import { NgModule } from '@angular/core';
import { Routes ,RouterModule} from '@angular/router';
import { LayoutComponent } from './component/layout/layout.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { RoleComponent } from './component/role/role.component';
import { AnalystComponent } from './component/analyst/analyst.component';


export const routes: Routes = [
	{
		path: '',
		redirectTo: 'admin-bbo', // Điều hướng mặc định đến /admin-bbo khi vào trang gốc "/"
		pathMatch: 'full'
	  },
	  {
		path: 'admin-bbo',
		component: LayoutComponent,
		children: [
		  { path: '', component: DashboardComponent }, // Khi vào /admin-bbo, hiển thị Dashboard
		  { path: 'role', component: RoleComponent },  // Khi vào /admin-bbo/role, hiển thị RoleComponent
		  { path: 'analyst', component: AnalystComponent},
		  
		]
	  },
	  { 
		path: '**', 
		redirectTo: 'admin-bbo', 
		pathMatch: 'full'  // Tránh lỗi vòng lặp
	  }
];
