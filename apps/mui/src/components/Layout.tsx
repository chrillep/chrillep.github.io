import * as React from 'react'
import ButtonAppBar from './ButtonAppBar'
import Footer from './Footer'

type Props = {
    preview?: boolean
    children: React.ReactNode
}

const Layout = ({ children }: Props) => {
    return (
        <div className="layout">
            <ButtonAppBar />
            <main>{children}</main>
            <Footer />
        </div>
    )
}
export default Layout
