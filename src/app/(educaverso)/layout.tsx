import { Footer, TopMenu } from "@/components";

interface Props {
  children: React.ReactNode;
}

export default function EducaversoLayout({ children }: Props) {
  return (
    <>
      <TopMenu />
      {children}
      <Footer />
    </>
  );
}
