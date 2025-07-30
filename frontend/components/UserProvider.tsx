"use client";

import { UserContext } from "@/contexts/UserContext";
import { ReactNode } from "react";

type Props = {
  user: any;
  children: ReactNode;
};

export default function UserProvider({ user, children }: Props) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
}
