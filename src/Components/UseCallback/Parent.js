import React, { useState, useCallback } from 'react';
import Title from './Title';
import Button from './Button';
import Count from './Count';


function Parent() {

  const [ age, setAge ] = useState(25);
  const [ salary, setSalary ] = useState(75000);

  const increaseSalary = useCallback( () => {
    setSalary(salary + 5000);
  }, [salary]);

  const increaseAge = useCallback(() => {
    setAge(age+1);
  }, [age]);

  return (
    <div>
      <Title/>
      <Count text="Age" count={age} />
      <Button handleClick={increaseAge}>Increase Age</Button>
      <Count text="Salary" count={salary} />
      <Button handleClick={increaseSalary}>Increase Salary</Button>
    </div>
  )
}

export default Parent;