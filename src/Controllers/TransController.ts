import {Post, Get, JsonController, Body, QueryParam} from "routing-controllers";
import {newUID} from "../Utils/util";

@JsonController('/trans/')
export class TransControllers {

    

    //#region Catalogos
    listTransCuenta: any[] = [
        {
            idCuenta: "ou5l8mchp3s",
            valor: 100,
            Saldo: 10100,
            FechaTrans: '2020-02-11'
        },
        {
            idCuenta: "ou5l8mchp3s",
            valor: 20,
            Saldo: 10000,
            FechaTrans: '2020-02-10'
        },
        {
            idCuenta: "ou5l8mchp3s",
            valor: 9980,
            Saldo: 9980,
            FechaTrans: '2020-02-10'
        },
        {
            idCuenta: "1bxgrnux5m4",
            valor: 300,
            Saldo: 3300,
            FechaTrans: '2022-01-03'
        },
        {
            idCuenta: "1bxgrnux5m4",
            valor: 200,
            Saldo: 3000,
            FechaTrans: '2021-12-30'
        },
        {
            idCuenta: "1bxgrnux5m4",
            valor: 500,
            Saldo: 2500,
            FechaTrans: '2021-11-31'
        },
        {
            idCuenta: "av23eu4plma",
            valor: 100,
            Saldo: 2200,
            FechaTrans: '2022-01-30'
        },
        {
            idCuenta: "av23eu4plma",
            valor: 100,
            Saldo: 2100,
            FechaTrans: '2021-11-01'
        },
        {
            idCuenta: "av23eu4plma",
            valor: 100,
            Saldo: 2000,
            FechaTrans: '2021-10-30'
        }
    ]
    //#endregion

    @Get('')
    getIndex() {
        return [...this.listTransCuenta]
    }

    @Get('tipoTrans')
    getList(@QueryParam('idCuenta') id: string) {
        if(id) return this.listTransCuenta.filter(item => item.idCuenta == id)
        return [...this.listTransCuenta]
    }

    // @Post('')
    // createItem(@Body() body: { Descripcion: string }) {
    //     const data = {...body, id: newUID()}
    //     this.listItems.push(data)
    //     return data
    // }

    // @Post('convert-list')
    // parseList(@Body() body: any) {
    //     return body.map(item => ({id: newUID(), Descripcion: item}))
    // }
}
