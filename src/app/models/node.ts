import { Api } from './api'

export class Node {
    id: string
    address: string
    api: Api
    host: Node
    role: string
    services: Array<any>
    version: string
}
