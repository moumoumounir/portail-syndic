import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginAdminComponent } from './views/login-admin/login-admin.component';
import { LandingAdminComponent } from './views/landing-admin/landing-admin.component';
import { ComplainlistAdminComponent } from './views/complainlist-admin/complainlist-admin.component';
import { ComplainreportAdminComponent } from './views/complainreport-admin/complainreport-admin.component';
import { LoginUserComponent } from './views/login-user/login-user.component';
import { RegisterUserComponent } from './views/register-user/register-user.component';
import { HomeUserComponent } from './views/home-user/home-user.component';
import { TableComponent } from './components/table/table.component';
import { TableSearchbarComponent } from './components/table-searchbar/table-searchbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LandingUserComponent } from './views/landing-user/landing-user.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { NavbarUserComponent } from './components/navbar-user/navbar-user.component';
import { CarouselComponent } from './components/landing-carousel/carousel.component';
import { ModalComponent } from './components/modal/modal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { GraficoComponent } from './components/grafico/grafico.component';
import { ComplainAccordionComponent } from './components/complain-accordion/complain-accordion.component';
import { CallbackPipe } from './clases/callback.pipe';
import { SlaPieComponent } from './components/sla-pie/sla-pie.component';
import { ComplainCardsComponent } from './components/complain-cards/complain-cards.component';
import { TableAnswerModalComponent } from './components/table-answer-modal/table-answer-modal.component';
import { ComplainlistUserComponent } from './views/complainlist-user/complainlist-user.component';
import { DataUserComponent } from './views/data-user/data-user.component';
import { NotificationlistUserComponent } from './views/notificationlist-user/notificationlist-user.component';
import { NewslistComponent } from './views/newslist/newslist.component';
import { RaportUserComponent } from './views/raport-user/raport-user.component';
import { KpiuserCardComponent } from './components/kpiuser-card/kpiuser-card.component';
import { KpipaimentGraphComponent } from './components/kpipaiment-graph/kpipaiment-graph.component';
import { KpidepenseGraphComponent } from './components/kpidepense-graph/kpidepense-graph.component';
import { KpiimpayeGraphComponent } from './components/kpiimpaye-graph/kpiimpaye-graph.component';
import { KpiengagementGraphComponent } from './components/kpiengagement-graph/kpiengagement-graph.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginAdminComponent,
    LandingAdminComponent,
    ComplainlistAdminComponent,
    ComplainreportAdminComponent,
    LoginUserComponent,
    RegisterUserComponent,
    HomeUserComponent,
    TableComponent,
    TableSearchbarComponent,
    FooterComponent,
    LandingUserComponent,
    NavbarAdminComponent,
    NavbarUserComponent,
    CarouselComponent,
    GraficoComponent,
    ModalComponent,
    ComplainAccordionComponent,
    CallbackPipe,
    SlaPieComponent,
    ComplainCardsComponent,
    TableAnswerModalComponent,
    ComplainlistUserComponent,
    DataUserComponent,
    NotificationlistUserComponent,
    NewslistComponent,
    RaportUserComponent,
    KpiuserCardComponent,
    KpipaimentGraphComponent,
    KpidepenseGraphComponent,
    KpiimpayeGraphComponent,
    KpiengagementGraphComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }