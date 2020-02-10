import AbstractTool from "./AbstractTool";

export default class Pickaxe extends AbstractTool {
    public constructor() {
        super('Pickaxe');

        this.setHead(
            {
                partTexture: 'pickaxe/head',
                componentTexture: 'pickaxe/head',
            }
        );

        this.setExtra({
            partTexture: 'part/binding',
            componentTexture: 'pickaxe/binding',
        });

        this.setHandle({
            partTexture: 'part/tool_rod',
            componentTexture: 'pickaxe/handle',
        });
    }
}
