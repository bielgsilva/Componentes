import { useState } from "react";

export default function ValuesProvider() {
  const [showSignUp, setShowSignUp] = useState(false);
  return ({
    showSignUp, setShowSignUp
  });
}