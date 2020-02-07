import Part from './Part';
import Material from '../Material';

class BowStringPart extends Part {
    public readonly Modifier: number;

    public constructor(material: Material, traits: string[], modifier: number) {
        super(material, traits);
        this.Modifier = modifier;
    }
}

export default BowStringPart;