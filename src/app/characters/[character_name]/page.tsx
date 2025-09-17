"use client";
import { CharacterCard } from "@/components/CharacterCard";

import { useCharacters } from "@/store/hooks/useCharacters";
import { Character } from "@/store/types";
import { useParams } from "next/navigation";
import { useEffect } from "react";

export default function CharacterPage() {
  const params = useParams<{ character_name: string }>();

  const character = params.character_name;
  const {
    data: characters,
    isLoading,
    refetch,
    error,
  } = useCharacters(character);

  useEffect(() => {
    refetch();
  }, [character, refetch]);

  return (
    <>
      {isLoading ? (
        <div className="flex w-80 flex-col rounded-[16px] bg-[#1F2121] p-2 md:p-4 animate-pulse">
          <div className="mx-2 flex-1">
            <div className="relative mt-2 aspect-[3/4] w-full rounded-[16px] bg-gray-700" />
          </div>
          <div className="mt-2 flex flex-col gap-2 p-4">
            <div className="h-4 w-2/3 rounded bg-gray-600" />
            <div className="h-3 w-full rounded bg-gray-700" />
            <div className="h-3 w-5/6 rounded bg-gray-700" />
            <div className="h-3 w-1/3 rounded bg-gray-600" />
          </div>
        </div>
      ) : error ? (
        <div>Error loading character data.</div>
      ) : !characters || characters.length === 0 ? (
        <div>No characters found.</div>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {characters.map((character: Character) => (
            <CharacterCard key={character.id} character={character} />
          ))}
        </div>
      )}
    </>
  );
}
