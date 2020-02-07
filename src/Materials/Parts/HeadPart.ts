import Part from './Part';
import Material from '../Material';

class HeadPart extends Part {
    public readonly Attack: number;
    public readonly Durability: number;
    public readonly HarvestLevel: number;
    public readonly MiningSpeed: number;

    public constructor(material: Material, traits: string[], attack: number, durability: number, harvestLevel: number, miningSpeed: number) {
        super(material, traits);
        this.Attack = attack;
        this.Durability = durability;
        this.HarvestLevel = harvestLevel;
        this.MiningSpeed = miningSpeed;
    }
}

export default HeadPart;