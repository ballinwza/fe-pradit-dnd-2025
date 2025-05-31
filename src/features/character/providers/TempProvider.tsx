'client use'
import { FC } from 'react'

import CustomProgressBar from '../components/CustomProgressBar'

const TempProvider: FC = () => {
    return (
        <div>
            Temp : <CustomProgressBar current={10} maximum={10} />
        </div>
    )
}

export default TempProvider
