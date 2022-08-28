    interface Result {
        anilist: number;
        filename: string;
        episode: number;
        from: number;
        to: number;
        similarity: number;
        video: string;
        image: string;
    }

    export interface ImageModel {
        frameCount: number;
        error: string;
        result: Result[];
    }