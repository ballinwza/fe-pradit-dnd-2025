'client use'
import { FC } from 'react'

import CustomProgressBar from '../components/CustomProgressBar'

const HpProvider: FC = () => {
    return (
        <div>
            HP : <CustomProgressBar current={50} maximum={100} />
        </div>
    )
}

export default HpProvider
