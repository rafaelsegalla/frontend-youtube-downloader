export class UriValidator {
    static isValid(url: string) {
        return /^(ftp|http|https):\/\/[^ "]+$/.test(url);
    }
}