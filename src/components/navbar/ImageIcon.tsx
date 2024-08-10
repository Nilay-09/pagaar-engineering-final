import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Logout from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';

import TommyVercetti from "../../assets/dashboard/carlo.png";

export default function ImageIcon() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Tooltip title="Account settings">
        <IconButton
          onClick={handleClick}
          size="small"
          sx={{ width: '100%', height: '100%', padding: 0, boxSizing: 'border-box' }}
          aria-controls={open ? 'account-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
        >
          <Avatar 
            sx={{ 
              width: '100%', 
              height: '100%', 
              margin: 0, 
              border: 0, 
              boxSizing: 'border-box'
            }}>
            <img src={TommyVercetti} alt="" style={{ width: '100%', height: '100%', borderRadius: '50%' }} />
          </Avatar>
        </IconButton>
      </Tooltip>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            overflow: 'visible',
            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
            mt: 1.5,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '&::before': {
              content: '""',
              display: 'block',
              position: 'absolute',
              top: 0,
              right: 14,
              width: 10,
              height: 10,
              bgcolor: 'background.paper',
              transform: 'translateY(-50%) rotate(45deg)',
              zIndex: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >
        <MenuItem onClick={handleClose} component={Link} to="/profile">
          <img src={TommyVercetti} alt="" className='w-6 h-6 mr-4 rounded-[100%] self-center border-[#28273C] border-[1px] shadow-navbar-icon' /> 
          <span className='text-[#28293D] poppins-semibold text-[14px] leading-5'>Profile</span> 
        </MenuItem>
        <Divider />

        <MenuItem onClick={handleClose} component={Link} to="/profile/manage-coins">
          <ListItemIcon>
            <PersonAdd fontSize="small" />
          </ListItemIcon>
          <span className='poppins-regular text-[14px] leading-5 text-[#444444]'>Manage Coins</span> 
        </MenuItem>

        <MenuItem onClick={handleClose} component={Link} to="/issues">
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          <span className='poppins-regular text-[14px] leading-5 text-[#444444]'>Have Issues?</span> 
        </MenuItem>

        <MenuItem onClick={handleClose} component={Link} to="/privacy-policy">
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          Privacy Policy
        </MenuItem>

        <MenuItem onClick={handleClose} component={Link} to="/about-us">
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          About Us
        </MenuItem>

        <MenuItem onClick={handleClose} component={Link} to="#">
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </React.Fragment>
  );
}
