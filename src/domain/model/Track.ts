import Album from "./Album";
import Artist from "./Artist";

export default interface Track {
    id: string,
    artists: Artist[],
    explicit: boolean,
    name: string,
    album: Album,
}