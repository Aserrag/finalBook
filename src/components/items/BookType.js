// BookType.js
import React from 'react';
import { Button } from 'flowbite-react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { HiCloudDownload, HiInbox, HiOutlineAdjustments, HiUserCircle } from 'react-icons/hi';

const BookType = ({ type, icon, onClick }) => {
  return (
    <Stack onClick={()=>{(onClick(type))}} direction="row" spacing={2}>
      <Avatar className='cursor-pointer'  alt="Remy Sharp" src={icon} sx={{ width: 112, height: 112}} />
    </Stack>


  );
};

export default BookType;
