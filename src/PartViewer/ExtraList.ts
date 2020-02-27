import ExtraPart from '../Materials/Parts/ExtraPart';

interface ExtraPartData {
    Name: string
    "Extra Durability": number
    Traits: string
}

export const columns: (keyof ExtraPartData)[] = ["Name", "Extra Durability", "Traits"];
export const dataTransformer = (part: ExtraPart) => ({
    Name: part.Material.Name,
    "Extra Durability": part.ExtraDurability,
    Traits: part.Traits.join(", ")
});