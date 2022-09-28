export interface InfoDtoIfc {
    database: boolean;
}

export class InfoDto implements InfoDtoIfc {
    constructor(public database: boolean) {}
}
