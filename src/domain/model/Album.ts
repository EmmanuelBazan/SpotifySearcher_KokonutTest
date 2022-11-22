import Artist from "./Artist"
import ImageItem from "./ImageItem"

export default interface Album {
    id: string,
    album_type: string,
    artists: Artist,
    images: ImageItem[],
    release_date: string
}