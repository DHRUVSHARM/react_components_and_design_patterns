// adding steps to collect data as well while doing the uncontrolled flow 
// parent app director component has little control over this uncontrolled flow 
import React , { useState } from "react";
export const UncontrolledFlow = ({children , onDone}) => {
    const [data, setData] = useState({});
    const [currentStepIndex , setCurrentStepIndex] = useState(0);
    const currentChild = React.Children.toArray(children)[currentStepIndex];
    
    
    const goNext = (dataFromStep) => {
        // the step validation handling + collecting data + termination step controlled here
        
        const nextStepIndex = (currentStepIndex => currentStepIndex + 1)(currentStepIndex);
        console.log("next step index : " , nextStepIndex)
        
        const newData = {
            ...data,
            ...dataFromStep
        };
        
        console.log("newData : " , newData);
        setData(newData);
        
        // decide what to do next
        if (nextStepIndex < children.length){
            // move to the next step
            setCurrentStepIndex(nextStepIndex);
        }
        else{
            // need to terminate , with the final collected data
            onDone(newData);
        }

        
        
    }

    if (React.isValidElement(currentChild)) {
        return React.cloneElement(currentChild, {goNext});
    }
    else{
        return currentChild
    }
    
}