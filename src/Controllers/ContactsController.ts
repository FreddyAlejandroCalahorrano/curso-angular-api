import {Post, Get, JsonController, Body, QueryParam} from "routing-controllers";
import {newUID} from "../Utils/util";

@JsonController('/contacts/')
export class ContactsControllers {

    listContacts: any[] = [
        {
            id: 1,
            firstName: "Freddy",
            lastName: "Calahorrano",
            email: "fredd-1333@hotmail.com",
            bank: "Pichincha",
            acountType: "Ahorros",
            acountNumber: 2255908465
        },
        {
            id: 2,
            firstName: "Samir",
            lastName: "Calahorrano",
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

    @Get('contact')
    getList(@QueryParam('id') id: number) {
        if(id) return this.listContacts.filter(item => item.id == id)
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
