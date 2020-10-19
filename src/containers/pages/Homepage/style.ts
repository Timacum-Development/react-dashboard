import styled from 'styled-components';

export const Wrapper = styled.div `
    width: 75%;
    position: relative;
`;

export const BackgroundImage = styled.div `
    width: 100%;
    height: 0;
    padding-bottom: 734px;
    background: transparent linear-gradient(217deg, #1D2339 0%, #10121A 100%) 0% 0% no-repeat padding-box;
    opacity: 1;
    border-bottom-left-radius: 200px;
    position: absolute;
    z-index: -1;
`;

export const MainHeading = styled.h1 `
    font-size: 3.125rem;
    line-height: 3.75rem;
    color: #FFFFFF;
    font-weight: 300;
`;

export const BoldHeading = styled.span `
    display: inline-block;
    line-height: 3.75rem;
    font-weight: 500;
`;

export const SmallerHeading = styled.h2 `
    font-size: 1.625rem;
    line-height: 2.25rem;
    font-weight: 400;
    color: #FFFFFF;
`;

export const HeadingWrap = styled.div `
    padding: 107px 0 0 134px;
`;

export const Burger = styled.div `
    width: 60px;
    height: 60px;
    background: #FFFFFF 0% 0% no-repeat padding-box;
    box-shadow: 0px 10px 20px #0000004D;
    border-radius: 23px;
    opacity: 1;
`;

export const Line = styled.div `
    width: 32px;
    height: 32px;
    background: transparent url('img/Menu Icon.png') 0% 0% no-repeat padding-box;
    opacity: 1;
`;