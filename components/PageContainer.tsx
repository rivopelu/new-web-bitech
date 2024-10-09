import React from "react";

export function PageContainer(props: IProps) {
  return (
    <main className="container mx-auto max-w-7xl px-6 flex-grow ">
      {props.children}
    </main>
  );
}

interface IProps {
  children: React.ReactNode;
}
