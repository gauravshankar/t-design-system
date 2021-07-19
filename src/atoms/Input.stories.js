import * as React from "react";
import {Control} from "./Input";

export default {
    title: 'Design System/Atoms/Control',
    argTypes: {
        type: { control: { type: "select", options: ["text", "password", "email", "number", "url"] },
        size: { control: { type: "select", options: ["small", "medium", "large"] }},
        className: 'my-custom-class',
        isDisabled: false,
        label: 'My Label',
        placeholder: "I am Placeholder"
      },
      },
    component: Control,
};

export const Standard = (args) => <Control {...args} />;
Standard.args = {
    isDisabled: false,
    size: "medium",
    id: 'my_id',
    type: 'text',
    className: 'my-custom-class',
    placeholder: 'I am Placeholder',
    onChange: false,
    onBlur: false,
    value: '',
};

export const Input = () => (
  <>
    <Control placeholder="test" label="Input field" className="Yess" size="large" />
  </>
);