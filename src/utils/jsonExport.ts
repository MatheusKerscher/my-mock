const jsonExport = <T>(data: T): void => {
  const jsonString = `data:text/json;chartset=utf-8,${encodeURIComponent(
    JSON.stringify(data)
  )}`;
  const link = document.createElement("a");
  link.href = jsonString;
  link.download = "data.json";

  link.click();
};

export { jsonExport };
