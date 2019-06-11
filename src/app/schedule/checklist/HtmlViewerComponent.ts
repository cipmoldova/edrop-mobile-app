import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { android as androidApp } from "tns-core-modules/application";
import { Color } from "tns-core-modules/color";

@Component({
    selector: "HtmlViewer",
    template: `
        <HtmlView
            #htmlView
            [html]="html"
            [width]="width"
            (loaded)="onLoaded()"
            class="question-label"
        ></HtmlView>
	`,
    styleUrls: ["./checklist.component.scss"],
})
export class HtmlViewerComponent implements OnInit {

    @Input()
    html: string;

    @Input()
    width: string;

    @Input()
    fontFamily: string;

    @Input()
    textSize: string;

    @Input()
    textColor: string;

    @ViewChild("htmlView")
    htmlView: ElementRef;

    private fontLocation: string = "app/fonts";
    private fontExtension: string = ".ttf";

    private typeface: globalAndroid.graphics.Typeface;
    private color: number;

    ngOnInit(): void {

        // set default values
        this.html       = this.html         ? this.html         : "< Eroare! >";
        this.textColor  = this.textColor    ? this.textColor    : "#555555";
        this.textSize   = this.textSize     ? this.textSize     : "17";
        this.fontFamily = this.fontFamily   ? this.fontFamily   : "Roboto Regular";
        this.width      = this.width        ? this.width        : "65%";

        this.typeface = android.graphics.Typeface.createFromAsset(
            androidApp.context.getAssets(),
            this.fontLocation + "/" + this.fontFamily + this.fontExtension
        );
        this.color = new Color(this.textColor).android;
    }

    onLoaded() {
        while (!this.htmlView) {
            setTimeout(() => null, 100);
        }
        const htmlView = this.htmlView.nativeElement.android;
        htmlView.setTextColor(this.color);
        htmlView.setTypeface(this.typeface);
        htmlView.setTextSize(Number(this.textSize));
    }
}
