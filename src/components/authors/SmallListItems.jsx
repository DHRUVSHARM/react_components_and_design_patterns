// we can keep the style in the parent component , so that this can be reused
export const SmallAuthorListItem = ({author}) => {
    const {name , age} = author;
    return (
        <p>
            Name: {name}, Age: {age}
        </p>
    )
}