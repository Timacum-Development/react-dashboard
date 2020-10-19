import styled from 'styled-components';
import { Z_BLOCK } from 'zlib';

export const UnorderedList = styled.ul `
    padding: 218px 0 200px;
    margin: 0;
    list-style-type: none;
}
`;

export const ListItem = styled.li `
    width: 372px;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 20px;
    transition: 0.05s;
    color: #858997;

    &:hover {
        background: transparent linear-gradient(323deg, #1D2339 0%, #10121A 100%) 0% 0% no-repeat padding-box;
        opacity: 1;
        color: white;
        border-top-right-radius: 70px 80px;
        border-bottom-right-radius: 70px 80px;
    }
`;

export const Link = styled.a `
    display: inline-block;
`;

export const Icon = styled.img `
    display: block;
    width: 32px;
    height: 32px;
    margin-right: 39px;
`;