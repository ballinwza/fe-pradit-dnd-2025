import {
    BehaviorSubject,
    debounceTime,
    distinctUntilChanged,
    Observable,
    switchMap,
    tap,
} from 'rxjs'

const onObservable = (value: string): Observable<string[]> => {
    return new Observable((subscriber) => {
        console.log('enter Observable >> ', value)

        if (value === '') {
            subscriber.next([])
        } else {
            subscriber.next([value])
        }
        subscriber.complete()
    })
}

class SearchService {
    private searchTermSubject = new BehaviorSubject<string>('')

    public searchResults$: Observable<string[]>

    constructor() {
        this.searchResults$ = this.searchTermSubject.asObservable().pipe(
            debounceTime(400),
            distinctUntilChanged(),
            tap((term) => console.log(`ค้นหาคำใหม่ : ${term}`)),
            switchMap((term) => onObservable(term)),
        )
    }

    public search(term: string): void {
        console.log('chaging Value !! >> ', term)
        this.searchTermSubject.next(term)
    }
}

export const testService = new SearchService()
