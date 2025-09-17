export async function fetchCharacters(name?: string) {
  const res = await fetch(
    `/api/characters${name ? `?name=${name}` : ""}`
  );
    if (!res.ok) throw new Error("Failed to fetch characters");
    const data = await res.json();
    
  return data.data?.results || [];
}
