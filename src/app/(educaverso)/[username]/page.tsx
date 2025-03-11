import { notFound } from "next/navigation";

interface Props {
  params: Promise<{
    username: string;
  }>;
}

export default async function UserNamePage({ params }: Props) {
  const { username } = await params;

  if (username === "devMaster99") {
    notFound();
  }

  return (
    <div>
      <h1>Perfil de {username}</h1>
    </div>
  );
}
