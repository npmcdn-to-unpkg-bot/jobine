/**
 * Created by Alain on 4/26/2016.
 */
export class Job {
    id: string;
    job:{
        name:string,
        type:string,
        description:string,

        location:{
            longitude:number,
            latitude:number,
        },
        created:string

    }
}