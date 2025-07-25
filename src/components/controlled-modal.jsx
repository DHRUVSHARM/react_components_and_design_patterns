import { ModalContent , ModalBackground } from "../Modal";

// state of this modal can be controlled by the parent component outside this component
export const ControlledModal = ({ shouldDisplay , onClose , children}) => { 
    
    return (
        <>

        {shouldDisplay && (
            <ModalBackground onClick={onClose}>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                    <button onClick={onClose}>Hide Modal</button>
                    {children}
                </ModalContent>
            </ModalBackground>
        )}
        </>

    )
}