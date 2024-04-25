export const getFormData = (e: Event) => {
  const formData = new FormData(e.target as HTMLFormElement);
  const formDataObject: Record<string, FormDataEntryValue> = {};

  // Проход по каждому полю формы и добавление его в объект
  formData.forEach((value, key) => {
    formDataObject[key] = value;
  });

  return formDataObject;
};
