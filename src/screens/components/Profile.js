
import React from 'react'; 
import {  ApplicationProvider, Button, Icon,Menu, MenuGroup, MenuItem, Toggle, Layout, Text} from '@ui-kitten/components'; 
import * as eva from '@eva-design/eva';


const smartUserIcon = (props) => (
  <Icon {...props} name='person-add-outline'/>
);

const paswdIcon = (props) => (
  <Icon {...props} name='shield-outline'/>
);

const ColorPaletteIcon = (props) => (
  <Icon {...props} name='book-outline'/>
);

const StarIcon = (props) => (
  <Icon {...props} name='star'/>
);

const recurrentBillIcon = (props) => (
  <Icon {...props} name='activity-outline'/>
);

const GivingFreqIcon = (props) => (
  <Icon {...props} name='refresh-outline'/>
);

export const Profile = () => {

  const [selectedIndex, setSelectedIndex] = React.useState(null);
  
  const [checked, setChecked] = React.useState(false);

  const onCheckedChange = (isChecked) => {  setChecked(isChecked);};


  return (
    <>
     <ApplicationProvider {...eva} theme={eva.light}>

      <Menu
        selectedIndex={selectedIndex}
        onSelect={index => setSelectedIndex(index)}>
        <MenuGroup title='Update Profile' accessoryLeft={smartUserIcon}>
          <MenuItem title='Change Password' accessoryLeft={StarIcon}/>
          <MenuItem title='Kitten Tricks' accessoryLeft={StarIcon}/>
        </MenuGroup>

        <MenuGroup title='Change Password' accessoryLeft={paswdIcon}>
          <MenuItem title='Nebular' accessoryLeft={StarIcon}/>
          <MenuItem title='ngx-admin' accessoryLeft={StarIcon}/>
          <MenuItem title='UI Bakery' accessoryLeft={StarIcon}/>
        </MenuGroup>

        <MenuGroup title='Bible Study Plan' accessoryLeft={ColorPaletteIcon}>
          <MenuItem title='Eva Design System' accessoryLeft={StarIcon}/>
          <MenuItem title='Eva Icons' accessoryLeft={StarIcon}/>
        </MenuGroup>

        <MenuGroup title='Recurrenr Billing' accessoryLeft={recurrentBillIcon}>
          <MenuItem title='Eva Design System' accessoryLeft={StarIcon}></MenuItem>
          <MenuItem title='Eva Icons' accessoryLeft={StarIcon}/>
        </MenuGroup>

        <MenuGroup title='Giving Frequency' accessoryLeft={GivingFreqIcon}>
          <MenuItem title='Eva Design System' accessoryLeft={StarIcon}></MenuItem>
          <MenuItem title='Eva Icons' accessoryLeft={StarIcon}/>
        </MenuGroup>

      </Menu>

     </ApplicationProvider>

    </>
  );
};

export default Profile;