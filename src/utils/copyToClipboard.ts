const copyToClipboard = async (value: string) => {
  await navigator.clipboard.writeText(value);
};

export { copyToClipboard };
