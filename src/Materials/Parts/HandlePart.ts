import Part from "./Part";
import Material from '../Material';

class HandlePart extends Part {
    public readonly Durability: number;
    public readonly Modifier: number;

    public constructor(material: Material, traits: string[], durability: number, modifier: number) {
        super(material, traits);
        this.Durability = durability;
        this.Modifier = modifier;
    }
}

export default HandlePart;