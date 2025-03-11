interface Props {
  params: Promise<{
    username: string;
  }>
}

export default async function UserNamePage({params}:Props) {

  const {username} = await params;

  return (
    <div>
      <h1>Perfil de {username}</h1>
    </div>
  );
}
