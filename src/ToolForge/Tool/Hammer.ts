import AbstractTool from "./AbstractTool";

export default class Hammer extends AbstractTool {
    public constructor() {
        super('Hammer');

        this.setHead(
            {
                partTexture: 'hammer/head',
                componentTexture: 'hammer/head',
            },
            {
                partTexture: 'large_plate',
                componentTexture: 'hammer/front',
            },
            {
                partTexture: 'large_plate',
                componentTexture: 'hammer/back',
            },
        );

        this.setHandle(
            {
                partTexture: 'tool_rod',
                componentTexture: 'hammer/handle',
            }
        );
    }
}
