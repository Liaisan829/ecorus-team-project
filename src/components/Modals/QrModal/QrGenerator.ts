export function qrGenerator() {
    let text = "";
    let possible = "0123456789abcdefghijklmnopqrstuvwxyz";

    for (let i = 0; i < 8; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length)).toUpperCase();
    }

    return text;
}