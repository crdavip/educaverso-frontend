interface Props {
  params: Promise<{
    slug: string;
  }>;
}

export default async function PortafolioPage({ params }: Props) {
  const { slug } = await params;
  return (
    <div>
      <h1>Portafolio {slug}</h1>
    </div>
  );
}
