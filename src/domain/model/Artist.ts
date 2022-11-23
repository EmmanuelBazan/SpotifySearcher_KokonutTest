import ImageItem from "./ImageItem";

export default interface Artist {
    id: string,
    name: string,
    images?: ImageItem[],
}