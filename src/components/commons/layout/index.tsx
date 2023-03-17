import LayoutHeader from "./header/layoutHeader";

interface ILayoutPros {
  children: JSX.Element;
}

export default function Layout(props: ILayoutPros): JSX.Element {
  return (
    <>
      <LayoutHeader />
      {props.children}
    </>
  );
}
