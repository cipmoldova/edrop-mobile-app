/*
In NativeScript, a file with the same name as an XML file is known as
a code-behind file. The code-behind is a great place to place your view
logic, and to set up your page’s data binding.
*/

const HomeViewModel = require("./home-view-model");
const fileSystemModule = require("tns-core-modules/file-system");

function onNavigatingTo(args) {
    const page = args.object;
    page.bindingContext = new HomeViewModel();
}

exports.onNavigatingTo = onNavigatingTo;

exports.pageLoaded = function() {
    console.log("Hello World");
};

exports.pageLoaded = function() {
    console.log({
      type: "Apple",
      color: "Red"
    });
};

let documentsFolder = fileSystemModule.knownFolders.documents();
const currentAppFolder = fileSystemModule.knownFolders.currentApp();
const tempFolder = fileSystemModule.knownFolders.temp();
