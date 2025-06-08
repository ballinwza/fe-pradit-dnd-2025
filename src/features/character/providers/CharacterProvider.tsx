'use client'
import { FC, useEffect } from 'react'
import { useCharacterStore } from '../stores/chracter.store'

import StatusList from './StatusList'
import Image from 'next/image'
import { Button } from '@mui/material'
import Link from 'next/link'
import CustomProgressBar from '../components/CustomProgressBar'

const CharacterProvider: FC = () => {
    const { fetchCharacter, character } = useCharacterStore((state) => state)

    useEffect(() => {
        fetchCharacter()

        return () => {
            console.log('clear')
        }
    }, [])

    return (
        <div>
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
            <div>Class : Barbarian</div>
            <div>Initiative Point: {character?.initiativePoint}</div>
            <div>Speed : {character?.speed}</div>
            <div>Hit Dice : {character?.hitDice}</div>

            <div>
                EXP : <CustomProgressBar current={100} maximum={300} />
            </div>
            <div>
                HP : <CustomProgressBar current={50} maximum={100} />
            </div>
            <div>
                Temp : <CustomProgressBar current={10} maximum={10} />
            </div>

            <div>
                <Link href="/armor">
                    <Button>Armor Shop</Button>
                </Link>
            </div>
            <StatusList />
        </div>
    )
}

export default CharacterProvider
