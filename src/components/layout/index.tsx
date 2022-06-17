import { ReactNode } from "react"
import * as S from './styled'

type LayoutPropsType = {
    children: ReactNode
}

const Layout = ({children}:LayoutPropsType) => {
    return (
        <S.WrapperLayout>
            <header>Header</header>
            {children}
        </S.WrapperLayout>
    )
}

export default Layout