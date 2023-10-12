import React from 'react';
import { TextField } from '@mui/material';
import { useStyles } from './styles';
import { Box, Button, ButtonGroup } from '@mui/material';

const QuotesComponent = () => {
  const classes = useStyles();
  return (
    <Box>
      <Box className={classes.quoteContainer}>
        <h1>Quotes</h1>
        <TextField
          className={classes.quoteAddField}
          placeholder="Введите текст цитаты..."
          multiline
          autoFocus
          minRows={5}
        />
        <ButtonGroup disableElevation variant="contained" aria-label="Disabled elevation buttons">
          <Button>Добавить</Button>
          <Button>Отменить</Button>
        </ButtonGroup>
      </Box>
    </Box>
  );
};

export default QuotesComponent;
