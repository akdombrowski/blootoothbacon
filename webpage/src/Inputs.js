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
  }

  render() {
    return (
      <Container maxWidth="xs">
        <Typography component="h1" variant="h5">
          Password Hashing Checker
        </Typography>
        <form>
          <TextField
            required
            fullWidth
            id="standard-required"
            label="Salt"
            placeholder="Salt"
            margin="normal"
            variant="outlined"
          />

          <TextField
            required
            fullWidth
            id="outlined-password-input"
            label="Test Password"
            placeholder="Test Password"
            margin="normal"
            variant="outlined"
            onChange={this.props.handleChange('name')}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={this.props.hashing}
          >
            Hash
          </Button>

          <TextField
            disabled
            fullWidth
            id="standard-required"
            label="Hashed Password Value"
            placeholder="Hashed Password Value"
            margin="normal"
            variant="outlined"
          />
        </form>
      </Container>
    );
  }
}
