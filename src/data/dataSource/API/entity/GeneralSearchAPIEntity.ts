import Album from "../../../../domain/model/Album";
import Artist from "../../../../domain/model/Artist";
import Track from "../../../../domain/model/Track";

export default interface GeneralSearchAPIEntity {
    albums: { items: Album[] },
    artists: { items: Artist[] },
    tracks: { items: Track[] },
}