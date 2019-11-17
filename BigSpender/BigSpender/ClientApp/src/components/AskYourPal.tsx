import React, { FC, useState } from 'react';
import { Box, Heading, TextArea, Button } from 'grommet';
import pal from '../assets/screen-shot-2019-11-16-at-3-05-31-pm@2x.png';

const AskYourPal: FC = () => {
  const [value, setValue] = useState();
  return (
    <Box
      pad="small"
      margin={{ vertical: 'medium' }}
      background="dark-1"
      round="small"
      width="48%"
    >
      <Heading level="2" alignSelf="center">
        Ask your pal anything
      </Heading>
      <img src={pal} style={{ width: '60px' }} />
      <TextArea
        placeholder="Send your question to Pal!"
        value={value}
        onChange={event => setValue(event.target.value)}
      />
      <Button primary label="Ask Pal" />
    </Box>
  );
};

export default AskYourPal;
