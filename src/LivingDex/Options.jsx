import React from 'react';
import PropTypes from 'prop-types';

const Options = ({alternates, shinies}) => {

  const AltBox = () => {
    return (
      <>
        <input
          type="checkbox"
          id="alternateForms"
          name="alternateForms"
          checked={alternates.showAlt}
          onChange={
            () => alternates.setShowAlt(!alternates.showAlt)
          }
        />
        <label htmlFor="alternateForms">Alternate Forms?</label>
      </>
    );
  }

  const ShinyBox = () => {
    return (
      <>
        <input
          type="checkbox"
          id="shinyForms"
          name="shinyForms"
          checked={shinies.showShiny}
          onChange={
            () => shinies.setShowShiny(!shinies.showShiny)
          }
        />
        <label htmlFor="alternateForms">Shinies?</label>
      </>
    );
  }

  return (
    <>
      <AltBox />
      <ShinyBox />
    </>
  )

};

Options.propTypes = {
  alternates: PropTypes.shape({
    showAlt: PropTypes.bool.isRequired,
    setShowAlt: PropTypes.func.isRequired,
  }).isRequired,
  shinies: PropTypes.shape({
    showShiny: PropTypes.bool.isRequired,
    setShowShiny: PropTypes.func.isRequired,
  }).isRequired
};

export default Options;