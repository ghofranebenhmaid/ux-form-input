import React, { useState } from 'react';
import styled from 'styled-components';
// import useInput from '../hooks/use-input';
import useInput from '../hooks/use-input-reducer';

const isNotEmpty = value => value.trim() !== '';
const isEmail = value => value.includes('@');

const BasicForm = props => {
  const {
    value: nameValue,
    isValid: nameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
    reset: resetName,
  } = useInput(isNotEmpty);

  const {
    value: emailValue,
    isValid: emailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
    reset: resetEmail,
  } = useInput(isEmail);

  let formIsValid = false;

  if (nameIsValid && emailIsValid) {
    formIsValid = true;
  }

  const submitHandler = event => {
    event.preventDefault();
    console.log(nameValue, emailValue);

    if (!formIsValid) {
      return;
    }
    resetName();
    resetEmail();
  };

  const nameInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';
  const emailInputClasses = nameInputHasError
    ? 'form-control invalid'
    : 'form-control';

  return (
    <Form onSubmit={submitHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Name</label>
        <input
          type='text'
          id='name'
          onChange={nameChangedHandler}
          onBlur={nameBlurHandler}
          value={nameValue}
        />
        {nameInputHasError && (
          <p className='error-text'>Name must not be empty.</p>
        )}
      </div>
      <div className={emailInputClasses}>
        <label htmlFor='email'>Email</label>
        <input
          type='email'
          id='email'
          onChange={emailChangedHandler}
          onBlur={emailBlurHandler}
          value={emailValue}
        />

        {emailInputHasError && (
          <p className='error-text'>Please enter a valid email.</p>
        )}
      </div>
      <div className='form-actions'>
        <button disabled={!formIsValid}>Submit</button>
      </div>
    </Form>
  );
};

const Form = styled.form`
  width: 95%;
  max-width: 400px;
  margin: 0 auto;
  label {
    font-size: 1rem;
    font-weight: bold;
    display: block;
    text-align: left;
    margin: 1rem 0 0.2rem;
  }
  input,
  select {
    width: 100%;
    padding: 0.65rem 0.5rem;
    font-size: 1rem;
    color: white;
    border: 2px solid #4a5568;
    background-color: #2d3748;
    border-radius: 10px;
    outline: none;
  }
  input:focus,
  select:focus {
    border-color: #4299e1;
  }

  input::placeholder,
  select::placeholder {
    color: #a0aec0;
  }
  input[type='checkbox'] {
    width: fit-content;
    margin-right: 0.5rem;
    transform: scale(1.25);
  }
  .form-actions {
    text-align: right;
  }
  button {
    display: inline-block;
    margin: 1rem 0;
    padding: 0.55rem 0.9rem;
    background-color: #4299e1;
    color: #1a202c;
    border: none;
    border-radius: 3px;
    /* width: 100%; */
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }
  .invalid input {
    border: 1px solid #b40e0e;
    background-color: #fddddd;
  }

  .invalid input:focus {
    border-color: #fc8181;
    background-color: #fbe8d2;
  }
  .error-text {
    color: #fc8181;
    margin: 0.4rem 0;
    font-size: small;
    text-align: right;
  }
  input.input-error,
  select.input-error {
    border-color: #fc8181;
  }

  button:disabled {
    opacity: 0.35;
  }
`;
export default BasicForm;
