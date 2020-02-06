class Handle
{
    public readonly Durability:number;
    public readonly Modifier:number;

    public constructor(durability:number, modifier:number)
    {
        this.Durability = durability;
        this.Modifier = modifier;
    }
}

export default Handle;