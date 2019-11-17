import React, { FC } from 'react';
import { RouteComponentProps, navigate } from '@reach/router';
import { Box, Heading, Paragraph, Button } from 'grommet';

const SpendingRequest: FC<RouteComponentProps> = () => {
  const giveDecision = () => {
    const decide = Math.random() >= 0.5;
    console.log(decide);
    if (decide) navigate('spend-yes');
    else navigate('spend-no');
  };

  return (
    <Box
      alignContent="center"
      background="#202020"
      pad="large"
      style={{ height: '100%' }}
    >
      <Heading level="1">You are about to spend</Heading>
      <Paragraph
        size="xxlarge"
        color="brand"
        margin={{ vertical: 'xsmall' }}
        alignSelf="center"
      >
        {`€ 249`}
      </Paragraph>
      <Paragraph color="status-unknown">
        On item: <u>Millenium MX222BX Standard Set BK</u>
      </Paragraph>
      <Paragraph>Do you want to continue?</Paragraph>

      <Button
        primary
        color="status-ok"
        label="Okay, I changed my mind. I don't need that."
        margin={{ vertical: '10px' }}
        onClick={e => navigate('changed')}
      />
      <Button
        color="brand"
        label="Yes! Make a proposal to Pal"
        margin={{ vertical: '10px' }}
        onClick={e => giveDecision()}
      />
    </Box>
  );
};

export default SpendingRequest;
