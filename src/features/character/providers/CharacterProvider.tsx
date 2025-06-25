'use client'
import { FC, Fragment, useEffect } from 'react'
import { useCharacterStore } from '../stores/chracter.store'

import AbilityList from '../components/ability/AbilityList'
import Image from 'next/image'
import { Button } from '@mui/material'
import Link from 'next/link'
import CustomProgressBar from '../components/CustomProgressBar'
import WatchCharacterBridge from '../bridges/WatchCharacter.bridge'

import { capitalize } from 'radash'
import { useClassStore } from '@features/class/stores/class.store'

import ProficiencyList from '../components/proficiency/ProficiencyList'

const CharacterProvider: FC = () => {
    const { characterClass, character } = useCharacterStore((state) => state)
    const { fetchClassList } = useClassStore((state) => state)

    useEffect(() => {
        fetchClassList()
    }, [])

    const renderCharacter = () => {
        return (
            <>
                <div>
                    <Image
                        alt="babarian"
                        src="/images/babarian.png"
                        width={200}
                        height={400}
                    />
                </div>
                <div>Name : {character?.name ?? 'กำลังโหลด'}</div>
                <div>Race : Human</div>
                <div>
                    Class :
                    {characterClass?.name
                        ? capitalize(characterClass.name)
                        : 'กำลังโหลด'}
                </div>

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
            </>
        )
    }
    return (
        <Fragment>
            <WatchCharacterBridge characterId="6839b9ad34d38e31825f2ba2" />
            <div>
                <AbilityList />
                {character && renderCharacter()}
                <ProficiencyList />
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
            </div>
        </Fragment>
    )
}

export default CharacterProvider
