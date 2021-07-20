import React from 'react';

import { Button } from './Button';

export default {
  title: 'Design System/Atoms/Button',
  argTypes: {
      color: {
        options: ['primary', 'secondary'],
        control: { type: 'radio' }
      },
      size: {
        options: ['small', 'medium'],
        control: { type: 'radio' }
      },
      varient: { control: { type: "select", options: ["solid", "outline", "solid-pill", "outline-pill"] },
      className: 'mr-5',
      isDisabled: false,
      label: 'Shweta',
      title: 'Click me'
    },
    },
  component: Button,
};

export const Standard = (args) => <Button {...args} />;
Standard.args = {
  varient: 'solid',
  size: 'small',
  color: 'primary',
  label: 'Button',
  className: 'mr-5',
  isDisabled: false,
  loadingText: '',
  isLoading: false,
  isLink: false,
  title: 'Click me'
};

export const AllButtons = (args) => (
  <div>
    <Button varient="solid" size="small" color="primary" label="Primary" className="mr-3 mb-3"/>
    <Button color="secondary" className="mr-3 mb-3" label="Secondary"/>
    <Button varient="solid-pill" color="secondary" className="mr-3 mb-3" label="Secondary"/>
    <Button color="primary" className="mr-3 mb-3" isDisabled label="Disabled "/>
    <Button varient="outline" color="primary" className="mr-3 mb-3" label="Outline 1"/>
    <Button varient="outline" color="secondary" className="mr-3 mb-3" label="Outline 2"/>
    <Button varient="outline" color="primary" className="mr-3 mb-3" isDisabled label="Disabled Outline"/>
    <Button varient="outline-pill" color="primary" className="mr-3 mb-3" isDisabled label="Pill Outline"/>
    <Button isLink varient="solid" color="primary" className="mr-3 mb-3" label="Link Button"/>

  </div>
);

