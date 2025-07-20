// we can keep the style in the parent component , so that this can be reused
export const LargeAuthorListItem = ({author}) => {
    const {name , age , country, books} = author;
    return (
        <>
            <h2>{name}</h2>
            <p>Age : {age}</p>
            <p>Country : {country}</p>
            <h2>Books : {books}</h2>
            <ul>
                {books.map(book => <li key = {book}> {book} </li>)}
            </ul>
        </>
    )
}