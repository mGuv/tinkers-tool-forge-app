class Head
{
    public readonly Attack:number;
    public readonly Durability:number;
    public readonly HarvestLevel:number;
    public readonly MiningSpeed:number;

    public constructor(attack:number, durability:number, harvestLevel:number, miningSpeed:number)
    {
        this.Attack = attack;
        this.Durability = durability;
        this.HarvestLevel = harvestLevel;
        this.MiningSpeed = miningSpeed;
    }
}

export default Head;