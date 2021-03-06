import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { DataEmitterComponent } from "./data-emitter/data-emitter.component";

@NgModule({
  imports: [BrowserModule, FormsModule, HttpModule, HttpClientModule],
  declarations: [AppComponent, HelloComponent, DataEmitterComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
