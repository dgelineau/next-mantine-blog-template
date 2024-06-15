import React from "react";

import Image from "next/image";
import Link from "next/link";

import {
  Anchor,
  Avatar,
  Badge,
  Card,
  CardSection,
  Center,
  Group,
  Text,
} from "@mantine/core";

import useStyles from "@/components/ArticleCard/styles";
import type { ArticleCardProps } from "@/components/ArticleCard/types";

export default function ArticleCard({
  className,
  image,
  link,
  title,
  description,
  author,
  category,
}: ArticleCardProps &
  Omit<React.ComponentPropsWithoutRef<"div">, keyof ArticleCardProps>) {
  const { classes, cx } = useStyles();

  return (
    <Card withBorder radius="md" className={cx(classes.card, className)}>
      {image && (
        <CardSection
          style={{
            position: "relative",
            minHeight: 180,
          }}
        >
          <Anchor component={Link} href={link}>
            <Image
              alt={`${title} cover image`}
              src={image}
              layout="fill"
              objectFit="cover"
              sizes="50vw"
              priority
            />
          </Anchor>
        </CardSection>
      )}

      {category && (
        <Badge className={classes.category} variant="filled">
          {category}
        </Badge>
      )}

      <Text className={classes.title} weight={500} component={Link} href={link}>
        {title}
      </Text>

      <Text size="sm" color="dimmed" lineClamp={4}>
        {description}
      </Text>
      <Group position="apart" className={classes.footer}>
        <Center>
          <Avatar size={24} radius="xl" mr="xs">
            <Image
              alt={`${author.name} photo`}
              src={author.image}
              layout="fill"
              objectFit="cover"
              sizes="10vw"
            />
          </Avatar>
          <Text size="sm" inline>
            {author.name}
          </Text>
        </Center>
      </Group>
    </Card>
  );
}
