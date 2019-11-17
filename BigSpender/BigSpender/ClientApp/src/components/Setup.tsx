import React, { FC, useState } from 'react';
import { Box, Button, Heading, Select, Paragraph } from 'grommet';
import { RouteComponentProps, Link } from '@reach/router';

const Setup: FC<RouteComponentProps> = () => {
  const [startValue, setStartValue] = useState('');
  const [savingsValue, setSavingsValue] = useState('');
  const [difficulty, setDifficulty] = useState('');

  const [budget, setBudget] = useState([] as any[]);

  const financialStartOptions = [
    'Really bad',
    'Have some savings',
    'Want to grow my riches'
  ];

  const savingsOptions = [
    'None at all',
    '1-2 months of expenses',
    'Over 3 months of expenses'
  ];

  const difficultyOptions = ['Easy mode', 'Hard mode'];

  const goodBudget = [
    { value: '50%: base expenses' },
    { value: '35%: fun money' },
    { value: '15%: savings' }
  ];

  const mediumBudget = [
    { value: '50%: base expenses' },
    { value: '25%: fun money' },
    { value: '25%: savings' }
  ];

  const poorBudget = [
    { value: '50%: base expenses' },
    { value: '35%: savings' },
    { value: '15%: fun money' }
  ];

  const chooseBudget = (start: string, savings: string, difficulty: string) => {
    switch (true) {
      case difficulty === 'Hard mode':
      case start === 'Really bad' && savings === 'None at all': {
        setBudget(poorBudget);
        break;
      }
      case start === 'Have some savings' ||
        savings === '1-2 months of expenses': {
        setBudget(mediumBudget);
        break;
      }
      case savings === 'Over 3 months of expenses': {
        setBudget(goodBudget);
        break;
      }
    }
  };

  const resetValues = (e: any) => {
    setStartValue('');
    setSavingsValue('');
    setDifficulty('');
    setBudget([] as any[]);
  };

  return (
    <Box align="center">
      <Heading level="1">A little more now.</Heading>

      <Paragraph>How well are you doing financially?</Paragraph>
      <Select
        options={financialStartOptions}
        value={startValue}
        onChange={({ option }) => setStartValue(option)}
      />

      {startValue && (
        <>
          <Paragraph>How much money do you have saved?</Paragraph>
          <Select
            options={savingsOptions}
            value={savingsValue}
            onChange={({ option }) => setSavingsValue(option)}
          />
        </>
      )}

      {startValue && savingsValue && (
        <>
          <Paragraph>How bad do you want this?</Paragraph>
          <Paragraph size="small">
            The greater the challenge, the greater the reward.
          </Paragraph>
          <Select
            options={difficultyOptions}
            value={difficulty}
            onChange={({ option }) => setDifficulty(option)}
          />
          <Button
            primary
            margin="xsmall"
            label="I'm done"
            onClick={e => chooseBudget(startValue, savingsValue, difficulty)}
          />
        </>
      )}

      {budget.length > 0 && (
        <>
          <Paragraph>Okay. I advise you to set your budget as this:</Paragraph>

          {budget.map((value: any) => (
            <p>{value.value}</p>
          ))}

          <Link to="/">
            <Button
              primary
              margin="xsmall"
              label="Sounds good! Let's make me rich"
            />
          </Link>
          <Button
            margin="xsmall"
            label="Wait! Something's wrong. Let me fix that"
            onClick={e => resetValues(e)}
          />
        </>
      )}
    </Box>
  );
};

export default Setup;
