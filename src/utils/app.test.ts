import test from 'node:test';
import assert from 'node:assert/strict';
import { validateBookingForm, calculateTattooEstimate } from './booking';
import { filterGalleryItems, getNextLightboxIndex, getPrevLightboxIndex, GalleryItem } from './gallery';

test('validateBookingForm flags empty required fields', () => {
  const result = validateBookingForm({});
  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.tattooStyle);
  assert.ok(result.errors.approximateSize);
  assert.ok(result.errors.bodyPlacement);
  assert.ok(result.errors.description);
  assert.ok(result.errors.preferredDate);
});

test('validateBookingForm accepts complete valid booking submission', () => {
  const futureDate = new Date();
  futureDate.setDate(futureDate.getDate() + 14);
  const formattedDate = futureDate.toISOString().split('T')[0];

  const result = validateBookingForm({
    fullName: 'Elena Vance',
    email: 'elena@sanctum.art',
    phone: '+1 555 234 5678',
    tattooStyle: 'Fine Line',
    preferredArtist: 'Mateo Cruz',
    approximateSize: 'medium',
    bodyPlacement: 'Forearm inner',
    description: 'Minimalist botanical arrangement of fern and hellebore petals with fine micro-dots',
    preferredDate: formattedDate,
  });

  assert.equal(result.isValid, true);
  assert.deepEqual(result.errors, {});
});

test('calculateTattooEstimate computes accurate time and price brackets', () => {
  const smallEstimate = calculateTattooEstimate('small', 'Fine Line');
  assert.equal(smallEstimate.estimatedSessions, 1);
  assert.equal(smallEstimate.depositRequired, 100);

  const sleeveEstimate = calculateTattooEstimate('multi-session', 'Japanese');
  assert.equal(sleeveEstimate.estimatedSessions, 3);
  assert.ok(sleeveEstimate.depositRequired >= 350);
});

test('filterGalleryItems filters by style and search query', () => {
  const sampleItems: GalleryItem[] = [
    {
      id: '1',
      title: 'Botanical Hellebore',
      style: 'Fine Line',
      artist: 'Mateo Cruz',
      placement: 'Forearm',
      imageUrl: 'https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28',
      description: 'Single needle floral study',
      healingTime: '2 weeks'
    },
    {
      id: '2',
      title: 'Obsidian Serpent',
      style: 'Blackwork',
      artist: 'Elena Vance',
      placement: 'Ribcage',
      imageUrl: 'https://images.unsplash.com/photo-1562962230-16e4623d36e6',
      description: 'Heavy contrast geometric serpent',
      healingTime: '3 weeks'
    }
  ];

  const filteredStyle = filterGalleryItems(sampleItems, 'Fine Line');
  assert.equal(filteredStyle.length, 1);
  assert.equal(filteredStyle[0].title, 'Botanical Hellebore');

  const filteredSearch = filterGalleryItems(sampleItems, 'all', 'serpent');
  assert.equal(filteredSearch.length, 1);
  assert.equal(filteredSearch[0].id, '2');
});

test('lightbox index wraps seamlessly', () => {
  assert.equal(getNextLightboxIndex(0, 5), 1);
  assert.equal(getNextLightboxIndex(4, 5), 0);
  assert.equal(getPrevLightboxIndex(0, 5), 4);
  assert.equal(getPrevLightboxIndex(2, 5), 1);
});
