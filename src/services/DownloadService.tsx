export class DownloadService {
    static download(url: string|null) {
        const SERVER_URL = import.meta.env.VITE_SERVER_URI;
        return fetch(`${SERVER_URL}/download?url=${url}`)
            .then(T => T.json())
    }
}