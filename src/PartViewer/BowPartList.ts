import BowPart from '../Materials/Parts/BowPart';

interface BowPartData {
    Name: string,
    "Draw Speed": number,
    Damage: number,
    Range: number,
    Traits: string
}

export const columns: (keyof BowPartData)[] = ["Name", "Draw Speed", "Damage", "Range", "Traits"]
export const dataTransformer = (part: BowPart) => ({
    Name: part.Material.Name,
    "Draw Speed": part.DrawSpeed,
    Damage: part.BonusDamage,
    Range: part.Range,
    Traits: part.Traits.join(", ")
});