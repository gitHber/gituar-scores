import React from 'react';
import styled from '@emotion/styled';

const Wrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
    img {
        border-radius: 5px;
        border: 5px solid #fff;
        width: 100px;
    }
    span {
        font-size: 12px;
    }
`;

export default function Card({ name, onClick }) {
    const handleClick = () => {
        onClick(name);
    };
    return (
        <Wrap onClick={handleClick}>
            <img src={`${name}/1.png`} />
            <span onClick={() => console.log(1231231)}>{name}</span>
        </Wrap>
    );
}
