import { useEffect, useState } from 'react'
import { useGitHub } from '../../hooks/useGitHub'
import * as S from './styled'


type RepositoryItemPropsType = {
    repositoryName: string,
    linkToCode: string,
    id: string,
    created_at:string,
    updated_at:string,
    language:string
}

const RepositoryItem = ({repositoryName, linkToCode, created_at, updated_at, language}:RepositoryItemPropsType) => {

    let createdDate = new Date(Date.parse(created_at))
    let updatedDate = new Date(Date.parse(updated_at))
    return(
        <S.Wrapper>
            <h2>{repositoryName}</h2>
            <p>Criado:</p>
            <span>{createdDate.toLocaleDateString()}</span>  
            <p>Ultima atualizaçao:</p>
            <span>{updatedDate.toLocaleDateString()}</span>  
            <p>Linguagem mais usada:</p>  
            <span>{language}</span>
            <a 
            href={"https://github.com/" + linkToCode} 
            target="_blank"
            >
                Ver o código
            </a>
        </S.Wrapper>
    )
}

export default RepositoryItem