import Album from "../../../../domain/model/Album";
import Artist from "../../../../domain/model/Artist";
import Track from "../../../../domain/model/Track";

/** Entidad para mapear el resultado la respuesta recibida de la API de Spotify despues de realizar una busqueda */
export default interface GeneralSearchAPIEntity {
    /** Objeto que contendra la lista de albumes retornados desde la API*/
    albums: { items: Album[] },
    /** Objeto que contendra la lista de artistas retornados desde la API */
    artists: { items: Artist[] },
    /** Objeto que contendra la lista de canciones retornadas desde la API */
    tracks: { items: Track[] },
}