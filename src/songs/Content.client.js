import React, { useState } from 'react';
import Card from '../components/Card.client';
import styled from '@emotion/styled';
import { useLocation } from '../LocationContext.client';

const Wrap = styled.div`
    display: flex;
`;
export default function Content({ data }) {
    const [storage, setStorage] = useLocation();
    const handleClick = (song) => {
        setStorage((old) => ({
            ...old,
            visible: true,
            currentSong: song,
        }));
    };
    return (
        <Wrap>
            {data.map((name) => (
                <Card key={name} name={name} onClick={handleClick} />
            ))}
        </Wrap>
    );
}
