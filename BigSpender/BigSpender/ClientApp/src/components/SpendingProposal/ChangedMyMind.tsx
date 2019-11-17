import React, { FC } from 'react';
import { Box, Heading, Paragraph, Button } from 'grommet';
import { RouteComponentProps, navigate } from '@reach/router';

const ChangedMyMind: FC<RouteComponentProps> = () => {
  return (
    <Box
      align="center"
      background="#202020"
      pad="large"
      style={{ height: '100vh' }}
      animation="fadeIn"
    >
      <Heading level="1">Great!</Heading>

      <Paragraph color="status-unknown">
        You just saved yourself from unnecessary purchase. Consider sending some
        of this to your savings account instead?
      </Paragraph>

      <Paragraph
        size="xxlarge"
        color="brand"
        margin={{ vertical: 'xsmall' }}
        alignSelf="center"
      >
        {`€ 249`}
      </Paragraph>

      <Button
        primary
        color="brand"
        label="Send to Savings"
        margin={{ vertical: '10px' }}
        onClick={e => navigate('/')}
      />
    </Box>
  );
};

export default ChangedMyMind;
