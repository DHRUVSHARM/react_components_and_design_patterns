import React , { useState } from "react";
export const UncontrolledFlow = ({children , onDone}) => {
    const [data, setData] = useState(null);
    const [currentStepIndex , setCurrentStepIndex] = useState(0);
    const currentChild = React.Children.count(children) > 0 && currentStepIndex < React.Children.count(children) ? React.Children.toArray(children)[currentStepIndex] : <><h1>No children remaining children left to show </h1></>;
    const goNext = () => {
        setCurrentStepIndex(currentStepIndex => currentStepIndex + 1);
    }

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, {goNext});
    }
    else{
        return currentChild
    }
    
}