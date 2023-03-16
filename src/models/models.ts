export interface ILocation {
    lat: number;
    lon: number;
}

export interface IAirport {
    icao: string;
    iata: string;
    name: string;
    shortName: string;
    municipalityName: string;
    location: ILocation;
    countryCode: string;
}

export interface IServerResponse<T> {
    searchBy: string;
    items: T[];
}
