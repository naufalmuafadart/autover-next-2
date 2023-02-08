import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import CheckoutFormPaymentMethodBadge from '../components/atom/CheckoutFormPaymentMethodBadge';

export default {
  title: 'Example/CheckoutFormPaymentMethodBadge',
  component: CheckoutFormPaymentMethodBadge,
} as ComponentMeta<typeof CheckoutFormPaymentMethodBadge>;

// @ts-ignore
const func = (args) => <CheckoutFormPaymentMethodBadge {...args} />;
const Template: ComponentStory<typeof CheckoutFormPaymentMethodBadge> = func;

export const Primary = Template.bind({});
Primary.args = {
  mode: 'inherit',
  text: 'Auto Balance',
};
