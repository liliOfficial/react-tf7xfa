import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import InfoIcon from "@material-ui/icons/Info";
import tileData from "./tileData";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    backgroundColor: theme.palette.background.paper
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  }
}));

export default function GridList({ photos }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <GridList cellHeight={180}>
        <GridListTile key="Subheader" cols={2} style={{ height: "auto" }} />
        {photos.map(photo => (
          <GridListTile key={photo.id}>
            <img src={photo.links.download} alt={photo.description} />
            <GridListTileBar
              title={photo.description}
              subtitle={<span>{photo.alt_description}</span>}
              actionIcon={
                <IconButton
                  aria-label={`info about ${photo.description}`}
                  className={classes.icon}
                >
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
