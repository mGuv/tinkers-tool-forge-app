import Part from './Part';
import Material from '../Material';

class BowPart extends Part {
    public readonly DrawSpeed: number;
    public readonly Range: number;
    public readonly BonusDamage: number;

    public constructor(material: Material, traits: string[], drawSpeed: number, range: number, bonusDamage: number) {
        super(material, traits);
        this.DrawSpeed = drawSpeed;
        this.Range = range;
        this.BonusDamage = bonusDamage;
    }
}

export default BowPart;