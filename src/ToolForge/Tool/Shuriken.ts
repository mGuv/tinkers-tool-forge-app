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

    public getDurability() {
        return 6;
    }
}
