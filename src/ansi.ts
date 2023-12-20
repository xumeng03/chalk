/**
 * ESC 按键的 Ansi 码
 */
export const ESC_CODE: string = "\u001B"

/**
 * 图形再现参数的 Ansi 码表1（开启）
 */
const Style1 = {
    // 前景色
    'foreground': '38;2;',
    // 背景色
    'background': '48;2;',
    // 加粗
    'bold': '1',
    // 暗淡
    'dim': '2',
    // 倾斜
    'italic': '3',
    // 下划线
    'underline': '4',
    // 闪烁
    'flick': '5',
    // 快速闪烁
    'fast_flick': '6',
    // 反转
    'inverse': '7',
    // 隐藏
    'hidden': '8',
    // 删除线
    'strikethrough': '9',
    // 上划线
    'overline': '53',
};

/**
 * 图形再现参数的 Ansi 码表2（关闭）
 */
const Style2 = {
    // 前景色
    'foreground': '39',
    // 背景色
    'background': '49',
    // 加粗
    'bold': '22',
    // 暗淡
    'dim': '22',
    // 倾斜
    'italic': '23',
    // 下划线
    'underline': '24',
    // 闪烁
    'flick': '25',
    // 快速闪烁
    'fast_flick': '25',
    // 反转
    'inverse': '27',
    // 隐藏
    'hidden': '28',
    // 删除线
    'strikethrough': '29',
    // 上划线
    'overline': '55',
};

export type Style1 = keyof typeof Style1
export const EscapeSequence1 = (key: Style1, ...args: any[]) => {
    const code = Style1[key];
    // return String.raw`${ESC_CODE}[${code}${args.join(';')}m`;
    return `${ESC_CODE}[${code}${args.join(';')}m`;
}

export type Style2 = keyof typeof Style2
export const EscapeSequence2 = (key: Style2) => {
    const code = Style2[key]
    // return String.raw`${ESC_CODE}[${code}m`;
    return `${ESC_CODE}[${code}m`;
}

export type Styles = Style1 & Style2
