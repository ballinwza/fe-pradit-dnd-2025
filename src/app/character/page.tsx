import ArmorClassCard from '@features/character/components/ArmorClassCard'
import ExpProvider from '@features/character/providers/ExpProvider'
import HpProvider from '@features/character/providers/HpProvider'
import StatusProvider from '@features/character/providers/StatusProvider'
import TempProvider from '@features/character/providers/TempProvider'
import Image from 'next/image'

export default function CharacterPage() {
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
            <div>Name : ᛒᛁᛅᚢᚱᚾ</div>
            <div>Race : Human</div>
            <div>Class : Barbarian</div>
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
