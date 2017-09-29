declare namespace WowInterface {
    export interface ICharacter {
        lastModified: DateTimeFormat;
        name: string;
        realm: string;
        battlegroup: string;
        class: number;
        race: number;
        gender: number;
        level: number;
        achievementPoints: number;
        thumbnail: string;
        calcClass: string;
        faction: number;
        items: IItems;
        talents: any[];
        totalHonorableKills: number;
        crucibleTraits: number[][];
    }

    export interface ITalent {
        selected: boolean;
        spec: ISpec;
    }

    export interface ISpec {
        name: string;
        role: string;
        backgroundImage: string;
        icon: string;
    }

    export interface IItems {
        averageItemLevel: number;
        averageItemLevelEquipped: number;
        head: IItem;
        neck: IItem;
        shoulder: IItem;
        back: IItem;
        chest: IItem;
        wrist: IItem;
        hands: IItem;
        waist: IItem;
        legs: IItem;
        feet: IItem;
        finger1: IItem;
        finger2: IItem;
        trinket1: IItem;
        trinket2: IItem;
        mainHand: IItem;
    }

    export interface IItem {
        id: number;
        name: string;
        icon: string;
        quality: number;
        itemLevel: number;
        tooltipParams: any;
        stats: any;
        armor: number;
        context: string;
        bonusLists: number[];
        artifactId: number;
        displayInfoId: number;
        artifactAppearanceId: number;
        artifactTraits: any[];
        relics: IRelic[];
        appearance: any;
        itemClass?: number;
        itemSubClass?: number;
        gemInfo?: any;
        names?: string[] | null;
    }

    export interface IArmory {
        region: string;
        realm: string;
        name: string;
    }

    export interface IRelic {
        socket: number;
        itemId: number;
        context: number;
        bonusLists: number[];
        itemLevel: number;
        item: IItem;
    }
}
