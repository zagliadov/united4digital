"use client";

import { useCallback } from "react";
import Image from "next/image";

export default function IntegrationProcessGraph() {
  const handleClick = useCallback(() => {
    const modal = document.getElementById("integration-process-modal");
    if (modal instanceof HTMLDialogElement) {
      modal.showModal();
    }
  }, []);
  return (
    <>
      <Image
        alt="Flowchart depicting the integration process"
        src="/integration-process.svg"
        width={0}
        height={0}
        className="w-auto h-auto cursor-zoom-in"
        onClick={handleClick}
      />
      <dialog id="integration-process-modal" className="modal w-full bg-gray-transparent-60">
        <div className="w-full h-full flex justify-center">
          <Image
            alt="Integration process graph"
            src="/integration-process.svg"
            width={0}
            height={0}
            className="w-full h-screen"
            onClick={handleClick}
          />
          <form method="dialog">
            <button className="absolute right-1 top-1" aria-label="close dialog">
              <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>
            </button>
          </form>
        </div>
      </dialog>
    </>
  );
}
