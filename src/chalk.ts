import supportTrueColor from "./supportTrueColor.js";
import {EscapeSequence1, EscapeSequence2, Styles} from "./ansi.js";
import {ColorMapping, Colors, isColorName} from "./color.js";
import {hexToRgb} from "./utils.js";

type colorType = "foreground" | "background"

export class Chalk {
    private prefix: string
    private suffix: string

    constructor() {
        if (!supportTrueColor()) {
            throw new Error("Not Supported TrueColor!")
        }
        this.prefix = ''
        this.suffix = ''
    }

    private escapeSequence(key: Styles, ...args: any[]) {
        this.prefix += EscapeSequence1(key, ...args)
        this.suffix += EscapeSequence2(key)
    }

    private rgb(t: colorType, r: number, g: number, b: number): this;
    private rgb(t: colorType, r: number, g: number, b: number, ...args: string[]): string;
    private rgb(t: colorType, r: number, g: number, b: number, ...args: string[]): string | this {
        this.escapeSequence(t as Styles, r, g, b);
        if (args.length > 0) {
            return this.build(...args);
        }
        return this;
    }

    build(...args: string[]) {
        const text = this.prefix + args.join(' ') + this.suffix;
        this.prefix = ''
        this.suffix = ''
        return text;
    }

    // style
    style(s: Styles): this;
    style(s: Styles, ...args: string[]): string;
    style(s: Styles, ...args: string[]): string | this {
        this.escapeSequence(s)
        if (args.length > 0) {
            return this.build(...args);
        }
        return this;
    }

    // color
    color(name: Colors): this;
    color(name: Colors, ...args: string[]): string;
    color(name: string): this;
    color(name: string, ...args: string[]): string;
    color(name: Colors | string, ...args: string[]): string | this {
        const {r, g, b} = isColorName(name) ? hexToRgb(ColorMapping[name as Colors]) : hexToRgb(name);
        return this.rgb("foreground", r, g, b, ...args)
    }

    // bgColor
    bgColor(name: Colors): this;
    bgColor(name: Colors, ...args: string[]): string;
    bgColor(name: string): this;
    bgColor(name: string, ...args: string[]): string;
    bgColor(name: Colors | string, ...args: string[]): string | this {
        const {r, g, b} = isColorName(name) ? hexToRgb(ColorMapping[name as Colors]) : hexToRgb(name);
        return this.rgb("background", r, g, b, ...args)
    }
}

export default new Chalk();

// const chalk = new Chalk();
// console.log(chalk.color("#ff9600").bgColor("skyblue").style("bold", "hello chalk!"));
// console.log(chalk.color("red").bgColor("pink").style("bold").build("hello chalk!"));
