import process from "node:process";
import os from "node:os";
import {execSync} from 'child_process';

/**
 * 判断是否支持当前环境是否支持 TrueColor
 * @returns {boolean} 是否支持 TrueColor
 */
export default (): boolean => {
    if (process.platform === 'win32') {
        // Windows 10 build 14931 is the first release that supports 16m/TrueColor.
        const osRelease = os.release().split('.');
        return Number(osRelease[0]) >= 10 && Number(osRelease[2]) >= 14_931;
    } else if (process.platform === 'darwin') {
        const result = execSync('tput colors');
        const numColors = parseInt(result.toString().trim(), 10);
        return numColors >= 256;
    }
    return false;
}
