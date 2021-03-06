/**
 * Copyright (c) 2016-2017 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClrIconModule } from "../../icon/icon.module";
import { ClrFormsModule } from "../../forms/forms.module";
import { FormsModule } from "@angular/forms";
import { TREE_VIEW_DIRECTIVES } from "./index";

@NgModule({
    imports: [
        CommonModule,
        FormsModule, //[(ngModel)] usage in TreeView requires it.
        ClrFormsModule,
        ClrIconModule,
    ],
    declarations: [
        TREE_VIEW_DIRECTIVES
    ],
    exports: [
        TREE_VIEW_DIRECTIVES
    ]
})
export class ClrTreeViewModule {}
