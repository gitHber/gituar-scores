import React from 'react';
import Carosel from './components/Carosel.client';
import Image from './components/Image.client';
import fs from 'fs';
import { resolve } from 'path';

export default function SongCarosel({ name }) {
    if (!name) return null;
    const imgs = fs.readdirSync(resolve(__dirname, `../imgs/${name}`));
    return (
        <Carosel>
            {imgs.map((item) => (
                <Image src={`${name}/${item}`} />
            ))}
        </Carosel>
    );
}
