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

    public isBuilt(): boolean {
        return !(!this.head[0].part || !this.extra[0].part || !this.handle[0].part);
    }

    public getDurability(): number {
        if (!this.head[0].part || !this.extra[0].part || !this.handle[0].part) {
            return 0;
        }

        return Math.floor((this.head[0].part.Durability + this.extra[0].part.ExtraDurability) * this.handle[0].part.Modifier + this.handle[0].part.Durability);
    }
}
