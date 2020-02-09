import AbstractTool from "./AbstractTool";

export default class Hammer extends AbstractTool {
    public constructor() {
        super('Hammer',
            {
                part: 'hammer/head',
                component: 'hammer/head',
                materialType: 'head',
            },
            {
                part: 'large_plate',
                component: 'hammer/front',
                materialType: 'head',
            },
            {
                part: 'large_plate',
                component: 'hammer/back',
                materialType: 'head',
            },
            {
                part: 'tool_rod',
                component: 'hammer/handle',
                materialType: 'toolrod',
            }
        );
    }
}
