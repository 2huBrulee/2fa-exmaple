import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import { toCanvas } from 'qrcode';


export function Index() {
  const [valid, setValid] = useState(false);
  const [authLink, setAuthLink] = useState<string | null>(null);
  const codeToVerifyRef = useRef<HTMLInputElement>();
  const canvasRef = useRef<HTMLCanvasElement>();

  useEffect(() => {
    if (authLink)
      void toCanvas(canvasRef.current, authLink, { errorCorrectionLevel: 'H' });

  }, [authLink]);

  const onNewCodeClick = async () => {
    try {
      const { data } = await axios.get<string>(process.env.NEXT_PUBLIC_API_URL);
      console.log(data);
      setAuthLink(data);

    } catch (err) {
      console.error(err);
    }
  };

  const onVerifyClick = async () => {
    try {
      const { data } = await axios.post<boolean>(process.env.NEXT_PUBLIC_API_URL +'/verify', { code: codeToVerifyRef.current.value });
      console.log(data);
      setValid(data);

    } catch (err) {
      console.error(err);
    }
  };


  return (
    <div className="p-4 mx-auto flex flex-col items-center container">
      <div className="p-2">QR</div>
      {authLink && <canvas ref={canvasRef} />}
      <button className="m-4 p-2 rounded-md border-white border-2 hover:bg-indigo-700" onClick={onNewCodeClick}>Generate a new user / secret</button>
      <div></div>
      <p>Enter auth code to verify:</p>
      <input className="text-black py-2 px-4 rounded-md" ref={codeToVerifyRef} />
      <button className="m-4 p-2 rounded-md border-white border-2 hover:bg-indigo-700" onClick={onVerifyClick}>Verify code</button>
      <div>Your code is <strong className="">{valid ? "CORRECT!" : "invalid"}</strong></div>
    </div>
  );
}

export default Index;
