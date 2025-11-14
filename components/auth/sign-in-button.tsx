import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

const SignInButton = () => {
  const { pending } = useFormStatus();
  return (
    <Button
      disabled={pending}
      className="w-full cursor-pointer"
      variant="default"
    >
      {pending ? "Signing In..." : "Sign In"}
    </Button>
  );
};

export default SignInButton;
