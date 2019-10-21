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
  Container,
  Input
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import forge from "node-forge";

export default class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      salt: "",
      testPassword: "",
      hashedPassword: ""
    };
    this.handleSaltChange = this.handleSaltChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.hashing = this.hashing.bind(this);
  }

  handlePasswordChange = event => {
    this.setState({
      testPassword: event.target.value
    });
    console.log(event.target.value);
  };

  handleSaltChange = event => {
    this.setState({
      salt: event.target.value
    });
    console.log(event.target.value);
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log("submit");
    console.log(event.target);
  };

  hashing = () => {
    const md = forge.md.sha256.create();
    const s = this.state.salt;
    const p = this.state.testPassword;
    md.update(p);
    console.log(forge.util.encode64(md.digest().toHex()));
    let hp = forge.util.encode64(md.digest().toHex());
    this.setState({
      hashedPassword: hp
    });
  };

  render() {
    let statepassword;
    return (
      <Container maxWidth="xs">
        <Typography component="h1" variant="h5">
          Password Hashing Checker
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            required
            fullWidth
            multiline
            rowsMax="4"
            id="salt"
            label="Salt"
            placeholder="Salt"
            margin="normal"
            variant="outlined"
            onChange={this.handleSaltChange}
            value={this.state.salt}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            required
            fullWidth
            id="test-password-input"
            label="Test Password"
            multiline
            rowsMax="4"
            placeholder="Test Password"
            margin="normal"
            variant="outlined"
            onChange={this.handlePasswordChange}
            value={this.state.testPassword}
            InputLabelProps={{ shrink: true }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.hashing}
          >
            Hash It
          </Button>
          <TextField
            fullWidth
            id="outlined-read-only-input"
            label="Hashed Password Value"
            multiline
            rowsMax="4"
            defaultValue="Hashed Password Value"
            value={this.state ? this.state.hashedPassword : null}
            margin="normal"
            InputProps={{
              readOnly: true
            }}
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
        </form>
      </Container>
    );
  }
}
