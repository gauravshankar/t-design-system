import * as React from "react";
import {Card} from './Card';
import { CardBody } from "./CardBody";
import { CardHeader } from "./CardHeader";
import { CardFooter } from "./CardFooter";

export default {
  title: 'Design System/Templates/Card',
  argTypes: {
      color: {
        options: ['primary', 'secondary','warning','danger','success','info'],
        control: { type: 'select' }
      },
      className: 'mr-5',
    },
  component: Card,
};




export const Standard = (args) =>( 
  <Card {...args}>
    <CardHeader className="p-4">Card Header Here</CardHeader>
    <CardBody className="p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</CardBody>
    <CardFooter className="p-4">Card Footer Here</CardFooter>
  </Card>
);
Standard.args = {
  color: 'primary',
  className: 'mr-5',
};



export const CustomCard = () => (
  <>
    <Card color="primary">
        <CardHeader className="p-4">Card Header Here</CardHeader>
        <CardBody className="p-4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</CardBody>
        <CardFooter className="p-4">Card Footer Here</CardFooter>
    </Card>
  </>
);
