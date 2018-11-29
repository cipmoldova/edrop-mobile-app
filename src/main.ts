// this import should be first in order to load some required settings (like globals and reflect-metadata)
import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppOptions } from "nativescript-angular/platform-common";
// import "./livesync-navigation";
import { enableProdMode } from "@angular/core";

import { AppModule } from "./app/app.module";

// enableProdMode();
const options: AppOptions = {};
const hotModuleName: string = "hot";
if (module[hotModuleName]) {
    const hmrUpdate = require("nativescript-dev-webpack/hmr").hmrUpdate;

    options.hmrOptions = {
        livesyncCallback: (platformReboot) => {
            // console.log("HMR: Sync...")
            hmrUpdate();
            setTimeout(platformReboot, 0);
        },
        moduleTypeFactory: () => AppModule,
    };
    hmrUpdate();

    // Path to your app module.
    // You might have to change it if your module is in a different place.
    module[hotModuleName].accept(["./app/app.module"]);
}

// !!! Don't forget to pass the options when creating the platform
platformNativeScriptDynamic(options).bootstrapModule(AppModule);
