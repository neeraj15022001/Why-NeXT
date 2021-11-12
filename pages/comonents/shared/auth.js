import tw from "tailwind-styled-components";

const Wrapper = tw.div`w-screen h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900`;
const Form = tw.form`w-96`;
const FormGroup = tw.div`flex flex-col`;
const Label = tw.label`text-sm dark:text-white`;
const Input = tw.input`form-input py-2 px-3 rounded-md my-2 border-gray-200`;
const Divider = tw.hr`border my-5`;
const SocialTitle = tw.p`uppercase tracking-wider text-center my-3 text-sm dark:text-gray-400`;
const SocialButtons = tw.div`flex items-center`;
const GoogleButton = tw.button`flex-1 mr-2 py-3 bg-white border rounded-md flex items-center justify-center transition hover:bg-blue-600  text-gray-600 hover:text-white hover:border-blue-600 dark:bg-gray-900 dark:text-gray-300`;
const GoogleButtonLabel = tw.span`ml-1`;
const FacebookButtonLabel = tw.span`ml-1`;
const FacebookButton = tw.button`flex-1 bg-white border ml-2 py-3 rounded-md flex items-center justify-center transition hover:bg-blue-600 text-blue-600 hover:text-white hover:border-blue-600 dark:bg-gray-900`;
const ExtraLinks = tw.footer`flex items-center w-96 mt-5`;
const FooterLink = tw.a`cursor-pointer text-xs text-gray-400 text-center flex-1 border-l border-r px-1 self-stretch flex items-center justify-center`;

export {
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
};
