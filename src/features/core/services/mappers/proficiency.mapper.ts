import { ProficiencyType } from '@graphql/generated/graphql'
import { IProficiencyType } from '../domains/proficiency.domain'

class ProficiencyMapper {
    public proficiencyTypeEntityToDomain(
        entity: ProficiencyType,
    ): IProficiencyType {
        switch (entity) {
            case ProficiencyType.Athletics:
                return IProficiencyType.Athletics
            case ProficiencyType.Arobatics:
                return IProficiencyType.Arobatic
            case ProficiencyType.Sleightofhand:
                return IProficiencyType.SleightOfHand
            case ProficiencyType.Stealth:
                return IProficiencyType.Stealth
            case ProficiencyType.Arcana:
                return IProficiencyType.Arcana
            case ProficiencyType.History:
                return IProficiencyType.History
            case ProficiencyType.Investigation:
                return IProficiencyType.Investigation
            case ProficiencyType.Nature:
                return IProficiencyType.Nature
            case ProficiencyType.Religion:
                return IProficiencyType.Religion
            case ProficiencyType.Animalhandling:
                return IProficiencyType.AnimalHandling
            case ProficiencyType.Insight:
                return IProficiencyType.Insight
            case ProficiencyType.Medicine:
                return IProficiencyType.Medicine
            case ProficiencyType.Perception:
                return IProficiencyType.Perception
            case ProficiencyType.Survival:
                return IProficiencyType.Survival
            case ProficiencyType.Deception:
                return IProficiencyType.Deception
            case ProficiencyType.Intimidation:
                return IProficiencyType.Intimidation
            case ProficiencyType.Performance:
                return IProficiencyType.Performance
            case ProficiencyType.Persuasion:
                return IProficiencyType.Persuasion
        }
    }
}

export const newProficiencyMapper = new ProficiencyMapper()
