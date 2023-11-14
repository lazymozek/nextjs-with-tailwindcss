import ContainerGrid from "@/components/ContainerGrid";

export default function Home() {
  return (
    <>
      <ContainerGrid as="section" className="py-36">
        <h1 className="text-3xl font-semibold text-center">Section 1</h1>
      </ContainerGrid>

      <ContainerGrid as="section" className="py-36 bg-slate-100">
        <h1 className="text-3xl font-semibold text-center">Section 2</h1>
      </ContainerGrid>

      <ContainerGrid as="section" className="py-36">
        <h1 className="text-3xl font-semibold text-center">Section 3</h1>
      </ContainerGrid>

      <ContainerGrid as="section" className="py-36">
        <h1 className="text-3xl font-semibold text-center">Section 4</h1>
      </ContainerGrid>

      <ContainerGrid as="section" className="py-36 bg-slate-100">
        <h1 className="text-3xl font-semibold text-center">Section 5</h1>
      </ContainerGrid>
    </>
  );
}
