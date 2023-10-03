"use client";

import { Button } from "../ui/button";
import AuthIcon from "../assets/svg/AuthIcon";
import { useAuth0 } from "@auth0/auth0-react";
import useStoreUserEffect from "@/hooks/useStoreUserEffect";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import { useConvexAuth } from "convex/react";
import LoadingIcon from "../assets/svg/LoadingIcon";

const generateFallbackText = (text: string) => {
  return text
    .split(" ")
    .map((t) => t[0])
    .join("");
};

const AuthButton = () => {
  const userId = useStoreUserEffect();
  const { loginWithPopup, logout, user } = useAuth0();
  const { isLoading } = useConvexAuth();

  if (userId) {
    return (
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="h-12 w-12">
                  <AvatarImage src={user?.picture} alt={user?.nickname} />
                  <AvatarFallback>
                    {generateFallbackText(user?.name!)}
                  </AvatarFallback>
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className="w-fit border-0 p-0">
                <Button onClick={() => logout()}>Logout</Button>
              </PopoverContent>
            </Popover>
          </TooltipTrigger>
          <TooltipContent>Logged in as {user?.name}</TooltipContent>
        </Tooltip>
      </TooltipProvider>
    );
  }

  return (
    <Button
      disabled={isLoading}
      className="p-0 dark:bg-transparent bg-transparent shadow-none hover:bg-transparent"
      onClick={() => loginWithPopup()}
    >
      {isLoading ? (
        <LoadingIcon className="h-10 w-10" />
      ) : (
        <AuthIcon className="h-12 w-12 dark:text-black" />
      )}
    </Button>
  );
};

export default AuthButton;
