import { useConvexAuth } from "convex/react";
import { useState } from "react";
import { useMutation } from "convex/react";
import { Id } from "../../convex/_generated/dataModel";
import { api } from "../../convex/_generated/api";

export default function useStoreUserEffect() {
  const { isAuthenticated } = useConvexAuth();
  const [userId, setUserId] = useState<Id<"user"> | null>(null);
  const storeUser = useMutation(api.user.store);

  const addUserToDb = async () => {
    if (!isAuthenticated) {
      return;
    }
    async function createUser() {
      const id = await storeUser();
      setUserId(id);
    }
    await createUser();
  };

  return {userId, addUserToDb};
}
