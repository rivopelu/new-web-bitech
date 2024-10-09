import React from "react";

export function PageContainer(props: IProps) {
  return (
    <main className="container mx-auto max-w-7xl px-6 flex-grow pt-16">
      {props.children}
    </main>
  );
}

interface IProps {
  children: React.ReactNode;
}
