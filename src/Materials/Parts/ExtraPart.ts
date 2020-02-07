import Part from "./Part";
import Material from '../Material';

class ExtraPart extends Part {
    public readonly ExtraDurability: number;

    public constructor(material: Material, extraDurability: number) {
        super(material);
        this.ExtraDurability = extraDurability;
    }
}

export default ExtraPart;