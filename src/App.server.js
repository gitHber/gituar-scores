/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import fs from 'fs';
import { resolve } from 'path';
import { Suspense } from 'react';
import Container from './songs/index.client';
import SongCarosel from './SongCarosel.server';
import Modal from './components/Modal.client';

export default function App({ currentSong, visible }) {
    const songs = fs.readdirSync(resolve(__dirname, '../imgs'));
    return (
        <>
            <Container songs={songs}></Container>
            <Modal visible={visible}>
                <Suspense fallback={null}>
                    <div style={{ height: '90vh' }}>
                        <SongCarosel name={currentSong} />
                    </div>
                </Suspense>
            </Modal>
        </>
    );
}
