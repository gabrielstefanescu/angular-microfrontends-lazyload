// import { Page2Component } from "page2/page2.component";
// import { Page1Component } from "page1/page1.component";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { RouterModule } from "@angular/router";

import { MainComponent } from "./main.component";

import { mainRoutes } from "./main.routes";
// import {
//   MatInputModule,
//   MatFormFieldModule,
//   MatSliderModule
// } from "@angular/material";

// const materialModules = [MatInputModule, MatFormFieldModule, MatSliderModule];
const moduleComponents = [MainComponent];

@NgModule({
  imports: [RouterModule.forChild(mainRoutes)],
  exports: [],
  declarations: moduleComponents,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: []
})
export class MainModule {}
