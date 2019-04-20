import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ItemDetailComponent } from "./item-detail/item-detail.component";
import { SearchRoutingModule  } from "./search-routing.module";
import { SearchComponent } from "./search.component";

@NgModule({
    declarations: [
        SearchComponent,
        ItemDetailComponent,
    ],
    imports: [
        NativeScriptCommonModule,
        SearchRoutingModule,
    ],
    providers: [
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SearchModule { }
