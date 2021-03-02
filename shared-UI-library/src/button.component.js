// import React from "react";

// function J(){
//   return <div>asdfg</div>
// }

// export default J;

// const teste = 'OLAA';
// export default teste;

import React from "react";

export default function Button(props) {
  const {
    children,
    disabled = false,
    loading = false,
    className = "",
    ...remainingProps
  } = props;
  const background =
    disabled || loading ? "opacity-50 bg-secondary" : "bg-warning";
  return (
    <button
      className={`mb-8 font-bold py-2 px-4 rounded ${background} ${className}`}
      disabled={disabled || loading}
      {...remainingProps}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
