import React from 'react';

import { Button } from './Button';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Кнопка',
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Кнопка',
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Кнопка',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Кнопка',
};
