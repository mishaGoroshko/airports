// interface ILocation {
//     lat: number,
//     lon: number,
// }
//
// export interface IAirport {
//     icao: string,
//     iata: string,
//     name: string,
//     shortName: string,
//     municipalityName: string,
//     location: ILocation,
//     countryCode: string,
// }

export interface Location {
    lat: number;
    lon: number;
}

export interface IAirport {
    icao: string;
    iata: string;
    name: string;
    shortName: string;
    municipalityName: string;
    location: Location;
    countryCode: string;
}

export interface IAirportsResponse {
    searchBy: string;
    items: IAirport[];
}
