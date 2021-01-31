function reverse(str) {
  // add whatever parameters you deem necessary - good luck!
  if (str.length === 0) return '';
  const len = str.length;
  return str[len - 1] + reverse(str.slice(0, len - 1));
}

// reverse('awesome') // 'emosewa'
// reverse('rithmschool') // 'loohcsmhtir'
