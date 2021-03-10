import React, { Fragment, useState, useLayoutEffect } from "react";
import {
  Button,
  Form,
  Header,
  Segment,
  Grid,
  Image
} from "semantic-ui-react";
import { userSignIn } from '../api/list';

export default function AutheticationForm() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  
  useLayoutEffect(() => {
    !!sessionStorage.getItem('user') && history.pushState(null, null, '/')
  })
  
  const handlerSignIn = async () => {

    const data = await userSignIn(username, password);

    console.log(data)

    sessionStorage.setItem('user', JSON.stringify(data.user))

    history.pushState(null, null, '/')

  };

  return (
    <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
    <Grid.Column style={{ maxWidth: 450 }}>
      
      <Form size='large'>
        
        <Segment stacked>
          <Image src="https://i.ibb.co/YfZK3d4/pmi-logo-365a597e-1.png"  centered/>
          <Form.Input fluid icon='user' iconPosition='left' placeholder='Username *' onChange={e => setUsername(e.target.value)}/>
          <Form.Input
            fluid
            icon='lock'
            iconPosition='left'
            placeholder='Password *'
            type='password'
            onChange={e => setPassword(e.target.value)}
          />

          <Button color='blue' fluid size='large' centered onClick={() => handlerSignIn()} disabled={username && password ? false : true}>
            Login
          </Button>
        </Segment>
      </Form>
    </Grid.Column>
  </Grid>
  );
}
