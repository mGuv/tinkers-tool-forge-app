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
                partTexture: 'part/large_plate',
                componentTexture: 'hammer/front',
            },
            {
                partTexture: 'part/large_plate',
                componentTexture: 'hammer/back',
            },
        );

        this.setHandle(
            {
                partTexture: 'part/tool_rod',
                componentTexture: 'hammer/handle',
            }
        );
    }

    public getDurability(): number {
        if (!this.head[0].part || !this.head[1].part || !this.head[2].part || !this.handle[0].part) {
            return 0;
        }

        const base = (
            this.head[0].part.Durability * 2
            + this.head[1].part?.Durability
            + this.head[2].part?.Durability
        ) / 4;

        return Math.floor((base * this.handle[0].part.Modifier + this.handle[0].part.Durability) * 2.5);
    }

    public isBuilt(): boolean {
        return !(!this.head[0].part || !this.head[1].part || !this.head[2].part || !this.handle[0].part);
    }
}
