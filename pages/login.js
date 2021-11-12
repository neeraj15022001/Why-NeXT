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

export default class Login extends React.Component {
  constructor() {
    super();
    this.emailRef = React.createRef();
  }

  componentDidMount() {
    this.emailRef.current.focus();
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
              <Label htmlFor={"email"}>Email</Label>
              <Input
                id={"email"}
                type={"email"}
                name={"email"}
                placeholder={"Enter your Email"}
                autoComplete={"off"}
                ref={this.emailRef}
                autoFocus
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
              <ForgotPassword>Forgot Password?</ForgotPassword>
            </FormGroup>
            <FormGroup>
              <LoginButton>login</LoginButton>
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
            <Link href={"/signup"}>
              <CreateAccountButton>Create Account</CreateAccountButton>
            </Link>
          </Form>
        </main>
        <footer>
          <ExtraLinks>
            <Link href={"/signup"}>
              <FooterLink>Create Account</FooterLink>
            </Link>
            <FooterLink>Privacy & Policy</FooterLink>
            <FooterLink>Terms & conditions</FooterLink>
          </ExtraLinks>
        </footer>
      </Wrapper>
    );
  }
}

const ForgotPassword = tw.p`text-xs text-right capitalize my-2 text-blue-400`;
const LoginButton = tw.button`bg-blue-500 text-white py-3 rounded-md uppercase transition font-bold hover:bg-blue-600 `;
const CreateAccountButton = tw.button`border border-blue-500 text-blue-500 w-full py-3 mt-6 rounded-md font-semibold transition hover:bg-blue-500 hover:text-white`;
