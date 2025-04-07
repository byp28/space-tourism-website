import * as data from '../data.json';

export interface Destination{
    name : string,
    images : {
        png : string,
        webp : string,
    },
    description : string;
    distance : string;
    travel : string;
}

export async function GET() {

    return Response.json(data.destinations)
}