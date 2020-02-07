import Part from "./Part";
import Material from '../Material';

class ExtraPart extends Part {
    public readonly ExtraDurability: number;

    public constructor(material: Material, traits: string[], extraDurability: number) {
        super(material, traits);
        this.ExtraDurability = extraDurability;
    }
}

export default ExtraPart;