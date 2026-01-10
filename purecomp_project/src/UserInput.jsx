import { forwardRef } from "react";

const UserInput = forwardRef((props, ref) => {
  return <input type="text" ref={ref} />;
});

export default UserInput;
