import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { android as androidApp } from "tns-core-modules/application";
import { Color } from "tns-core-modules/color";

@Component({
    // tslint:disable-next-line: component-selector
    selector: "HtmlViewer",
    template: `
        <HtmlView
            #htmlView
            [html]="html"
            (loaded)="onLoaded()"
            marginBottom="-30"
            marginTop="-12"
            [width]="width"
        ></HtmlView>
	`,
    styleUrls: [ ],
})
export class HtmlViewerComponent implements OnInit {

    @Input()
    color: string;

    @Input()
    fontFamily: string;

    @Input()
    fontSize: string;

    @Input()
    html: string;

    @Input()
    width: string;

    @ViewChild("htmlView", { static: true })
    htmlView: ElementRef;

    private fontLocation: string = "app/fonts/";
    private fontExtension: string = ".ttf";

    private typeface: globalAndroid.graphics.Typeface;
    private textColor: number;
    private textSize: number;

    constructor (private elementRef: ElementRef) {
    }

    ngOnInit(): void {
        // set default values
        this.width = this.width ? this.width : "100%";
    }

    /// In this method we process inner and CSS style attributes
    onLoaded() {

        // make sure the native element view has been built
        while (!this.htmlView.nativeElement.android) {
            setTimeout(() => {}, 100);
        }
        const htmlView = this.htmlView.nativeElement.android;

        // manage the case where CSS attributes come from a CSS file or are not defined
        this.color = this.color ? this.color : this.elementRef.nativeElement.style.color.hex;
        this.color = this.color ? this.color : "black";
        //
        this.fontFamily = this.fontFamily ? this.fontFamily : this.elementRef.nativeElement.style.fontFamily;
        this.fontFamily = this.fontFamily ? this.fontFamily : "serif";
        this.fontFamily = this.fontFamily.replace(/[\"\']/g, ""); // trim surrounding quotes
        //
        this.fontSize = this.fontSize ? this.fontSize : this.elementRef.nativeElement.style.fontSize;
        this.fontSize = this.fontSize ? this.fontSize : "16";

        // calculate attributes
        switch (this.fontFamily.toLowerCase()) {
            case "monospace" :
                this.typeface = android.graphics.Typeface.MONOSPACE;
                break;
            case "serif" :
                this.typeface = android.graphics.Typeface.SERIF;
                break;
            case "sans-serif" :
                this.typeface = android.graphics.Typeface.SANS_SERIF;
                break;
            default :
                this.typeface = android.graphics.Typeface.createFromAsset(
                    androidApp.context.getAssets(),
                    this.fontLocation + this.fontFamily + this.fontExtension,
                );
                break;
        }
        this.textColor = new Color(this.color).android;
        this.textSize = Number(this.fontSize);

        // set attributes for the inner view
        htmlView.setTextColor(this.textColor);
        htmlView.setTextSize(this.textSize);
        htmlView.setTypeface(this.typeface);
    }
}
