import AbstractTool, { PartRequirement } from "./AbstractTool";
import Part from "../../Materials/Parts/Part";
import HeadPart from "../../Materials/Parts/HeadPart";
import ExtraPart from "../../Materials/Parts/ExtraPart";
import HandlePart from "../../Materials/Parts/HandlePart";

const headPart: PartRequirement = {
    type: "head",
    partTexture: 'pickaxe/head',
    componentTexture: 'pickaxe/head',
}

const extraPart: PartRequirement = {
    type: "extra",
    partTexture: 'part/binding',
    componentTexture: 'pickaxe/binding',
}

const handlePart: PartRequirement = {
    type: "handle",
    partTexture: 'part/tool_rod',
    componentTexture: 'pickaxe/handle',
}

export default class Pickaxe extends AbstractTool {
    public constructor() {
        super('Pickaxe');

        this.setRequirements(headPart, extraPart, handlePart)
    }

    public getDurability(selectedParts: Map<PartRequirement, Part>): number {
        if (!this.isBuilt(selectedParts)) {
            return 0;
        }

        const head = selectedParts.get(headPart) as HeadPart;
        const extra = selectedParts.get(extraPart) as ExtraPart;
        const handle = selectedParts.get(handlePart) as HandlePart;

        return Math.floor((head.Durability + extra.ExtraDurability) * handle.Modifier + handle.Durability);
    }
}
