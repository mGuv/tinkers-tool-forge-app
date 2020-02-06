class Bow
{
    public readonly DrawSpeed:number;
    public readonly Range:number;
    public readonly BonusDamage:number;

    public constructor(drawSpeed:number, range:number, bonusDamage:number)
    {
        this.DrawSpeed = drawSpeed;
        this.Range = range;
        this.BonusDamage = bonusDamage;
    }
}

export default Bow;