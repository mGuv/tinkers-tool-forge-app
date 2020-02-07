import Material from '../Material';

abstract class Part {
    public readonly Material: Material;
    public readonly Traits: string[]

    public constructor(material: Material, traits: string[]) {
        this.Material = material;
        this.Traits = traits;
    }
}

export default Part;