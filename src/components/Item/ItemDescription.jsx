import { Fragment } from 'react';
import Paper from '@mui/material/Paper';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

const ItemDescription = ({ characteristics }) => (
  <Paper elevation={8} sx={{ my: 3 }}>
    <List>
      {Object.entries(characteristics).map(([key, value]) => (
        <Fragment key={key}>
          <ListItem>
            <Typography variant='caption' component='p'>
              <strong>{key}:</strong> {value.toLowerCase()}
            </Typography>
          </ListItem>
          <Divider variant={'middle'} />
        </Fragment>
      ))}
    </List>
  </Paper>
);

export default ItemDescription;
