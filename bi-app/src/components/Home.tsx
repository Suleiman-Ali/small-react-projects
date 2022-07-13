import React, { useState } from 'react';
import DTC from '../data/dtc';
import ACCURACY from '../data/AccuracyScore';
import TRAINING_DATA from '../data/trainingData';
import TRAINING_DATA_TARGETS from '../data/trainingDataTargets';
import Wrapper from './Wrapper';
import Select from './Select';
import Input from './Input';
import Button from './Button';

function Home(): JSX.Element {
  const [modelTrained, setModelTrained] = useState<boolean>(false);
  const [pClass, setPClass] = useState<string>('1');
  const [gender, setGender] = useState<string>('1');
  const [age, setAge] = useState<string>('');
  const [siblingsSpouses, setSiblingsSpouses] = useState<string>('');
  const [parentsChildren, setParentsChildren] = useState<string>('');
  const [fare, setFare] = useState<string>('');
  const [result, setResult] = useState<string>('-1');

  const trainModelHandler = () => {
    setResult('4');

    setTimeout(() => {
      DTC.train(TRAINING_DATA, TRAINING_DATA_TARGETS);
      setModelTrained(true);
      setResult('5');
    }, 500);
  };

  const resetHandler = () => {
    setPClass('1');
    setGender('1');
    setAge('');
    setSiblingsSpouses('');
    setParentsChildren('');
    setFare('');
  };

  const submitHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();

    if (!modelTrained) return setResult('3');
    if (age === '') return setResult('2');
    if (siblingsSpouses === '') return setResult('2');
    if (parentsChildren === '') return setResult('2');
    if (fare === '') return setResult('2');
    if (Number(age) < 0) return setResult('6');
    if (Number(siblingsSpouses) < 0 || Number(siblingsSpouses) > 10)
      return setResult('7');
    if (Number(parentsChildren) < 0 || Number(parentsChildren) > 10)
      return setResult('8');
    if (Number(fare) < 0) return setResult('9');

    const inputArray = [
      [
        +pClass,
        +gender === 1 ? 1 : 0,
        +age,
        +siblingsSpouses,
        +parentsChildren,
        +fare,
      ],
    ];

    const [prediction] = DTC.predict(inputArray);
    setResult(String(prediction));
    resetHandler();
  };

  const resultMsg = (result: string): string | null => {
    if (+result === 0)
      return `There is ${ACCURACY} chance that you would not survive 😔`;
    if (+result === 1)
      return `There is ${ACCURACY} chance that you would survive 😁`;
    if (+result === 2) return `Please don't leave any of the felids empty ❌`;
    if (+result === 3) return `Please train the model first 👇`;
    if (+result === 4) return `Training the model, Please wait 15s 😴`;
    if (+result === 5) return `Model has been trained 💯`;
    if (+result === 6) return `Age must not be less than 0..`;
    if (+result === 7) return `Siblings/Spouses must be between 0 and 10..`;
    if (+result === 8) return `Parents/Children must be between 0 and 10..`;
    if (+result === 9) return `Fare must not be less than 0..`;
    return null;
  };

  return (
    <Wrapper cls="form-box">
      <h1>{resultMsg(result)}</h1>

      <form className="form ">
        <Wrapper cls="form__row ">
          <Wrapper cls="mb-3">
            <Select
              labelName="Passenger Class"
              labelCls="form-label"
              selectId="pClass"
              selectCls="form-select"
              selectValue={pClass}
              options={['First Class', 'Second Class', 'Third Class']}
              onChange={(e) => setPClass(e.target.value)}
            />
          </Wrapper>

          <Wrapper cls="mb-3">
            <Select
              labelName="Gender"
              labelCls="form-label"
              selectId="gender"
              selectCls="form-select"
              selectValue={gender}
              options={['Male', 'Female']}
              onChange={(e) => setGender(e.target.value)}
            />
          </Wrapper>
        </Wrapper>

        <Wrapper cls="form__row">
          <Wrapper cls="mb-3">
            <Input
              labelName="Age"
              labelCls="form-label"
              inputId="age"
              inputCls="form-control"
              inputType="number"
              min={0}
              max={100}
              inputValue={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Wrapper>

          <Wrapper cls="mb-3">
            <Input
              labelName="Siblings/Spouses Aboard"
              labelCls="form-label"
              inputId="Siblings/Spouses"
              inputCls="form-control"
              inputType="number"
              min={0}
              max={10}
              inputValue={siblingsSpouses}
              onChange={(e) => setSiblingsSpouses(e.target.value)}
            />
          </Wrapper>
        </Wrapper>

        <Wrapper cls="form__row ">
          <Wrapper cls="mb-3">
            <Input
              labelName="Parents/Children Aboard"
              labelCls="form-label"
              inputId="Parents/Children"
              inputCls="form-control"
              inputType="number"
              min={0}
              max={10}
              inputValue={parentsChildren}
              onChange={(e) => setParentsChildren(e.target.value)}
            />
          </Wrapper>

          <Wrapper cls="mb-3">
            <Input
              labelName="Fare"
              labelCls="form-label"
              inputId="fare"
              inputCls="form-control"
              inputType="number"
              min={0}
              inputValue={fare}
              onChange={(e) => setFare(e.target.value)}
            />
          </Wrapper>
        </Wrapper>

        <Wrapper cls="form__row">
          <Wrapper cls="mb-3">
            <Button
              cls="btn btn-danger mb-3"
              disabled={!modelTrained}
              type={'button'}
              onClick={() => {
                resetHandler();
                setResult('-1');
              }}
              value={'Reset'}
            />
          </Wrapper>

          <Wrapper cls="mb-3">
            <Button
              cls="btn btn-dark mb-3"
              disabled={!modelTrained}
              type={'submit'}
              onClick={submitHandler}
              value={'Predict'}
            />
          </Wrapper>
        </Wrapper>

        <Wrapper cls="mb-3">
          <Button
            cls="btn btn-warning mb-3"
            disabled={modelTrained}
            type={'button'}
            onClick={trainModelHandler}
            value={'Train Model'}
          />
        </Wrapper>
      </form>
    </Wrapper>
  );
}

export default Home;
