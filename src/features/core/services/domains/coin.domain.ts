export interface ICoin {
    name: string
    shortType: ICoinShortType
    value: number
}

export enum ICoinShortType {
    CP = 'CP',
    SP = 'SP',
    EP = 'EP',
    GP = 'GP',
    PP = 'PP',
}
