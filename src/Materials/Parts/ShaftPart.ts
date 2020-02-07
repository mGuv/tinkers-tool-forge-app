import Material from "../Material";
import Part from "./Part";

class ShaftPart extends Part {
    public readonly BonusAmmo: number;
    public readonly Modifier: number;

    public constructor(material: Material, traits: string[], bonusAmmo: number, modifier: number) {
        super(material, traits);
        this.BonusAmmo = bonusAmmo;
        this.Modifier = modifier;
    }
}

export default ShaftPart;