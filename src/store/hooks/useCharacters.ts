"use client";

import { useQuery } from "@tanstack/react-query";
import { fetchCharacters } from "../services/characters";


export function useCharacters(name?: string) {
  return useQuery({
    queryKey: ["characters", name],
    queryFn: () => fetchCharacters(name),
    enabled: false,
  });
}
