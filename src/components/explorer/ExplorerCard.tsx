import Image from "next/image";
import Link from "next/link";
import { Avatar, Box, Card, CardContent, Chip, Typography } from "@mui/material";
import {
  NewspaperOutlined,
  GridViewOutlined,
  GroupOutlined,
  CollectionsOutlined,
  CalendarMonthOutlined,
} from "@mui/icons-material";
import { truncateText, timeAgo } from "@/helpers";
import { ContentItem } from "@/interfaces";
import styles from "./explorer.module.scss";

const typeIcons = {
  Profesional: <GroupOutlined />,
  Portafolio: <CollectionsOutlined />,
  Blog: <NewspaperOutlined />,
};

interface Props {
  item: ContentItem;
}

export const ExplorerCard = ({ item }: Props) => {
  const profileImage = item.author?.profileImage
    ? `http://localhost:1337${item.author?.profileImage}`
    : `http://localhost:1337${item.image}`;

  return (
    <Card className={styles.explorerCard}>
      <CardContent className={styles.explorerCardHeader}>
        <Link href={item.url}>
          <Image src={`http://localhost:1337${item.image}`} alt={item.slug} width={300} height={300} />
          <Box className={styles.explorerCardHeaderBg}>
            <Typography variant="h6" fontWeight={700}>
              {truncateText(item.title, 35)}
            </Typography>
          </Box>
        </Link>
      </CardContent>
      <CardContent>
        <Box className={styles.chipsContainer} sx={{ mb: 2 }}>
          <Link href={`/${item.author?.username ?? item.slug}`}>
            <Chip
              color="primary"
              variant="filled"
              size="small"
              avatar={<Avatar src={profileImage ?? `http://localhost:1337${item.image}`} alt={item.documentId} />}
              label={`@${item.author?.username ?? item.slug}`}
            />
          </Link>
          <Chip
            color="secondary"
            size="small"
            icon={<GridViewOutlined fontSize="small" />}
            label={item.category}
            sx={{ paddingInline: 1 }}
          />
        </Box>
        <Box className={styles.chipsContainer}>
          <Chip
            color="default"
            variant="outlined"
            size="small"
            icon={typeIcons[item.type]}
            label={item.type}
            sx={{ paddingInline: 1 }}
          />
          <Chip
            color="default"
            variant="outlined"
            size="small"
            icon={<CalendarMonthOutlined />}
            label={timeAgo(new Date(item.createdAt))}
            sx={{ paddingInline: 1 }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};
