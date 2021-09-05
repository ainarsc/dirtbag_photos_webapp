import * as React from "react";
import Layout from "../components/layout";
import styled from "styled-components";

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Form method="post" action="#">
        <Label>
          Name
          <Input type="text" name="name" id="name" />
        </Label>
        <Label>
          Email
          <Input type="email" name="email" id="email" />
        </Label>
        <Label>
          Subject
          <Input type="text" name="subject" id="subject" />
        </Label>
        <Label>
          Message
          <TextArea name="message" id="message" rows="5" />
        </Label>
        <Fielset>
          <Button type="submit">Send</Button>
          <Input type="reset" value="Clear" />
        </Fielset>
      </Form>
    </Layout>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 5rem;
  align-items: center;
  justify-content: center;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input``;
const TextArea = styled.textarea``;
const Fielset = styled.fieldset`
  border: none;
`;
const Button = styled.button``;

export default IndexPage;
