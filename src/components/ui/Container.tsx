import { ChildrenType } from "@/types/types";

type ContainerType = ChildrenType & {
  className?: string;
  container: string;
};

const Container = ({ className, children, container }: ContainerType) => {
  return (
    <section className={`${className} py-6 lg:py-8 2xl:py-16`}>
      <div className={`${container} mx-auto`}>{children}</div>
    </section>
  );
};

export default Container;
