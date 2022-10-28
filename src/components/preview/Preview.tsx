type PreviewProps = {
    url: string|null
}

function Preview({ url }: PreviewProps) {
    const getYoutubeVideoId = (url: string|null) => {
        if (url != null) {
            let regExpMatchArray = url.match(/youtube\.com.*(\?v=|\/embed\/)(.{11})/);
            return regExpMatchArray ? regExpMatchArray.pop() : null;
        }
        return null;
    };

    const getYoutubeThumbnailUrl = (url: string|null) => {
        let videoId = getYoutubeVideoId(url);
        let urlYoutubeImg = "//img.youtube.com";
        if (videoId) {
            return `${urlYoutubeImg}/vi/${videoId}/0.jpg`;
        }
        return urlYoutubeImg;
    };

    return <div>
        <img className="preview" src={getYoutubeThumbnailUrl(url)}/>
    </div>
}

export default Preview
