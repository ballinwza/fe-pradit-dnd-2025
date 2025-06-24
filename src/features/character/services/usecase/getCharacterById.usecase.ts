import {
    BehaviorSubject,
    debounceTime,
    distinctUntilChanged,
    Observable,
    switchMap,
    tap,
} from 'rxjs'
import { ICharacter, ICharacterWithClass } from '../domain/character.domain'

import {
    CharacterRepository,
    ICharacterRepository,
} from '../repositories/character.repository'
import { Builder } from 'builder-pattern'
import { isEmpty } from 'radash'
import { IClass } from '@features/class/services/domains/class.domain'
import { characterMapper } from '../mapper/characterMapper'

class GetCharacterByIdUsecase {
    private termSubject: BehaviorSubject<ICharacterWithClass>
    private characterRepository: ICharacterRepository
    public characterResult$: Observable<ICharacterWithClass[]>

    constructor() {
        this.characterRepository = new CharacterRepository()

        this.termSubject = new BehaviorSubject(
            Builder<ICharacterWithClass>().build(),
        )
        this.characterResult$ = this.termSubject.asObservable().pipe(
            debounceTime(400),
            distinctUntilChanged(),
            tap((term) => console.log(`ค้นหาคำใหม่ : ${term}`)),
            switchMap((term) => this.onObservable(term)),
        )
    }

    private onObservable(
        characterEntity: ICharacterWithClass,
    ): Observable<ICharacterWithClass[]> {
        return new Observable((subscriber) => {
            console.log('chanign value >> ', characterEntity)
            if (isEmpty(characterEntity)) {
                subscriber.next([])
            } else {
                subscriber.next([characterEntity])
            }

            subscriber.complete()
        })
    }

    public async handle(characterId: string): Promise<ICharacter> {
        const characterRepository =
            await this.characterRepository.getCharacter(characterId)

        const result = characterMapper.entityToDomain(characterRepository)

        return result
    }

    public async onChangeValue(
        term: ICharacter,
        classList: IClass[],
    ): Promise<void> {
        console.log('classList >. ', classList)
        const findClass = classList.find(
            (classItem) => classItem.id === term.classId,
        )

        const mapping: ICharacterWithClass = {
            ...term,
            class: {
                id: findClass?.id ?? '',
                name: findClass?.name ?? '',
                descriptionEn: findClass?.descriptionEn ?? '',
                descriptionTh: findClass?.descriptionTh ?? '',
            },
        }

        this.termSubject.next(mapping)
    }
}

export const getCharacterByIdUsecase = new GetCharacterByIdUsecase()
