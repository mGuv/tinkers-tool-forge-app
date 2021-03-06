import AbstractTool from "./AbstractTool";

export default class Shuriken extends AbstractTool {
    public constructor() {
        super('Shuriken');

        this.setRequirements(
            {
                type: "head",
                partTexture: "part/knife_blade",
                componentTexture: "shuriken/shuriken",
            },
            {
                type: "head",
                partTexture: "part/knife_blade",
                componentTexture: "shuriken/shuriken2",
            },
            {
                type: "head",
                partTexture: "part/knife_blade",
                componentTexture: "shuriken/shuriken3",
            },
            {
                type: "head",
                partTexture: "part/knife_blade",
                componentTexture: "shuriken/shuriken4",
            }
        );
    }

    public isBuilt(): boolean {
        // return !(!this.head[0].part || !this.head[1].part || !this.head[2].part || !this.head[3].part);
        return false;
    }

    public getDurability() {
        return 6;
    }
}
