class Shaft
{
    public readonly BonusAmmo:number;
    public readonly Modifier:number;

    public constructor(bonusAmmo:number, modifier:number)
    {
        this.BonusAmmo = bonusAmmo;
        this.Modifier = modifier;
    }
}

export default Shaft;