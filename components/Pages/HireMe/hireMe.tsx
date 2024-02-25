import React from 'react';
import './hireMe.module.scss';
import MaintenancePlans from '../../Plans/Maintanence/maintanence';
import Pricing from '../../Plans/Pricing/pricing';

const HireMe = () => {
  return (
    <div className="hire-me">
      <div className="max-w-5xl mx-auto">
        <Pricing />

      </div>
    </div>
  );
};

export default HireMe;