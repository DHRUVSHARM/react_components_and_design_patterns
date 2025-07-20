// this list will be general , the source name will help determine the prop and we can pass it down to the item level 
export const RegularList = ({items , sourceName , ItemComponent}) => {
    return (
        <>
            {
                items.map( 
                    (item , i) => <ItemComponent key={i} {...{[sourceName] : item}}></ItemComponent>
                )
            }
        </>        
    );
};