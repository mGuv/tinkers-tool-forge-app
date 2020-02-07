import Material from '../Material';

abstract class Part {
    public readonly Material: Material;

    public constructor(material: Material) {
        this.Material = material;
    }
}

export default Part;