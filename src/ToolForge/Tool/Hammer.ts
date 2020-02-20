import AbstractTool, { PartRequirement } from "./AbstractTool";
import Part from "../../Materials/Parts/Part";
import HeadPart from "../../Materials/Parts/HeadPart";
import HandlePart from "../../Materials/Parts/HandlePart";

const headPart: PartRequirement = {
    type: "HEAD",
    partTexture: 'hammer/head',
    componentTexture: 'hammer/head',
}

const plate1Part: PartRequirement = {
    type: "HEAD",
    partTexture: 'part/large_plate',
    componentTexture: 'hammer/front',
}

const plate2Part: PartRequirement = {
    type: "HEAD",
    partTexture: 'part/large_plate',
    componentTexture: 'hammer/back',
}

const handlePart: PartRequirement = {
    type: "HANDLE",
    partTexture: 'part/tool_rod',
    componentTexture: 'hammer/handle',
};

export default class Hammer extends AbstractTool {
    public constructor() {
        super('Hammer');

        this.setRequirements(headPart, plate1Part, plate2Part, handlePart);
    }

    public getDurability(selectedParts: Map<PartRequirement, Part>): number {
        if (!this.isBuilt(selectedParts)) {
            return 0;
        }

        const head = selectedParts.get(headPart) as HeadPart;
        const plate1 = selectedParts.get(plate1Part) as HeadPart;
        const plate2 = selectedParts.get(plate2Part) as HeadPart;
        const handle = selectedParts.get(handlePart) as HandlePart;

        const base = (
            head.Durability * 2
            + plate1.Durability
            + plate2.Durability
        ) / 4;

        return Math.floor((base * handle.Modifier + head.Durability) * 2.5);
    }
}
