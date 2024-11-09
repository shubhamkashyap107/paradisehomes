import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Convert card to a function to accept title and initialDescription
const CardContentFragment = ({ title, initialDescription, goToId }) => (
    <CardContent className=' h-80'>
      <Typography gutterBottom variant="h3" component="div" className='!font-black break-words h-28'>
        {title} {/* Use title prop here */}
      </Typography>
      <Typography gutterBottom className='!font-medium'>
        {initialDescription} {/* Use initialDescription prop here */}
      </Typography>
    </CardContent>
);

export default function OutlinedCard({ title, initialDescription, bgColor, goToId }) {
  return (
    <Box className="w-[22rem]">
      <Card style={{ backgroundColor: bgColor }} className={`!text-[#162A3A]`} variant="outlined">
        <CardContentFragment className="!h-[40rem]" title={title} initialDescription={initialDescription} goToId={goToId} />
      </Card>
    </Box>
  );
}
