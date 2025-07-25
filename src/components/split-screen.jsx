import styled from "styled-components";

const Container = styled.div`
    display : flex;
    height: 100vh;
`;

// left and right panels start with 0 basis and will grow and shrink to occupy equal spacing 
// we can pull the values from the props as well as we can add below , p represents the props of the styled component 
const Panel = styled.div`
    flex : ${(p) => p.flex};
    
`;

export const SvgCenteredWrapper = styled.div`
  flex: 1;                     /* take all available space */
  display: flex;
  justify-content: center;     /* horizontal centering */
  align-items: center;         /* vertical centering */
  overflow: hidden;            /* clip if SVG is larger */
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


export const SplitScreenVertical = ({children , topHeight = 1 , bottomHeight = 1}) => {
    const [top , bottom] = children;
    return (
        <Container style={{flexDirection: "column"}}>
            <Panel flex={topHeight}>
                {top}
            </Panel>
            <Panel flex={bottomHeight}>
                {bottom}
            </Panel>
        </Container>
    );
}