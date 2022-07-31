import useStyles from "@/components/YouTube/styles";

export default function YouTube({ id }: { id: string }) {
  const { classes } = useStyles();

  return (
    <div className={classes.container}>
      <iframe
        src={`https://www.youtube.com/embed/${id}`}
        allow="autoplay; encrypted-media"
        title="Embedded YouTube video"
        className={classes.frame}
      />
    </div>
  );
}
