import { ReactNode } from "react"
import Header from "../header"
import * as S from './styled'

type LayoutPropsType = {
    children: ReactNode
}

const Layout = ({children}:LayoutPropsType) => {
    return (
        <S.WrapperLayout>
            <Header/>
            {children}
        </S.WrapperLayout>
    )
}

export default Layout