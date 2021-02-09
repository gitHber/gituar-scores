import React from 'react';
import ReactDOM from 'react-dom';
import { Transition } from 'react-transition-group';
import styled from '@emotion/styled';
import ClickAwayListener from './ClickAwayListener';
import { useLocation } from '../LocationContext.client';

const ModalRoot = styled.div``;
const Mask = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 1000;
`;
const ModalBody = styled.div`
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;
const ModalContent = styled.div`
    background-color: #fff;
    max-width: 80vw;
`;

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
};

const bodyTransitionStyles = {
    entering: { transform: 'scale(1)' },
    entered: { transform: 'scale(1)' },
    exiting: { transform: 'scale(0)' },
    exited: { transform: 'scale(0)' },
};

let modalRoot;
const getModalRoot = () => {
    if (!modalRoot) {
        modalRoot = document.createElement('div');
        modalRoot.classList.add('modal-root');
        document.body.appendChild(modalRoot);
    }
    return modalRoot;
};
export default function Modal({ visible, onClose, children }) {
    const [_, setStorage] = useLocation();
    onClose =
        onClose || (() => setStorage((old) => ({ ...old, visible: false })));
    return ReactDOM.createPortal(
        <ModalRoot>
            <Transition in={visible} timeout={300} mountOnEnter unmountOnExit>
                {(state) => (
                    <Mask
                        onClick={onClose}
                        state={state}
                        style={{
                            transition: `opacity 300ms ease-in-out`,
                            opacity: 0,
                            ...transitionStyles[state],
                        }}
                    ></Mask>
                )}
            </Transition>
            <Transition in={visible} timeout={300} mountOnEnter unmountOnExit>
                {(state) => (
                    <ModalBody>
                        <ClickAwayListener onClickAway={onClose}>
                            <ModalContent
                                style={{
                                    transition: `transform 300ms ease-in-out`,
                                    ...bodyTransitionStyles[state],
                                }}
                            >
                                {children}
                            </ModalContent>
                        </ClickAwayListener>
                    </ModalBody>
                )}
            </Transition>
        </ModalRoot>,
        getModalRoot()
    );
}
