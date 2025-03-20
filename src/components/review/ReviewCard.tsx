import Image from "next/image";
import { Card, CardContent, Typography, Divider, CardHeader, Avatar } from "@mui/material";
import { Review } from "@/interfaces";
import { UserRating } from "../rating/UserRating";
import styles from "./review.module.scss";
import Link from "next/link";

interface Props {
  review: Review;
}

export const ReviewCard = ({ review }: Props) => {
  const profileImage = review.reviewer.profileImage
    ? `${process.env.NEXT_PUBLIC_API_BASE_URL}${review.reviewer.profileImage.url}`
    : "/avatar-default.jpg";

  return (
    <Card>
      <CardContent>
        <Typography variant="body1" sx={{ mb: 2 }}>
          {review.description}
        </Typography>
        {!!review.rating && <UserRating rating={review.rating} />}
      </CardContent>
      <Divider />
      <CardHeader
        avatar={
          <Avatar sx={{ width: 60, height: 60 }} className={styles.avatar}>
            <Link href={`/${review.reviewer.username}`}>
              <Image src={profileImage} alt={review.reviewer.username} width={100} height={100} />
            </Link>
          </Avatar>
        }
        title={review.reviewer.user.username}
        subheader={review.reviewer.profession}
      />
    </Card>
  );
};
