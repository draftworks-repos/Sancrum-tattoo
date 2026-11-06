export interface GalleryItem {
  id: string;
  title: string;
  style: string;
  artist: string;
  placement: string;
  imageUrl: string;
  aspectRatio?: string;
  description: string;
  healingTime: string;
}

export function filterGalleryItems(
  items: GalleryItem[],
  selectedCategory: string,
  searchQuery: string = ''
): GalleryItem[] {
  return items.filter(item => {
    const matchesCategory =
      selectedCategory === 'all' ||
      item.style.toLowerCase() === selectedCategory.toLowerCase();

    const matchesSearch =
      searchQuery.trim() === '' ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.artist.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.style.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.placement.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });
}

export function getNextLightboxIndex(currentIndex: number, totalItems: number): number {
  if (totalItems <= 0) return 0;
  return (currentIndex + 1) % totalItems;
}

export function getPrevLightboxIndex(currentIndex: number, totalItems: number): number {
  if (totalItems <= 0) return 0;
  return (currentIndex - 1 + totalItems) % totalItems;
}
