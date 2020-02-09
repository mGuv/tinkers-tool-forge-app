import AbstractTool from "./AbstractTool";

export default class Pickaxe extends AbstractTool {
    public constructor() {
        super('Pickaxe',
            {
                part: 'pickaxe/head',
                component: 'pickaxe/head',
                materialType: 'head',
            },
            {
                part: 'part/binding',
                component: 'pickaxe/binding',
                materialType: 'extra',
            },
            {
                part: 'part/tool_rod',
                component: 'pickaxe/handle',
                materialType: 'toolrod',
            }
        );
    }
}
