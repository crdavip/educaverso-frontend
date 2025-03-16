import Image from "next/image";
import { Card, CardContent, Typography, Divider, CardHeader, Avatar } from "@mui/material";
import { Testimonial } from "@/interfaces";
import styles from "./testimonial.module.scss";
import { UserRating } from "../rating/UserRating";

interface Props {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: Props) => {
  return (
    <Card>
      <CardContent>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {testimonial.description}
        </Typography>
        {
          !!testimonial.rating && <UserRating rating={testimonial.rating} />
        }
      </CardContent>
      <Divider />
      <CardHeader
        avatar={
          <Avatar sx={{ width: 60, height: 60 }} className={styles.avatar}>
            <Image src={`/${testimonial.image_client}`} alt={testimonial.name_client} width={100} height={100} />
          </Avatar>
        }
        title={testimonial.name_client}
        subheader={testimonial.profession_client[0]}
      />
    </Card>
  );
};
