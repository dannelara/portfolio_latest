import Footer from './Footer'
import Header from './Header'

type Props = {
    children: React.ReactNode
    disableHeader?: boolean
}

export default function Layout({ children, disableHeader }: Props) {
    return (
        <>
            {!disableHeader && <Header />}
            {children}
        </>
    )
}

Layout.displayName = 'Layout'