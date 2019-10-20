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

export default class Inputs extends React.Component {
  constructor(props) {
    super(props);
    this.handleSaltChange = this.handleSaltChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handlePasswordChange = event => {
    console.log(event.target.value);
    this.setState({
      testPassword: event.target.value
    });
  };

  handleSaltChange = event => {
    console.log(event.target.value);
    this.setState({
      salt: event.target.value
    });
  };

  handleSubmit = event => {
    console.log("submit");
    console.log(event.target);
    event.preventDefault();
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
            id="standard-required"
            label="Salt"
            placeholder="Salt"
            margin="normal"
            variant="outlined"
            onChange={this.handleSaltChange}
            value={this.state ? this.state.salt : ""}
            InputLabelProps={{ shrink: true }}
          />

          <TextField
            required
            fullWidth
            id="outlined-password-input"
            label="Test Password"
            placeholder="Test Password"
            margin="normal"
            variant="outlined"
            onChange={this.handlePasswordChange}
            value={this.state ? this.state.hashedPassword : ""}
            InputLabelProps={{ shrink: true }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.props.hashing}
          >
            Hash It
          </Button>
          <TextField
            fullWidth
            id="outlined-read-only-input"
            label="Hashed Password Value"
            defaultValue="Hashed Password Value"
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
