import React from "react";
import { useQuickLoginContext } from "../core/QuickLoginProvider";

export const QuickLoginButton: React.FC = () => {
  const { login, isLoading, error } = useQuickLoginContext();

  return (
    <button
      onClick={login}
      disabled={isLoading}
      style={{ padding: "0.75em 1.5em", fontSize: "1rem", borderRadius: 6, background: "#2d72fc", color: "#fff", border: "none", cursor: "pointer" }}
    >
      {isLoading ? "Signing in..." : "Sign in with Sondera QuickLogin"}
      {error && <div style={{ color: "red", marginTop: 8 }}>{error}</div>}
    </button>
  );
};
