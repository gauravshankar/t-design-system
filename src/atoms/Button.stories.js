import React from 'react';

import { Button } from './Button';

export default {
  title: 'Design System/Atoms/Button',
  component: Button,
};

export const AllButtons = (args) => (
  <div>
    <Button size="small" color="primary" label="Primary" className="mr-3"/>
    <Button color="secondary" className="mr-3" label="Secondary"/>
    <Button color="primary" className="mr-3" isDisabled label="Disabled "/>
    <Button outline color="primary" className="mr-3" label="Outline 1"/>
    <Button outline color="secondary" className="mr-3" label="Outline 2"/>
    <Button outline color="primary" className="mr-3" isDisabled label="Disabled Outline"/>

    <Button outline cornerRadius="rounded-full" color="primary" className="mr-3" isDisabled label="Pill Outline"/>





  
  </div>
);

