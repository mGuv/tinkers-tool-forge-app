import ShaftPart from '../Materials/Parts/ShaftPart';

interface ShaftPartData {
    Name: string,
    "Bonus Ammo": number,
    Modifier: number,
    Traits: string
}

export const columns: (keyof ShaftPartData)[] = ["Name", "Bonus Ammo", "Modifier", "Traits"];
export const dataTransformer = (part: ShaftPart) => ({
    Name: part.Material.Name,
    "Bonus Ammo": part.BonusAmmo,
    Modifier: part.Modifier,
    Traits: part.Traits.join(", ")
})