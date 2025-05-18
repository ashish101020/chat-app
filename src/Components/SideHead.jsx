import React from "react";
import "./myStyles.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import GroupAddIcon from "@mui/icons-material/GroupAdd";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NightlightIcon from "@mui/icons-material/Nightlight";

import { IconButton } from "@mui/material";

const SideHead = () => {
  return (
    <div className="side-head">
      <IconButton aria-label="Account">
        <AccountCircleIcon />
      </IconButton>
      <div className="action-icons">
        <IconButton aria-label="Add Person">
          <PersonAddIcon />
        </IconButton>
        <IconButton aria-label="Group Add">
          <GroupAddIcon />
        </IconButton>
        <IconButton aria-label="Add Circle">
          <AddCircleIcon />
        </IconButton>
        <IconButton aria-label="Night Mode">
          <NightlightIcon />
        </IconButton>
      </div>
    </div>
  );
};

export default SideHead;
