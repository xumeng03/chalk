/**
 * 将16进制的颜色转换为RGB返回
 * @param hex - 16进制的颜色
 * @returns {number, number, number} 16进制的颜色的RGB表示
 */
export const hexToRgb = (hex: string) => {
    const matches = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)!;
    return {
        r: parseInt(matches[1], 16),
        g: parseInt(matches[2], 16),
        b: parseInt(matches[3], 16)
    }
}
