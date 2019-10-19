import React from "react";
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import SignIn from './SignIn';
import Inputs from './Inputs';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hash: ""
    };
    this.hashing = this.hashing.bind(this);
  }

  hashing() {
    const crypto = require("crypto");
    const hash = crypto.createHash("sha256");

    hash.update(this.state.password + this.state.salt);
    const digest = hash.digest("base64");
    console.log(digest);
    this.setState({
      hash: digest
    });
  }

  render() {
    return (
      <Inputs hash={this.state.hash} hashing={this.hashing}/> 
    );
  }
}
