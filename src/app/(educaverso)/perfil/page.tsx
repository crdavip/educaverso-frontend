import { getUserMeLoader } from "@/data";

export default async function ProfilePage() {
    const user = await getUserMeLoader();
  return (
    <div>
      <h1>Profile Page</h1>
      {
        JSON.stringify(user)
      }
    </div>
  );
}
