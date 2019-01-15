import React from 'react';
import { Spinner, Container, Content } from 'native-base';
import styles from '../assets/styles';

export default function Loading(props) {
  return(
    <Container style={styles.containerSpinner}>
      <Content>
        <Spinner
          color={props.color || styles.spinner.color}
        />
      </Content>
    </Container>
  );
}