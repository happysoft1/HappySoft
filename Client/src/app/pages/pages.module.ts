import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "../app-routing.module";
import { LoginComponent } from "./login/login.component";
import { LoginModule } from "./login/login.module";

@NgModule({
    imports:[
        BrowserModule,
        AppRoutingModule,
        LoginModule
    ],
    declarations:[
    ],
    providers:[]
})
export class PageModule{}