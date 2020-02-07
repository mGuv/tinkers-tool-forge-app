import Part from "./Part";
import Material from '../Material';

class HandlePart extends Part {
    public readonly Durability: number;
    public readonly Modifier: number;

    public constructor(material: Material, durability: number, modifier: number) {
        super(material);
        this.Durability = durability;
        this.Modifier = modifier;
    }
}

export default HandlePart;