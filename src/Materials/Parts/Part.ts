import Material from '../Material';

abstract class Part {
    public readonly Material: Material;
    public readonly Traits: string[]
    public Included:boolean;

    public constructor(material: Material, traits: string[]) {
        this.Material = material;
        this.Traits = traits;
        this.Included = false;
    }
}

export default Part;