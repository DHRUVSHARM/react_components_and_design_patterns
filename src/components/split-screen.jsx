import styled from "styled-components";

const Container = styled.div`
    display : flex;
`;

// left and right panels start with 0 basis and will grow and shrink to occupy equal spacing 
// we can pull the values from the props as well as we can add below , p represents the props of the styled component 
const Panel = styled.div`
    flex : ${(p) => p.flex};
`;


export const SplitScreen = ({children , leftWidth = 1 , rightWidth = 1}) => {
    const [left , right] = children;
    return (
        <Container>
            <Panel flex={leftWidth}>
                {left}
            </Panel>
            <Panel flex={rightWidth}>
                {right}
            </Panel>
        </Container>
    );
};