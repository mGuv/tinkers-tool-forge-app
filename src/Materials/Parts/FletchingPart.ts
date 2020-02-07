import Part from "./Part";
import Material from "../Material";

class FletchingPart extends Part {
    public Accuracy: number;
    public Modifier: number;

    public constructor(material: Material, traits: string[], accuracy: number, modifier: number) {
        super(material, traits);
        this.Accuracy = accuracy;
        this.Modifier = modifier;
    }
}

export default FletchingPart;