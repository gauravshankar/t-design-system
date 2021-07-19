import * as React from "react";
import {Control} from "./Input";
import {Select} from "./Select";

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

export const Textarea = () => (
  <>
    <Control isTextarea placeholder="test" label="Input field" className="Yess" size="large" />
  </>
);

var select_options = ['One', 'Two', 'Three', 'Four'];

export const SelectBox = (args) => <Select options={select_options} {...args} />;
SelectBox.args = {
    label: 'Custom Select Box',
    isDisabled: false,
    size: "medium",
    id: 'my_id',
    className: 'my-custom-class',
};