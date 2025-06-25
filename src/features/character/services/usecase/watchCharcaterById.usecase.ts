import {
    BehaviorSubject,
    debounceTime,
    distinctUntilChanged,
    Observable,
    switchMap,
    tap,
} from 'rxjs'
import { ICharacter } from '../domain/character.domain'

import { Builder } from 'builder-pattern'
import { isEmpty } from 'radash'
import { IClass } from '@features/class/services/domains/class.domain'
import { newClassMapper } from '@features/class/services/mappers/class.mapper'

class WatchCharacterByIdUsecase {
    // Observer
    private readonly termSubject: BehaviorSubject<IClass>

    // Observable
    public characterResult$: Observable<IClass | null>

    constructor() {
        this.termSubject = new BehaviorSubject(Builder<IClass>().build())
        this.characterResult$ = this.termSubject.asObservable().pipe(
            // Subscription ตัวกลางสื่อสารระหว่าง Observer กับ Observable
            debounceTime(400),
            distinctUntilChanged(),
            tap((term) =>
                console.log(
                    'New term from WatchCharacterByIdUsecase is : ',
                    term,
                ),
            ),
            switchMap((term) => this.operater(term)),
        )
    }

    private operater(characterEntity: IClass): Observable<IClass | null> {
        return new Observable((subscriber) => {
            try {
                if (isEmpty(characterEntity)) {
                    subscriber.next(null)
                }

                subscriber.next(characterEntity)
                subscriber.complete()
            } catch (error) {
                subscriber.error(error)
            }
        })
    }

    public async onWatching(
        term: ICharacter,
        classList: IClass[],
    ): Promise<void> {
        const filterClass = classList.find(
            (classItem) => classItem.id === term.classId,
        )

        if (filterClass !== null && filterClass !== undefined) {
            const afterMapping: IClass =
                newClassMapper.classEntityToDomain(filterClass)

            this.termSubject.next(afterMapping)
        }
    }
}

export const watchCharacterByIdUsecaseAsNewClass =
    new WatchCharacterByIdUsecase()
