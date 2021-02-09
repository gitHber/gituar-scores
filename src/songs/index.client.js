import React, { useState } from 'react';
import Content from './Content.client';
import Search from './Search.client';
import styled from '@emotion/styled';

const Wrap = styled.div`
    padding: 40px;
`;

export default function Container(props) {
    const [songs, setSongs] = useState(props.songs);
    return (
        <Wrap>
            <Search placeholder="搜索" />
            <Content data={songs} />
        </Wrap>
    );
}
