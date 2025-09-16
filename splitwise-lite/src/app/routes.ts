import { Routes } from '@angular/router';
import { DashboardPage } from './pages/dashboard.page';
import { GroupsPage } from './pages/groups.page';
import { GroupDetailPage } from './pages/group-detail.page';
import { AddExpensePage } from './pages/add-expense.page';

export const APP_ROUTES: Routes = [
  { path: '', component: DashboardPage },
  { path: 'groups', component: GroupsPage },
  { path: 'groups/:groupId', component: GroupDetailPage },
  { path: 'add', component: AddExpensePage },
  { path: '**', redirectTo: '' }
];

