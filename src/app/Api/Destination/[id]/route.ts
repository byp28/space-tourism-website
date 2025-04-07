import * as data from '../../data.json';

export async function GET(_request : Request, {params}:
    {params : {id : string}}
){
    const destination = data.destinations[parseInt(params.id)]
    return Response.json(destination)
}