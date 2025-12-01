import { useFormStatus } from "react-dom";

import { Button } from "@/components/ui/button";

const AuthButton = ({
  label,
  disabledLabel,
}: {
  label: string;
  disabledLabel: string;
}) => {
  const { pending } = useFormStatus();
  return (
    <Button disabled={pending} className="w-full" variant="default">
      {pending ? disabledLabel : label}
    </Button>
  );
};

export default AuthButton;
