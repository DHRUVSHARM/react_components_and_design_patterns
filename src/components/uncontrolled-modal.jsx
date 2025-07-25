import { ModalContent , ModalBackground } from "../Modal";

export const UncontrolledModal = ({children}) => {
    const [show , setShow] = useState(false);   // state to show / hide the modal 
    
    return (
        <>

        <button onClick={() => setShow(true)}>Show Modal</button>

        {show && (
            <ModalBackground onClick={() => setShow(false)}>
                <ModalContent onClick={(e) => e.stopPropagation()}>
                    <button onClick={() => setShow(false)}>Hide Modal</button>
                    {children}
                </ModalContent>
            </ModalBackground>
        )}
        </>

    )
}