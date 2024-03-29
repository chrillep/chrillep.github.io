import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import * as React from 'react'

export default function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <MuiLink color="inherit" href="mailto:christian.widlund@gmail.com">
                Christian Widlund
            </MuiLink>{' '}
            {new Date().getFullYear()}.
        </Typography>
    )
}
