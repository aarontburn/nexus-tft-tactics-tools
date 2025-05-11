import { Process } from "@nexus-app/nexus-module-builder"
import { session } from "electron";
import { join } from "path";

// These is replaced to the ID specified in export-config.js during export. DO NOT MODIFY.
const MODULE_ID: string = "{EXPORTED_MODULE_ID}";
const MODULE_NAME: string = "{EXPORTED_MODULE_NAME}";
// ---------------------------------------------------

// If you have an icon, specify the relative path from this file.
// Can be a .png, .jpeg, .jpg, or .svg
const ICON_PATH: string = join(__dirname, "../tactics-tools.png")


export default class ChildProcess extends Process {

    public constructor() {
        super({
            moduleID: MODULE_ID,
            moduleName: MODULE_NAME,
            paths: {
                iconPath: ICON_PATH,
                urlPath: "https://tactics.tools/"
            },
            httpOptions: {
                userAgent: session
                    .fromPartition(`persist:${MODULE_ID}`)
                    .getUserAgent()
                    .replace(/Electron\/*/, ''),
                partition: `persist:${MODULE_ID}`
            }
        });

    }


}