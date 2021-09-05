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
          <ButtonInput type="reset" value="Clear" />
        </Fielset>
      </Form>
    </Layout>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  padding: 8rem;
  align-items: center;
  justify-content: center;
`;
const Label = styled.label`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 800px;
  margin: 7px 0;
`;
const Input = styled.input`
  width: 100%;
  max-width: 800px;
  background-color: rgba(245, 245, 245, 0.9);
  border: 1px solid rgba(245, 245, 245, 0.5);
  height: 30px;
  border-radius: 5px;
  margin-top: 3px;
  :hover {
    border: 1px solid rgba(138, 43, 226, 0.8);
  }
`;
const TextArea = styled.textarea`
  height: 300px;
  width: 100%;
  max-width: 800px;
  background-color: rgba(245, 245, 245, 0.9);
  border: 1px solid rgba(245, 245, 245, 0.5);
  border-radius: 5px;
  margin-top: 3px;
  :hover {
    border: 1px solid rgba(138, 43, 226, 0.8);
  }
`;
const Fielset = styled.fieldset`
  border: none;
  display: flex;
`;
const Button = styled.button`
  background-color: rgba(25, 25, 25, 0.8);
  border: 1px solid rgba(245, 245, 245, 0.5);
  height: 30px;
  border-radius: 5px;
  margin-top: 3px;
  width: 100px;
  margin: 0 5px;
  color: rgb(245, 245, 245);
  :hover {
    border: 1px solid rgba(138, 43, 226, 0.8);
  }
  cursor: pointer;
`;

const ButtonInput = styled(Input)`
  width: 100px;
  margin: 0 5px;
  background-color: rgba(25, 25, 25, 0.8);
  color: rgb(245, 245, 245);
  cursor: pointer;
`;

export default IndexPage;
