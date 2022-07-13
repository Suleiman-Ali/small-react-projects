import React, { Component } from "react";

// prettier-ignore
export default function Button({ children, version="primary", type="button", isDisabled=false }) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
      {children}
    </button>
  );
}
