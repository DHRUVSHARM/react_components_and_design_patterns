/*
You can think of a component with a children prop as having a “hole” 
that can be “filled in” by its parent components with arbitrary JSX. 
You will often use the children prop for visual wrappers: panels, grids, etc.

in simple terms the idea is if you make the modal with the children prop , then the parent can use modal 
as a wrapper and pass in other component or jsx into it 

*/ 

import { useState } from "react"
import styled from "styled-components";

export const ModalBackground = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  overflow: auto;
  background-color: #00000067;
  width: 100%;
  height: 100%;
`;

export const ModalContent = styled.div`
  margin: 12% auto;
  padding: 24px;
  background-color: wheat;
  width: 50%;
`;


export const Modal = ({children}) => {
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