import Part from './Part';
import Material from '../Material';

class BowStringPart extends Part {
    public readonly Modifier: number;

    public constructor(material: Material, modifier: number) {
        super(material);
        this.Modifier = modifier;
    }
}

export default BowStringPart;