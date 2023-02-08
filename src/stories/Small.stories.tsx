import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Small from '../components/atom/Small';

export default {
  title: 'Example/Small',
  component: Small,
} as ComponentMeta<typeof Small>;

// @ts-ignore
const func = (args) => <Small {...args} />;
const Template: ComponentStory<typeof Small> = func;

export const Primary = Template.bind({});
Primary.args = {
  id: 'someSmall',
  text: 'Invalid input',
  color: 'red',
};
