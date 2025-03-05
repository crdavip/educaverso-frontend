interface Props {
  params: {
    username: string;
  }
}

export default async function UserNamePage({params}:Props) {

  const {username} = await params;

  return (
    <div>
      <h1>UserName {username}</h1>
    </div>
  );
}
