'client use'
import { FC } from 'react'

import CustomProgressBar from '../components/CustomProgressBar'

const ExpProvider: FC = () => {
    return (
        <div>
            EXP : <CustomProgressBar current={100} maximum={300} />
        </div>
    )
}

export default ExpProvider
