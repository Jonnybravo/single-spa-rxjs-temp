import React, { lazy, Suspense } from "react";



const WrapperLazyComponent = (lazyComponent) => {
  const WrapperLazy= (props) => {
    const OtherComponent = lazy(lazyComponent);
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent {...props} />
      </Suspense>
    );
  };
  return WrapperLazy;
};

export default WrapperLazyComponent;
