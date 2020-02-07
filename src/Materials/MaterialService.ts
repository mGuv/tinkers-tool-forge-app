import Material from './Material';
import apiResponse from './ApiResponse';
import HandlePart from './Parts/HandlePart';
import BowPart from './Parts/BowPart';
import ShaftPart from './Parts/ShaftPart';
import ExtraPart from './Parts/ExtraPart';
import FletchingPart from './Parts/FletchingPart';
import BowStringPart from './Parts/BowStringPart';
import HeadPart from './Parts/HeadPart';

class MaterialService {
    /** Singleton of the service */
    private static instance: MaterialService;

    private allMaterials: Material[];

    public constructor() {
        // Parse that response 
        this.allMaterials = [];

        for (var materialName in apiResponse) {
            var rawMaterial = apiResponse[materialName];

            const newMaterial: Material = new Material(materialName, rawMaterial['colour']);

            if (rawMaterial['head']) {
                newMaterial.HeadPart = new HeadPart(
                    newMaterial,
                    rawMaterial['head']['traits'] ?? [],
                    Number.parseFloat(rawMaterial['head']['attack']),
                    Number.parseInt(rawMaterial['head']['durability']),
                    Number.parseInt(rawMaterial['head']['harvestLevel']),
                    Number.parseFloat(rawMaterial['head']['miningspeed'])
                );
            }

            if (rawMaterial['handle']) {
                newMaterial.HandlePart = new HandlePart(
                    newMaterial,
                    rawMaterial['handle']['traits'] ?? [],
                    Number.parseInt(rawMaterial['handle']['durability']),
                    Number.parseFloat(rawMaterial['handle']['modifier']),
                );
            }

            if (rawMaterial['bow']) {
                newMaterial.BowPart = new BowPart(
                    newMaterial,
                    rawMaterial['bow']['traits'] ?? [],
                    Number.parseFloat(rawMaterial['bow']['drawspeed']),
                    Number.parseFloat(rawMaterial['bow']['range']),
                    Number.parseFloat(rawMaterial['bow']['bonusDamage']));
            }

            if (rawMaterial['shaft']) {
                newMaterial.ShaftPart = new ShaftPart(
                    newMaterial,
                    rawMaterial['shaft']['traits'] ?? [],
                    Number.parseInt(rawMaterial['shaft']['bonusAmmo']),
                    Number.parseFloat(rawMaterial['shaft']['modifier']));
            }

            if (rawMaterial['extra']) {
                newMaterial.ExtraPart = new ExtraPart(
                    newMaterial,
                    rawMaterial['extra']['traits'] ?? [],
                    Number.parseInt(rawMaterial['extra']['extraDurability']));
            }

            if (rawMaterial['fletching']) {
                newMaterial.FletchingPart = new FletchingPart(
                    newMaterial,
                    rawMaterial['fletching']['traits'] ?? [],
                    Number.parseFloat(rawMaterial['fletching']['accuracy']),
                    Number.parseFloat(rawMaterial['fletching']['modifier']),
                );
            }

            if (rawMaterial['bowString']) {
                newMaterial.BowStringPart = new BowStringPart(
                    newMaterial,
                    rawMaterial['bowString']['traits'] ?? [],
                    Number.parseFloat(rawMaterial['bowString']['modifier'])
                );
            }

            this.allMaterials.push(newMaterial);
        }

    }

    public GetAll(): Material[] {
        return this.allMaterials;
    }

    /**
     * Gets the singleton instance of this class
     */
    public static GetInstance(): MaterialService {
        return this.instance || (this.instance = new MaterialService());
    }
}

export default MaterialService
