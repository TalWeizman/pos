import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule , ReactiveFormsModule }   from '@angular/forms'; 
import { RouterModule, Routes } from '@angular/router';

//angular metirials stuff
import { MaterialModule } from '@angular/material';
import {MdChipsModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


import { FlashMessagesModule } from 'angular2-flash-messages';


//componentes
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CartComponent } from './cart/cart.component';
import { SaleScreenComponent } from './sale-screen/sale-screen.component';
import { SideControlComponent } from './side-control/side-control.component';
import { ProductsFilterPipe } from './pipes/product-filter/products-filter.pipe';
import { ShiftLogComponent } from './shift-log/shift-log.component';
import { DisscountComponent } from './disscount/disscount.component';
import { CartItemsPipe } from './pipes/cart-items/cart-items.pipe';
import { FocusDirective } from './focus.directive';
import { MainScreenComponent } from './main-screen/main-screen.component';
import { BackOfficeComponent } from './back-office/back-office.component';
import { BoReportsComponent } from './bo-reports/bo-reports.component';
import { BoUsersComponent } from './bo-users/bo-users.component';
import { BoItemsComponent } from './bo-items/bo-items.component';
import { BoCategoriesComponent,DelDialog,AddDialog } from './bo-categories/bo-categories.component';
import { BoInventoryComponent } from './bo-inventory/bo-inventory.component';
import { BoDashboardComponent } from './bo-dashboard/bo-dashboard.component';
import { BoCustomersComponent } from './bo-customers/bo-customers.component';
import { BoSalesComponent } from './bo-sales/bo-sales.component';
import { LoginComponent } from './login/login.component';

//firebase
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterComponent } from './register/register.component';
import { CategoriesFilterPipe } from './pipes/categories-filter/categories-filter.pipe';
import{ FirebaseServiceService } from './firebase-service.service';
import { HomeComponent } from './home/home.component';
import { ItemFilterPipe } from './pipes/item-filter/item-filter.pipe';
import { CatFilterPipe } from './pipes/cat-filter/cat-filter.pipe';
import { CashDialogComponent } from './cash-dialog/cash-dialog.component';
import { BoPermissionComponent } from './bo-permission/bo-permission.component';
import { XReportDialogComponent } from './x-report-dialog/x-report-dialog.component';
import { SettingComponent } from './setting/setting.component';
import {Md5} from 'ts-md5/dist/md5';


const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register',      component: RegisterComponent },
  { path: 'pos/:id',      component: HomeComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    NavBarComponent,
    CartComponent,
    SaleScreenComponent,
    SideControlComponent,
    ProductsFilterPipe,
    ShiftLogComponent,
    DisscountComponent,
    DelDialog,
    AddDialog,
    CartItemsPipe,
    FocusDirective,
    MainScreenComponent,
    BackOfficeComponent,
    BoReportsComponent,
    BoUsersComponent,
    BoItemsComponent,
    BoCategoriesComponent,
    BoInventoryComponent,
    BoDashboardComponent,
    BoCustomersComponent,
    BoSalesComponent,
    LoginComponent,
    RegisterComponent,
    CategoriesFilterPipe,
    HomeComponent,
    ItemFilterPipe,
    CatFilterPipe,
    CashDialogComponent,
    BoPermissionComponent,
    XReportDialogComponent,
    SettingComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MdChipsModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FlashMessagesModule,
  ],
   entryComponents: [
    ShiftLogComponent,
    DisscountComponent,
    CashDialogComponent,
    DelDialog,
    AddDialog,
    XReportDialogComponent
  ],

  providers: [FirebaseServiceService,Md5],
  bootstrap: [AppComponent]
})
export class AppModule { }
