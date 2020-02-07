import Part from "./Part";
import Material from "../Material";

class FletchingPart extends Part {
    public Accuracy: number;
    public Modifier: number;

    public constructor(material: Material, accuracy: number, modifier: number) {
        super(material);
        this.Accuracy = accuracy;
        this.Modifier = modifier;
    }
}

export default FletchingPart;