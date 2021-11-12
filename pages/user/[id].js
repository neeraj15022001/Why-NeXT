import { useRouter } from "next/router";
import { Form, FormGroup, Label, Wrapper } from "../comonents/shared/auth";
import { UserCircleIcon } from "@heroicons/react/outline";
import tw from "tailwind-styled-components";

export default function User() {
  const router = useRouter();
  const { id } = router.query;
  const isFriend = false;
  return (
    <Wrapper>
      <Form>
        <UserProfileContainer>
          <UserCircleIcon className={"text-black h-20 w-20"} />
        </UserProfileContainer>
        <FormGroup>
          <Label>Name</Label>
          <NameField>{id}</NameField>
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <EmailField>gneeraj32595@gmail.com</EmailField>
        </FormGroup>
        {isFriend ? (
          <RemoveButton>Remove Friend</RemoveButton>
        ) : (
          <AddButton>Add Friend</AddButton>
        )}
      </Form>
    </Wrapper>
  );
}
const UserProfileContainer = tw.div`flex items-center justify-center mb-4`;
const NameField = tw.div`capitalize border-b mb-3 py-3`;
const EmailField = tw.div`border-b mb-3 py-3`;
const AddButton = tw.button`bg-blue-600 py-3 px-2 font-bold text-center text-white w-full rounded-md my-4 transition hover:bg-blue-700`;
const RemoveButton = tw.button`bg-red-600 py-3 px-2 font-bold text-center text-white w-full rounded-md my-4 transition hover:bg-red-700`;
