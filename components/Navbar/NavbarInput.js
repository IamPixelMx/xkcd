import React, { useState } from 'react';

import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';

const NavbarInput = ({ placeholder, help }) => {
  // const dispatch = useDispatch();
  const [valueInput, setValueInput] = useState('');
  const [helpHidden, setHelpHidden] = useState(true);

  const handleKeyPress = e => {
    if (e.key === 'Enter') {
      console.log(valueInput);
      //   dispatch(fetchGifs({ value: valueInput, trending: false }));
    }
  };

  return (
    <div className='column'>
      <div className='navbar-item field'>
        <div className='control has-icons-left'>
          <input
            className='input'
            type='number'
            placeholder={placeholder}
            onChange={e => {
              setValueInput(e.target.value);
            }}
            onKeyPress={e => handleKeyPress(e)}
            onFocus={() => setHelpHidden(false)}
            onBlur={() => setHelpHidden(true)}
          />
          <span className='icon is-small is-left'>🔍</span>
          <p
            className={
              'help has-text-grey has-text-weight-medium ' + (helpHidden ? 'is-hidden' : '')
            }
          >
            <small>{help}</small>
          </p>
        </div>
      </div>
    </div>
  );
};

NavbarInput.defaultProps = {
  help: 'Ingresa número/id de cómic',
  placeholder: 'Buscar cómic...',
};

NavbarInput.propTypes = {
  help: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default NavbarInput;
