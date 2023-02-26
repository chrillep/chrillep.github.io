import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import IconButton from '@mui/material/IconButton'
import { useColorScheme } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import * as React from 'react'

const ModeSwitcher = () => {
    const { mode, setMode } = useColorScheme()
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) {
        // for server-side rendering
        // Read more on https://github.com/pacocoursey/next-themes#avoid-hydration-mismatch
        return null
    }

    return (
        <Button
            variant="outlined"
            color="inherit"
            onClick={() => {
                if (mode === 'light') {
                    setMode('dark')
                } else {
                    setMode('light')
                }
            }}
        >
            {mode === 'light' ? 'Dark' : 'Light'}
        </Button>
    )
}
export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1 }}
                    >
                        News
                    </Typography>
                    <Button color="inherit">Login</Button>
                    <ModeSwitcher />
                </Toolbar>
            </AppBar>
        </Box>
    )
}
