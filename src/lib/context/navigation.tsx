"use client";
import React from "react";
import { createContext, useState, useContext } from "react";

interface NavigationContextType {
  isMobileNavOpen: boolean;
  setIsMobileNavOpen: (isOpen: boolean) => void;
  closeMobileNav: () => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>({
  isMobileNavOpen: false,
  setIsMobileNavOpen: () => {},
  closeMobileNav: () => {},
});

export function NavigationProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);
  const closeMobileNav = () => setIsMobileNavOpen(false);
  const value = {
    isMobileNavOpen,
    setIsMobileNavOpen,
    closeMobileNav,
  };

  console.log("HEYYY", isMobileNavOpen);

  return <NavigationContext value={value}>{children}</NavigationContext>;
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error("useNavigation must be used within a NavigationProvider");
  }
  return context;
}
