import ClientAuth from "@/global-components/ClientAuth";
import React from "react";

async function VidCallLayout({ children }: { children: React.ReactNode }) {
  // console.log(children, "<<<<<<<<<<<,");
  // console.log(ClientAuth, "inii");

  return (
    <>
      <ClientAuth>{children}</ClientAuth>
    </>
  );
}

export default VidCallLayout;
