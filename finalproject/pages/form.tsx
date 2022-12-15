import AddToForm from "./addtoform";

const form = (props: { isSignedIn: boolean; user: Object }) => {
  return <div>{props.isSignedIn && <AddToForm user={props.user} />}</div>;
};

export default form;
