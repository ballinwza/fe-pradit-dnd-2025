'use client'
import { FC, useEffect } from 'react'
import StatusCard from '../components/StatusCard'
import { useCharacterStore } from '../stores/chracter.store'
import ArmorClassCard from '../components/ArmorClassCard'
import ExpProvider from './ExpProvider'
import HpProvider from './HpProvider'
import TempProvider from './TempProvider'
import StatusProvider from './StatusProvider'
import Image from 'next/image'

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
                <ArmorClassCard point={14} />
            </div>
            <div>
                <ExpProvider />
            </div>
            <div>
                <HpProvider />
            </div>
            <div>
                <TempProvider />
            </div>

            <StatusProvider />
        </div>
    )
}

export default CharacterProvider
