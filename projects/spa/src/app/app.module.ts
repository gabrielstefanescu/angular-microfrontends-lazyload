import { BrowserModule } from "@angular/platform-browser";
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";

import { AppComponent } from "./app.component";
import { Page1Component } from "./page1/page1.component";
import { Page2Component } from "./page2/page2.component";

import { RouterModule } from "@angular/router";
import { EmptyComponent } from "./empty/empty.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MainComponent } from "./main/main.component";

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        { path: "", pathMatch: "full", redirectTo: "spa/main" },
        {
          path: "spa",
          // component: MainComponent,
          // children: [{ path: "main", component: MainComponent }]

          loadChildren: () =>
            import("./main/main.module").then(m => m.MainModule)
        },
        { path: "**", component: EmptyComponent }
      ],
      { useHash: true }
    ),
    ReactiveFormsModule
  ],
  declarations: [AppComponent, Page1Component, Page2Component, EmptyComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule {}
