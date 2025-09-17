type Character = {
  id: number;
  name: string;
  description: string;
  thumbnail: {
    path: string;
    extension: string;
  };
  comics: {
    available: number;
    items: { name: string }[];
  };
  series: {
    available: number;
    items: { name: string }[];
  };
  stories: {
    available: number;
    items: { name: string }[];
  };
  events: {
    available: number;
    items: { name: string }[];
  };
};

export type { Character };