import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { MenuItemType } from './DashboardHeader';

type DropDownMenPropsType = {
  menu: MenuItemType[];
  anchorEl: HTMLElement | null;
  setAnchorEl: React.Dispatch<React.SetStateAction<HTMLElement | null>>;
  menuId: string;
  ariaLabelledId: string;
  isOpen: boolean;
};

const DropDownMenu: React.FC<DropDownMenPropsType> = ({
  menu,
  anchorEl,
  setAnchorEl,
  menuId,
  ariaLabelledId,
  isOpen,
}) => {
  const handleClose = (): void => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Menu
        id={menuId}
        MenuListProps={{
          'aria-labelledby': ariaLabelledId,
        }}
        anchorEl={anchorEl}
        open={isOpen}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {menu.map((item: MenuItemType) => (
          <MenuItem key={item.id} onClick={() => item.onClick()}>
            {item.title}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
};

export default DropDownMenu;
