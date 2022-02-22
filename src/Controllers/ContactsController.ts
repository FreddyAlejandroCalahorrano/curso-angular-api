import {Post, Get, JsonController, Body} from "routing-controllers";
import {newUID} from "../Utils/util";

@JsonController('/contacts/')
export class ContactsControllers {

    listContacts: any[] = [
        {
            id: 1,
            firstName: "Freddy",
            secondName: "Alejandro",
            lastName: "Calahorrano",
            secondLastName: "Rivera",
            email: "fredd-1333@hotmail.com",
            bank: "Pichincha",
            acountType: "Ahorros",
            acountNumber: 2255908465
        },
        {
            id: 2,
            firstName: "Samir",
            secondName: "Alejandro",
            lastName: "Calahorrano",
            secondLastName: "Rivera",
            email: "sami-1333@hotmail.com",
            bank: "Pichincha",
            acountType: "Ahorros",
            acountNumber: 2255908465
        }
    ]

    @Get('')
    getIndex() {
        return [...this.listContacts]
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
