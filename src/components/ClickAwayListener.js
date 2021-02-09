import React, {useEffect, useRef} from 'react';

export default function ClickAwayListener({children, onClickAway}) {
  const childClick = useRef(false);

  useEffect(() => {
    const handleWindowClick = () => {
      if (!childClick.current) {
        onClickAway();
      }
      childClick.current = false;
    };
    window.addEventListener('click', handleWindowClick);
    return () => window.removeEventListener('click', handleWindowClick);
  }, []);

  if (!React.Children.only(children)) {
    throw new Error('ClickAwayListener only need one child');
  }
  const _children = React.Children.map(children, (child, index) => {
    return React.cloneElement(child, {
      onClick: (e) => {
        child.props.onClick && child.props.onClick(e);
        childClick.current = true;
      },
    });
  });
  return _children;
}
