import { Injectable } from "@angular/core";
import { init } from "kinvey-nativescript-sdk";

export class BackendService {
    static kinveyAppKey = "kid_SyY8LYO8M";
    static kinveyAppSecret = "09282985d7c540f7b076a9c7fd884c77";
    static kinveyUsername = "admin";
    static kinveyPassword = "admin";

    static setup() {
        init({
            appKey: BackendService.kinveyAppKey,
            appSecret: BackendService.kinveyAppSecret,
        });
    }
}
