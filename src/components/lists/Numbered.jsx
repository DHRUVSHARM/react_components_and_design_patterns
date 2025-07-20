// this list will be numbered , the source name will help determine the prop and we can pass it down to the item level 
export const NumberedList = ({items , sourceName , ItemComponent}) => {
    return (
        <>
            {
                items.map( 
                    (item , i) => (
                    <>
                        <h3>{i + 1}</h3>
                        <ItemComponent key={i} {...{[sourceName] : item}}></ItemComponent>
                    </>
                )
                )
            }
        </>        
    );
};