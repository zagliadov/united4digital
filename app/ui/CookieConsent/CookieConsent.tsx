"use client";
import { useState, useEffect } from "react";
import { hasCookie, setCookie } from "cookies-next";
import { Button } from "@/app/ui/Button/Button";
import Link from "next/link";

export default function CookiesConsent() {
  const [showConsent, setShowConsent] = useState<boolean>(true);

  useEffect(() => {
    setShowConsent(hasCookie("localConsent"));
  }, []);

  const acceptCookie = () => {
    setShowConsent(true);
    setCookie("localConsent", "true", {});
  };

  if (showConsent) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-primary bg-opacity-70 z-[5000]">
      <div className="fixed bottom-0 left-0 flex items-center justify-between px-4 py-8 bg-base-100">
        <span className="px-4 py-6">
          This website uses cookies to improve user experience. By using our
          website you consent to all the Terms of Usage in accordance with our{" "}
          <Link href="/privacy-policy" className="text-primary font-semibold">Privacy Policy.</Link>
        </span>
        <Button
          label={"Accept"}
          onClick={acceptCookie}
          className="btn btn-secondary text-white leading-4 font-bold"
        />
      </div>
    </div>
  );
}
