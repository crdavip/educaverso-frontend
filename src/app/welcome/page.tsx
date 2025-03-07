import { Container } from "@mui/material";
import { Testimonial, Hero, Profits, UserGrid } from "@/components";
import { initialData } from "@/seed/seedUser";

const users = initialData.users;

export default function WelcomePage() {
  return (
    <>
    <Hero />
    <Container>
      <Profits />
    </Container>
    <UserGrid users={users}/>
    <Container>
      <Testimonial />
    </Container>
    </>
  );
}
