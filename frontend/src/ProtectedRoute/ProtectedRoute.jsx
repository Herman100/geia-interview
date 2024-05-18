"use client";
import React, { useEffect } from "react";
import { redirect } from "next/navigation";
import { useAuth } from "@/contexts/AuthContext/AuthContext";

function ProtectedRoute({ children }) {
  const { currentUser } = useAuth();

  useEffect(() => {
    if (currentUser === null) {
      redirect("/login");
    }
  }, [currentUser]);

  return children;
}

export default ProtectedRoute;
