import AbstractTool from "./AbstractTool";

export default class Shuriken extends AbstractTool {
    public constructor() {
        super('Shuriken');

        this.setHead(
            {
                partTexture: "part/knife_blade",
                componentTexture: "shuriken/shuriken",
            },
            {
                partTexture: "part/knife_blade",
                componentTexture: "shuriken/shuriken2",
            },
            {
                partTexture: "part/knife_blade",
                componentTexture: "shuriken/shuriken3",
            },
            {
                partTexture: "part/knife_blade",
                componentTexture: "shuriken/shuriken4",
            }
        );
    }

    public isBuilt(): boolean {
        return !(!this.head[0].part || !this.head[1].part || !this.head[2].part || !this.head[3].part);
    }

    public getDurability() {
        return 6;
    }
}
