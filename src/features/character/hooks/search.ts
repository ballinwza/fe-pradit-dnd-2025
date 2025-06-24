import {
    BehaviorSubject,
    debounceTime,
    distinctUntilChanged,
    Observable,
    switchMap,
    tap,
} from 'rxjs'

const fakeApiSearch = (query: string): Observable<string[]> => {
    return new Observable((subscriber) => {
        console.log(`query : ${query}`)

        const timeoutId = setTimeout(() => {
            if (query == '') {
                subscriber.next([])
            } else {
                const results = [
                    `result 1 : ${query}`,
                    `result 2 : ${query}`,
                    `result 3 : ${query}`,
                ]
                subscriber.next(results)
            }
            subscriber.complete()
        }, 700)

        return () => clearTimeout(timeoutId)
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
            switchMap((term) => fakeApiSearch(term)),
        )
    }

    public search(term: string): void {
        this.searchTermSubject.next(term)
    }
}

export const searchService = new SearchService()
