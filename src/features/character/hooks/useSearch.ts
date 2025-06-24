'use client'

import { useEffect, useState } from 'react'
import { Observable } from 'rxjs'

export function useObservable<T>(observable: Observable<T>, initValue: T): T {
    const [state, setState] = useState<T>(initValue)

    useEffect(() => {
        const subscription = observable.subscribe({
            next: (value) => setState(value),
        })

        return () => subscription.unsubscribe()
    }, [observable])

    return state
}
