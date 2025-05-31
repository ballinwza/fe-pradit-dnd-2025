'use client'

import styled from '@emotion/styled'
import {
    Box,
    LinearProgress,
    linearProgressClasses,
    Typography,
} from '@mui/material'
import { FC } from 'react'

interface Props {
    current: number
    maximum: number
}
const CustomProgressBar: FC<Props> = ({ current, maximum }: Props) => {
    const newCurrent = Math.round(current)
    const newMaximum = Math.round(maximum)
    const value = Math.round((newCurrent / newMaximum) * 100)

    return (
        <Box
            sx={{ position: 'relative', display: 'inline-flex', width: '100%' }}
        >
            <BorderLinearProgress
                variant="determinate"
                value={value}
                sx={{ width: '100%' }}
            />
            <Box
                sx={{
                    top: 0,
                    left: 0,
                    bottom: 0,
                    right: 0,
                    position: 'absolute',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="body2" color="text.secondary">
                    {`${newCurrent} / ${newMaximum}`}
                </Typography>
            </Box>
        </Box>
    )
}

export default CustomProgressBar

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 30,

    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: 'grey',
    },
    [`& .${linearProgressClasses.bar}`]: {
        backgroundColor: 'green',
    },
}))
