import { FC } from 'react'
import ArmorList from './ArmorList'
import Link from 'next/link'

export const ArmorProvider: FC = () => {
    return (
        <div>
            <div>
                <Link href="/character">Back</Link>
            </div>
            Armor Shop
            <ArmorList />
        </div>
    )
}

export default ArmorProvider
