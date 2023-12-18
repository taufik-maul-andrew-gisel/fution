"use client";
import React, { useEffect, useRef } from "react";
import { sendLink } from "./nodemailor";

function randomID(len: number) {
  let result = "";
  if (result) return result;
  var chars = "12345qwertyuiopasdfgh67890jklmnbvcxzMNBVCZXASDQWERTYHGFUIOLKJP",
    maxPos = chars.length,
    i;
  len = len || 5;
  for (i = 0; i < len; i++) {
    result += chars.charAt(Math.floor(Math.random() * maxPos));
  }
  return result;
}

function getUrlParams(
  url = typeof window !== "undefined" ? window.location.href : ""
) {
  let urlStr = url.split("?")[1];
  return new URLSearchParams(urlStr);
}

const Videocall = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  const roomID = getUrlParams().get("roomID") || randomID(5);
  const callContainerRef = useRef(null);

  useEffect(() => {
    // Define an async function inside useEffect
    const initializeVideoCall = async () => {
      try {
        // Dynamically import ZegoUIKitPrebuilt
        const Zego = await import("@zegocloud/zego-uikit-prebuilt");
        const { ZegoUIKitPrebuilt } = Zego;

        // Generate Kit Token
        const appID = 1417104224;
        const serverSecret = "650188f6e663e2a8feaf1549619e8eb2";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
          appID,
          serverSecret,
          roomID,
          randomID(5),
          randomID(5)
        );

        // Create instance object from Kit Token
        const zp = ZegoUIKitPrebuilt.create(kitToken);

        // Start the call
        if (callContainerRef.current) {
          zp.joinRoom({
            container: callContainerRef.current,
            sharedLinks: [
              {
                name: "Personal link",
                url: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
              },
            ],
            scenario: {
              mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
          });
        }
        sendLink({
          roomId: roomID,
          link: `${window.location.protocol}//${window.location.host}${window.location.pathname}?roomID=${roomID}`,
          id,
        });
      } catch (error) {
        // Handle any errors that occur during the import or initialization
        console.error("Error initializing video call: ", error);
      }
    };

    // Execute the async function
    initializeVideoCall();
  }, []); // De

  return (
    <div
      className="myCallContainer"
      ref={callContainerRef}
      style={{ width: "100vw", height: "100vh" }}
    ></div>
  );
};

export default Videocall;
