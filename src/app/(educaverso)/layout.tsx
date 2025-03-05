interface Props {
    children: React.ReactNode;
}

export default function EducaversoLayout({children}: Props) {
  return (
    <main>
      {children}
    </main>
  );
}