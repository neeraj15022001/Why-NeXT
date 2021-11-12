import React from "react";
import Head from "next/head";
import Image from "next/image";
import tw from "tailwind-styled-components";
import {
  Wrapper,
  FormGroup,
  Form,
  Label,
  Input,
  Divider,
  SocialTitle,
  SocialButtons,
  GoogleButton,
  GoogleButtonLabel,
  FacebookButton,
  FacebookButtonLabel,
  ExtraLinks,
  FooterLink,
} from "./comonents/shared/auth";
import Link from "next/link";

export default class Signup extends React.Component {
  constructor() {
    super();
    this.nameRef = React.createRef();
  }

  componentDidMount() {
    this.nameRef.current.focus();
  }

  render() {
    return (
      <Wrapper>
        <Head>
          <title>Why</title>
          <link rel="icon" href="/public/favicon.ico" />
        </Head>
        <main>
          <Form autoComplete={"off"}>
            <FormGroup>
              <Label htmlFor={"name"}>Name</Label>
              <Input
                id={"name"}
                type={"text"}
                name={"name"}
                placeholder={"Enter your username"}
                autoComplete={"off"}
                ref={this.nameRef}
                autoFocus
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor={"email"}>Email</Label>
              <Input
                id={"email"}
                type={"email"}
                name={"email"}
                placeholder={"Enter your Email"}
                autoComplete={"off"}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor={"password"}>Password</Label>
              <Input
                id={"password"}
                name={"password"}
                type={"password"}
                placeholder={"Enter your password"}
                autoComplete={"off"}
              />
            </FormGroup>
            <FormGroup>
              <Label htmlFor={"confirm_password"}>Confirm Password</Label>
              <Input
                id={"confirm_password"}
                name={"confirm_password"}
                type={"password"}
                placeholder={"Confirm your password"}
                autoComplete={"off"}
              />
            </FormGroup>
            <FormGroup>
              <SignupButton>signup</SignupButton>
            </FormGroup>
            <Divider />
            <SocialTitle>continue with</SocialTitle>
            <SocialButtons>
              <GoogleButton>
                <Image
                  src={"/google.svg"}
                  alt={"google"}
                  width={"24"}
                  height={24}
                />
                <GoogleButtonLabel>Google</GoogleButtonLabel>
              </GoogleButton>
              <FacebookButton>
                <Image
                  src={"/facebook.svg"}
                  alt={"google"}
                  width={"24"}
                  height={24}
                />
                <FacebookButtonLabel>Facebook</FacebookButtonLabel>
              </FacebookButton>
            </SocialButtons>
            <Link href={"/login"}>
              <LoginAccountButton>
                Login using existing account
              </LoginAccountButton>
            </Link>
          </Form>
        </main>
        <footer>
          <ExtraLinks>
            <Link href={"/login"}>
              <FooterLink>Login to Existing Account</FooterLink>
            </Link>
            <FooterLink>Privacy & Policy</FooterLink>
            <FooterLink>Terms & conditions</FooterLink>
          </ExtraLinks>
        </footer>
      </Wrapper>
    );
  }
}

const SignupButton = tw.button`bg-blue-500 text-white py-3 rounded-md uppercase transition font-bold  hover:bg-blue-600 mt-3`;
const LoginAccountButton = tw.button`border border-blue-500 text-blue-500 w-full py-3 mt-6 rounded-md font-bold transition hover:bg-blue-500 hover:text-white`;
