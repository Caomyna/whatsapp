import { useStateProvider } from "@/context/StateContext";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";
import VideoCall from "./VideoCall";
const Container = dynamic(()=> import("./Container"),{ssr: false});

function VoiceCall() {
  const [{voiceCall, socket, userInfo}] = useStateProvider();

  useEffect(() =>{
    if (voiceCall.type ==="out-going") {
      socket.current.emit("outgoing-voice-call",{
        to: voiceCall.id,
        from: {
          id: userInfo.id,
          profilePicture: userInfo.profileImage,
          name: userInfo.name,
        },
        callType: voiceCall.callType,
        roomId: voiceCall.roomId,
      });
    }
  },[VideoCall]);

  return <Container data={voiceCall}/>;
}

export default VoiceCall;
