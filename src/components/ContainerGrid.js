import { cn } from "@/lib/utils";

const ContainerGrid = ({ className, as = "div", children, ...props }) => {
  const Tag = ["div", "section", "header", "footer"].includes(as) ? as : "div";
  return (
    <Tag
      className={["grid container-grid-columns", cn("py-12", className)].join(
        " "
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default ContainerGrid;
