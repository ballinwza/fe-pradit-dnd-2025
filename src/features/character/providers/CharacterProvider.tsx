'use client'
import { FC, useEffect } from 'react'
import { useCharacterStore } from '../stores/chracter.store'

import StatusList from './StatusList'
import Image from 'next/image'
import { Button } from '@mui/material'
import Link from 'next/link'
import CustomProgressBar from '../components/CustomProgressBar'
import WatchCharacterBridge from '../bridges/WatchCharacter.bridge'

import { useClassStore } from '@features/class/stores/class.store'
import ClassProvider from '@features/class/providers/Class.provider'

const CharacterProvider: FC = () => {
    const { characterWithClassDetail: character } = useCharacterStore(
        (state) => state,
    )
    const { fetchClassList } = useClassStore((state) => state)

    useEffect(() => {
        fetchClassList()
    }, [])

    return (
        <div>
            <ClassProvider />
            <WatchCharacterBridge characterId="6839b9ad34d38e31825f2ba2" />
            <div>
                <Image
                    alt="babarian"
                    src="/images/babarian.png"
                    width={200}
                    height={400}
                />
            </div>
            <div>Name : {character?.name}</div>
            <div>Race : Human</div>
            <div>
                Class :{' '}
                {character?.class.name !== ''
                    ? character?.class.name
                    : 'กำลังโหลด'}
            </div>
            {/* <div>Class : Barbarian</div> */}
            {/* <div>Initiative Point: {character?.initiativePoint}</div>
            <div>Speed : {character?.speed}</div>
            <div>Hit Dice : {character?.hitDice}</div> */}

            <div>
                EXP :{' '}
                <CustomProgressBar
                    current={character?.currentExp ?? 0}
                    maximum={900}
                />
            </div>
            <div>
                HP :
                <CustomProgressBar
                    current={character?.hitPoint.currentHp ?? 0}
                    maximum={character?.hitPoint.maxHp ?? 0}
                />
            </div>
            <div>
                Temp :{' '}
                <CustomProgressBar
                    current={character?.hitPoint.temporaryHp ?? 0}
                    maximum={character?.hitPoint.maxTemporaryHp ?? 0}
                />
            </div>

            <div>
                <Link href="/armor">
                    <Button>Armors Shop</Button>
                </Link>

                <Link href="/weapon">
                    <Button>Weapons Shop</Button>
                </Link>

                <Link href="/equipment">
                    <Button>Equipments</Button>
                </Link>
            </div>
            <StatusList />
        </div>
    )
}

export default CharacterProvider
