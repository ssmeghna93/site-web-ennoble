import { useMutation, useQuery } from "@tanstack/react-query";
import type { Enquiry } from "../backend";
import { useActor } from "./useActor";

export function useSubmitEnquiry() {
  const { actor } = useActor();

  return useMutation({
    mutationFn: async ({
      fullName,
      email,
      city,
      currentWebsite,
      improvement,
    }: {
      fullName: string;
      email: string;
      city: string;
      currentWebsite: string | null;
      improvement: string;
    }) => {
      if (!actor) throw new Error("Actor not available");
      return actor.submitEnquiry(
        fullName,
        email,
        city,
        currentWebsite,
        improvement,
      );
    },
  });
}

export function useGetAllEnquiries(enabled: boolean) {
  const { actor, isFetching } = useActor();

  return useQuery<Enquiry[]>({
    queryKey: ["enquiries"],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllEnquiries();
    },
    enabled: enabled && !!actor && !isFetching,
  });
}

export function useGetSubmissionCount(enabled: boolean) {
  const { actor, isFetching } = useActor();

  return useQuery<bigint>({
    queryKey: ["submissionCount"],
    queryFn: async () => {
      if (!actor) return BigInt(0);
      return actor.getSubmissionCount();
    },
    enabled: enabled && !!actor && !isFetching,
  });
}
