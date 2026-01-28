export function nameToFieldName(name: string) {
  if (name == 'package-content-experience') {
    return 'packageContentExperience';
  } else if (name === 'shoppingMethod') {
    return 'shoppingMethod';
  } else if (name === 'support-contacted') {
    return 'supportContacted';
  } else if (name === 'what-did-you-like') {
    return 'whatDidYouLike';
  } else if (name === 'what-to-improve') {
    return 'whatToImprove';
  } else if (name === 'additional-comment') {
    return 'additionalComment';
  } else {
    return 'recommendationExperience';
  }
}
