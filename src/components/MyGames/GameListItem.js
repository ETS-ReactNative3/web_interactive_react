import React, { useState } from 'react';
import './GameList.scss';

import {
  TableCell,
  TableRow,
  Fade,
} from '@material-ui/core';

import {
  Link,
  withRouter
} from "react-router-dom";

import CopyLink from './CopyLink';
import DeleteGame from './DeleteGame';


function GameListItem(props) {
  const [clickedShare, setClickedShare] = React.useState(false);
  const [clickedDelete, setClickedDelete] = React.useState(false);

  const handleChangeShare = () => {
    setClickedShare((prev) => !prev);
  };

  const handleChangeDelete = () => {
    setClickedDelete((prev) => !prev);
  };

  const game = props.game
  
  return (
    <React.Fragment>
      {!clickedShare && !clickedDelete &&
      <TableRow key={game.name}>
        <TableCell align="left">{game.gameName}</TableCell>
        <TableCell align="left">{game.subject}</TableCell>
        <TableCell align="left">{game.type}</TableCell>
        <TableCell align="left">{game.grade}</TableCell>
        <TableCell align="left">{game.level}</TableCell>
        <TableCell align="left">{game.date}</TableCell>
        <TableCell align="center">
          <form onSubmit={ e => {e.preventDefault();}}>
            <button
              className="actions actions-share"
              onClick={handleChangeShare}
            />
            <Link to="/EditGame">
              <button className="actions actions-edit" />
            </Link>
            <button
              className="actions actions-delete"
              onClick={handleChangeDelete}
            />
          </form>
        </TableCell>
      </TableRow>}
      { clickedShare &&
        <TableRow>
          <TableCell colSpan={7}>
              <Fade in={clickedShare}>
                  <CopyLink gameLink={ game.gameLink } handleChangeShare={handleChangeShare} />
              </Fade>
          </TableCell>
        </TableRow>
      }
      { clickedDelete &&
        <TableRow>
          <TableCell colSpan={7}>
              <Fade in={clickedDelete}>
                  <DeleteGame handleChangeDelete={handleChangeDelete} />
              </Fade>
          </TableCell>
        </TableRow>
      }
    </React.Fragment>
  );
}

export default withRouter(GameListItem);

// return (
//   editMode ? <EditRowComponent ... /> : <RegularRowsComponent ...>
// )

{/* <button
            className="actions actions-share"
            onClick={ e => { e.preventDefault(); setShowLink(true); } }
            onClick={handleChange}>
            { showLink && <CopyLink gameLink={ game.gameLink } /> }
            <div className={classes.container}></div> */}