
import * as React from "react";

export default async function Layout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <div>
      {props.children} 
      {props.modal}
    </div>
  );
}
