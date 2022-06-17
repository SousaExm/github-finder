type RepositoryItemPropsType = {
    repositoryName: string;
    linkToCode: string
}

const RepositoryItem = ({repositoryName, linkToCode}:RepositoryItemPropsType) => {
    return(
        <>
            <h2>{repositoryName}</h2>
            <a 
            href={"https://github.com/" + linkToCode } 
            target="_blank" 
            rel="noreferrer">
                Ver o código
            </a>
        </>
    )
}

export default RepositoryItem