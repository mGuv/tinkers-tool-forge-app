import Material from './Material';
import apiResponse from './ApiResponse';
import Handle from './Handle';
import Head from './Head';
import Bow from './Bow';
import Shaft from './Shaft';
import Extra from './Extra';
import Fletching from './Fletching';
import BowString from './BowString';

class MaterialService
{
    /** Singleton of the service */
    private static instance: MaterialService;

    private allMaterials:Material[];

    public constructor()
    {
        // Parse that response 
        this.allMaterials = [];

        for(var prop in apiResponse) {
            var currentThing = apiResponse[prop];

            let newHead:Head|undefined = undefined;
            let newHandle:Handle|undefined = undefined;
            let newBow:Bow|undefined = undefined;
            let newShaft:Shaft|undefined = undefined;
            let newExtra:Extra|undefined = undefined;
            let newFletching:Fletching|undefined = undefined;
            let newBowString:BowString|undefined = undefined;

            if(typeof currentThing['head'] !== 'undefined') {
                newHead = new Head(
                    Number.parseFloat(currentThing['head']['attack']),
                    Number.parseInt(currentThing['head']['durability']),
                    Number.parseInt(currentThing['head']['harvestLevel']),
                    Number.parseFloat(currentThing['head']['miningspeed'])
                );
            }

            if(typeof currentThing['handle'] !== 'undefined') {
                newHandle = new Handle(
                    Number.parseInt(currentThing['handle']['durability']),
                    Number.parseFloat(currentThing['handle']['modifier']),
                );
            }

            if(typeof currentThing['bow'] !== 'undefined') {
                newBow = new Bow(
                    Number.parseFloat(currentThing['bow']['drawspeed']),
                    Number.parseFloat(currentThing['bow']['range']),
                    Number.parseFloat(currentThing['bow']['bonusDamage']));
            }

            if(typeof currentThing['shaft'] !== 'undefined') {
                newShaft = new Shaft(
                    Number.parseInt(currentThing['shaft']['bonusAmmo']),
                    Number.parseFloat(currentThing['shaft']['modifier']));
            }

            if(typeof currentThing['extra'] !== 'undefined') {
                newExtra = new Extra(
                    Number.parseInt(currentThing['extra']['extraDurability']));
            }

            if(typeof currentThing['fletching'] !== 'undefined') {
                newFletching = new Fletching(
                    Number.parseFloat(currentThing['fletching']['accuracy']),
                    Number.parseFloat(currentThing['fletching']['modifier']),
                );
            }

            if(typeof currentThing['bowString'] !== 'undefined') {
                newBowString = new BowString(
                    Number.parseFloat(currentThing['bowString']['modifier'])
                );
            }

            const newMat:Material = new Material(prop, newHandle, newHead, newBow, newShaft, newExtra, newFletching, newBowString);
            this.allMaterials.push(newMat);
        }

    }

    public GetAll(): Material[]
    {
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