import React, { Component, Fragment } from "react";

export default function SearchBar(props) {
  const { term, changeHandler, submitHandler } = props;

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={submitHandler}>
        <div className="field">
          <label htmlFor="text">Search for Images ⬇️</label>
          <input onChange={changeHandler} value={term} type="text" id="text" />
        </div>
      </form>
    </div>
  );
}
